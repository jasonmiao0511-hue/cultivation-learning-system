export interface ChineseLesson {
  id: string
  title: string
  type: 'text' | 'poem' | 'reading' | 'writing' | 'grammar' | 'classic'
  content: string
  appreciation?: string
  notes?: string[]
  questions?: { q: string; options: string[]; answer: number }[]
}

export const CHINESE_LESSONS: ChineseLesson[] = [
  // 现代文阅读技巧（5）
  { id: 'c_skill_1', title: '如何概括段落大意', type: 'reading', content: '概括段落大意要抓住“谁+做什么+结果”三个要素，删除修饰性语句。', notes: ['关注中心句', '避免以偏概全'] },
  { id: 'c_skill_2', title: '修辞手法之比喻与拟人', type: 'grammar', content: '比喻：用相似的事物打比方。拟人：把事物人格化。', notes: ['比喻有本体、喻体、比喻词', '拟人赋予人的情感动作'] },
  { id: 'c_skill_3', title: '人物描写方法', type: 'reading', content: '人物描写包括外貌、语言、动作、心理、神态五种。', notes: ['神态描写反映内心', '动作描写推动情节'] },
  { id: 'c_skill_4', title: '环境描写的作用', type: 'reading', content: '环境描写可渲染气氛、衬托人物、推动情节、暗示主题。', notes: ['自然环境与社会环境', '结合上下文分析'] },
  { id: 'c_skill_5', title: '标题的含义与作用', type: 'reading', content: '标题往往揭示中心、设置悬念、作为线索、象征意义。', notes: ['表层义与深层义', '结构作用+内容作用'] },

  // 课内古诗词（15）
  { id: 'c_poem_1', title: '《观沧海》曹操', type: 'poem', content: '东临碣石，以观沧海。水何澹澹，山岛竦峙。树木丛生，百草丰茂。秋风萧瑟，洪波涌起。日月之行，若出其中；星汉灿烂，若出其里。幸甚至哉，歌以咏志。', appreciation: '借大海的雄伟壮阔抒发统一中原的雄心壮志。' },
  { id: 'c_poem_2', title: '《闻王昌龄左迁龙标遥有此寄》李白', type: 'poem', content: '杨花落尽子规啼，闻道龙标过五溪。我寄愁心与明月，随君直到夜郎西。', appreciation: '以明月为媒介，表达对友人深切的同情与牵挂。' },
  { id: 'c_poem_3', title: '《次北固山下》王湾', type: 'poem', content: '客路青山外，行舟绿水前。潮平两岸阔，风正一帆悬。海日生残夜，江春入旧年。乡书何处达？归雁洛阳边。', appreciation: '描写江南早春景色，抒发游子的思乡之情。' },
  { id: 'c_poem_4', title: '《天净沙·秋思》马致远', type: 'poem', content: '枯藤老树昏鸦，小桥流水人家，古道西风瘦马。夕阳西下，断肠人在天涯。', appreciation: '以多种意象组合，表现天涯游子的孤寂愁苦。' },
  { id: 'c_poem_5', title: '《峨眉山月歌》李白', type: 'poem', content: '峨眉山月半轮秋，影入平羌江水流。夜发清溪向三峡，思君不见下渝州。', appreciation: '写月夜行船，抒发对友人的思念。' },
  { id: 'c_poem_6', title: '《江南逢李龟年》杜甫', type: 'poem', content: '岐王宅里寻常见，崔九堂前几度闻。正是江南好风景，落花时节又逢君。', appreciation: '以乐景写哀情，表达对盛世不再的感慨。' },
  { id: 'c_poem_7', title: '《行军九日思长安故园》岑参', type: 'poem', content: '强欲登高去，无人送酒来。遥怜故园菊，应傍战场开。', appreciation: '借重阳登高，抒发对国事的忧虑和对故园的思念。' },
  { id: 'c_poem_8', title: '《夜上受降城闻笛》李益', type: 'poem', content: '回乐烽前沙似雪，受降城外月如霜。不知何处吹芦管，一夜征人尽望乡。', appreciation: '描写边塞月夜，表现征人的思乡之情。' },
  { id: 'c_poem_9', title: '《秋词（其一）》刘禹锡', type: 'poem', content: '自古逢秋悲寂寥，我言秋日胜春朝。晴空一鹤排云上，便引诗情到碧霄。', appreciation: '一反悲秋传统，表现昂扬向上的情怀。' },
  { id: 'c_poem_10', title: '《夜雨寄北》李商隐', type: 'poem', content: '君问归期未有期，巴山夜雨涨秋池。何当共剪西窗烛，却话巴山夜雨时。', appreciation: '以雨夜为背景，虚实结合，抒发对亲人的思念。' },
  { id: 'c_poem_11', title: '《十一月四日风雨大作》陆游', type: 'poem', content: '僵卧孤村不自哀，尚思为国戍轮台。夜阑卧听风吹雨，铁马冰河入梦来。', appreciation: '年老体衰仍心系国家，表现强烈的爱国情怀。' },
  { id: 'c_poem_12', title: '《潼关》谭嗣同', type: 'poem', content: '终古高云簇此城，秋风吹散马蹄声。河流大野犹嫌束，山入潼关不解平。', appreciation: '借山河的雄伟奔放，抒发少年壮志。' },
  { id: 'c_poem_13', title: '《木兰诗（节选）》', type: 'poem', content: '万里赴戎机，关山度若飞。朔气传金柝，寒光照铁衣。将军百战死，壮士十年归。', appreciation: '运用互文、对偶，表现木兰英勇善战。' },
  { id: 'c_poem_14', title: '《竹里馆》王维', type: 'poem', content: '独坐幽篁里，弹琴复长啸。深林人不知，明月来相照。', appreciation: '表现诗人宁静淡泊的心境和高雅情趣。' },
  { id: 'c_poem_15', title: '《春夜洛城闻笛》李白', type: 'poem', content: '谁家玉笛暗飞声，散入春风满洛城。此夜曲中闻折柳，何人不起故园情。', appreciation: '因笛声触发普遍的思乡之情。' },

  // 文言文阅读（10）
  { id: 'c_classic_1', title: '《论语》十二章（一）', type: 'classic', content: '学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？', appreciation: '强调学习、交友、修养的重要性。', notes: ['说：同“悦”', '愠：生气'] },
  { id: 'c_classic_2', title: '《论语》十二章（二）', type: 'classic', content: '吾日三省吾身：为人谋而不忠乎？与朋友交而不信乎？传不习乎？', appreciation: '倡导自我反省，注重诚信。', notes: ['三省：多次反省', '信：诚信'] },
  { id: 'c_classic_3', title: '《论语》十二章（三）', type: 'classic', content: '温故而知新，可以为师矣。', appreciation: '复习旧知能获得新理解。', notes: ['故：旧知识'] },
  { id: 'c_classic_4', title: '《论语》十二章（四）', type: 'classic', content: '学而不思则罔，思而不学则殆。', appreciation: '学习与思考要结合。', notes: ['罔：迷惑', '殆：疑惑'] },
  { id: 'c_classic_5', title: '《咏雪》', type: 'classic', content: '谢太傅寒雪日内集，与儿女讲论文义。俄而雪骤，公欣然曰：“白雪纷纷何所似？”', appreciation: '展现魏晋士人的风雅情趣。', notes: ['内集：家庭聚会', '俄而：不久'] },
  { id: 'c_classic_6', title: '《陈太丘与友期行》', type: 'classic', content: '陈太丘与友期行，期日中。过中不至，太丘舍去，去后乃至。', appreciation: '通过对话表现守信与礼仪。', notes: ['期：约定', '舍去：离开'] },
  { id: 'c_classic_7', title: '《狼》蒲松龄（一）', type: 'classic', content: '一屠晚归，担中肉尽，止有剩骨。途中两狼，缀行甚远。', appreciation: '设置悬念，引出屠户遇狼。', notes: ['缀行：紧跟'] },
  { id: 'c_classic_8', title: '《狼》蒲松龄（二）', type: 'classic', content: '骨已尽矣，而两狼之并驱如故。屠大窘，恐前后受其敌。', appreciation: '表现屠户处境危急。', notes: ['并驱：一起追赶', '敌：攻击'] },
  { id: 'c_classic_9', title: '《狼》蒲松龄（三）', type: 'classic', content: '少时，一狼径去，其一犬坐于前。久之，目似瞑，意暇甚。', appreciation: '写出狼的狡诈与伪装。', notes: ['犬坐：像狗一样坐', '意暇：神情悠闲'] },
  { id: 'c_classic_10', title: '《狼》蒲松龄（四）', type: 'classic', content: '狼亦黠矣，而顷刻两毙，禽兽之变诈几何哉？止增笑耳。', appreciation: '点明主旨：狡诈者终将失败。', notes: ['黠：狡猾', '变诈：欺骗手段'] },

  // 字词与语法（8）
  { id: 'c_word_1', title: '形声字与会意字', type: 'grammar', content: '形声字由形旁和声旁组成，如“江”；会意字由几个字组合表意，如“明”。', notes: ['形旁表义', '声旁表音'] },
  { id: 'c_word_2', title: '一词多义辨析', type: 'grammar', content: '文言文中一个词常有多个义项，如“故”有“旧的”“所以”“缘故”等义。', notes: ['结合语境推断', '积累常见义项'] },
  { id: 'c_word_3', title: '古今异义词', type: 'grammar', content: '“走”古义为“跑”，“汤”古义为“热水”。阅读时要注意古今差异。', notes: ['不要用现代义套古文'] },
  { id: 'c_word_4', title: '词类活用', type: 'grammar', content: '名词活用为动词、形容词活用为动词等，如“犬坐于前”的“犬”。', notes: ['根据语法位置判断', '联系上下文'] },
  { id: 'c_word_5', title: '病句修改：搭配不当', type: 'grammar', content: '主谓、动宾、修饰语与中心语搭配要恰当。', notes: ['提取主干', '逐一检查'] },
  { id: 'c_word_6', title: '病句修改：成分残缺', type: 'grammar', content: '句子缺少主语、谓语或宾语会造成表意不明。', notes: ['缺主语常因滥用介词', '缺宾语要注意动词'] },
  { id: 'c_word_7', title: '标点符号用法', type: 'grammar', content: '逗号表停顿，句号表结束，问号表疑问，感叹号表强烈感情。', notes: ['不能一逗到底', '引号、顿号要规范'] },
  { id: 'c_word_8', title: '成语辨析与运用', type: 'grammar', content: '成语要理解本义、感情色彩和适用对象，避免望文生义。', notes: ['如“炙手可热”不是热门', '“首当其冲”首先遭受'] },

  // 名著导读（8）
  { id: 'c_book_1', title: '《朝花夕拾》：鲁迅的童年', type: 'reading', content: '《朝花夕拾》是鲁迅回忆童年、少年生活的散文集，充满温情与批判。', notes: ['原名《旧事重提》', '共十篇'] },
  { id: 'c_book_2', title: '《从百草园到三味书屋》', type: 'reading', content: '文章对比了百草园自由快乐的生活与三味书屋枯燥的读书生活。', notes: ['百草园象征自由', '三味书屋象征束缚'] },
  { id: 'c_book_3', title: '《阿长与〈山海经〉》', type: 'reading', content: '通过阿长为“我”买《山海经》的事，表现劳动人民的淳朴善良。', notes: ['欲扬先抑', '细节描写感人'] },
  { id: 'c_book_4', title: '《西游记》：孙悟空形象', type: 'reading', content: '孙悟空勇敢机智、嫉恶如仇，具有反抗精神。', notes: ['大闹天宫显反抗', '三打白骨精显机智'] },
  { id: 'c_book_5', title: '《西游记》：取经团队', type: 'reading', content: '唐僧师徒四人性格互补，体现团结协作才能成功。', notes: ['各有优缺点', '团队互补'] },
  { id: 'c_book_6', title: '《骆驼祥子》：祥子的悲剧', type: 'reading', content: '祥子从勤劳善良堕落为行尸走肉，控诉旧社会对劳动者的摧残。', notes: ['三起三落', '社会环境决定命运'] },
  { id: 'c_book_7', title: '《海底两万里》：科学与幻想', type: 'reading', content: '凡尔纳以丰富想象描绘海底世界，体现科学探索精神。', notes: ['尼摩船长', '鹦鹉螺号'] },
  { id: 'c_book_8', title: '名著阅读方法', type: 'reading', content: '读名著要关注人物、情节、环境，做好批注和摘抄。', notes: ['精读与略读结合', '写读后感'] },

  // 写作训练（8）
  { id: 'c_write_1', title: '记叙文六要素', type: 'writing', content: '时间、地点、人物、起因、经过、结果，六要素要交代清楚。', notes: ['经过要详写', '结果要点题'] },
  { id: 'c_write_2', title: '如何写好开头', type: 'writing', content: '开头可开门见山、设置悬念、描写环境、引用名言。', notes: ['避免长篇铺垫', '快速入题'] },
  { id: 'c_write_3', title: '细节描写训练', type: 'writing', content: '细节描写能使人、事、景更生动，要善于观察。', notes: ['动作、神态、心理', '以小见大'] },
  { id: 'c_write_4', title: '过渡与照应', type: 'writing', content: '段落之间要自然过渡，前后内容要相互照应。', notes: ['过渡句、过渡段', '首尾照应'] },
  { id: 'c_write_5', title: '如何写好结尾', type: 'writing', content: '结尾可总结全文、升华主题、留下余味、呼应开头。', notes: ['不要画蛇添足', '点明中心'] },
  { id: 'c_write_6', title: '审题与立意', type: 'writing', content: '审题要抓住关键词，立意要正确、深刻、新颖。', notes: ['抓题眼', '立意决定高度'] },
  { id: 'c_write_7', title: '选材与剪裁', type: 'writing', content: '选材要真实、典型、新颖；剪裁要详略得当。', notes: ['围绕中心选材', '舍弃无关内容'] },
  { id: 'c_write_8', title: '修改作文的方法', type: 'writing', content: '写完后要从中心、结构、语言、标点等方面修改。', notes: ['朗读修改法', '冷却修改法'] },

  // 综合阅读与拓展（8）
  { id: 'c_ext_1', title: '记叙文主旨把握', type: 'reading', content: '把握主旨要找抒情、议论句，结合标题和反复出现的词语。', notes: ['主旨是文章的灵魂', '多在结尾点明'] },
  { id: 'c_ext_2', title: '说明文阅读方法', type: 'reading', content: '说明文要抓住说明对象、说明顺序、说明方法和语言特点。', notes: ['时间、空间、逻辑顺序', '举例子、列数字等'] },
  { id: 'c_ext_3', title: '议论文三要素', type: 'reading', content: '论点、论据、论证。论点要鲜明，论据要充分，论证要严密。', notes: ['论据分事实和道理', '论证方法多样'] },
  { id: 'c_ext_4', title: '散文的特点', type: 'reading', content: '散文形散神不散，语言优美，抒情性强。', notes: ['形散：选材自由', '神不散：中心集中'] },
  { id: 'c_ext_5', title: '诗歌鉴赏入门', type: 'reading', content: '鉴赏诗歌要关注意象、意境、情感和语言特色。', notes: ['意象是情感的载体', '意境是画面与情感的融合'] },
  { id: 'c_ext_6', title: '口语交际：表达观点', type: 'writing', content: '表达观点要观点明确、理由充分、条理清晰、语言得体。', notes: ['先亮观点', '再分条阐述'] },
  { id: 'c_ext_7', title: '综合性学习：传统文化', type: 'writing', content: '了解传统节日、民俗、书法等，增强文化自信。', notes: ['节日习俗', '诗词中的节日'] },
  { id: 'c_ext_8', title: '期末复习策略', type: 'reading', content: '系统梳理字词、古诗文、阅读、写作，查漏补缺。', notes: ['制定复习计划', '错题整理'] },
]
