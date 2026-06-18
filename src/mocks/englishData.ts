import type { VocabWord } from '../types'

export const ENGLISH_WORDS: VocabWord[] = [
  { id: 'e_school_1', word: 'classroom', phonetic: '/ˈklɑːsruːm/', partOfSpeech: 'n.', meaning: '教室', example: 'We study in the classroom.', group: '校园生活' },
  { id: 'e_school_2', word: 'homework', phonetic: '/ˈhəʊmwɜːk/', partOfSpeech: 'n.', meaning: '家庭作业', example: 'I finish my homework every day.', group: '校园生活' },
  { id: 'e_school_3', word: 'subject', phonetic: '/ˈsʌbdʒɪkt/', partOfSpeech: 'n.', meaning: '科目', example: 'My favorite subject is English.', group: '校园生活' },
  { id: 'e_family_1', word: 'parents', phonetic: '/ˈpeərənts/', partOfSpeech: 'n.', meaning: '父母', example: 'I love my parents.', group: '家庭' },
  { id: 'e_family_2', word: 'brother', phonetic: '/ˈbrʌðə/', partOfSpeech: 'n.', meaning: '兄弟', example: 'My brother is tall.', group: '家庭' },
  { id: 'e_family_3', word: 'sister', phonetic: '/ˈsɪstə/', partOfSpeech: 'n.', meaning: '姐妹', example: 'My sister likes music.', group: '家庭' },
]

export const ENGLISH_GROUPS = [
  '校园生活', '家庭', '食物', '旅行', '天气', '购物',
]
