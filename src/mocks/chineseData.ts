import type { Exercise } from '../types'

export interface ChineseLesson {
  id: string
  title: string
  type: 'text' | 'poem' | 'reading' | 'writing' | 'grammar' | 'classic'
  content: string
  appreciation?: string
  notes?: string[]
  questions?: { q: string; options: string[]; answer: number }[]
  exercises: Exercise[]
}

export const CHINESE_LESSONS: ChineseLesson[] = [
  // 现代文阅读技巧（5）
  { id: 'c_skill_1', title: '如何概括段落大意', type: 'reading', content: '概括段落大意要抓住”谁+做什么+结果”三个要素，删除修饰性语句。', notes: ['关注中心句', '避免以偏概全'], exercises: [
    { id: 'c_skill_1_ex1', type: 'fill', question: '概括段落大意要抓住哪三个要素？', answer: '谁+做什么+结果' },
    { id: 'c_skill_1_ex2', type: 'choice', question: '概括段落大意时应该删除什么？', options: ['中心句', '修饰性语句', '主语', '时间'], answer: 1 },
  ] },
  { id: 'c_skill_2', title: '修辞手法之比喻与拟人', type: 'grammar', content: '比喻：用相似的事物打比方。拟人：把事物人格化。', notes: ['比喻有本体、喻体、比喻词', '拟人赋予人的情感动作'], exercises: [
    { id: 'c_skill_2_ex1', type: 'fill', question: '拟人手法是把什么人格化？', answer: '事物' },
    { id: 'c_skill_2_ex2', type: 'choice', question: '比喻的三个组成部分是什么？', options: ['本体、喻体、比喻词', '主语、谓语、宾语', '时间、地点、人物', '起因、经过、结果'], answer: 0 },
  ] },
  { id: 'c_skill_3', title: '人物描写方法', type: 'reading', content: '人物描写包括外貌、语言、动作、心理、神态五种。', notes: ['神态描写反映内心', '动作描写推动情节'], exercises: [
    { id: 'c_skill_3_ex1', type: 'fill', question: '人物描写包括哪五种？', answer: '外貌、语言、动作、心理、神态' },
    { id: 'c_skill_3_ex2', type: 'choice', question: '哪种描写可以反映人物内心？', options: ['外貌描写', '语言描写', '神态描写', '动作描写'], answer: 2 },
  ] },
  { id: 'c_skill_4', title: '环境描写的作用', type: 'reading', content: '环境描写可渲染气氛、衬托人物、推动情节、暗示主题。', notes: ['自然环境与社会环境', '结合上下文分析'], exercises: [
    { id: 'c_skill_4_ex1', type: 'fill', question: '环境描写可以渲染什么？', answer: '气氛' },
    { id: 'c_skill_4_ex2', type: 'choice', question: '环境描写不能起到以下哪种作用？', options: ['渲染气氛', '衬托人物', '改变主题', '推动情节'], answer: 2 },
  ] },
  { id: 'c_skill_5', title: '标题的含义与作用', type: 'reading', content: '标题往往揭示中心、设置悬念、作为线索、象征意义。', notes: ['表层义与深层义', '结构作用+内容作用'], exercises: [
    { id: 'c_skill_5_ex1', type: 'fill', question: '标题的作用之一是设置什么？', answer: '悬念' },
    { id: 'c_skill_5_ex2', type: 'choice', question: '标题的含义包括哪两个层面？', options: ['开头与结尾', '表层义与深层义', '正面与反面', '过去与未来'], answer: 1 },
  ] },

  // 课内古诗词（15）
  { id: 'c_poem_1', title: '《观沧海》曹操', type: 'poem', content: '东临碣石，以观沧海。水何澹澹，山岛竦峙。树木丛生，百草丰茂。秋风萧瑟，洪波涌起。日月之行，若出其中；星汉灿烂，若出其里。幸甚至哉，歌以咏志。', appreciation: '借大海的雄伟壮阔抒发统一中原的雄心壮志。', exercises: [
    { id: 'c_poem_1_ex1', type: 'fill', question: '《观沧海》的作者是谁？', answer: '曹操' },
    { id: 'c_poem_1_ex2', type: 'choice', question: '「日月之行，若出其中」描写的是？', options: ['大海', '高山', '天空', '草原'], answer: 0 },
  ] },
  { id: 'c_poem_2', title: '《闻王昌龄左迁龙标遥有此寄》李白', type: 'poem', content: '杨花落尽子规啼，闻道龙标过五溪。我寄愁心与明月，随君直到夜郎西。', appreciation: '以明月为媒介，表达对友人深切的同情与牵挂。', exercises: [
    { id: 'c_poem_2_ex1', type: 'fill', question: '这首诗的作者是谁？', answer: '李白' },
    { id: 'c_poem_2_ex2', type: 'choice', question: '诗人把什么寄给友人？', options: ['书信', '愁心', '礼物', '酒'], answer: 1 },
  ] },
  { id: 'c_poem_3', title: '《次北固山下》王湾', type: 'poem', content: '客路青山外，行舟绿水前。潮平两岸阔，风正一帆悬。海日生残夜，江春入旧年。乡书何处达？归雁洛阳边。', appreciation: '描写江南早春景色，抒发游子的思乡之情。', exercises: [
    { id: 'c_poem_3_ex1', type: 'fill', question: '「乡书何处达？归雁____边」', answer: '洛阳' },
    { id: 'c_poem_3_ex2', type: 'choice', question: '这首诗抒发了什么情感？', options: ['爱国之情', '思乡之情', '友情', '爱情'], answer: 1 },
  ] },
  { id: 'c_poem_4', title: '《天净沙·秋思》马致远', type: 'poem', content: '枯藤老树昏鸦，小桥流水人家，古道西风瘦马。夕阳西下，断肠人在天涯。', appreciation: '以多种意象组合，表现天涯游子的孤寂愁苦。', exercises: [
    { id: 'c_poem_4_ex1', type: 'fill', question: '《天净沙·秋思》的作者是谁？', answer: '马致远' },
    { id: 'c_poem_4_ex2', type: 'choice', question: '「断肠人在天涯」中的「断肠人」指什么？', options: ['伤心的人', '生病的人', '饥饿的人', '疲惫的人'], answer: 0 },
  ] },
  { id: 'c_poem_5', title: '《峨眉山月歌》李白', type: 'poem', content: '峨眉山月半轮秋，影入平羌江水流。夜发清溪向三峡，思君不见下渝州。', appreciation: '写月夜行船，抒发对友人的思念。', exercises: [
    { id: 'c_poem_5_ex1', type: 'fill', question: '这首诗描写的是哪座山的月亮？', answer: '峨眉山' },
    { id: 'c_poem_5_ex2', type: 'choice', question: '诗人夜发清溪要去哪里？', options: ['洛阳', '三峡', '长安', '杭州'], answer: 1 },
  ] },
  { id: 'c_poem_6', title: '《江南逢李龟年》杜甫', type: 'poem', content: '岐王宅里寻常见，崔九堂前几度闻。正是江南好风景，落花时节又逢君。', appreciation: '以乐景写哀情，表达对盛世不再的感慨。', exercises: [
    { id: 'c_poem_6_ex1', type: 'fill', question: '这首诗的作者是谁？', answer: '杜甫' },
    { id: 'c_poem_6_ex2', type: 'choice', question: '「落花时节」象征什么？', options: ['春天的到来', '盛世的衰落', '友谊的结束', '爱情的凋零'], answer: 1 },
  ] },
  { id: 'c_poem_7', title: '《行军九日思长安故园》岑参', type: 'poem', content: '强欲登高去，无人送酒来。遥怜故园菊，应傍战场开。', appreciation: '借重阳登高，抒发对国事的忧虑和对故园的思念。', exercises: [
    { id: 'c_poem_7_ex1', type: 'fill', question: '诗人遥怜故园的什么花？', answer: '菊' },
    { id: 'c_poem_7_ex2', type: 'choice', question: '这首诗写于什么节日？', options: ['春节', '重阳节', '中秋节', '端午节'], answer: 1 },
  ] },
  { id: 'c_poem_8', title: '《夜上受降城闻笛》李益', type: 'poem', content: '回乐烽前沙似雪，受降城外月如霜。不知何处吹芦管，一夜征人尽望乡。', appreciation: '描写边塞月夜，表现征人的思乡之情。', exercises: [
    { id: 'c_poem_8_ex1', type: 'fill', question: '「一夜征人尽____」', answer: '望乡' },
    { id: 'c_poem_8_ex2', type: 'choice', question: '这首诗描写的是什么场景？', options: ['边塞月夜', '江南水乡', '宫廷宴会', '田园生活'], answer: 0 },
  ] },
  { id: 'c_poem_9', title: '《秋词（其一）》刘禹锡', type: 'poem', content: '自古逢秋悲寂寥，我言秋日胜春朝。晴空一鹤排云上，便引诗情到碧霄。', appreciation: '一反悲秋传统，表现昂扬向上的情怀。', exercises: [
    { id: 'c_poem_9_ex1', type: 'fill', question: '这首诗的作者是谁？', answer: '刘禹锡' },
    { id: 'c_poem_9_ex2', type: 'choice', question: '诗人认为秋天比哪个季节更好？', options: ['夏天', '春天', '冬天', '没有比较'], answer: 1 },
  ] },
  { id: 'c_poem_10', title: '《夜雨寄北》李商隐', type: 'poem', content: '君问归期未有期，巴山夜雨涨秋池。何当共剪西窗烛，却话巴山夜雨时。', appreciation: '以雨夜为背景，虚实结合，抒发对亲人的思念。', exercises: [
    { id: 'c_poem_10_ex1', type: 'fill', question: '「何当共剪____烛」', answer: '西窗' },
    { id: 'c_poem_10_ex2', type: 'choice', question: '这首诗主要抒发什么情感？', options: ['思乡念亲', '怀才不遇', '爱国忧民', '送别友人'], answer: 0 },
  ] },
  { id: 'c_poem_11', title: '《十一月四日风雨大作》陆游', type: 'poem', content: '僵卧孤村不自哀，尚思为国戍轮台。夜阑卧听风吹雨，铁马冰河入梦来。', appreciation: '年老体衰仍心系国家，表现强烈的爱国情怀。', exercises: [
    { id: 'c_poem_11_ex1', type: 'fill', question: '这首诗的作者是谁？', answer: '陆游' },
    { id: 'c_poem_11_ex2', type: 'choice', question: '「铁马冰河入梦来」表现了诗人什么情怀？', options: ['思乡之情', '爱国情怀', '忧国忧民', '壮志未酬'], answer: 1 },
  ] },
  { id: 'c_poem_12', title: '《潼关》谭嗣同', type: 'poem', content: '终古高云簇此城，秋风吹散马蹄声。河流大野犹嫌束，山入潼关不解平。', appreciation: '借山河的雄伟奔放，抒发少年壮志。', exercises: [
    { id: 'c_poem_12_ex1', type: 'fill', question: '《潼关》的作者是谁？', answer: '谭嗣同' },
    { id: 'c_poem_12_ex2', type: 'choice', question: '「山入潼关不解平」表现了什么？', options: ['山的险峻', '少年壮志', '旅途艰辛', '思乡之情'], answer: 1 },
  ] },
  { id: 'c_poem_13', title: '《木兰诗（节选）》', type: 'poem', content: '万里赴戎机，关山度若飞。朔气传金柝，寒光照铁衣。将军百战死，壮士十年归。', appreciation: '运用互文、对偶，表现木兰英勇善战。', exercises: [
    { id: 'c_poem_13_ex1', type: 'fill', question: '「万里赴____」', answer: '戎机' },
    { id: 'c_poem_13_ex2', type: 'choice', question: '这段诗表现了木兰的什么品质？', options: ['温柔善良', '英勇善战', '聪明机智', '孝顺父母'], answer: 1 },
  ] },
  { id: 'c_poem_14', title: '《竹里馆》王维', type: 'poem', content: '独坐幽篁里，弹琴复长啸。深林人不知，明月来相照。', appreciation: '表现诗人宁静淡泊的心境和高雅情趣。', exercises: [
    { id: 'c_poem_14_ex1', type: 'fill', question: '《竹里馆》的作者是谁？', answer: '王维' },
    { id: 'c_poem_14_ex2', type: 'choice', question: '这首诗表现了诗人怎样的心境？', options: ['孤独寂寞', '宁静淡泊', '忧愁悲伤', '愤世嫉俗'], answer: 1 },
  ] },
  { id: 'c_poem_15', title: '《春夜洛城闻笛》李白', type: 'poem', content: '谁家玉笛暗飞声，散入春风满洛城。此夜曲中闻折柳，何人不起故园情。', appreciation: '因笛声触发普遍的思乡之情。', exercises: [
    { id: 'c_poem_15_ex1', type: 'fill', question: '「此夜曲中闻____」', answer: '折柳' },
    { id: 'c_poem_15_ex2', type: 'choice', question: '这首诗主要抒发什么情感？', options: ['思乡之情', '离别之情', '爱国之情', '友情'], answer: 0 },
  ] },

  // 文言文阅读（10）
  { id: 'c_classic_1', title: '《论语》十二章（一）', type: 'classic', content: '学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？', appreciation: '强调学习、交友、修养的重要性。', notes: ['说：同”悦”', '愠：生气'], exercises: [
    { id: 'c_classic_1_ex1', type: 'fill', question: '「学而时习之，不亦____乎」', answer: '说' },
    { id: 'c_classic_1_ex2', type: 'choice', question: '「人不知而不愠」中的「愠」是什么意思？', options: ['高兴', '生气', '悲伤', '惊讶'], answer: 1 },
  ] },
  { id: 'c_classic_2', title: '《论语》十二章（二）', type: 'classic', content: '吾日三省吾身：为人谋而不忠乎？与朋友交而不信乎？传不习乎？', appreciation: '倡导自我反省，注重诚信。', notes: ['三省：多次反省', '信：诚信'], exercises: [
    { id: 'c_classic_2_ex1', type: 'fill', question: '「吾日三省吾身」中的「三省」指什么？', answer: '多次反省' },
    { id: 'c_classic_2_ex2', type: 'choice', question: '这段话强调要注重什么品质？', options: ['勇敢', '诚信', '谦虚', '勤奋'], answer: 1 },
  ] },
  { id: 'c_classic_3', title: '《论语》十二章（三）', type: 'classic', content: '温故而知新，可以为师矣。', appreciation: '复习旧知能获得新理解。', notes: ['故：旧知识'], exercises: [
    { id: 'c_classic_3_ex1', type: 'fill', question: '「温故而知新」中的「故」指什么？', answer: '旧知识' },
    { id: 'c_classic_3_ex2', type: 'choice', question: '这句话告诉我们什么道理？', options: ['要不断学习新知识', '复习旧知识能获得新理解', '要虚心请教老师', '学习要持之以恒'], answer: 1 },
  ] },
  { id: 'c_classic_4', title: '《论语》十二章（四）', type: 'classic', content: '学而不思则罔，思而不学则殆。', appreciation: '学习与思考要结合。', notes: ['罔：迷惑', '殆：疑惑'], exercises: [
    { id: 'c_classic_4_ex1', type: 'fill', question: '「学而不思则____」', answer: '罔' },
    { id: 'c_classic_4_ex2', type: 'choice', question: '「思而不学则殆」中的「殆」是什么意思？', options: ['疑惑', '危险', '疲倦', '快乐'], answer: 0 },
  ] },
  { id: 'c_classic_5', title: '《咏雪》', type: 'classic', content: '谢太傅寒雪日内集，与儿女讲论文义。俄而雪骤，公欣然曰：”白雪纷纷何所似？”', appreciation: '展现魏晋士人的风雅情趣。', notes: ['内集：家庭聚会', '俄而：不久'], exercises: [
    { id: 'c_classic_5_ex1', type: 'fill', question: '「俄而雪骤」中的「俄而」是什么意思？', answer: '不久' },
    { id: 'c_classic_5_ex2', type: 'choice', question: '「内集」是什么意思？', options: ['家庭聚会', '朋友聚会', '朝廷会议', '学校集会'], answer: 0 },
  ] },
  { id: 'c_classic_6', title: '《陈太丘与友期行》', type: 'classic', content: '陈太丘与友期行，期日中。过中不至，太丘舍去，去后乃至。', appreciation: '通过对话表现守信与礼仪。', notes: ['期：约定', '舍去：离开'], exercises: [
    { id: 'c_classic_6_ex1', type: 'fill', question: '「期日中」中的「期」是什么意思？', answer: '约定' },
    { id: 'c_classic_6_ex2', type: 'choice', question: '这个故事主要表现什么主题？', options: ['勇敢', '守信与礼仪', '勤奋', '谦虚'], answer: 1 },
  ] },
  { id: 'c_classic_7', title: '《狼》蒲松龄（一）', type: 'classic', content: '一屠晚归，担中肉尽，止有剩骨。途中两狼，缀行甚远。', appreciation: '设置悬念，引出屠户遇狼。', notes: ['缀行：紧跟'], exercises: [
    { id: 'c_classic_7_ex1', type: 'fill', question: '「缀行甚远」中的「缀行」是什么意思？', answer: '紧跟' },
    { id: 'c_classic_7_ex2', type: 'choice', question: '屠户担中还有什么？', options: ['肉', '剩骨', '酒', '菜'], answer: 1 },
  ] },
  { id: 'c_classic_8', title: '《狼》蒲松龄（二）', type: 'classic', content: '骨已尽矣，而两狼之并驱如故。屠大窘，恐前后受其敌。', appreciation: '表现屠户处境危急。', notes: ['并驱：一起追赶', '敌：攻击'], exercises: [
    { id: 'c_classic_8_ex1', type: 'fill', question: '「恐前后受其____」', answer: '敌' },
    { id: 'c_classic_8_ex2', type: 'choice', question: '「并驱如故」中的「并驱」是什么意思？', options: ['一起追赶', '分开跑', '慢慢走', '停下来'], answer: 0 },
  ] },
  { id: 'c_classic_9', title: '《狼》蒲松龄（三）', type: 'classic', content: '少时，一狼径去，其一犬坐于前。久之，目似瞑，意暇甚。', appreciation: '写出狼的狡诈与伪装。', notes: ['犬坐：像狗一样坐', '意暇：神情悠闲'], exercises: [
    { id: 'c_classic_9_ex1', type: 'fill', question: '「其一犬坐于前」中的「犬坐」是什么意思？', answer: '像狗一样坐' },
    { id: 'c_classic_9_ex2', type: 'choice', question: '这段表现了狼的什么特点？', options: ['勇敢', '狡诈与伪装', '忠诚', '温顺'], answer: 1 },
  ] },
  { id: 'c_classic_10', title: '《狼》蒲松龄（四）', type: 'classic', content: '狼亦黠矣，而顷刻两毙，禽兽之变诈几何哉？止增笑耳。', appreciation: '点明主旨：狡诈者终将失败。', notes: ['黠：狡猾', '变诈：欺骗手段'], exercises: [
    { id: 'c_classic_10_ex1', type: 'fill', question: '「狼亦____矣」', answer: '黠' },
    { id: 'c_classic_10_ex2', type: 'choice', question: '这段话的主旨是什么？', options: ['勇敢才能胜利', '狡诈者终将失败', '团结就是力量', '要善待动物'], answer: 1 },
  ] },

  // 字词与语法（8）
  { id: 'c_word_1', title: '形声字与会意字', type: 'grammar', content: '形声字由形旁和声旁组成，如”江”；会意字由几个字组合表意，如”明”。', notes: ['形旁表义', '声旁表音'], exercises: [
    { id: 'c_word_1_ex1', type: 'fill', question: '形声字由哪两部分组成？', answer: '形旁和声旁' },
    { id: 'c_word_1_ex2', type: 'choice', question: '”明”是什么类型的字？', options: ['形声字', '会意字', '象形字', '指事字'], answer: 1 },
  ] },
  { id: 'c_word_2', title: '一词多义辨析', type: 'grammar', content: '文言文中一个词常有多个义项，如”故”有”旧的””所以””缘故”等义。', notes: ['结合语境推断', '积累常见义项'], exercises: [
    { id: 'c_word_2_ex1', type: 'fill', question: '文言文中”故”有哪些常见义项？', answer: '旧的、所以、缘故' },
    { id: 'c_word_2_ex2', type: 'choice', question: '辨析一词多义的关键是什么？', options: ['背诵字典', '结合语境推断', '查翻译', '问老师'], answer: 1 },
  ] },
  { id: 'c_word_3', title: '古今异义词', type: 'grammar', content: '”走”古义为”跑”，”汤”古义为”热水”。阅读时要注意古今差异。', notes: ['不要用现代义套古文'], exercises: [
    { id: 'c_word_3_ex1', type: 'fill', question: '”走”的古义是什么？', answer: '跑' },
    { id: 'c_word_3_ex2', type: 'choice', question: '”汤”的古义是什么？', options: ['汤水', '热水', '汤药', '汤勺'], answer: 1 },
  ] },
  { id: 'c_word_4', title: '词类活用', type: 'grammar', content: '名词活用为动词、形容词活用为动词等，如”犬坐于前”的”犬”。', notes: ['根据语法位置判断', '联系上下文'], exercises: [
    { id: 'c_word_4_ex1', type: 'fill', question: '”犬坐于前”中的”犬”是什么用法？', answer: '名词作状语' },
    { id: 'c_word_4_ex2', type: 'choice', question: '判断词类活用的主要依据是什么？', options: ['字形', '语法位置和上下文', '读音', '笔画'], answer: 1 },
  ] },
  { id: 'c_word_5', title: '病句修改：搭配不当', type: 'grammar', content: '主谓、动宾、修饰语与中心语搭配要恰当。', notes: ['提取主干', '逐一检查'], exercises: [
    { id: 'c_word_5_ex1', type: 'fill', question: '病句修改中搭配不当包括哪几种？', answer: '主谓、动宾、修饰语与中心语' },
    { id: 'c_word_5_ex2', type: 'choice', question: '修改搭配不当的病句第一步应该做什么？', options: ['找形容词', '提取主干', '找副词', '找介词'], answer: 1 },
  ] },
  { id: 'c_word_6', title: '病句修改：成分残缺', type: 'grammar', content: '句子缺少主语、谓语或宾语会造成表意不明。', notes: ['缺主语常因滥用介词', '缺宾语要注意动词'], exercises: [
    { id: 'c_word_6_ex1', type: 'fill', question: '成分残缺包括缺少什么？', answer: '主语、谓语或宾语' },
    { id: 'c_word_6_ex2', type: 'choice', question: '缺主语常因什么原因？', options: ['滥用介词', '缺少动词', '缺少名词', '缺少形容词'], answer: 0 },
  ] },
  { id: 'c_word_7', title: '标点符号用法', type: 'grammar', content: '逗号表停顿，句号表结束，问号表疑问，感叹号表强烈感情。', notes: ['不能一逗到底', '引号、顿号要规范'], exercises: [
    { id: 'c_word_7_ex1', type: 'fill', question: '问号表示什么？', answer: '疑问' },
    { id: 'c_word_7_ex2', type: 'choice', question: '感叹号表示什么？', options: ['停顿', '结束', '强烈感情', '疑问'], answer: 2 },
  ] },
  { id: 'c_word_8', title: '成语辨析与运用', type: 'grammar', content: '成语要理解本义、感情色彩和适用对象，避免望文生义。', notes: ['如”炙手可热”不是热门', '”首当其冲”首先遭受'], exercises: [
    { id: 'c_word_8_ex1', type: 'fill', question: '使用成语要避免什么？', answer: '望文生义' },
    { id: 'c_word_8_ex2', type: 'choice', question: '”首当其冲”的意思是什么？', options: ['首先受到攻击或遭受灾难', '冲在最前面', '第一个到达', '最先开始'], answer: 0 },
  ] },

  // 名著导读（8）
  { id: 'c_book_1', title: '《朝花夕拾》：鲁迅的童年', type: 'reading', content: '《朝花夕拾》是鲁迅回忆童年、少年生活的散文集，充满温情与批判。', notes: ['原名《旧事重提》', '共十篇'], exercises: [
    { id: 'c_book_1_ex1', type: 'fill', question: '《朝花夕拾》原名是什么？', answer: '《旧事重提》' },
    { id: 'c_book_1_ex2', type: 'choice', question: '《朝花夕拾》是谁的作品？', options: ['鲁迅', '老舍', '巴金', '茅盾'], answer: 0 },
  ] },
  { id: 'c_book_2', title: '《从百草园到三味书屋》', type: 'reading', content: '文章对比了百草园自由快乐的生活与三味书屋枯燥的读书生活。', notes: ['百草园象征自由', '三味书屋象征束缚'], exercises: [
    { id: 'c_book_2_ex1', type: 'fill', question: '百草园象征什么？', answer: '自由' },
    { id: 'c_book_2_ex2', type: 'choice', question: '三味书屋象征什么？', options: ['自由', '束缚', '快乐', '知识'], answer: 1 },
  ] },
  { id: 'c_book_3', title: '《阿长与〈山海经〉》', type: 'reading', content: '通过阿长为”我”买《山海经》的事，表现劳动人民的淳朴善良。', notes: ['欲扬先抑', '细节描写感人'], exercises: [
    { id: 'c_book_3_ex1', type: 'fill', question: '这篇文章运用了什么写作手法？', answer: '欲扬先抑' },
    { id: 'c_book_3_ex2', type: 'choice', question: '阿长为”我”买了什么书？', options: ['《西游记》', '《山海经》', '《水浒传》', '《红楼梦》'], answer: 1 },
  ] },
  { id: 'c_book_4', title: '《西游记》：孙悟空形象', type: 'reading', content: '孙悟空勇敢机智、嫉恶如仇，具有反抗精神。', notes: ['大闹天宫显反抗', '三打白骨精显机智'], exercises: [
    { id: 'c_book_4_ex1', type: 'fill', question: '孙悟空具有什么精神？', answer: '反抗精神' },
    { id: 'c_book_4_ex2', type: 'choice', question: '”三打白骨精”表现了孙悟空的什么特点？', options: ['勇敢', '机智', '忠诚', '善良'], answer: 1 },
  ] },
  { id: 'c_book_5', title: '《西游记》：取经团队', type: 'reading', content: '唐僧师徒四人性格互补，体现团结协作才能成功。', notes: ['各有优缺点', '团队互补'], exercises: [
    { id: 'c_book_5_ex1', type: 'fill', question: '取经团队有几人？', answer: '四' },
    { id: 'c_book_5_ex2', type: 'choice', question: '取经团队成功的关键是什么？', options: ['个人能力强', '团结协作', '运气', '法宝多'], answer: 1 },
  ] },
  { id: 'c_book_6', title: '《骆驼祥子》：祥子的悲剧', type: 'reading', content: '祥子从勤劳善良堕落为行尸走肉，控诉旧社会对劳动者的摧残。', notes: ['三起三落', '社会环境决定命运'], exercises: [
    { id: 'c_book_6_ex1', type: 'fill', question: '祥子的经历可以用哪四个字概括？', answer: '三起三落' },
    { id: 'c_book_6_ex2', type: 'choice', question: '祥子的悲剧主要是什么原因造成的？', options: ['个人不努力', '旧社会的摧残', '性格软弱', '运气不好'], answer: 1 },
  ] },
  { id: 'c_book_7', title: '《海底两万里》：科学与幻想', type: 'reading', content: '凡尔纳以丰富想象描绘海底世界，体现科学探索精神。', notes: ['尼摩船长', '鹦鹉螺号'], exercises: [
    { id: 'c_book_7_ex1', type: 'fill', question: '《海底两万里》的作者是谁？', answer: '凡尔纳' },
    { id: 'c_book_7_ex2', type: 'choice', question: '鹦鹉螺号的船长是谁？', options: ['尼摩', '阿龙纳斯', '康塞尔', '尼德·兰'], answer: 0 },
  ] },
  { id: 'c_book_8', title: '名著阅读方法', type: 'reading', content: '读名著要关注人物、情节、环境，做好批注和摘抄。', notes: ['精读与略读结合', '写读后感'], exercises: [
    { id: 'c_book_8_ex1', type: 'fill', question: '读名著要关注哪三个方面？', answer: '人物、情节、环境' },
    { id: 'c_book_8_ex2', type: 'choice', question: '名著阅读中精读与什么结合？', options: ['朗读', '略读', '默读', '背诵'], answer: 1 },
  ] },

  // 写作训练（8）
  { id: 'c_write_1', title: '记叙文六要素', type: 'writing', content: '时间、地点、人物、起因、经过、结果，六要素要交代清楚。', notes: ['经过要详写', '结果要点题'], exercises: [
    { id: 'c_write_1_ex1', type: 'fill', question: '记叙文六要素是什么？', answer: '时间、地点、人物、起因、经过、结果' },
    { id: 'c_write_1_ex2', type: 'choice', question: '记叙文中哪部分要详写？', options: ['起因', '经过', '结果', '地点'], answer: 1 },
  ] },
  { id: 'c_write_2', title: '如何写好开头', type: 'writing', content: '开头可开门见山、设置悬念、描写环境、引用名言。', notes: ['避免长篇铺垫', '快速入题'], exercises: [
    { id: 'c_write_2_ex1', type: 'fill', question: '开头的方法之一是设置什么？', answer: '悬念' },
    { id: 'c_write_2_ex2', type: 'choice', question: '开头应该避免什么？', options: ['开门见山', '长篇铺垫', '引用名言', '描写环境'], answer: 1 },
  ] },
  { id: 'c_write_3', title: '细节描写训练', type: 'writing', content: '细节描写能使人、事、景更生动，要善于观察。', notes: ['动作、神态、心理', '以小见大'], exercises: [
    { id: 'c_write_3_ex1', type: 'fill', question: '细节描写包括哪三种？', answer: '动作、神态、心理' },
    { id: 'c_write_3_ex2', type: 'choice', question: '细节描写的作用是什么？', options: ['使内容更生动', '增加字数', '凑字数', '拖延时间'], answer: 0 },
  ] },
  { id: 'c_write_4', title: '过渡与照应', type: 'writing', content: '段落之间要自然过渡，前后内容要相互照应。', notes: ['过渡句、过渡段', '首尾照应'], exercises: [
    { id: 'c_write_4_ex1', type: 'fill', question: '段落之间需要什么？', answer: '过渡' },
    { id: 'c_write_4_ex2', type: 'choice', question: '照应的方式包括什么？', options: ['首尾照应', '中间照应', '随意照应', '不照应'], answer: 0 },
  ] },
  { id: 'c_write_5', title: '如何写好结尾', type: 'writing', content: '结尾可总结全文、升华主题、留下余味、呼应开头。', notes: ['不要画蛇添足', '点明中心'], exercises: [
    { id: 'c_write_5_ex1', type: 'fill', question: '结尾可以升华什么？', answer: '主题' },
    { id: 'c_write_5_ex2', type: 'choice', question: '结尾应该避免什么？', options: ['总结全文', '画蛇添足', '呼应开头', '留下余味'], answer: 1 },
  ] },
  { id: 'c_write_6', title: '审题与立意', type: 'writing', content: '审题要抓住关键词，立意要正确、深刻、新颖。', notes: ['抓题眼', '立意决定高度'], exercises: [
    { id: 'c_write_6_ex1', type: 'fill', question: '审题要抓住什么？', answer: '关键词' },
    { id: 'c_write_6_ex2', type: 'choice', question: '立意要具备哪三个特点？', options: ['正确、深刻、新颖', '简单、明了、通俗', '复杂、深奥、晦涩', '随意、自由、开放'], answer: 0 },
  ] },
  { id: 'c_write_7', title: '选材与剪裁', type: 'writing', content: '选材要真实、典型、新颖；剪裁要详略得当。', notes: ['围绕中心选材', '舍弃无关内容'], exercises: [
    { id: 'c_write_7_ex1', type: 'fill', question: '选材要围绕什么？', answer: '中心' },
    { id: 'c_write_7_ex2', type: 'choice', question: '选材的三个要求是什么？', options: ['真实、典型、新颖', '简单、通俗、易懂', '复杂、深奥、晦涩', '随意、自由、开放'], answer: 0 },
  ] },
  { id: 'c_write_8', title: '修改作文的方法', type: 'writing', content: '写完后要从中心、结构、语言、标点等方面修改。', notes: ['朗读修改法', '冷却修改法'], exercises: [
    { id: 'c_write_8_ex1', type: 'fill', question: '修改作文的方法之一是朗读修改法和什么？', answer: '冷却修改法' },
    { id: 'c_write_8_ex2', type: 'choice', question: '修改作文要从哪几个方面入手？', options: ['中心、结构、语言、标点', '开头、结尾', '字数、格式', '字体、排版'], answer: 0 },
  ] },

  // 综合阅读与拓展（8）
  { id: 'c_ext_1', title: '记叙文主旨把握', type: 'reading', content: '把握主旨要找抒情、议论句，结合标题和反复出现的词语。', notes: ['主旨是文章的灵魂', '多在结尾点明'], exercises: [
    { id: 'c_ext_1_ex1', type: 'fill', question: '把握主旨要找什么句？', answer: '抒情、议论句' },
    { id: 'c_ext_1_ex2', type: 'choice', question: '主旨通常在文章的什么位置点明？', options: ['开头', '中间', '结尾', '标题'], answer: 2 },
  ] },
  { id: 'c_ext_2', title: '说明文阅读方法', type: 'reading', content: '说明文要抓住说明对象、说明顺序、说明方法和语言特点。', notes: ['时间、空间、逻辑顺序', '举例子、列数字等'], exercises: [
    { id: 'c_ext_2_ex1', type: 'fill', question: '说明文要抓住哪四个要素？', answer: '说明对象、说明顺序、说明方法、语言特点' },
    { id: 'c_ext_2_ex2', type: 'choice', question: '以下哪种不是说明顺序？', options: ['时间顺序', '空间顺序', '逻辑顺序', '情感顺序'], answer: 3 },
  ] },
  { id: 'c_ext_3', title: '议论文三要素', type: 'reading', content: '论点、论据、论证。论点要鲜明，论据要充分，论证要严密。', notes: ['论据分事实和道理', '论证方法多样'], exercises: [
    { id: 'c_ext_3_ex1', type: 'fill', question: '议论文三要素是什么？', answer: '论点、论据、论证' },
    { id: 'c_ext_3_ex2', type: 'choice', question: '论据分为哪两类？', options: ['事实和道理', '正面和反面', '古代和现代', '国内和国外'], answer: 0 },
  ] },
  { id: 'c_ext_4', title: '散文的特点', type: 'reading', content: '散文形散神不散，语言优美，抒情性强。', notes: ['形散：选材自由', '神不散：中心集中'], exercises: [
    { id: 'c_ext_4_ex1', type: 'fill', question: '散文的特点是形散什么不散？', answer: '神' },
    { id: 'c_ext_4_ex2', type: 'choice', question: '散文的”神”指什么？', options: ['中心', '结构', '语言', '情感'], answer: 0 },
  ] },
  { id: 'c_ext_5', title: '诗歌鉴赏入门', type: 'reading', content: '鉴赏诗歌要关注意象、意境、情感和语言特色。', notes: ['意象是情感的载体', '意境是画面与情感的融合'], exercises: [
    { id: 'c_ext_5_ex1', type: 'fill', question: '意象是什么的载体？', answer: '情感' },
    { id: 'c_ext_5_ex2', type: 'choice', question: '意境是什么的融合？', options: ['画面与情感', '声音与色彩', '时间与空间', '人物与事件'], answer: 0 },
  ] },
  { id: 'c_ext_6', title: '口语交际：表达观点', type: 'writing', content: '表达观点要观点明确、理由充分、条理清晰、语言得体。', notes: ['先亮观点', '再分条阐述'], exercises: [
    { id: 'c_ext_6_ex1', type: 'fill', question: '表达观点首先要做什么？', answer: '亮观点' },
    { id: 'c_ext_6_ex2', type: 'choice', question: '表达观点的要求不包括什么？', options: ['观点明确', '理由充分', '条理清晰', '长篇大论'], answer: 3 },
  ] },
  { id: 'c_ext_7', title: '综合性学习：传统文化', type: 'writing', content: '了解传统节日、民俗、书法等，增强文化自信。', notes: ['节日习俗', '诗词中的节日'], exercises: [
    { id: 'c_ext_7_ex1', type: 'fill', question: '了解传统文化可以增强什么？', answer: '文化自信' },
    { id: 'c_ext_7_ex2', type: 'choice', question: '以下哪项不属于传统文化？', options: ['传统节日', '民俗', '书法', '电子游戏'], answer: 3 },
  ] },
  { id: 'c_ext_8', title: '期末复习策略', type: 'reading', content: '系统梳理字词、古诗文、阅读、写作，查漏补缺。', notes: ['制定复习计划', '错题整理'], exercises: [
    { id: 'c_ext_8_ex1', type: 'fill', question: '期末复习要系统梳理哪四个方面？', answer: '字词、古诗文、阅读、写作' },
    { id: 'c_ext_8_ex2', type: 'choice', question: '复习策略中什么很重要？', options: ['制定复习计划', '临时抱佛脚', '抄袭作业', '逃避考试'], answer: 0 },
  ] },
]
