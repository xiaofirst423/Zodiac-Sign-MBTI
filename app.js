(() => {
  'use strict';

  const byId = (id) => document.getElementById(id);
  const viewNames = ['cover', 'zodiac', 'quiz', 'result'];
  const views = Object.fromEntries(viewNames.map((name) => [name, byId('view-' + name)]));
  const chapterCount = byId('chapter-count');
  const optionList = byId('option-list');
  const previousButton = byId('previous-btn');
  const rulesButton = byId('rules-btn');
  const rulesNote = byId('rules-note');
  const rulesControl = byId('rules-control');
  const photoRequests = new Set();
  const storyPhotos = [
    ['sun', 72], ['cloud', 60], ['dawn-drizzle', 62], ['rain', 76],
    ['second-sip-tea', 53], ['wind', 49], ['sunbreak', 60], ['copper-breeze', 65],
  ];
  const resultPhotoPositions = {
    'moon-rain': 70, 'harbor-fog': 67, 'violet-breeze': 64, 'warm-roof-cloud': 55,
    snow: 67, sunshower: 70, sunbreak: 65,
  };

  const state = {
    view: 'cover',
    zodiac: null,
    question: 0,
    answers: [],
  };
  let advanceTimer = null;

  function span(className, text) {
    const element = document.createElement('span');
    element.className = className;
    element.textContent = text;
    return element;
  }

  function button(className, text) {
    const element = document.createElement('button');
    element.type = 'button';
    element.className = className;
    element.textContent = text;
    return element;
  }

  function setPressed(group, selected) {
    for (const choice of group.children) choice.setAttribute('aria-pressed', String(choice === selected));
  }

  function photoPath(weather) {
    return 'assets/scenes/' + weather + '.webp';
  }

  function foodPath(result) {
    return 'assets/food/' + result.foodArt + '.webp';
  }

  function showParagraphs(id, paragraphs) {
    byId(id).replaceChildren(...paragraphs.map((text) => {
      const paragraph = document.createElement('p');
      paragraph.textContent = text;
      return paragraph;
    }));
  }

  function warmImage(path) {
    if (photoRequests.has(path)) return;
    photoRequests.add(path);
    const image = new Image();
    image.fetchPriority = 'low';
    image.src = path;
  }

  function storyPhoto(index) {
    return storyPhotos[index] ?? [CHAPTERS[QUESTIONS[index].chapter].weather, 58];
  }

  function showPhoto(id, weather, position = 58) {
    const image = byId(id);
    const path = photoPath(weather);
    if (image.getAttribute('src') !== path) image.src = path;
    image.style.setProperty('--photo-position', position + '%');
    photoRequests.add(path);
  }

  function renderZodiacs() {
    const grid = byId('zodiac-grid');
    const choices = ZODIACS.map((zodiac) => {
      const choice = button('zodiac-tile', '');
      const glyph = span('zodiac-glyph', zodiac.symbol + '\uFE0E');
      glyph.setAttribute('aria-hidden', 'true');
      const details = span('zodiac-details', '');
      details.append(span('zodiac-name', zodiac.name), span('zodiac-dates', zodiac.dates));
      choice.append(glyph, details);
      choice.addEventListener('click', () => {
        state.zodiac = zodiac;
        goToQuestion(state.question);
      });
      return choice;
    });
    grid.append(...choices);
  }

  function renderJourney() {
    const path = byId('journey-path');
    const currentIndex = viewNames.indexOf(state.view);
    const journey = byId('journey');
    journey.hidden = state.view === 'cover' || state.view === 'result';
    chapterCount.hidden = state.view !== 'quiz';
    if (journey.hidden) {
      path.replaceChildren();
      return;
    }

    const names = ['开场', state.zodiac?.name ?? '星座', '故事'];
    path.replaceChildren(...viewNames.slice(0, currentIndex + 1).map((name, index) => {
      const step = document.createElement('li');
      if (name === state.view) {
        const current = span('journey-current', names[index]);
        current.setAttribute('aria-current', 'step');
        step.append(current);
      } else {
        const link = button('journey-link', names[index]);
        link.dataset.step = name;
        if (name === 'zodiac') link.setAttribute('aria-label', '返回星座，重选 ' + names[index]);
        link.addEventListener('click', () => showView(name));
        step.append(link);
      }
      return step;
    }));
  }

  function showView(name) {
    clearTimeout(advanceTimer);
    advanceTimer = null;
    setRulesOpen(false);
    state.view = name;
    for (const [key, section] of Object.entries(views)) section.hidden = key !== name;
    document.body.dataset.view = name;

    if (name === 'zodiac') {
      showPhoto('zodiac-scene', 'zodiac-night', 50);
      for (const [index, choice] of [...byId('zodiac-grid').children].entries()) {
        if (state.zodiac === ZODIACS[index]) choice.setAttribute('aria-current', 'true');
        else choice.removeAttribute('aria-current');
      }
    }

    if (name === 'quiz') renderQuestion();
    if (name === 'result') renderResult();
    renderJourney();
    views[name].querySelector('h1, h2').focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }

  function goToQuestion(index) {
    state.question = index;
    showView('quiz');
  }

  function renderQuestionProgress() {
    const current = state.question + 1;
    chapterCount.textContent = current + ' / ' + QUESTIONS.length;
    chapterCount.setAttribute('aria-label', '第 ' + current + ' 幕，共 ' + QUESTIONS.length + ' 幕');
    previousButton.hidden = state.question === 0;
  }

  function renderQuestion() {
    const index = state.question;
    const question = QUESTIONS[index];
    const chapter = CHAPTERS[question.chapter];
    const bridge = [
      getStoryOption(state.answers, index - 1)?.next,
      ...(question.revisits ?? []).map((earlierIndex) => getStoryOption(state.answers, earlierIndex)?.echo),
    ].filter(Boolean);

    showParagraphs('story-bridge', bridge);
    byId('story-bridge').hidden = bridge.length === 0;
    byId('question-title').textContent = question.scene;
    byId('story-prompt').textContent = question.prompt;
    byId('question-prompt').textContent = question.question;
    byId('chapter-name').textContent = chapter.name;
    const [weather, position] = storyPhoto(index);
    showPhoto('story-scene', weather, position);
    renderQuestionProgress();

    optionList.replaceChildren(...question.options.map((option, optionIndex) => {
      const choice = button('option-choice', '');
      choice.append(span('option-letter', 'ABCD'[optionIndex]), span('option-text', option.text));
      choice.setAttribute('aria-pressed', String(state.answers[index] === optionIndex));

      choice.addEventListener('click', (event) => {
        if (advanceTimer !== null || event.detail > 1) return;
        state.answers[index] = optionIndex;
        setPressed(optionList, choice);
        advanceTimer = setTimeout(() => {
          if (index === QUESTIONS.length - 1) showView('result');
          else goToQuestion(index + 1);
        }, 140);
      });
      return choice;
    }));

    if (index + 1 < QUESTIONS.length) warmImage(photoPath(storyPhoto(index + 1)[0]));

    if (index === QUESTIONS.length - 1) {
      for (const optionIndex of question.options.keys()) {
        const answers = [...state.answers];
        answers[index] = optionIndex;
        const result = getOutcome(state.zodiac, '', answers);
        warmImage(photoPath(result.weather));
        warmImage(foodPath(result));
      }
    }
  }

  function renderResult() {
    const { zodiac, answers } = state;
    const result = getOutcome(zodiac, '', answers);
    const weatherLabel = result.weatherName.startsWith('窗外') ? result.weatherName : '窗外 · ' + result.weatherName;
    byId('result-weather').textContent = weatherLabel + ' · ' + result.temperature + '°C';
    byId('result-verdict').textContent = result.verdict;
    byId('result-food-note').textContent = result.foodNote;
    byId('result-scene-note').textContent = result.scene;
    const plate = byId('result-plate');
    plate.src = foodPath(result);
    plate.alt = result.food;
    views.result.dataset.weather = result.weather;
    showPhoto('result-scene', result.weather, resultPhotoPositions[result.weather]);
  }

  function restart() {
    Object.assign(state, {
      zodiac: null, question: 0, answers: [],
    });
    showView('cover');
  }

  byId('start-btn').addEventListener('click', () => {
    warmImage(photoPath(storyPhoto(state.question)[0]));
    showView('zodiac');
  });
  previousButton.addEventListener('click', () => goToQuestion(state.question - 1));
  byId('result-back-btn').addEventListener('click', () => goToQuestion(QUESTIONS.length - 1));

  byId('restart-btn').addEventListener('click', restart);

  function setRulesOpen(open) {
    rulesNote.hidden = !open;
    rulesButton.setAttribute('aria-expanded', String(open));
  }

  rulesButton.addEventListener('click', () => setRulesOpen(rulesNote.hidden));
  document.addEventListener('click', (event) => {
    if (!rulesNote.hidden && !rulesControl.contains(event.target)) setRulesOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || rulesNote.hidden) return;
    setRulesOpen(false);
    rulesButton.focus({ preventScroll: true });
  });

  warmImage(photoPath('zodiac-night'));
  renderZodiacs();
})();
