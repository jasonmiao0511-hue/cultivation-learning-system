import type { VocabWord } from '../types'

export const ENGLISH_WORDS: VocabWord[] = [
  // 校园生活 School Life (12)
  { id: 'e_school_1', word: 'classroom', phonetic: '/ˈklɑːsruːm/', partOfSpeech: 'n.', meaning: '教室', example: 'We study in the classroom.', group: '校园生活', exercises: [
    { id: 'e_school_1_ex1', type: 'fill', question: 'classroom 是什么意思？', answer: '教室' },
    { id: 'e_school_1_ex2', type: 'choice', question: 'We study in the _____.', options: ['classroom', 'kitchen', 'bedroom', 'bathroom'], answer: 0 },
  ] },
  { id: 'e_school_2', word: 'homework', phonetic: '/ˈhəʊmwɜːk/', partOfSpeech: 'n.', meaning: '家庭作业', example: 'I finish my homework every day.', group: '校园生活', exercises: [
    { id: 'e_school_2_ex1', type: 'fill', question: 'homework 是什么意思？', answer: '家庭作业' },
    { id: 'e_school_2_ex2', type: 'choice', question: 'I finish my _____ every day.', options: ['homework', 'housework', 'teamwork', 'paperwork'], answer: 0 },
  ] },
  { id: 'e_school_3', word: 'subject', phonetic: '/ˈsʌbdʒɪkt/', partOfSpeech: 'n.', meaning: '科目', example: 'My favorite subject is English.', group: '校园生活', exercises: [
    { id: 'e_school_3_ex1', type: 'fill', question: 'subject 是什么意思？', answer: '科目' },
    { id: 'e_school_3_ex2', type: 'choice', question: 'My favorite _____ is English.', options: ['subject', 'object', 'project', 'aspect'], answer: 0 },
  ] },
  { id: 'e_school_4', word: 'textbook', phonetic: '/ˈtekstbʊk/', partOfSpeech: 'n.', meaning: '课本', example: 'Open your textbook to page 12.', group: '校园生活', exercises: [
    { id: 'e_school_4_ex1', type: 'fill', question: 'textbook 是什么意思？', answer: '课本' },
    { id: 'e_school_4_ex2', type: 'choice', question: 'Open your _____ to page 12.', options: ['textbook', 'notebook', 'guidebook', 'handbook'], answer: 0 },
  ] },
  { id: 'e_school_5', word: 'blackboard', phonetic: '/ˈblækbɔːd/', partOfSpeech: 'n.', meaning: '黑板', example: 'The teacher writes on the blackboard.', group: '校园生活', exercises: [
    { id: 'e_school_5_ex1', type: 'fill', question: 'blackboard 是什么意思？', answer: '黑板' },
    { id: 'e_school_5_ex2', type: 'choice', question: 'The teacher writes on the _____.', options: ['blackboard', 'keyboard', 'cupboard', 'dashboard'], answer: 0 },
  ] },
  { id: 'e_school_6', word: 'dictionary', phonetic: '/ˈdɪkʃənri/', partOfSpeech: 'n.', meaning: '词典', example: 'I look up new words in the dictionary.', group: '校园生活', exercises: [
    { id: 'e_school_6_ex1', type: 'fill', question: 'dictionary 是什么意思？', answer: '词典' },
    { id: 'e_school_6_ex2', type: 'choice', question: 'I look up new words in the _____.', options: ['dictionary', 'vocabulary', 'directory', 'glossary'], answer: 0 },
  ] },
  { id: 'e_school_7', word: 'exam', phonetic: '/ɪɡˈzæm/', partOfSpeech: 'n.', meaning: '考试', example: 'We have an exam next week.', group: '校园生活', exercises: [
    { id: 'e_school_7_ex1', type: 'fill', question: 'exam 是什么意思？', answer: '考试' },
    { id: 'e_school_7_ex2', type: 'choice', question: 'We have an _____ next week.', options: ['exam', 'exercise', 'example', 'except'], answer: 0 },
  ] },
  { id: 'e_school_8', word: 'grade', phonetic: '/ɡreɪd/', partOfSpeech: 'n.', meaning: '成绩；年级', example: 'I got a good grade in math.', group: '校园生活', exercises: [
    { id: 'e_school_8_ex1', type: 'fill', question: 'grade 是什么意思？', answer: '成绩；年级' },
    { id: 'e_school_8_ex2', type: 'choice', question: 'I got a good _____ in math.', options: ['grade', 'level', 'degree', 'rank'], answer: 0 },
  ] },
  { id: 'e_school_9', word: 'classmate', phonetic: '/ˈklɑːsmeɪt/', partOfSpeech: 'n.', meaning: '同学', example: 'My classmate helps me with English.', group: '校园生活', exercises: [
    { id: 'e_school_9_ex1', type: 'fill', question: 'classmate 是什么意思？', answer: '同学' },
    { id: 'e_school_9_ex2', type: 'choice', question: 'My _____ helps me with English.', options: ['classmate', 'roommate', 'teammate', 'playmate'], answer: 0 },
  ] },
  { id: 'e_school_10', word: 'schedule', phonetic: '/ˈʃedjuːl/', partOfSpeech: 'n.', meaning: '日程表', example: 'What is your class schedule?', group: '校园生活', exercises: [
    { id: 'e_school_10_ex1', type: 'fill', question: 'schedule 是什么意思？', answer: '日程表' },
    { id: 'e_school_10_ex2', type: 'choice', question: 'What is your class _____?', options: ['schedule', 'scheme', 'sketch', 'skeleton'], answer: 0 },
  ] },
  { id: 'e_school_11', word: 'knowledge', phonetic: '/ˈnɒlɪdʒ/', partOfSpeech: 'n.', meaning: '知识', example: 'Reading brings us knowledge.', group: '校园生活', exercises: [
    { id: 'e_school_11_ex1', type: 'fill', question: 'knowledge 是什么意思？', answer: '知识' },
    { id: 'e_school_11_ex2', type: 'choice', question: 'Reading brings us _____.', options: ['knowledge', 'message', 'information', 'news'], answer: 0 },
  ] },
  { id: 'e_school_12', word: 'practice', phonetic: '/ˈpræktɪs/', partOfSpeech: 'n./v.', meaning: '练习', example: 'Practice makes perfect.', group: '校园生活', exercises: [
    { id: 'e_school_12_ex1', type: 'fill', question: 'practice 是什么意思？', answer: '练习' },
    { id: 'e_school_12_ex2', type: 'choice', question: '_____ makes perfect.', options: ['Practice', 'Progress', 'Preparation', 'Performance'], answer: 0 },
  ] },

  // 家庭与人物 Family & People (12)
  { id: 'e_family_1', word: 'parents', phonetic: '/ˈpeərənts/', partOfSpeech: 'n.', meaning: '父母', example: 'I love my parents.', group: '家庭与人物', exercises: [
    { id: 'e_family_1_ex1', type: 'fill', question: 'parents 是什么意思？', answer: '父母' },
    { id: 'e_family_1_ex2', type: 'choice', question: 'I love my _____.', options: ['parents', 'patients', 'participants', 'partners'], answer: 0 },
  ] },
  { id: 'e_family_2', word: 'brother', phonetic: '/ˈbrʌðə/', partOfSpeech: 'n.', meaning: '兄弟', example: 'My brother is tall.', group: '家庭与人物', exercises: [
    { id: 'e_family_2_ex1', type: 'fill', question: 'brother 是什么意思？', answer: '兄弟' },
    { id: 'e_family_2_ex2', type: 'choice', question: 'My _____ is tall.', options: ['brother', 'bother', 'breather', 'baker'], answer: 0 },
  ] },
  { id: 'e_family_3', word: 'sister', phonetic: '/ˈsɪstə/', partOfSpeech: 'n.', meaning: '姐妹', example: 'My sister likes music.', group: '家庭与人物', exercises: [
    { id: 'e_family_3_ex1', type: 'fill', question: 'sister 是什么意思？', answer: '姐妹' },
    { id: 'e_family_3_ex2', type: 'choice', question: 'My _____ likes music.', options: ['sister', 'sinister', 'mister', 'twister'], answer: 0 },
  ] },
  { id: 'e_family_4', word: 'grandparent', phonetic: '/ˈɡrænpeərənt/', partOfSpeech: 'n.', meaning: '祖父母', example: 'I visit my grandparents on Sunday.', group: '家庭与人物', exercises: [
    { id: 'e_family_4_ex1', type: 'fill', question: 'grandparent 是什么意思？', answer: '祖父母' },
    { id: 'e_family_4_ex2', type: 'choice', question: 'I visit my _____ on Sunday.', options: ['grandparents', 'grandchildren', 'grandparents', 'grandparents'], answer: 0 },
  ] },
  { id: 'e_family_5', word: 'neighbor', phonetic: '/ˈneɪbə/', partOfSpeech: 'n.', meaning: '邻居', example: 'Our neighbor is very kind.', group: '家庭与人物', exercises: [
    { id: 'e_family_5_ex1', type: 'fill', question: 'neighbor 是什么意思？', answer: '邻居' },
    { id: 'e_family_5_ex2', type: 'choice', question: 'Our _____ is very kind.', options: ['neighbor', 'neighborhood', 'narrator', 'navigator'], answer: 0 },
  ] },
  { id: 'e_family_6', word: 'friend', phonetic: '/frend/', partOfSpeech: 'n.', meaning: '朋友', example: 'A friend in need is a friend indeed.', group: '家庭与人物', exercises: [
    { id: 'e_family_6_ex1', type: 'fill', question: 'friend 是什么意思？', answer: '朋友' },
    { id: 'e_family_6_ex2', type: 'choice', question: 'A _____ in need is a friend indeed.', options: ['friend', 'fiend', 'frond', 'front'], answer: 0 },
  ] },
  { id: 'e_family_7', word: 'stranger', phonetic: '/ˈstreɪndʒə/', partOfSpeech: 'n.', meaning: '陌生人', example: 'Do not talk to strangers.', group: '家庭与人物', exercises: [
    { id: 'e_family_7_ex1', type: 'fill', question: 'stranger 是什么意思？', answer: '陌生人' },
    { id: 'e_family_7_ex2', type: 'choice', question: 'Do not talk to _____.', options: ['strangers', 'strangers', 'strangers', 'strangers'], answer: 0 },
  ] },
  { id: 'e_family_8', word: 'gentle', phonetic: '/ˈdʒentl/', partOfSpeech: 'adj.', meaning: '温柔的', example: 'She has a gentle voice.', group: '家庭与人物', exercises: [
    { id: 'e_family_8_ex1', type: 'fill', question: 'gentle 是什么意思？', answer: '温柔的' },
    { id: 'e_family_8_ex2', type: 'choice', question: 'She has a _____ voice.', options: ['gentle', 'general', 'generous', 'genuine'], answer: 0 },
  ] },
  { id: 'e_family_9', word: 'brave', phonetic: '/breɪv/', partOfSpeech: 'adj.', meaning: '勇敢的', example: 'The brave boy helped the girl.', group: '家庭与人物', exercises: [
    { id: 'e_family_9_ex1', type: 'fill', question: 'brave 是什么意思？', answer: '勇敢的' },
    { id: 'e_family_9_ex2', type: 'choice', question: 'The _____ boy helped the girl.', options: ['brave', 'grave', 'brake', 'brand'], answer: 0 },
  ] },
  { id: 'e_family_10', word: 'honest', phonetic: '/ˈɒnɪst/', partOfSpeech: 'adj.', meaning: '诚实的', example: 'An honest person tells the truth.', group: '家庭与人物', exercises: [
    { id: 'e_family_10_ex1', type: 'fill', question: 'honest 是什么意思？', answer: '诚实的' },
    { id: 'e_family_10_ex2', type: 'choice', question: 'An _____ person tells the truth.', options: ['honest', 'modest', 'latest', 'modest'], answer: 0 },
  ] },
  { id: 'e_family_11', word: 'polite', phonetic: '/pəˈlaɪt/', partOfSpeech: 'adj.', meaning: '有礼貌的', example: 'It is polite to say "thank you".', group: '家庭与人物', exercises: [
    { id: 'e_family_11_ex1', type: 'fill', question: 'polite 是什么意思？', answer: '有礼貌的' },
    { id: 'e_family_11_ex2', type: 'choice', question: 'It is _____ to say "thank you".', options: ['polite', 'polite', 'polite', 'polite'], answer: 0 },
  ] },
  { id: 'e_family_12', word: 'volunteer', phonetic: '/ˌvɒlənˈtɪə/', partOfSpeech: 'n./v.', meaning: '志愿者；自愿做', example: 'She volunteers at the old people\'s home.', group: '家庭与人物', exercises: [
    { id: 'e_family_12_ex1', type: 'fill', question: 'volunteer 是什么意思？', answer: '志愿者；自愿做' },
    { id: 'e_family_12_ex2', type: 'choice', question: 'She _____ at the old people\'s home.', options: ['volunteers', 'volunteers', 'volunteers', 'volunteers'], answer: 0 },
  ] },

  // 食物与饮料 Food & Drink (12)
  { id: 'e_food_1', word: 'breakfast', phonetic: '/ˈbrekfəst/', partOfSpeech: 'n.', meaning: '早餐', example: 'I have breakfast at 7 a.m.', group: '食物与饮料', exercises: [
    { id: 'e_food_1_ex1', type: 'fill', question: 'breakfast 是什么意思？', answer: '早餐' },
    { id: 'e_food_1_ex2', type: 'choice', question: 'I have _____ at 7 a.m.', options: ['breakfast', 'breakfast', 'breakfast', 'breakfast'], answer: 0 },
  ] },
  { id: 'e_food_2', word: 'vegetable', phonetic: '/ˈvedʒtəbl/', partOfSpeech: 'n.', meaning: '蔬菜', example: 'Eat more vegetables.', group: '食物与饮料', exercises: [
    { id: 'e_food_2_ex1', type: 'fill', question: 'vegetable 是什么意思？', answer: '蔬菜' },
    { id: 'e_food_2_ex2', type: 'choice', question: 'Eat more _____.', options: ['vegetables', 'vegetables', 'vegetables', 'vegetables'], answer: 0 },
  ] },
  { id: 'e_food_3', word: 'delicious', phonetic: '/dɪˈlɪʃəs/', partOfSpeech: 'adj.', meaning: '美味的', example: 'The cake is delicious.', group: '食物与饮料', exercises: [
    { id: 'e_food_3_ex1', type: 'fill', question: 'delicious 是什么意思？', answer: '美味的' },
    { id: 'e_food_3_ex2', type: 'choice', question: 'The cake is _____.', options: ['delicious', 'delicious', 'delicious', 'delicious'], answer: 0 },
  ] },
  { id: 'e_food_4', word: 'restaurant', phonetic: '/ˈrestrɒnt/', partOfSpeech: 'n.', meaning: '餐馆', example: 'Let\'s eat at a restaurant.', group: '食物与饮料', exercises: [
    { id: 'e_food_4_ex1', type: 'fill', question: 'restaurant 是什么意思？', answer: '餐馆' },
    { id: 'e_food_4_ex2', type: 'choice', question: 'Let\'s eat at a _____.', options: ['restaurant', 'restaurant', 'restaurant', 'restaurant'], answer: 0 },
  ] },
  { id: 'e_food_5', word: 'recipe', phonetic: '/ˈresəpi/', partOfSpeech: 'n.', meaning: '食谱', example: 'I learned a new recipe.', group: '食物与饮料', exercises: [
    { id: 'e_food_5_ex1', type: 'fill', question: 'recipe 是什么意思？', answer: '食谱' },
    { id: 'e_food_5_ex2', type: 'choice', question: 'I learned a new _____.', options: ['recipe', 'recipe', 'recipe', 'recipe'], answer: 0 },
  ] },
  { id: 'e_food_6', word: 'dessert', phonetic: '/dɪˈzɜːt/', partOfSpeech: 'n.', meaning: '甜点', example: 'Ice cream is my favorite dessert.', group: '食物与饮料', exercises: [
    { id: 'e_food_6_ex1', type: 'fill', question: 'dessert 是什么意思？', answer: '甜点' },
    { id: 'e_food_6_ex2', type: 'choice', question: 'Ice cream is my favorite _____.', options: ['dessert', 'dessert', 'dessert', 'dessert'], answer: 0 },
  ] },
  { id: 'e_food_7', word: 'traditional', phonetic: '/trəˈdɪʃənl/', partOfSpeech: 'adj.', meaning: '传统的', example: 'Dumplings are traditional food.', group: '食物与饮料', exercises: [
    { id: 'e_food_7_ex1', type: 'fill', question: 'traditional 是什么意思？', answer: '传统的' },
    { id: 'e_food_7_ex2', type: 'choice', question: 'Dumplings are _____ food.', options: ['traditional', 'traditional', 'traditional', 'traditional'], answer: 0 },
  ] },
  { id: 'e_food_8', word: 'snack', phonetic: '/snæk/', partOfSpeech: 'n.', meaning: '零食', example: 'Do not eat too many snacks.', group: '食物与饮料', exercises: [
    { id: 'e_food_8_ex1', type: 'fill', question: 'snack 是什么意思？', answer: '零食' },
    { id: 'e_food_8_ex2', type: 'choice', question: 'Do not eat too many _____.', options: ['snacks', 'snacks', 'snacks', 'snacks'], answer: 0 },
  ] },
  { id: 'e_food_9', word: 'menu', phonetic: '/ˈmenjuː/', partOfSpeech: 'n.', meaning: '菜单', example: 'May I see the menu?', group: '食物与饮料', exercises: [
    { id: 'e_food_9_ex1', type: 'fill', question: 'menu 是什么意思？', answer: '菜单' },
    { id: 'e_food_9_ex2', type: 'choice', question: 'May I see the _____?', options: ['menu', 'menu', 'menu', 'menu'], answer: 0 },
  ] },
  { id: 'e_food_10', word: 'order', phonetic: '/ˈɔːdə/', partOfSpeech: 'v./n.', meaning: '订购；顺序', example: 'I\'d like to order a pizza.', group: '食物与饮料', exercises: [
    { id: 'e_food_10_ex1', type: 'fill', question: 'order 是什么意思？', answer: '订购；顺序' },
    { id: 'e_food_10_ex2', type: 'choice', question: 'I\'d like to _____ a pizza.', options: ['order', 'order', 'order', 'order'], answer: 0 },
  ] },
  { id: 'e_food_11', word: 'healthy', phonetic: '/ˈhelθi/', partOfSpeech: 'adj.', meaning: '健康的', example: 'Vegetables are healthy.', group: '食物与饮料', exercises: [
    { id: 'e_food_11_ex1', type: 'fill', question: 'healthy 是什么意思？', answer: '健康的' },
    { id: 'e_food_11_ex2', type: 'choice', question: 'Vegetables are _____.', options: ['healthy', 'healthy', 'healthy', 'healthy'], answer: 0 },
  ] },
  { id: 'e_food_12', word: 'thirsty', phonetic: '/ˈθɜːsti/', partOfSpeech: 'adj.', meaning: '口渴的', example: 'I am thirsty after running.', group: '食物与饮料', exercises: [
    { id: 'e_food_12_ex1', type: 'fill', question: 'thirsty 是什么意思？', answer: '口渴的' },
    { id: 'e_food_12_ex2', type: 'choice', question: 'I am _____ after running.', options: ['thirsty', 'thirsty', 'thirsty', 'thirsty'], answer: 0 },
  ] },

  // 旅行与交通 Travel & Transport (12)
  { id: 'e_travel_1', word: 'journey', phonetic: '/ˈdʒɜːni/', partOfSpeech: 'n.', meaning: '旅行', example: 'Have a good journey!', group: '旅行与交通', exercises: [
    { id: 'e_travel_1_ex1', type: 'fill', question: 'journey 是什么意思？', answer: '旅行' },
    { id: 'e_travel_1_ex2', type: 'choice', question: 'Have a good _____!', options: ['journey', 'journey', 'journey', 'journey'], answer: 0 },
  ] },
  { id: 'e_travel_2', word: 'ticket', phonetic: '/ˈtɪkɪt/', partOfSpeech: 'n.', meaning: '票', example: 'I bought a train ticket.', group: '旅行与交通', exercises: [
    { id: 'e_travel_2_ex1', type: 'fill', question: 'ticket 是什么意思？', answer: '票' },
    { id: 'e_travel_2_ex2', type: 'choice', question: 'I bought a train _____.', options: ['ticket', 'ticket', 'ticket', 'ticket'], answer: 0 },
  ] },
  { id: 'e_travel_3', word: 'passport', phonetic: '/ˈpɑːspɔːt/', partOfSpeech: 'n.', meaning: '护照', example: 'You need a passport to travel abroad.', group: '旅行与交通', exercises: [
    { id: 'e_travel_3_ex1', type: 'fill', question: 'passport 是什么意思？', answer: '护照' },
    { id: 'e_travel_3_ex2', type: 'choice', question: 'You need a _____ to travel abroad.', options: ['passport', 'passport', 'passport', 'passport'], answer: 0 },
  ] },
  { id: 'e_travel_4', word: 'airport', phonetic: '/ˈeəpɔːt/', partOfSpeech: 'n.', meaning: '机场', example: 'We will meet at the airport.', group: '旅行与交通', exercises: [
    { id: 'e_travel_4_ex1', type: 'fill', question: 'airport 是什么意思？', answer: '机场' },
    { id: 'e_travel_4_ex2', type: 'choice', question: 'We will meet at the _____.', options: ['airport', 'airport', 'airport', 'airport'], answer: 0 },
  ] },
  { id: 'e_travel_5', word: 'station', phonetic: '/ˈsteɪʃn/', partOfSpeech: 'n.', meaning: '车站', example: 'The bus station is near here.', group: '旅行与交通', exercises: [
    { id: 'e_travel_5_ex1', type: 'fill', question: 'station 是什么意思？', answer: '车站' },
    { id: 'e_travel_5_ex2', type: 'choice', question: 'The bus _____ is near here.', options: ['station', 'station', 'station', 'station'], answer: 0 },
  ] },
  { id: 'e_travel_6', word: 'direction', phonetic: '/dəˈrekʃn/', partOfSpeech: 'n.', meaning: '方向', example: 'Can you tell me the direction?', group: '旅行与交通', exercises: [
    { id: 'e_travel_6_ex1', type: 'fill', question: 'direction 是什么意思？', answer: '方向' },
    { id: 'e_travel_6_ex2', type: 'choice', question: 'Can you tell me the _____?', options: ['direction', 'direction', 'direction', 'direction'], answer: 0 },
  ] },
  { id: 'e_travel_7', word: 'passenger', phonetic: '/ˈpæsɪndʒə/', partOfSpeech: 'n.', meaning: '乘客', example: 'The passenger sat by the window.', group: '旅行与交通', exercises: [
    { id: 'e_travel_7_ex1', type: 'fill', question: 'passenger 是什么意思？', answer: '乘客' },
    { id: 'e_travel_7_ex2', type: 'choice', question: 'The _____ sat by the window.', options: ['passenger', 'passenger', 'passenger', 'passenger'], answer: 0 },
  ] },
  { id: 'e_travel_8', word: 'abroad', phonetic: '/əˈbrɔːd/', partOfSpeech: 'adv.', meaning: '在国外', example: 'He studies abroad.', group: '旅行与交通', exercises: [
    { id: 'e_travel_8_ex1', type: 'fill', question: 'abroad 是什么意思？', answer: '在国外' },
    { id: 'e_travel_8_ex2', type: 'choice', question: 'He studies _____.', options: ['abroad', 'abroad', 'abroad', 'abroad'], answer: 0 },
  ] },
  { id: 'e_travel_9', word: 'scenery', phonetic: '/ˈsiːnəri/', partOfSpeech: 'n.', meaning: '风景', example: 'The scenery is beautiful.', group: '旅行与交通', exercises: [
    { id: 'e_travel_9_ex1', type: 'fill', question: 'scenery 是什么意思？', answer: '风景' },
    { id: 'e_travel_9_ex2', type: 'choice', question: 'The _____ is beautiful.', options: ['scenery', 'scenery', 'scenery', 'scenery'], answer: 0 },
  ] },
  { id: 'e_travel_10', word: 'museum', phonetic: '/mjuˈziːəm/', partOfSpeech: 'n.', meaning: '博物馆', example: 'We visited the history museum.', group: '旅行与交通', exercises: [
    { id: 'e_travel_10_ex1', type: 'fill', question: 'museum 是什么意思？', answer: '博物馆' },
    { id: 'e_travel_10_ex2', type: 'choice', question: 'We visited the history _____.', options: ['museum', 'museum', 'museum', 'museum'], answer: 0 },
  ] },
  { id: 'e_travel_11', word: 'tourist', phonetic: '/ˈtʊərɪst/', partOfSpeech: 'n.', meaning: '游客', example: 'Many tourists come here in summer.', group: '旅行与交通', exercises: [
    { id: 'e_travel_11_ex1', type: 'fill', question: 'tourist 是什么意思？', answer: '游客' },
    { id: 'e_travel_11_ex2', type: 'choice', question: 'Many _____ come here in summer.', options: ['tourists', 'tourists', 'tourists', 'tourists'], answer: 0 },
  ] },
  { id: 'e_travel_12', word: 'guide', phonetic: '/ɡaɪd/', partOfSpeech: 'n.', meaning: '导游；指南', example: 'The guide showed us around.', group: '旅行与交通', exercises: [
    { id: 'e_travel_12_ex1', type: 'fill', question: 'guide 是什么意思？', answer: '导游；指南' },
    { id: 'e_travel_12_ex2', type: 'choice', question: 'The _____ showed us around.', options: ['guide', 'guide', 'guide', 'guide'], answer: 0 },
  ] },

  // 天气与季节 Weather & Seasons (10)
  { id: 'e_weather_1', word: 'sunny', phonetic: '/ˈsʌni/', partOfSpeech: 'adj.', meaning: '晴朗的', example: 'It is sunny today.', group: '天气与季节', exercises: [
    { id: 'e_weather_1_ex1', type: 'fill', question: 'sunny 是什么意思？', answer: '晴朗的' },
    { id: 'e_weather_1_ex2', type: 'choice', question: 'It is _____ today.', options: ['sunny', 'sunny', 'sunny', 'sunny'], answer: 0 },
  ] },
  { id: 'e_weather_2', word: 'rainy', phonetic: '/ˈreɪni/', partOfSpeech: 'adj.', meaning: '下雨的', example: 'Take an umbrella on rainy days.', group: '天气与季节', exercises: [
    { id: 'e_weather_2_ex1', type: 'fill', question: 'rainy 是什么意思？', answer: '下雨的' },
    { id: 'e_weather_2_ex2', type: 'choice', question: 'Take an umbrella on _____ days.', options: ['rainy', 'rainy', 'rainy', 'rainy'], answer: 0 },
  ] },
  { id: 'e_weather_3', word: 'snowy', phonetic: '/ˈsnəʊi/', partOfSpeech: 'adj.', meaning: '下雪的', example: 'It is cold and snowy.', group: '天气与季节', exercises: [
    { id: 'e_weather_3_ex1', type: 'fill', question: 'snowy 是什么意思？', answer: '下雪的' },
    { id: 'e_weather_3_ex2', type: 'choice', question: 'It is cold and _____.', options: ['snowy', 'snowy', 'snowy', 'snowy'], answer: 0 },
  ] },
  { id: 'e_weather_4', word: 'windy', phonetic: '/ˈwɪndi/', partOfSpeech: 'adj.', meaning: '有风的', example: 'The windy day makes kites fly high.', group: '天气与季节', exercises: [
    { id: 'e_weather_4_ex1', type: 'fill', question: 'windy 是什么意思？', answer: '有风的' },
    { id: 'e_weather_4_ex2', type: 'choice', question: 'The _____ day makes kites fly high.', options: ['windy', 'windy', 'windy', 'windy'], answer: 0 },
  ] },
  { id: 'e_weather_5', word: 'cloudy', phonetic: '/ˈklaʊdi/', partOfSpeech: 'adj.', meaning: '多云的', example: 'It is cloudy but not cold.', group: '天气与季节', exercises: [
    { id: 'e_weather_5_ex1', type: 'fill', question: 'cloudy 是什么意思？', answer: '多云的' },
    { id: 'e_weather_5_ex2', type: 'choice', question: 'It is _____ but not cold.', options: ['cloudy', 'cloudy', 'cloudy', 'cloudy'], answer: 0 },
  ] },
  { id: 'e_weather_6', word: 'temperature', phonetic: '/ˈtemprətʃə/', partOfSpeech: 'n.', meaning: '温度', example: 'The temperature is 25 degrees.', group: '天气与季节', exercises: [
    { id: 'e_weather_6_ex1', type: 'fill', question: 'temperature 是什么意思？', answer: '温度' },
    { id: 'e_weather_6_ex2', type: 'choice', question: 'The _____ is 25 degrees.', options: ['temperature', 'temperature', 'temperature', 'temperature'], answer: 0 },
  ] },
  { id: 'e_weather_7', word: 'season', phonetic: '/ˈsiːzn/', partOfSpeech: 'n.', meaning: '季节', example: 'There are four seasons in a year.', group: '天气与季节', exercises: [
    { id: 'e_weather_7_ex1', type: 'fill', question: 'season 是什么意思？', answer: '季节' },
    { id: 'e_weather_7_ex2', type: 'choice', question: 'There are four _____ in a year.', options: ['seasons', 'seasons', 'seasons', 'seasons'], answer: 0 },
  ] },
  { id: 'e_weather_8', word: 'autumn', phonetic: '/ˈɔːtəm/', partOfSpeech: 'n.', meaning: '秋天', example: 'Leaves turn yellow in autumn.', group: '天气与季节', exercises: [
    { id: 'e_weather_8_ex1', type: 'fill', question: 'autumn 是什么意思？', answer: '秋天' },
    { id: 'e_weather_8_ex2', type: 'choice', question: 'Leaves turn yellow in _____.', options: ['autumn', 'autumn', 'autumn', 'autumn'], answer: 0 },
  ] },
  { id: 'e_weather_9', word: 'forecast', phonetic: '/ˈfɔːkɑːst/', partOfSpeech: 'n.', meaning: '预报', example: 'The weather forecast says it will rain.', group: '天气与季节', exercises: [
    { id: 'e_weather_9_ex1', type: 'fill', question: 'forecast 是什么意思？', answer: '预报' },
    { id: 'e_weather_9_ex2', type: 'choice', question: 'The weather _____ says it will rain.', options: ['forecast', 'forecast', 'forecast', 'forecast'], answer: 0 },
  ] },
  { id: 'e_weather_10', word: 'climate', phonetic: '/ˈklaɪmət/', partOfSpeech: 'n.', meaning: '气候', example: 'The climate here is mild.', group: '天气与季节', exercises: [
    { id: 'e_weather_10_ex1', type: 'fill', question: 'climate 是什么意思？', answer: '气候' },
    { id: 'e_weather_10_ex2', type: 'choice', question: 'The _____ here is mild.', options: ['climate', 'climate', 'climate', 'climate'], answer: 0 },
  ] },

  // 购物与消费 Shopping (10)
  { id: 'e_shop_1', word: 'market', phonetic: '/ˈmɑːkɪt/', partOfSpeech: 'n.', meaning: '市场', example: 'I go to the market every morning.', group: '购物与消费', exercises: [
    { id: 'e_shop_1_ex1', type: 'fill', question: 'market 是什么意思？', answer: '市场' },
    { id: 'e_shop_1_ex2', type: 'choice', question: 'I go to the _____ every morning.', options: ['market', 'market', 'market', 'market'], answer: 0 },
  ] },
  { id: 'e_shop_2', word: 'price', phonetic: '/praɪs/', partOfSpeech: 'n.', meaning: '价格', example: 'What is the price of this book?', group: '购物与消费', exercises: [
    { id: 'e_shop_2_ex1', type: 'fill', question: 'price 是什么意思？', answer: '价格' },
    { id: 'e_shop_2_ex2', type: 'choice', question: 'What is the _____ of this book?', options: ['price', 'price', 'price', 'price'], answer: 0 },
  ] },
  { id: 'e_shop_3', word: 'cheap', phonetic: '/tʃiːp/', partOfSpeech: 'adj.', meaning: '便宜的', example: 'This pen is cheap.', group: '购物与消费', exercises: [
    { id: 'e_shop_3_ex1', type: 'fill', question: 'cheap 是什么意思？', answer: '便宜的' },
    { id: 'e_shop_3_ex2', type: 'choice', question: 'This pen is _____.', options: ['cheap', 'cheap', 'cheap', 'cheap'], answer: 0 },
  ] },
  { id: 'e_shop_4', word: 'expensive', phonetic: '/ɪkˈspensɪv/', partOfSpeech: 'adj.', meaning: '昂贵的', example: 'The bag is too expensive.', group: '购物与消费', exercises: [
    { id: 'e_shop_4_ex1', type: 'fill', question: 'expensive 是什么意思？', answer: '昂贵的' },
    { id: 'e_shop_4_ex2', type: 'choice', question: 'The bag is too _____.', options: ['expensive', 'expensive', 'expensive', 'expensive'], answer: 0 },
  ] },
  { id: 'e_shop_5', word: 'discount', phonetic: '/ˈdɪskaʊnt/', partOfSpeech: 'n.', meaning: '折扣', example: 'This shirt is at a discount.', group: '购物与消费', exercises: [
    { id: 'e_shop_5_ex1', type: 'fill', question: 'discount 是什么意思？', answer: '折扣' },
    { id: 'e_shop_5_ex2', type: 'choice', question: 'This shirt is at a _____.', options: ['discount', 'discount', 'discount', 'discount'], answer: 0 },
  ] },
  { id: 'e_shop_6', word: 'customer', phonetic: '/ˈkʌstəmə/', partOfSpeech: 'n.', meaning: '顾客', example: 'The customer is always right.', group: '购物与消费', exercises: [
    { id: 'e_shop_6_ex1', type: 'fill', question: 'customer 是什么意思？', answer: '顾客' },
    { id: 'e_shop_6_ex2', type: 'choice', question: 'The _____ is always right.', options: ['customer', 'customer', 'customer', 'customer'], answer: 0 },
  ] },
  { id: 'e_shop_7', word: 'cashier', phonetic: '/kæˈʃɪə/', partOfSpeech: 'n.', meaning: '收银员', example: 'Pay at the cashier, please.', group: '购物与消费', exercises: [
    { id: 'e_shop_7_ex1', type: 'fill', question: 'cashier 是什么意思？', answer: '收银员' },
    { id: 'e_shop_7_ex2', type: 'choice', question: 'Pay at the _____, please.', options: ['cashier', 'cashier', 'cashier', 'cashier'], answer: 0 },
  ] },
  { id: 'e_shop_8', word: 'receipt', phonetic: '/rɪˈsiːt/', partOfSpeech: 'n.', meaning: '收据', example: 'May I have the receipt?', group: '购物与消费', exercises: [
    { id: 'e_shop_8_ex1', type: 'fill', question: 'receipt 是什么意思？', answer: '收据' },
    { id: 'e_shop_8_ex2', type: 'choice', question: 'May I have the _____?', options: ['receipt', 'receipt', 'receipt', 'receipt'], answer: 0 },
  ] },
  { id: 'e_shop_9', word: 'product', phonetic: '/ˈprɒdʌkt/', partOfSpeech: 'n.', meaning: '产品', example: 'This product is made in China.', group: '购物与消费', exercises: [
    { id: 'e_shop_9_ex1', type: 'fill', question: 'product 是什么意思？', answer: '产品' },
    { id: 'e_shop_9_ex2', type: 'choice', question: 'This _____ is made in China.', options: ['product', 'product', 'product', 'product'], answer: 0 },
  ] },
  { id: 'e_shop_10', word: 'quality', phonetic: '/ˈkwɒləti/', partOfSpeech: 'n.', meaning: '质量', example: 'Good quality costs more.', group: '购物与消费', exercises: [
    { id: 'e_shop_10_ex1', type: 'fill', question: 'quality 是什么意思？', answer: '质量' },
    { id: 'e_shop_10_ex2', type: 'choice', question: 'Good _____ costs more.', options: ['quality', 'quality', 'quality', 'quality'], answer: 0 },
  ] },

  // 时间与日常 Time & Daily Routine (10)
  { id: 'e_time_1', word: 'morning', phonetic: '/ˈmɔːnɪŋ/', partOfSpeech: 'n.', meaning: '早晨', example: 'I get up early in the morning.', group: '时间与日常', exercises: [
    { id: 'e_time_1_ex1', type: 'fill', question: 'morning 是什么意思？', answer: '早晨' },
    { id: 'e_time_1_ex2', type: 'choice', question: 'I get up early in the _____.', options: ['morning', 'morning', 'morning', 'morning'], answer: 0 },
  ] },
  { id: 'e_time_2', word: 'afternoon', phonetic: '/ˌɑːftəˈnuːn/', partOfSpeech: 'n.', meaning: '下午', example: 'We play sports in the afternoon.', group: '时间与日常', exercises: [
    { id: 'e_time_2_ex1', type: 'fill', question: 'afternoon 是什么意思？', answer: '下午' },
    { id: 'e_time_2_ex2', type: 'choice', question: 'We play sports in the _____.', options: ['afternoon', 'afternoon', 'afternoon', 'afternoon'], answer: 0 },
  ] },
  { id: 'e_time_3', word: 'evening', phonetic: '/ˈiːvnɪŋ/', partOfSpeech: 'n.', meaning: '晚上', example: 'I read books in the evening.', group: '时间与日常', exercises: [
    { id: 'e_time_3_ex1', type: 'fill', question: 'evening 是什么意思？', answer: '晚上' },
    { id: 'e_time_3_ex2', type: 'choice', question: 'I read books in the _____.', options: ['evening', 'evening', 'evening', 'evening'], answer: 0 },
  ] },
  { id: 'e_time_4', word: 'weekday', phonetic: '/ˈwiːkdeɪ/', partOfSpeech: 'n.', meaning: '工作日', example: 'I am busy on weekdays.', group: '时间与日常', exercises: [
    { id: 'e_time_4_ex1', type: 'fill', question: 'weekday 是什么意思？', answer: '工作日' },
    { id: 'e_time_4_ex2', type: 'choice', question: 'I am busy on _____.', options: ['weekdays', 'weekdays', 'weekdays', 'weekdays'], answer: 0 },
  ] },
  { id: 'e_time_5', word: 'weekend', phonetic: '/ˌwiːkˈend/', partOfSpeech: 'n.', meaning: '周末', example: 'I relax on weekends.', group: '时间与日常', exercises: [
    { id: 'e_time_5_ex1', type: 'fill', question: 'weekend 是什么意思？', answer: '周末' },
    { id: 'e_time_5_ex2', type: 'choice', question: 'I relax on _____.', options: ['weekends', 'weekends', 'weekends', 'weekends'], answer: 0 },
  ] },
  { id: 'e_time_6', word: 'tonight', phonetic: '/təˈnaɪt/', partOfSpeech: 'adv.', meaning: '今晚', example: 'Are you free tonight?', group: '时间与日常', exercises: [
    { id: 'e_time_6_ex1', type: 'fill', question: 'tonight 是什么意思？', answer: '今晚' },
    { id: 'e_time_6_ex2', type: 'choice', question: 'Are you free _____?', options: ['tonight', 'tonight', 'tonight', 'tonight'], answer: 0 },
  ] },
  { id: 'e_time_7', word: 'tomorrow', phonetic: '/təˈmɒrəʊ/', partOfSpeech: 'adv.', meaning: '明天', example: 'I will go shopping tomorrow.', group: '时间与日常', exercises: [
    { id: 'e_time_7_ex1', type: 'fill', question: 'tomorrow 是什么意思？', answer: '明天' },
    { id: 'e_time_7_ex2', type: 'choice', question: 'I will go shopping _____.', options: ['tomorrow', 'tomorrow', 'tomorrow', 'tomorrow'], answer: 0 },
  ] },
  { id: 'e_time_8', word: 'yesterday', phonetic: '/ˈjestədeɪ/', partOfSpeech: 'adv.', meaning: '昨天', example: 'I met him yesterday.', group: '时间与日常', exercises: [
    { id: 'e_time_8_ex1', type: 'fill', question: 'yesterday 是什么意思？', answer: '昨天' },
    { id: 'e_time_8_ex2', type: 'choice', question: 'I met him _____.', options: ['yesterday', 'yesterday', 'yesterday', 'yesterday'], answer: 0 },
  ] },
  { id: 'e_time_9', word: 'usually', phonetic: '/ˈjuːʒuəli/', partOfSpeech: 'adv.', meaning: '通常', example: 'I usually walk to school.', group: '时间与日常', exercises: [
    { id: 'e_time_9_ex1', type: 'fill', question: 'usually 是什么意思？', answer: '通常' },
    { id: 'e_time_9_ex2', type: 'choice', question: 'I _____ walk to school.', options: ['usually', 'usually', 'usually', 'usually'], answer: 0 },
  ] },
  { id: 'e_time_10', word: 'already', phonetic: '/ɔːlˈredi/', partOfSpeech: 'adv.', meaning: '已经', example: 'I have already finished lunch.', group: '时间与日常', exercises: [
    { id: 'e_time_10_ex1', type: 'fill', question: 'already 是什么意思？', answer: '已经' },
    { id: 'e_time_10_ex2', type: 'choice', question: 'I have _____ finished lunch.', options: ['already', 'already', 'already', 'already'], answer: 0 },
  ] },

  // 身体与健康 Body & Health (10)
  { id: 'e_health_1', word: 'headache', phonetic: '/ˈhedeɪk/', partOfSpeech: 'n.', meaning: '头痛', example: 'I have a bad headache.', group: '身体与健康', exercises: [
    { id: 'e_health_1_ex1', type: 'fill', question: 'headache 是什么意思？', answer: '头痛' },
    { id: 'e_health_1_ex2', type: 'choice', question: 'I have a bad _____.', options: ['headache', 'headache', 'headache', 'headache'], answer: 0 },
  ] },
  { id: 'e_health_2', word: 'fever', phonetic: '/ˈfiːvə/', partOfSpeech: 'n.', meaning: '发烧', example: 'He has a high fever.', group: '身体与健康', exercises: [
    { id: 'e_health_2_ex1', type: 'fill', question: 'fever 是什么意思？', answer: '发烧' },
    { id: 'e_health_2_ex2', type: 'choice', question: 'He has a high _____.', options: ['fever', 'fever', 'fever', 'fever'], answer: 0 },
  ] },
  { id: 'e_health_3', word: 'medicine', phonetic: '/ˈmedsn/', partOfSpeech: 'n.', meaning: '药', example: 'Take this medicine three times a day.', group: '身体与健康', exercises: [
    { id: 'e_health_3_ex1', type: 'fill', question: 'medicine 是什么意思？', answer: '药' },
    { id: 'e_health_3_ex2', type: 'choice', question: 'Take this _____ three times a day.', options: ['medicine', 'medicine', 'medicine', 'medicine'], answer: 0 },
  ] },
  { id: 'e_health_4', word: 'hospital', phonetic: '/ˈhɒspɪtl/', partOfSpeech: 'n.', meaning: '医院', example: 'She went to the hospital.', group: '身体与健康', exercises: [
    { id: 'e_health_4_ex1', type: 'fill', question: 'hospital 是什么意思？', answer: '医院' },
    { id: 'e_health_4_ex2', type: 'choice', question: 'She went to the _____.', options: ['hospital', 'hospital', 'hospital', 'hospital'], answer: 0 },
  ] },
  { id: 'e_health_5', word: 'exercise', phonetic: '/ˈeksəsaɪz/', partOfSpeech: 'n./v.', meaning: '锻炼', example: 'Exercise is good for health.', group: '身体与健康', exercises: [
    { id: 'e_health_5_ex1', type: 'fill', question: 'exercise 是什么意思？', answer: '锻炼' },
    { id: 'e_health_5_ex2', type: 'choice', question: '_____ is good for health.', options: ['Exercise', 'Exercise', 'Exercise', 'Exercise'], answer: 0 },
  ] },
  { id: 'e_health_6', word: 'sleep', phonetic: '/sliːp/', partOfSpeech: 'n./v.', meaning: '睡眠', example: 'I need eight hours of sleep.', group: '身体与健康', exercises: [
    { id: 'e_health_6_ex1', type: 'fill', question: 'sleep 是什么意思？', answer: '睡眠' },
    { id: 'e_health_6_ex2', type: 'choice', question: 'I need eight hours of _____.', options: ['sleep', 'sleep', 'sleep', 'sleep'], answer: 0 },
  ] },
  { id: 'e_health_7', word: 'toothache', phonetic: '/ˈtuːθeɪk/', partOfSpeech: 'n.', meaning: '牙痛', example: 'I have a toothache.', group: '身体与健康', exercises: [
    { id: 'e_health_7_ex1', type: 'fill', question: 'toothache 是什么意思？', answer: '牙痛' },
    { id: 'e_health_7_ex2', type: 'choice', question: 'I have a _____.', options: ['toothache', 'toothache', 'toothache', 'toothache'], answer: 0 },
  ] },
  { id: 'e_health_8', word: 'stomach', phonetic: '/ˈstʌmək/', partOfSpeech: 'n.', meaning: '胃；腹部', example: 'My stomach hurts.', group: '身体与健康', exercises: [
    { id: 'e_health_8_ex1', type: 'fill', question: 'stomach 是什么意思？', answer: '胃；腹部' },
    { id: 'e_health_8_ex2', type: 'choice', question: 'My _____ hurts.', options: ['stomach', 'stomach', 'stomach', 'stomach'], answer: 0 },
  ] },
  { id: 'e_health_9', word: 'necessary', phonetic: '/ˈnesəsəri/', partOfSpeech: 'adj.', meaning: '必要的', example: 'Rest is necessary when you are ill.', group: '身体与健康', exercises: [
    { id: 'e_health_9_ex1', type: 'fill', question: 'necessary 是什么意思？', answer: '必要的' },
    { id: 'e_health_9_ex2', type: 'choice', question: 'Rest is _____ when you are ill.', options: ['necessary', 'necessary', 'necessary', 'necessary'], answer: 0 },
  ] },
  { id: 'e_health_10', word: 'recover', phonetic: '/rɪˈkʌvə/', partOfSpeech: 'v.', meaning: '恢复', example: 'I hope you recover soon.', group: '身体与健康', exercises: [
    { id: 'e_health_10_ex1', type: 'fill', question: 'recover 是什么意思？', answer: '恢复' },
    { id: 'e_health_10_ex2', type: 'choice', question: 'I hope you _____ soon.', options: ['recover', 'recover', 'recover', 'recover'], answer: 0 },
  ] },

  // 运动与爱好 Sports & Hobbies (10)
  { id: 'e_sport_1', word: 'basketball', phonetic: '/ˈbɑːskɪtbɔːl/', partOfSpeech: 'n.', meaning: '篮球', example: 'I play basketball after school.', group: '运动与爱好', exercises: [
    { id: 'e_sport_1_ex1', type: 'fill', question: 'basketball 是什么意思？', answer: '篮球' },
    { id: 'e_sport_1_ex2', type: 'choice', question: 'I play _____ after school.', options: ['basketball', 'basketball', 'basketball', 'basketball'], answer: 0 },
  ] },
  { id: 'e_sport_2', word: 'swimming', phonetic: '/ˈswɪmɪŋ/', partOfSpeech: 'n.', meaning: '游泳', example: 'Swimming is good exercise.', group: '运动与爱好', exercises: [
    { id: 'e_sport_2_ex1', type: 'fill', question: 'swimming 是什么意思？', answer: '游泳' },
    { id: 'e_sport_2_ex2', type: 'choice', question: '_____ is good exercise.', options: ['Swimming', 'Swimming', 'Swimming', 'Swimming'], answer: 0 },
  ] },
  { id: 'e_sport_3', word: 'running', phonetic: '/ˈrʌnɪŋ/', partOfSpeech: 'n.', meaning: '跑步', example: 'I go running every morning.', group: '运动与爱好', exercises: [
    { id: 'e_sport_3_ex1', type: 'fill', question: 'running 是什么意思？', answer: '跑步' },
    { id: 'e_sport_3_ex2', type: 'choice', question: 'I go _____ every morning.', options: ['running', 'running', 'running', 'running'], answer: 0 },
  ] },
  { id: 'e_sport_4', word: 'winner', phonetic: '/ˈwɪnə/', partOfSpeech: 'n.', meaning: '获胜者', example: 'The winner gets a prize.', group: '运动与爱好', exercises: [
    { id: 'e_sport_4_ex1', type: 'fill', question: 'winner 是什么意思？', answer: '获胜者' },
    { id: 'e_sport_4_ex2', type: 'choice', question: 'The _____ gets a prize.', options: ['winner', 'winner', 'winner', 'winner'], answer: 0 },
  ] },
  { id: 'e_sport_5', word: 'team', phonetic: '/tiːm/', partOfSpeech: 'n.', meaning: '队伍', example: 'Our team won the game.', group: '运动与爱好', exercises: [
    { id: 'e_sport_5_ex1', type: 'fill', question: 'team 是什么意思？', answer: '队伍' },
    { id: 'e_sport_5_ex2', type: 'choice', question: 'Our _____ won the game.', options: ['team', 'team', 'team', 'team'], answer: 0 },
  ] },
  { id: 'e_sport_6', word: 'match', phonetic: '/mætʃ/', partOfSpeech: 'n.', meaning: '比赛', example: 'There is a football match today.', group: '运动与爱好', exercises: [
    { id: 'e_sport_6_ex1', type: 'fill', question: 'match 是什么意思？', answer: '比赛' },
    { id: 'e_sport_6_ex2', type: 'choice', question: 'There is a football _____ today.', options: ['match', 'match', 'match', 'match'], answer: 0 },
  ] },
  { id: 'e_sport_7', word: 'hobby', phonetic: '/ˈhɒbi/', partOfSpeech: 'n.', meaning: '爱好', example: 'Reading is my hobby.', group: '运动与爱好', exercises: [
    { id: 'e_sport_7_ex1', type: 'fill', question: 'hobby 是什么意思？', answer: '爱好' },
    { id: 'e_sport_7_ex2', type: 'choice', question: 'Reading is my _____.', options: ['hobby', 'hobby', 'hobby', 'hobby'], answer: 0 },
  ] },
  { id: 'e_sport_8', word: 'collect', phonetic: '/kəˈlekt/', partOfSpeech: 'v.', meaning: '收集', example: 'I collect stamps.', group: '运动与爱好', exercises: [
    { id: 'e_sport_8_ex1', type: 'fill', question: 'collect 是什么意思？', answer: '收集' },
    { id: 'e_sport_8_ex2', type: 'choice', question: 'I _____ stamps.', options: ['collect', 'collect', 'collect', 'collect'], answer: 0 },
  ] },
  { id: 'e_sport_9', word: 'instrument', phonetic: '/ˈɪnstrəmənt/', partOfSpeech: 'n.', meaning: '乐器', example: 'She plays a musical instrument.', group: '运动与爱好', exercises: [
    { id: 'e_sport_9_ex1', type: 'fill', question: 'instrument 是什么意思？', answer: '乐器' },
    { id: 'e_sport_9_ex2', type: 'choice', question: 'She plays a musical _____.', options: ['instrument', 'instrument', 'instrument', 'instrument'], answer: 0 },
  ] },
  { id: 'e_sport_10', word: 'performance', phonetic: '/pəˈfɔːməns/', partOfSpeech: 'n.', meaning: '表演', example: 'The performance was wonderful.', group: '运动与爱好', exercises: [
    { id: 'e_sport_10_ex1', type: 'fill', question: 'performance 是什么意思？', answer: '表演' },
    { id: 'e_sport_10_ex2', type: 'choice', question: 'The _____ was wonderful.', options: ['performance', 'performance', 'performance', 'performance'], answer: 0 },
  ] },

  // 自然与动物 Nature & Animals (10)
  { id: 'e_nature_1', word: 'mountain', phonetic: '/ˈmaʊntən/', partOfSpeech: 'n.', meaning: '山', example: 'We climbed the mountain.', group: '自然与动物', exercises: [
    { id: 'e_nature_1_ex1', type: 'fill', question: 'mountain 是什么意思？', answer: '山' },
    { id: 'e_nature_1_ex2', type: 'choice', question: 'We climbed the _____.', options: ['mountain', 'mountain', 'mountain', 'mountain'], answer: 0 },
  ] },
  { id: 'e_nature_2', word: 'river', phonetic: '/ˈrɪvə/', partOfSpeech: 'n.', meaning: '河流', example: 'The river is very long.', group: '自然与动物', exercises: [
    { id: 'e_nature_2_ex1', type: 'fill', question: 'river 是什么意思？', answer: '河流' },
    { id: 'e_nature_2_ex2', type: 'choice', question: 'The _____ is very long.', options: ['river', 'river', 'river', 'river'], answer: 0 },
  ] },
  { id: 'e_nature_3', word: 'forest', phonetic: '/ˈfɒrɪst/', partOfSpeech: 'n.', meaning: '森林', example: 'Many animals live in the forest.', group: '自然与动物', exercises: [
    { id: 'e_nature_3_ex1', type: 'fill', question: 'forest 是什么意思？', answer: '森林' },
    { id: 'e_nature_3_ex2', type: 'choice', question: 'Many animals live in the _____.', options: ['forest', 'forest', 'forest', 'forest'], answer: 0 },
  ] },
  { id: 'e_nature_4', word: 'ocean', phonetic: '/ˈəʊʃn/', partOfSpeech: 'n.', meaning: '海洋', example: 'The ocean is blue and deep.', group: '自然与动物', exercises: [
    { id: 'e_nature_4_ex1', type: 'fill', question: 'ocean 是什么意思？', answer: '海洋' },
    { id: 'e_nature_4_ex2', type: 'choice', question: 'The _____ is blue and deep.', options: ['ocean', 'ocean', 'ocean', 'ocean'], answer: 0 },
  ] },
  { id: 'e_nature_5', word: 'flower', phonetic: '/ˈflaʊə/', partOfSpeech: 'n.', meaning: '花', example: 'The flowers smell sweet.', group: '自然与动物', exercises: [
    { id: 'e_nature_5_ex1', type: 'fill', question: 'flower 是什么意思？', answer: '花' },
    { id: 'e_nature_5_ex2', type: 'choice', question: 'The _____ smell sweet.', options: ['flowers', 'flowers', 'flowers', 'flowers'], answer: 0 },
  ] },
  { id: 'e_nature_6', word: 'animal', phonetic: '/ˈænɪml/', partOfSpeech: 'n.', meaning: '动物', example: 'The zoo has many animals.', group: '自然与动物', exercises: [
    { id: 'e_nature_6_ex1', type: 'fill', question: 'animal 是什么意思？', answer: '动物' },
    { id: 'e_nature_6_ex2', type: 'choice', question: 'The zoo has many _____.', options: ['animals', 'animals', 'animals', 'animals'], answer: 0 },
  ] },
  { id: 'e_nature_7', word: 'protect', phonetic: '/prəˈtekt/', partOfSpeech: 'v.', meaning: '保护', example: 'We should protect wild animals.', group: '自然与动物', exercises: [
    { id: 'e_nature_7_ex1', type: 'fill', question: 'protect 是什么意思？', answer: '保护' },
    { id: 'e_nature_7_ex2', type: 'choice', question: 'We should _____ wild animals.', options: ['protect', 'protect', 'protect', 'protect'], answer: 0 },
  ] },
  { id: 'e_nature_8', word: 'environment', phonetic: '/ɪnˈvaɪrənmənt/', partOfSpeech: 'n.', meaning: '环境', example: 'We must protect the environment.', group: '自然与动物', exercises: [
    { id: 'e_nature_8_ex1', type: 'fill', question: 'environment 是什么意思？', answer: '环境' },
    { id: 'e_nature_8_ex2', type: 'choice', question: 'We must protect the _____.', options: ['environment', 'environment', 'environment', 'environment'], answer: 0 },
  ] },
  { id: 'e_nature_9', word: 'pollution', phonetic: '/pəˈluːʃn/', partOfSpeech: 'n.', meaning: '污染', example: 'Air pollution is a serious problem.', group: '自然与动物', exercises: [
    { id: 'e_nature_9_ex1', type: 'fill', question: 'pollution 是什么意思？', answer: '污染' },
    { id: 'e_nature_9_ex2', type: 'choice', question: 'Air _____ is a serious problem.', options: ['pollution', 'pollution', 'pollution', 'pollution'], answer: 0 },
  ] },
  { id: 'e_nature_10', word: 'recycle', phonetic: '/ˌriːˈsaɪkl/', partOfSpeech: 'v.', meaning: '回收', example: 'We should recycle paper.', group: '自然与动物', exercises: [
    { id: 'e_nature_10_ex1', type: 'fill', question: 'recycle 是什么意思？', answer: '回收' },
    { id: 'e_nature_10_ex2', type: 'choice', question: 'We should _____ paper.', options: ['recycle', 'recycle', 'recycle', 'recycle'], answer: 0 },
  ] },

  // 情感与社交 Feelings & Social (8)
  { id: 'e_feel_1', word: 'happy', phonetic: '/ˈhæpi/', partOfSpeech: 'adj.', meaning: '高兴的', example: 'I feel happy today.', group: '情感与社交', exercises: [
    { id: 'e_feel_1_ex1', type: 'fill', question: 'happy 是什么意思？', answer: '高兴的' },
    { id: 'e_feel_1_ex2', type: 'choice', question: 'I feel _____ today.', options: ['happy', 'happy', 'happy', 'happy'], answer: 0 },
  ] },
  { id: 'e_feel_2', word: 'worried', phonetic: '/ˈwʌrid/', partOfSpeech: 'adj.', meaning: '担心的', example: 'My mother is worried about me.', group: '情感与社交', exercises: [
    { id: 'e_feel_2_ex1', type: 'fill', question: 'worried 是什么意思？', answer: '担心的' },
    { id: 'e_feel_2_ex2', type: 'choice', question: 'My mother is _____ about me.', options: ['worried', 'worried', 'worried', 'worried'], answer: 0 },
  ] },
  { id: 'e_feel_3', word: 'surprised', phonetic: '/səˈpraɪzd/', partOfSpeech: 'adj.', meaning: '惊讶的', example: 'I was surprised by the gift.', group: '情感与社交', exercises: [
    { id: 'e_feel_3_ex1', type: 'fill', question: 'surprised 是什么意思？', answer: '惊讶的' },
    { id: 'e_feel_3_ex2', type: 'choice', question: 'I was _____ by the gift.', options: ['surprised', 'surprised', 'surprised', 'surprised'], answer: 0 },
  ] },
  { id: 'e_feel_4', word: 'excited', phonetic: '/ɪkˈsaɪtɪd/', partOfSpeech: 'adj.', meaning: '兴奋的', example: 'The children are excited.', group: '情感与社交', exercises: [
    { id: 'e_feel_4_ex1', type: 'fill', question: 'excited 是什么意思？', answer: '兴奋的' },
    { id: 'e_feel_4_ex2', type: 'choice', question: 'The children are _____.', options: ['excited', 'excited', 'excited', 'excited'], answer: 0 },
  ] },
  { id: 'e_feel_5', word: 'invite', phonetic: '/ɪnˈvaɪt/', partOfSpeech: 'v.', meaning: '邀请', example: 'I invite my friends to dinner.', group: '情感与社交', exercises: [
    { id: 'e_feel_5_ex1', type: 'fill', question: 'invite 是什么意思？', answer: '邀请' },
    { id: 'e_feel_5_ex2', type: 'choice', question: 'I _____ my friends to dinner.', options: ['invite', 'invite', 'invite', 'invite'], answer: 0 },
  ] },
  { id: 'e_feel_6', word: 'apologize', phonetic: '/əˈpɒlədʒaɪz/', partOfSpeech: 'v.', meaning: '道歉', example: 'You should apologize to him.', group: '情感与社交', exercises: [
    { id: 'e_feel_6_ex1', type: 'fill', question: 'apologize 是什么意思？', answer: '道歉' },
    { id: 'e_feel_6_ex2', type: 'choice', question: 'You should _____ to him.', options: ['apologize', 'apologize', 'apologize', 'apologize'], answer: 0 },
  ] },
  { id: 'e_feel_7', word: 'congratulate', phonetic: '/kənˈɡrætʃuleɪt/', partOfSpeech: 'v.', meaning: '祝贺', example: 'I want to congratulate you.', group: '情感与社交', exercises: [
    { id: 'e_feel_7_ex1', type: 'fill', question: 'congratulate 是什么意思？', answer: '祝贺' },
    { id: 'e_feel_7_ex2', type: 'choice', question: 'I want to _____ you.', options: ['congratulate', 'congratulate', 'congratulate', 'congratulate'], answer: 0 },
  ] },
  { id: 'e_feel_8', word: 'relationship', phonetic: '/rɪˈleɪʃnʃɪp/', partOfSpeech: 'n.', meaning: '关系', example: 'Good relationship needs trust.', group: '情感与社交', exercises: [
    { id: 'e_feel_8_ex1', type: 'fill', question: 'relationship 是什么意思？', answer: '关系' },
    { id: 'e_feel_8_ex2', type: 'choice', question: 'Good _____ needs trust.', options: ['relationship', 'relationship', 'relationship', 'relationship'], answer: 0 },
  ] },

  // 数字与描述 Numbers & Description (8)
  { id: 'e_desc_1', word: 'hundred', phonetic: '/ˈhʌndrəd/', partOfSpeech: 'num.', meaning: '百', example: 'There are one hundred students.', group: '数字与描述', exercises: [
    { id: 'e_desc_1_ex1', type: 'fill', question: 'hundred 是什么意思？', answer: '百' },
    { id: 'e_desc_1_ex2', type: 'choice', question: 'There are one _____ students.', options: ['hundred', 'hundred', 'hundred', 'hundred'], answer: 0 },
  ] },
  { id: 'e_desc_2', word: 'thousand', phonetic: '/ˈθaʊznd/', partOfSpeech: 'num.', meaning: '千', example: 'The book costs two thousand yuan.', group: '数字与描述', exercises: [
    { id: 'e_desc_2_ex1', type: 'fill', question: 'thousand 是什么意思？', answer: '千' },
    { id: 'e_desc_2_ex2', type: 'choice', question: 'The book costs two _____ yuan.', options: ['thousand', 'thousand', 'thousand', 'thousand'], answer: 0 },
  ] },
  { id: 'e_desc_3', word: 'several', phonetic: '/ˈsevrəl/', partOfSpeech: 'adj.', meaning: '几个', example: 'I have several good friends.', group: '数字与描述', exercises: [
    { id: 'e_desc_3_ex1', type: 'fill', question: 'several 是什么意思？', answer: '几个' },
    { id: 'e_desc_3_ex2', type: 'choice', question: 'I have _____ good friends.', options: ['several', 'several', 'several', 'several'], answer: 0 },
  ] },
  { id: 'e_desc_4', word: 'enough', phonetic: '/ɪˈnʌf/', partOfSpeech: 'adj./adv.', meaning: '足够的', example: 'I have enough time.', group: '数字与描述', exercises: [
    { id: 'e_desc_4_ex1', type: 'fill', question: 'enough 是什么意思？', answer: '足够的' },
    { id: 'e_desc_4_ex2', type: 'choice', question: 'I have _____ time.', options: ['enough', 'enough', 'enough', 'enough'], answer: 0 },
  ] },
  { id: 'e_desc_5', word: 'empty', phonetic: '/ˈempti/', partOfSpeech: 'adj.', meaning: '空的', example: 'The room is empty.', group: '数字与描述', exercises: [
    { id: 'e_desc_5_ex1', type: 'fill', question: 'empty 是什么意思？', answer: '空的' },
    { id: 'e_desc_5_ex2', type: 'choice', question: 'The room is _____.', options: ['empty', 'empty', 'empty', 'empty'], answer: 0 },
  ] },
  { id: 'e_desc_6', word: 'modern', phonetic: '/ˈmɒdn/', partOfSpeech: 'adj.', meaning: '现代的', example: 'We live in a modern city.', group: '数字与描述', exercises: [
    { id: 'e_desc_6_ex1', type: 'fill', question: 'modern 是什么意思？', answer: '现代的' },
    { id: 'e_desc_6_ex2', type: 'choice', question: 'We live in a _____ city.', options: ['modern', 'modern', 'modern', 'modern'], answer: 0 },
  ] },
  { id: 'e_desc_7', word: 'famous', phonetic: '/ˈfeɪməs/', partOfSpeech: 'adj.', meaning: '著名的', example: 'He is a famous writer.', group: '数字与描述', exercises: [
    { id: 'e_desc_7_ex1', type: 'fill', question: 'famous 是什么意思？', answer: '著名的' },
    { id: 'e_desc_7_ex2', type: 'choice', question: 'He is a _____ writer.', options: ['famous', 'famous', 'famous', 'famous'], answer: 0 },
  ] },
  { id: 'e_desc_8', word: 'different', phonetic: '/ˈdɪfrənt/', partOfSpeech: 'adj.', meaning: '不同的', example: 'We have different ideas.', group: '数字与描述', exercises: [
    { id: 'e_desc_8_ex1', type: 'fill', question: 'different 是什么意思？', answer: '不同的' },
    { id: 'e_desc_8_ex2', type: 'choice', question: 'We have _____ ideas.', options: ['different', 'different', 'different', 'different'], answer: 0 },
  ] },
]

export const ENGLISH_GROUPS = [
  '校园生活', '家庭与人物', '食物与饮料', '旅行与交通', '天气与季节', '购物与消费',
  '时间与日常', '身体与健康', '运动与爱好', '自然与动物', '情感与社交', '数字与描述',
]
