const DIMENSIONS = [
  { key: 'EI', name: '第一位', options: [['E', '外向'], ['I', '内向']] },
  { key: 'SN', name: '第二位', options: [['S', '实感'], ['N', '直觉']] },
  { key: 'TF', name: '第三位', options: [['T', '思考'], ['F', '情感']] },
  { key: 'JP', name: '第四位', options: [['J', '判断'], ['P', '感知']] },
];

const ZODIACS = [
  { name: '白羊座', symbol: '♈', dates: '03.21–04.19', element: 'fire', reflection: '趁兴头还在，我总想先迈一步' },
  { name: '金牛座', symbol: '♉', dates: '04.20–05.20', element: 'earth', reflection: '我还想在这儿安安稳稳坐一会儿' },
  { name: '双子座', symbol: '♊', dates: '05.21–06.21', element: 'air', reflection: '我对一句话能聊到哪儿总有点好奇' },
  { name: '巨蟹座', symbol: '♋', dates: '06.22–07.22', element: 'water', reflection: '我会先看看身边那个人坐得自在不自在' },
  { name: '狮子座', symbol: '♌', dates: '07.23–08.22', element: 'fire', reflection: '遇到自己真喜欢的事，我还是愿意先说出来' },
  { name: '处女座', symbol: '♍', dates: '08.23–09.22', element: 'earth', reflection: '我习惯先把手边那点小事收拾妥当' },
  { name: '天秤座', symbol: '♎', dates: '09.23–10.23', element: 'air', reflection: '我愿意给自己和对面都留点说话的余地' },
  { name: '天蝎座', symbol: '♏', dates: '10.24–11.22', element: 'water', reflection: '心里那些要紧的话，我想留给信得过的人' },
  { name: '射手座', symbol: '♐', dates: '11.23–12.21', element: 'fire', reflection: '一想到下回，我就想试试走另一条路' },
  { name: '摩羯座', symbol: '♑', dates: '12.22–01.19', element: 'earth', reflection: '我惦记的还是眼下这件事，总得先做踏实' },
  { name: '水瓶座', symbol: '♒', dates: '01.20–02.18', element: 'air', reflection: '越是做惯了的事，我越容易琢磨能不能换个做法' },
  { name: '双鱼座', symbol: '♓', dates: '02.19–03.20', element: 'water', reflection: '今天有几个小地方，我过两天大概还会想起来' },
];

const FOODS = {
  'orange-scone': {
    food: '焦蜜橙皮司康',
    foodNote: '从裂缝掰开，橙丝还有点韧。蜂蜜烤过的一面先甜。',
  },
  'almond-flan': {
    food: '杏仁脆皮烤布丁',
    foodNote: '勺背碰出一声脆响。舀下去，杏仁底下还是温的。',
  },
  'walnut-brownie': {
    food: '核桃可可布朗尼',
    foodNote: '边上一圈稍脆，里头软。咬到半颗核桃，比可可更香。',
  },
  'honey-rice-cake': {
    food: '蜂蜜蒸米糕',
    foodNote: '米糕一掰还有点热气。蜂蜜沿着小孔渗下去，甜在底下。',
  },
  'cheese-palmiers': {
    food: '海盐芝士蝶酥',
    foodNote: '从中间掰开，俩边都掉了些酥皮。芝士焦黄的那一层最咸。',
  },
  'pear-tart': {
    food: '雪梨杏仁塔',
    foodNote: '塔边细细碎碎的。咬到中间，梨片还是水灵的。',
  },
  'sesame-dumplings': {
    food: '黑芝麻豆乳团子',
    foodNote: '半边蘸了黑芝麻。软糯的那口咽下去，嘴边还有点豆香。',
  },
  'pomelo-jelly': {
    food: '柚子蜜冻',
    foodNote: '勺尖推一下，整块都颤了颤。里头的柚肉有一点苦。',
  },
};

const RESULTS = {
  fire_NT: {
    weather: 'sunbreak', weatherName: '破云日光', temperature: 26,
    foodArt: 'orange-scone',
    scene: '云先裂开窄窄的一道，光从对街的瓦沿往白墙上挪。刚下过雨，台阶还是深色的，只有最外头一角亮起来。没过多久，墙脚那湾积水也映出了半截白墙。',
    verdictOpening: '日光刚挪到台阶上，司康掰开，掉了几粒渣',
  },
  fire_NF: {
    weather: 'copper-breeze', weatherName: '橘子晚霞', temperature: 27,
    foodArt: 'almond-flan',
    scene: '天边先是淡橙色，贴着瓦顶的那一条慢慢深了。对街有扇窗开着，玻璃一转，桌边也跟着亮了一下。又坐了一会儿，街对面的灯才一盏盏亮起来。',
    verdictOpening: '晚霞照到碟边，我用勺背碰响了布丁的脆皮',
  },
  fire_SJ: {
    weather: 'warm-roof-cloud', weatherName: '暖云低垂', temperature: 22,
    foodArt: 'almond-flan',
    scene: '云贴着屋顶，巷子早早暗下来。檐下已经开了灯，瓦背还是灰的，只有西边留着一条窄窄的亮边。等那条亮边也淡下去，最清楚的是灯底下那几道砖缝。',
    verdictOpening: '云还压在屋顶上，勺子底下那口布丁是温的',
  },
  fire_SP: {
    weather: 'copper-breeze', weatherName: '热风晚霞', temperature: 29,
    foodArt: 'orange-scone',
    scene: '太阳已经落到屋后，风从巷口绕进来，扑到手背上还有点热。窗帘被掀起一角，露出瓦顶上那条红边。帘子落回来擦过手腕，布上也留着一点热。',
    verdictOpening: '晚风吹过来还是热的，司康掰开闻得到橙皮',
  },
  earth_NT: {
    weather: 'cloud', weatherName: '山间薄雾', temperature: 16,
    foodArt: 'walnut-brownie',
    scene: '刚才还看得见半山腰的树，雾顺着山坡往下走，先遮了那些树，再遮住巷子口。近处的叶尖上挂着一滴水，我等了半天也没见它掉下来。',
    verdictOpening: '雾快遮住半山腰了，我刚咬到布朗尼里的半颗核桃',
  },
  earth_NF: {
    weather: 'dawn-drizzle', weatherName: '清晨细雨', temperature: 18,
    foodArt: 'honey-rice-cake',
    scene: '雨细得隔窗看不清，低头看见青石缝里都是水，才发现整条巷子都湿了。屋瓦上的青苔比刚才更绿。对面的窗推开半扇，一团白气飘出来，没走多远就散进雨里。',
    verdictOpening: '窗外下着细雨，米糕掰开还有点热',
  },
  earth_SJ: {
    weather: 'snow', weatherName: '窗外初雪', temperature: 3,
    foodArt: 'walnut-brownie',
    scene: '一片雪贴上玻璃，眨眼只剩个水点。对面屋檐先白了一条，路心还有些湿。有人从巷口过去，鞋印旁已经积起薄薄一层，踩过的地方还是深的。',
    verdictOpening: '雪贴上玻璃就化了，布朗尼在指尖掉了点碎屑',
  },
  earth_SP: {
    weather: 'sun', weatherName: '午后碎金', temperature: 24,
    foodArt: 'honey-rice-cake',
    scene: '太阳从半开的木门斜进来，先照到门槛，再够到桌角。外头的树叶一动，光就碎成几小块。我把手搁在那里坐了会儿，起先暖的是指尖，后来轮到手背。',
    verdictOpening: '米糕剩下一口，桌角那点亮已经挪到我手背上了',
  },
  air_NT: {
    weather: 'wind', weatherName: '雨后阵风', temperature: 21,
    foodArt: 'cheese-palmiers',
    scene: '雨停的时候巷子静了一小会儿，尽头那棵树先哗地响起来。湿叶子被风翻过来，甩下的水打在石板上。我以为雨又来了，探头一看，檐外已经亮了。',
    verdictOpening: '雨后风进了门，我用指尖把桌上的酥皮屑拢到一块儿',
  },
  air_NF: {
    weather: 'day-cloud', weatherName: '浅云漫过', temperature: 19,
    foodArt: 'pear-tart',
    scene: '两栋楼之间只看得见一小块蓝天，那朵白云刚好从那里过去。墙面暗了一会儿，过不多久又亮回来了。再抬头，刚才圆鼓鼓的云边已经散薄了。',
    verdictOpening: '两栋楼中间那朵云还在，梨塔里的梨倒是吃到最软的一片了',
  },
  air_SJ: {
    weather: 'wind', weatherName: '穿堂微风', temperature: 23,
    foodArt: 'cheese-palmiers',
    scene: '风从门口进来，沿着桌边往窗外走。白帘子鼓了一下，刚才还盖着的窗台露出来，桌上几粒酥皮屑也跟着动了。我把手挪过去，风比进门时暖一点。',
    verdictOpening: '门里过了一阵风，掰开那块蝶酥掉了满碟的碎屑',
  },
  air_SP: {
    weather: 'violet-breeze', weatherName: '起风的紫暮', temperature: 25,
    foodArt: 'pear-tart',
    scene: '天上剩一点紫，树叶被风吹得一阵响一阵停。对面的灯已经开了，白帘子往屋里鼓起来，刚好挡了一下那盏灯。等帘子落回去，窗外比方才又暗了些。',
    verdictOpening: '窗外那层紫快淡了，梨塔最后一口里还有梨汁',
  },
  water_NT: {
    weather: 'rain', weatherName: '静夜蓝雨', temperature: 17,
    foodArt: 'sesame-dumplings',
    scene: '天黑透了，雨水还泛着一点蓝。伞一把把从路灯底下过去，地上那点黄光被踩碎，又慢慢聚起来。有把伞在门口停了一下，伞沿的水还在往石缝里淌。',
    verdictOpening: '雨里又过去一把伞，团子咽下去，嘴里还留着豆香',
  },
  water_NF: {
    weather: 'moon-rain', weatherName: '月下细雨', temperature: 18,
    foodArt: 'pomelo-jelly',
    scene: '月亮隔着一层薄云，只剩一点亮。玻璃上的雨很细，有一滴走到一半并进另一滴，忽然滑得快起来。我跟着看到窗底，抬眼时，那点月光还在原处。',
    verdictOpening: '玻璃上的雨水蒙着一点月光，吃完那勺柚冻，舌尖还带点苦',
  },
  water_SJ: {
    weather: 'harbor-fog', weatherName: '低云靠岸', temperature: 19,
    foodArt: 'sesame-dumplings',
    scene: '雾从水面漫上来，对岸先看不见了，近处的树也只剩半个轮廓。靠窗的枝条被风拨了一下，轻轻磕着玻璃。岸边那排石桩还能数到第三根，再过去就看不清了。',
    verdictOpening: '起雾了，只看得见靠窗那根枝丫，芝麻香还留在嘴边',
  },
  water_SP: {
    weather: 'sunshower', weatherName: '轻快太阳雨', temperature: 24,
    foodArt: 'pomelo-jelly',
    scene: '太阳从云后钻出来，雨线反而看得清了，一根根亮在屋檐外。地上的水还在起圈，贴着墙的一截已经照得发亮。对面有人收了伞，才走俩步，又在亮处撑开。',
    verdictOpening: '外面还在落雨，太阳已经照到勺尖，柚冻颤了一下',
  },
};

const TYPE_VERDICTS = {
  ISTJ: '真答应过的事，走之前得在心里给它留个时间',
  ISFJ: '对面随口提的那点事，回去我也会记得',
  INFJ: '对面那句说到一半的话，我到这会儿还记着',
  INTJ: '还没起身，回去先做哪一步已经想好了',
  ISTP: '手边那个办法，得自己动手试一遍才知道行不行',
  ISFP: '真合心意的东西，自己记得那一口就行',
  INFP: '有句话到嘴边又收了回去，过会儿要是还想着，我再说',
  INTP: '刚才那件事还有一处说不通，回去我再捋捋',
  ESTP: '正好手头有个办法，叫上对面的人当场就能试试',
  ESFP: '碰上有意思的事，我还是会扭头让旁边的人也看看',
  ENFP: '说着就想到别的了，回头得问问他要不要一块儿去看看',
  ENTP: '刚才那事我还有另一种讲法，倒想听听对面会怎么接',
  ESTJ: '等大家说完，先把谁做哪件事弄明白',
  ESFJ: '也记得问问对面还有什么需要，问一句就好',
  ENFJ: '等对面歇过这口气，再问问他还有什么想说',
  ENTJ: '真要往下做，我已经想到先找谁了',
};

const CHAPTERS = [
  { name: '南门外 · 刚到店', weather: 'sun' },
  { name: '窗边 · 雨落下来', weather: 'rain' },
  { name: '店里 · 雨声轻了', weather: 'wind' },
];

const QUESTIONS = [
  {
    chapter: 0,
    dimension: 'EI',
    secondaryDimension: 'JP',
    scene: '门铃响在前奏里',
    prompt: '到南门时，我摸到口袋里的旧杯套，只剩「坐窗边」还能认。门铃正好响在歌的前奏里，朋友发来消息问「你还在南门吗？」',
    question: '我想怎么回他？',
    options: [
      { score: -2, secondaryScore: 1, text: '「刚到，晚点再聊。」我想一个人听完这首歌。', next: '他回了个「好」。听完歌，我去窗边坐下。' },
      { score: 1, secondaryScore: 1, text: '「六点前要是顺路，来窗边一起坐会儿？」', next: '他说还在等车。我先去窗边坐下。' },
      { score: 2, secondaryScore: -1, text: '直接打过去。「来，给你听个响。」', next: '我推门给他听，铃比刚才还响。挂了电话，窗边正好空着。' },
      { score: -1, secondaryScore: -1, text: '打了几句又删掉，只回「到了」。', next: '他问「老地方？」我回了个「嗯」，进门找那扇窗。' },
    ],
  },
  {
    chapter: 0,
    dimension: 'SN',
    secondaryDimension: 'TF',
    scene: '晴天收起来',
    prompt: '窗台的玻璃杯压着张旧小票。日期是去年的今天，背面写着「晴天收起来」，纸角还有半圈没干的水印。',
    question: '这张小票，我先留意什么？',
    options: [
      { score: 2, secondaryScore: 1, text: '摸摸水印，拿杯底对一下，看是不是刚压的。', next: '杯底刚好对上水印。窗上也多了第一滴雨。' },
      { score: -1, secondaryScore: -1, text: '猜写字的人是不是舍不得那个下午。', next: '我把小票往里挪了挪，窗上响了两下。' },
      { score: -2, secondaryScore: -1, text: '想起一个最舍不得的晴天，还有那天陪我的人。', next: '我还在挑那一天，雨先落了下来。' },
      { score: 1, secondaryScore: 1, text: '翻到正面，看看当时点了什么。', next: '一杯加冰，一杯热的。抬起头，窗上已经挂了水。' },
    ],
  },
  {
    chapter: 1,
    dimension: 'JP',
    secondaryDimension: 'SN',
    scene: '裤脚湿了一截',
    prompt: '代收点快关门了，包裹还没拿。我刚出店门试了两步，裤脚就湿了。',
    question: '雨还没停，我打算怎么取快递？',
    options: [
      { score: 2, secondaryScore: 1, text: '问几点关门，算好走多久，设个提醒。', next: '设好提醒，我回到窗边。朋友发来一段语音。', echo: '代收点说会晚点关门，我把提醒推迟了十分钟。' },
      { score: -1, secondaryScore: -1, text: '先坐会儿，等雨势变了再想别的走法。', next: '裤脚还发凉，我坐回去听朋友的语音。', echo: '裤脚干了大半。我把取件码存好，明天再拿。' },
      { score: 1, secondaryScore: -1, text: '等一刻钟。雨还下的话，明天再拿。', next: '我设好计时，坐回窗边听朋友的语音。', echo: '一刻钟到了，窗上还挂着新雨。我打算明天再取。' },
      { score: -2, secondaryScore: 1, text: '看看哪条巷子积水少，能走就去。', next: '两条巷子都积了水。我回窗边听朋友的语音。', echo: '刚才那条巷子退了水，露出一排干砖。吃完能从那边去取件。' },
    ],
  },
  {
    chapter: 1,
    dimension: 'TF',
    secondaryDimension: 'EI',
    scene: '他录了三遍的声音',
    prompt: '朋友录了三遍这家店的门铃，社团嫌杂音多，要他从片子里剪掉。他隔了好一会儿才说「算了」。',
    question: '我会先回他哪句？',
    options: [
      { score: -2, secondaryScore: 1, text: '「那声门铃，你最舍不得哪一点？」', next: '他说舍不得铃响后我们那桌的笑声。店员端来一小杯茶。' },
      { score: 2, secondaryScore: -1, text: '「发我原声，我戴耳机听听杂音从哪儿来。」', next: '原声里有车轧过积水。我摘下耳机，店员端来了茶。' },
      { score: -1, secondaryScore: 1, text: '「录三遍挺费劲吧，晚上一起吃点东西？」', next: '他说好，又问起上回那家面馆。店员端来茶。' },
      { score: 1, secondaryScore: -1, text: '「留铃和去铃各剪一版，放一起比比？」', next: '他说手机上就能试。店员端来一小杯茶。' },
    ],
  },
  {
    chapter: 1,
    dimension: 'SN',
    secondaryDimension: 'JP',
    scene: '茶的第二口',
    prompt: '店员说，朋友上回把小票夹在窗缝里，想下次来拿。茶第一口冰牙，第二口才喝出梨皮香。杯底还剩一点。',
    question: '喝最后一口时，我会留意什么？',
    options: [
      { score: -1, secondaryScore: -1, text: '想起有些话，要见第二次才聊得到。', next: '正想到第二面，店员过来收托盘。' },
      { score: 1, secondaryScore: 1, text: '等冰化了再喝，看看还冰不冰。', next: '杯口没那么凉了。我把杯放下，店员收起了托盘。' },
      { score: 2, secondaryScore: 1, text: '先闻梨香，再抿一口，尝尝留下的是甜还是涩。', next: '舌根还带点涩。店员已经把托盘收回去了。' },
      { score: -2, secondaryScore: -1, text: '给两口茶随手取名，第一口叫「刚下雨」。', next: '第二个名字还没想好，店员已经收了托盘。' },
    ],
  },
  {
    chapter: 2,
    dimension: 'EI',
    secondaryDimension: 'TF',
    scene: '对面那把椅子',
    prompt: '店员拿着书，问能不能在我对面坐会儿。我刚挪开包，蓝色借书卡就从他拿倒的书里滑到桌沿，他还没看见。',
    question: '我接下来会怎么做？',
    options: [
      { score: 2, secondaryScore: -1, text: '按住借书卡，指指倒着的封面，问书好不好看。', next: '他夹好借书卡，说这本书看到一半才好看。门铃响了。', echo: '店员把书翻到刚聊的那页。「下回来，可以接着看。」' },
      { score: -1, secondaryScore: -1, text: '挪开茶杯，给他腾个放书的地方。', next: '他夹好借书卡，才看一行，门铃就响了。', echo: '店员收书时朝我笑了笑。「刚才安安静静看了一行。」' },
      { score: 1, secondaryScore: 1, text: '指指桌沿，提醒他「你的借书卡。」', next: '他说书刚借的，把借书卡夹回去。门铃响了。', echo: '店员收书时指指夹好的卡。「多亏你看见了。」' },
      { score: -2, secondaryScore: 1, text: '把借书卡推到他手边，继续看窗外。', next: '他接过借书卡，朝我点了点头。门铃响了。', echo: '店员用蓝色借书卡夹好刚读到的那页，朝我点了点头。' },
    ],
  },
  {
    chapter: 2,
    dimension: 'TF',
    secondaryDimension: 'SN',
    scene: '拿小鸭子的伞来还',
    prompt: '朋友来了。他弄丢了店里借的伞，想拿自己的小鸭子伞来还。旁桌有人嘀咕「那以后丢了都这么算？」店员看向我。',
    question: '如果是我开店，这事怎么处理？',
    options: [
      { score: 1, secondaryScore: 1, text: '「撑开看看，能挡雨就留给大家借。」', next: '店员试了试，把伞撑在门边晾，回来给我一个新杯套。' },
      { score: -2, secondaryScore: 1, text: '「他特地跑回来，先让他坐下擦擦手。」', next: '朋友松开伞柄。店员递给他一块干布，又给我一个新杯套。' },
      { score: -1, secondaryScore: -1, text: '「先谢谢他肯回来。下回谁弄丢了，也敢回来开口。」', next: '店员道了声谢，请朋友坐过来，也放下了一个新杯套。' },
      { score: 2, secondaryScore: -1, text: '「这把合用就收下。以后借伞时说清丢了怎么补。」', next: '店员收了伞，说以后会多交代一句，转身递给我一个新杯套。' },
    ],
  },
  {
    chapter: 2,
    dimension: 'JP',
    secondaryDimension: 'EI',
    revisits: [2, 5],
    scene: '窗边刚亮灯',
    prompt: '灯亮了，我把旧杯套凑过去，认出磨花的是「下回」。朋友瞄了眼桌上去年的小票，笑说「还真坐回这儿了。」手边还有店员给的新杯套。',
    question: '我想在新杯套上留点什么？',
    options: [
      { score: -2, secondaryScore: -1, text: '空着带走，下回来再想写什么。' },
      { score: 2, secondaryScore: 1, text: '写「下周三下午四点」，约朋友再来坐。' },
      { score: -1, secondaryScore: 1, text: '画扇亮着的窗给店员看。哪天路过还亮，就进来。' },
      { score: 1, secondaryScore: -1, text: '只写「傍晚亮灯前后」，日期以后再定。' },
    ],
  },
];

function getStoryOption(answers, index) {
  return QUESTIONS[index]?.options[answers[index]];
}

function getOutcome(zodiac, selfType, answers = []) {
  const normalizedType = typeof selfType === 'string' ? selfType.trim().toUpperCase() : '';
  const declaredType = /^[EI][SN][TF][JP]$/.test(normalizedType) ? normalizedType : '';
  const fireOrAir = zodiac.element === 'fire' || zodiac.element === 'air';
  const elementTies = fireOrAir ? { EI: 'E', SN: 'N', JP: 'P' } : { EI: 'I', SN: 'S', JP: 'J' };
  const totals = { EI: 0, SN: 0, TF: 0, JP: 0 };
  let firstThinkingChoice;

  for (const [index, { dimension, secondaryDimension }] of QUESTIONS.entries()) {
    const option = getStoryOption(answers, index);
    if (!option) continue;
    totals[dimension] += option.score;
    totals[secondaryDimension] += option.secondaryScore;
    if (dimension === 'TF') firstThinkingChoice ??= option.score > 0 ? 'T' : 'F';
  }

  const type = DIMENSIONS.map(({ key, options }, index) => {
    const [[positive], [negative]] = options;
    const declared = declaredType[index];
    const score = totals[key] + (declared ? (declared === positive ? 1 : -1) : 0);
    if (score === 0) return declared ?? elementTies[key] ?? firstThinkingChoice ?? positive;
    return score > 0 ? positive : negative;
  }).join('');

  const group = type[1] === 'N' ? type.slice(1, 3) : type[1] + type[3];
  const resultKey = zodiac.element + '_' + group;
  const result = RESULTS[resultKey];
  const verdict = result.verdictOpening + '。' + zodiac.reflection + '，' + TYPE_VERDICTS[type] + '。';

  return { ...result, ...FOODS[result.foodArt], type, verdict };
}
