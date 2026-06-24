import type { Exercise } from '../types'

export interface MathTopic {
  id: string
  chapter: string
  title: string
  explanation: string
  example: string
  exercises: Exercise[]
}

export const MATH_TOPICS: MathTopic[] = [
  // 第一章 有理数（12）
  { id: 'm_rational_1', chapter: '有理数', title: '正数和负数', explanation: '大于0的数叫做正数；在正数前加”-”号的数叫做负数。0既不是正数也不是负数。', example: '例如：+3，-5，0。', exercises: [
    { id: 'm_rational_1_ex1', type: 'choice', question: '0是正数还是负数？', options: ['正数', '负数', '既不是正数也不是负数', '既是正数也是负数'], answer: 2 },
    { id: 'm_rational_1_ex2', type: 'fill', question: '在正数前加什么号的数叫做负数？', answer: '-' },
  ] },
  { id: 'm_rational_2', chapter: '有理数', title: '有理数的概念', explanation: '整数和分数统称为有理数。整数包括正整数、0、负整数；分数包括正分数、负分数。', example: '例如：-2，0，3/4 都是有理数。', exercises: [
    { id: 'm_rational_2_ex1', type: 'choice', question: '以下哪个不是有理数？', options: ['-2', '0', '3/4', '√2'], answer: 3 },
    { id: 'm_rational_2_ex2', type: 'fill', question: '整数和分数统称为什么？', answer: '有理数' },
  ] },
  { id: 'm_rational_3', chapter: '有理数', title: '数轴', explanation: '规定了原点、正方向和单位长度的直线叫做数轴。', example: '在数轴上，右边的数总比左边大。', exercises: [
    { id: 'm_rational_3_ex1', type: 'choice', question: '数轴的三要素是什么？', options: ['原点、正方向、单位长度', '起点、方向、长度', '零点、方向、刻度', '原点、箭头、刻度'], answer: 0 },
    { id: 'm_rational_3_ex2', type: 'fill', question: '在数轴上，右边的数总比左边____。', answer: '大' },
  ] },
  { id: 'm_rational_4', chapter: '有理数', title: '相反数', explanation: '只有符号不同的两个数互为相反数。0的相反数是0。', example: '3的相反数是-3，-5的相反数是5。', exercises: [
    { id: 'm_rational_4_ex1', type: 'choice', question: '-5的相反数是多少？', options: ['-5', '5', '0', '1/5'], answer: 1 },
    { id: 'm_rational_4_ex2', type: 'fill', question: '0的相反数是多少？', answer: '0' },
  ] },
  { id: 'm_rational_5', chapter: '有理数', title: '绝对值', explanation: '数轴上表示数a的点与原点的距离叫做a的绝对值，记作|a|。', example: '|-4|=4，|3|=3，|0|=0。', exercises: [
    { id: 'm_rational_5_ex1', type: 'choice', question: '|-4|等于多少？', options: ['-4', '4', '0', '1'], answer: 1 },
    { id: 'm_rational_5_ex2', type: 'fill', question: '|0|等于多少？', answer: '0' },
  ] },
  { id: 'm_rational_6', chapter: '有理数', title: '有理数的大小比较', explanation: '正数大于0，0大于负数；两个负数，绝对值大的反而小。', example: '-5 < -3，因为|-5| > |-3|。', exercises: [
    { id: 'm_rational_6_ex1', type: 'choice', question: '比较-5和-3的大小。', options: ['-5 > -3', '-5 < -3', '-5 = -3', '无法比较'], answer: 1 },
    { id: 'm_rational_6_ex2', type: 'fill', question: '两个负数比较大小，绝对值大的反而____。', answer: '小' },
  ] },
  { id: 'm_rational_7', chapter: '有理数', title: '有理数的加法（一）', explanation: '同号两数相加，取相同符号，并把绝对值相加。', example: '(-3)+(-5)=-(3+5)=-8。', exercises: [
    { id: 'm_rational_7_ex1', type: 'choice', question: '(-3)+(-5)=？', options: ['8', '-8', '2', '-2'], answer: 1 },
    { id: 'm_rational_7_ex2', type: 'fill', question: '同号两数相加，取相同符号，并把绝对值____。', answer: '相加' },
  ] },
  { id: 'm_rational_8', chapter: '有理数', title: '有理数的加法（二）', explanation: '异号两数相加，取绝对值较大的加数的符号，并用较大绝对值减去较小绝对值。', example: '(-7)+4=-(7-4)=-3。', exercises: [
    { id: 'm_rational_8_ex1', type: 'choice', question: '(-7)+4=？', options: ['-3', '3', '-11', '11'], answer: 0 },
    { id: 'm_rational_8_ex2', type: 'fill', question: '异号两数相加，取绝对值较大的加数的____。', answer: '符号' },
  ] },
  { id: 'm_rational_9', chapter: '有理数', title: '有理数的减法', explanation: '减去一个数，等于加上这个数的相反数。', example: '5-(-3)=5+3=8。', exercises: [
    { id: 'm_rational_9_ex1', type: 'choice', question: '5-(-3)=？', options: ['2', '8', '-2', '-8'], answer: 1 },
    { id: 'm_rational_9_ex2', type: 'fill', question: '减去一个数，等于加上这个数的____。', answer: '相反数' },
  ] },
  { id: 'm_rational_10', chapter: '有理数', title: '有理数的加减混合运算', explanation: '可统一成加法运算，再利用加法法则和运算律简化。', example: '(-2)+3-(-5)=(-2)+3+5=6。', exercises: [
    { id: 'm_rational_10_ex1', type: 'choice', question: '(-2)+3-(-5)=？', options: ['6', '-6', '0', '10'], answer: 0 },
    { id: 'm_rational_10_ex2', type: 'fill', question: '加减混合运算可以统一成____运算。', answer: '加法' },
  ] },
  { id: 'm_rational_11', chapter: '有理数', title: '有理数的乘法', explanation: '两数相乘，同号得正，异号得负，并把绝对值相乘。', example: '(-3)×(-4)=12；(-2)×5=-10。', exercises: [
    { id: 'm_rational_11_ex1', type: 'choice', question: '(-3)×(-4)=？', options: ['-12', '12', '7', '-7'], answer: 1 },
    { id: 'm_rational_11_ex2', type: 'fill', question: '两数相乘，同号得____。', answer: '正' },
  ] },
  { id: 'm_rational_12', chapter: '有理数', title: '有理数的除法', explanation: '除以一个不等于0的数，等于乘这个数的倒数。', example: '(-6)÷(-2)=3；8÷(-4)=-2。', exercises: [
    { id: 'm_rational_12_ex1', type: 'choice', question: '(-6)÷(-2)=？', options: ['-3', '3', '12', '-12'], answer: 1 },
    { id: 'm_rational_12_ex2', type: 'fill', question: '除以一个不等于0的数，等于乘这个数的____。', answer: '倒数' },
  ] },

  // 第二章 整式的加减（10）
  { id: 'm_poly_1', chapter: '整式的加减', title: '用字母表示数', explanation: '用字母可以表示任意数或数量关系，使表达更简洁。', example: '长方形面积 S=ab。', exercises: [
    { id: 'm_poly_1_ex1', type: 'choice', question: '长方形面积公式是什么？', options: ['S=ab', 'S=a+b', 'S=2a+2b', 'S=a²'], answer: 0 },
    { id: 'm_poly_1_ex2', type: 'fill', question: '用字母表示数可以使表达更____。', answer: '简洁' },
  ] },
  { id: 'm_poly_2', chapter: '整式的加减', title: '单项式', explanation: '由数与字母的积组成的代数式叫做单项式。单独的一个数或字母也是单项式。', example: '3x²，-5，a 都是单项式。', exercises: [
    { id: 'm_poly_2_ex1', type: 'choice', question: '以下哪个不是单项式？', options: ['3x²', '-5', 'a', 'x+1'], answer: 3 },
    { id: 'm_poly_2_ex2', type: 'fill', question: '单独的一个数或字母也是____。', answer: '单项式' },
  ] },
  { id: 'm_poly_3', chapter: '整式的加减', title: '多项式', explanation: '几个单项式的和叫做多项式。多项式中次数最高的项的次数叫做多项式的次数。', example: '2x²-3x+1 是二次三项式。', exercises: [
    { id: 'm_poly_3_ex1', type: 'choice', question: '2x²-3x+1 是什么类型的多项式？', options: ['一次二项式', '二次三项式', '三次二项式', '二次二项式'], answer: 1 },
    { id: 'm_poly_3_ex2', type: 'fill', question: '几个单项式的和叫做____。', answer: '多项式' },
  ] },
  { id: 'm_poly_4', chapter: '整式的加减', title: '同类项', explanation: '所含字母相同，并且相同字母的指数也相同的项叫做同类项。', example: '3x²y 与 -5x²y 是同类项。', exercises: [
    { id: 'm_poly_4_ex1', type: 'choice', question: '以下哪组是同类项？', options: ['3x²y 与 -5x²y', '3x² 与 3y²', '3x 与 3xy', '3x² 与 3x³'], answer: 0 },
    { id: 'm_poly_4_ex2', type: 'fill', question: '同类项要求所含字母相同，并且相同字母的____也相同。', answer: '指数' },
  ] },
  { id: 'm_poly_5', chapter: '整式的加减', title: '合并同类项', explanation: '把同类项的系数相加，字母和字母的指数不变。', example: '3x+2x=(3+2)x=5x。', exercises: [
    { id: 'm_poly_5_ex1', type: 'choice', question: '3x+2x=？', options: ['5x', '5x²', '6x', 'x'], answer: 0 },
    { id: 'm_poly_5_ex2', type: 'fill', question: '合并同类项时，把同类项的____相加。', answer: '系数' },
  ] },
  { id: 'm_poly_6', chapter: '整式的加减', title: '去括号法则', explanation: '括号前是”+”，去掉括号后各项不变号；括号前是”-”，去掉括号后各项都变号。', example: 'a-(b-c)=a-b+c。', exercises: [
    { id: 'm_poly_6_ex1', type: 'choice', question: 'a-(b-c)=？', options: ['a-b-c', 'a-b+c', 'a+b-c', 'a+b+c'], answer: 1 },
    { id: 'm_poly_6_ex2', type: 'fill', question: '括号前是”-”，去掉括号后各项都____。', answer: '变号' },
  ] },
  { id: 'm_poly_7', chapter: '整式的加减', title: '添括号法则', explanation: '添括号时，括号前是”+”，括到括号里的各项不变号；括号前是”-”，括到括号里的各项都变号。', example: 'a-b+c=a-(b-c)。', exercises: [
    { id: 'm_poly_7_ex1', type: 'choice', question: 'a-b+c=a-(？)', options: ['b-c', 'b+c', '-b+c', '-b-c'], answer: 0 },
    { id: 'm_poly_7_ex2', type: 'fill', question: '添括号时，括号前是”+”，括到括号里的各项____。', answer: '不变号' },
  ] },
  { id: 'm_poly_8', chapter: '整式的加减', title: '整式的加减运算', explanation: '整式加减的一般步骤：去括号，合并同类项。', example: '(3x-2)+(2x+5)=5x+3。', exercises: [
    { id: 'm_poly_8_ex1', type: 'choice', question: '(3x-2)+(2x+5)=？', options: ['5x+3', '5x-3', 'x+3', 'x-3'], answer: 0 },
    { id: 'm_poly_8_ex2', type: 'fill', question: '整式加减的一般步骤：去括号，____。', answer: '合并同类项' },
  ] },
  { id: 'm_poly_9', chapter: '整式的加减', title: '化简求值', explanation: '先化简整式，再把字母的值代入计算。', example: '当 x=2 时，x²-3x+1=4-6+1=-1。', exercises: [
    { id: 'm_poly_9_ex1', type: 'choice', question: '当 x=2 时，x²-3x+1=？', options: ['-1', '1', '3', '-3'], answer: 0 },
    { id: 'm_poly_9_ex2', type: 'fill', question: '化简求值时，先____整式，再代入计算。', answer: '化简' },
  ] },
  { id: 'm_poly_10', chapter: '整式的加减', title: '整式加减的应用', explanation: '利用整式表示实际问题中的数量关系。', example: '长方形周长 C=2(a+b)。', exercises: [
    { id: 'm_poly_10_ex1', type: 'choice', question: '长方形周长公式是什么？', options: ['C=2(a+b)', 'C=ab', 'C=a+b', 'C=2a+b'], answer: 0 },
    { id: 'm_poly_10_ex2', type: 'fill', question: '整式可以表示实际问题中的____关系。', answer: '数量' },
  ] },

  // 第三章 一元一次方程（12）
  { id: 'm_eq_1', chapter: '一元一次方程', title: '从算式到方程', explanation: '含有未知数的等式叫做方程。只含一个未知数，且未知数次数为1的方程叫一元一次方程。', example: '2x+3=7 是一元一次方程。', exercises: [
    { id: 'm_eq_1_ex1', type: 'choice', question: '以下哪个是一元一次方程？', options: ['2x+3=7', 'x²+1=0', 'x+y=1', '1/x=2'], answer: 0 },
    { id: 'm_eq_1_ex2', type: 'fill', question: '含有未知数的____叫做方程。', answer: '等式' },
  ] },
  { id: 'm_eq_2', chapter: '一元一次方程', title: '方程的解', explanation: '使方程左右两边相等的未知数的值叫做方程的解。', example: 'x=2 是方程 2x+3=7 的解。', exercises: [
    { id: 'm_eq_2_ex1', type: 'choice', question: '方程 2x+3=7 的解是什么？', options: ['x=1', 'x=2', 'x=3', 'x=4'], answer: 1 },
    { id: 'm_eq_2_ex2', type: 'fill', question: '使方程左右两边相等的未知数的值叫做方程的____。', answer: '解' },
  ] },
  { id: 'm_eq_3', chapter: '一元一次方程', title: '等式的性质1', explanation: '等式两边加（或减）同一个数或式子，结果仍相等。', example: '若 a=b，则 a+c=b+c。', exercises: [
    { id: 'm_eq_3_ex1', type: 'choice', question: '若 a=b，则 a+c=？', options: ['b+c', 'b-c', 'bc', 'b/c'], answer: 0 },
    { id: 'm_eq_3_ex2', type: 'fill', question: '等式两边加同一个数，结果仍____。', answer: '相等' },
  ] },
  { id: 'm_eq_4', chapter: '一元一次方程', title: '等式的性质2', explanation: '等式两边乘同一个数，或除以同一个不为0的数，结果仍相等。', example: '若 a=b，则 ac=bc；a/c=b/c（c≠0）。', exercises: [
    { id: 'm_eq_4_ex1', type: 'choice', question: '若 a=b，则 ac=？', options: ['bc', 'b/c', 'b+c', 'b-c'], answer: 0 },
    { id: 'm_eq_4_ex2', type: 'fill', question: '等式两边除以同一个不为____的数，结果仍相等。', answer: '0' },
  ] },
  { id: 'm_eq_5', chapter: '一元一次方程', title: '移项', explanation: '把等式一边的某项变号后移到另一边，叫做移项。', example: '2x+3=7 → 2x=7-3 → 2x=4。', exercises: [
    { id: 'm_eq_5_ex1', type: 'choice', question: '2x+3=7，移项后得？', options: ['2x=7+3', '2x=7-3', '2x=3-7', '2x=-7-3'], answer: 1 },
    { id: 'm_eq_5_ex2', type: 'fill', question: '移项时，把等式一边的某项____后移到另一边。', answer: '变号' },
  ] },
  { id: 'm_eq_6', chapter: '一元一次方程', title: '合并同类项解方程', explanation: '通过合并同类项，把方程化为 ax=b 的形式。', example: '3x+2x=10 → 5x=10 → x=2。', exercises: [
    { id: 'm_eq_6_ex1', type: 'choice', question: '3x+2x=10，解得 x=？', options: ['1', '2', '3', '4'], answer: 1 },
    { id: 'm_eq_6_ex2', type: 'fill', question: '合并同类项后，把方程化为____的形式。', answer: 'ax=b' },
  ] },
  { id: 'm_eq_7', chapter: '一元一次方程', title: '去括号解方程', explanation: '先去括号，再移项、合并同类项、系数化为1。', example: '2(x-1)=4 → 2x-2=4 → 2x=6 → x=3。', exercises: [
    { id: 'm_eq_7_ex1', type: 'choice', question: '2(x-1)=4，解得 x=？', options: ['1', '2', '3', '4'], answer: 2 },
    { id: 'm_eq_7_ex2', type: 'fill', question: '去括号解方程的步骤：去括号，移项，合并同类项，____。', answer: '系数化为1' },
  ] },
  { id: 'm_eq_8', chapter: '一元一次方程', title: '去分母解方程', explanation: '方程两边同乘各分母的最小公倍数，消去分母。', example: 'x/2+1=3 → x+2=6 → x=4。', exercises: [
    { id: 'm_eq_8_ex1', type: 'choice', question: 'x/2+1=3，去分母后得？', options: ['x+1=6', 'x+2=6', 'x+2=3', 'x+1=3'], answer: 1 },
    { id: 'm_eq_8_ex2', type: 'fill', question: '去分母时，方程两边同乘各分母的最小____。', answer: '公倍数' },
  ] },
  { id: 'm_eq_9', chapter: '一元一次方程', title: '实际问题与一元一次方程（一）', explanation: '列方程解应用题：审、设、列、解、验、答。', example: '和差倍分问题：设未知数，找等量关系。', exercises: [
    { id: 'm_eq_9_ex1', type: 'choice', question: '列方程解应用题的步骤不包括？', options: ['审题', '设未知数', '列方程', '画图'], answer: 3 },
    { id: 'm_eq_9_ex2', type: 'fill', question: '列方程解应用题：审、设、列、解、验、____。', answer: '答' },
  ] },
  { id: 'm_eq_10', chapter: '一元一次方程', title: '实际问题与一元一次方程（二）', explanation: '行程问题：路程=速度×时间。注意相向、同向、追及。', example: '相遇问题：甲路程+乙路程=总路程。', exercises: [
    { id: 'm_eq_10_ex1', type: 'choice', question: '行程问题的基本公式是什么？', options: ['路程=速度×时间', '路程=速度+时间', '速度=路程×时间', '时间=路程×速度'], answer: 0 },
    { id: 'm_eq_10_ex2', type: 'fill', question: '相遇问题中，甲路程+乙路程=____。', answer: '总路程' },
  ] },
  { id: 'm_eq_11', chapter: '一元一次方程', title: '实际问题与一元一次方程（三）', explanation: '工程问题：工作总量=工作效率×工作时间。', example: '常设工作总量为1。', exercises: [
    { id: 'm_eq_11_ex1', type: 'choice', question: '工程问题的基本公式是什么？', options: ['工作总量=工作效率×工作时间', '工作总量=工作效率+工作时间', '工作效率=工作总量×工作时间', '工作时间=工作总量×工作效率'], answer: 0 },
    { id: 'm_eq_11_ex2', type: 'fill', question: '工程问题常设工作总量为____。', answer: '1' },
  ] },
  { id: 'm_eq_12', chapter: '一元一次方程', title: '实际问题与一元一次方程（四）', explanation: '利润问题：利润=售价-进价；利润率=利润/进价×100%。', example: '打折后的售价=标价×折扣。', exercises: [
    { id: 'm_eq_12_ex1', type: 'choice', question: '利润=？', options: ['售价-进价', '售价+进价', '售价×进价', '售价÷进价'], answer: 0 },
    { id: 'm_eq_12_ex2', type: 'fill', question: '打折后的售价=标价×____。', answer: '折扣' },
  ] },

  // 第四章 几何图形初步（12）
  { id: 'm_geo_1', chapter: '几何图形初步', title: '立体图形与平面图形', explanation: '各部分不都在同一平面内的图形叫立体图形；都在同一平面内的叫平面图形。', example: '长方体是立体图形，长方形是平面图形。', exercises: [
    { id: 'm_geo_1_ex1', type: 'choice', question: '长方体是什么图形？', options: ['立体图形', '平面图形', '曲线图形', '直线图形'], answer: 0 },
    { id: 'm_geo_1_ex2', type: 'fill', question: '各部分都在同一平面内的图形叫____图形。', answer: '平面' },
  ] },
  { id: 'm_geo_2', chapter: '几何图形初步', title: '点、线、面、体', explanation: '点动成线，线动成面，面动成体。', example: '笔尖在纸上移动形成线。', exercises: [
    { id: 'm_geo_2_ex1', type: 'choice', question: '点动成什么？', options: ['线', '面', '体', '点'], answer: 0 },
    { id: 'm_geo_2_ex2', type: 'fill', question: '线动成____。', answer: '面' },
  ] },
  { id: 'm_geo_3', chapter: '几何图形初步', title: '直线、射线、线段', explanation: '直线没有端点，向两方无限延伸；射线有一个端点；线段有两个端点。', example: '手电筒发出的光可看作射线。', exercises: [
    { id: 'm_geo_3_ex1', type: 'choice', question: '直线有几个端点？', options: ['0', '1', '2', '无数个'], answer: 0 },
    { id: 'm_geo_3_ex2', type: 'fill', question: '线段有____个端点。', answer: '2' },
  ] },
  { id: 'm_geo_4', chapter: '几何图形初步', title: '直线公理', explanation: '经过两点有一条直线，并且只有一条直线。简单说成：两点确定一条直线。', example: '木工弹墨线利用两点确定一条直线。', exercises: [
    { id: 'm_geo_4_ex1', type: 'choice', question: '两点确定几条直线？', options: ['0', '1', '2', '无数'], answer: 1 },
    { id: 'm_geo_4_ex2', type: 'fill', question: '经过两点有____条直线。', answer: '一' },
  ] },
  { id: 'm_geo_5', chapter: '几何图形初步', title: '线段的长短比较', explanation: '可用度量法或叠合法比较两条线段的长短。', example: '用尺子量出线段长度再比较。', exercises: [
    { id: 'm_geo_5_ex1', type: 'choice', question: '比较线段长短的方法不包括？', options: ['度量法', '叠合法', '估算法', '计算法'], answer: 3 },
    { id: 'm_geo_5_ex2', type: 'fill', question: '比较线段长短可用度量法或____法。', answer: '叠合' },
  ] },
  { id: 'm_geo_6', chapter: '几何图形初步', title: '线段的中点', explanation: '把线段分成两条相等线段的点叫做线段的中点。', example: '若 M 是 AB 中点，则 AM=MB=½AB。', exercises: [
    { id: 'm_geo_6_ex1', type: 'choice', question: '若 M 是 AB 中点，则 AM=？', options: ['AB', '½AB', '2AB', '¼AB'], answer: 1 },
    { id: 'm_geo_6_ex2', type: 'fill', question: '把线段分成两条相等线段的点叫做线段的____。', answer: '中点' },
  ] },
  { id: 'm_geo_7', chapter: '几何图形初步', title: '角的概念', explanation: '有公共端点的两条射线组成的图形叫做角。', example: '∠AOB 由射线 OA 和 OB 组成。', exercises: [
    { id: 'm_geo_7_ex1', type: 'choice', question: '角是由什么组成的？', options: ['两条直线', '两条射线', '两条线段', '一条射线'], answer: 1 },
    { id: 'm_geo_7_ex2', type: 'fill', question: '有公共端点的两条射线组成的图形叫做____。', answer: '角' },
  ] },
  { id: 'm_geo_8', chapter: '几何图形初步', title: '角的度量', explanation: '角的单位有度、分、秒。1°=60′，1′=60″。', example: '30°15′=30.25°。', exercises: [
    { id: 'm_geo_8_ex1', type: 'choice', question: '1°等于多少分？', options: ['10′', '30′', '60′', '100′'], answer: 2 },
    { id: 'm_geo_8_ex2', type: 'fill', question: '1′=____″。', answer: '60' },
  ] },
  { id: 'm_geo_9', chapter: '几何图形初步', title: '角的比较与运算', explanation: '角可以比较大小，也可以进行和差运算。', example: '∠AOC=∠AOB+∠BOC。', exercises: [
    { id: 'm_geo_9_ex1', type: 'choice', question: '∠AOC=∠AOB+∠BOC，这是什么运算？', options: ['乘法', '加法', '减法', '除法'], answer: 1 },
    { id: 'm_geo_9_ex2', type: 'fill', question: '角可以进行和____运算。', answer: '差' },
  ] },
  { id: 'm_geo_10', chapter: '几何图形初步', title: '角的平分线', explanation: '从一个角的顶点出发，把这个角分成两个相等的角的射线叫做角的平分线。', example: '若 OC 平分∠AOB，则∠AOC=∠BOC。', exercises: [
    { id: 'm_geo_10_ex1', type: 'choice', question: '若 OC 平分∠AOB，则∠AOC=？', options: ['∠AOB', '∠BOC', '2∠BOC', '½∠AOB'], answer: 1 },
    { id: 'm_geo_10_ex2', type: 'fill', question: '角的平分线把这个角分成两个____的角。', answer: '相等' },
  ] },
  { id: 'm_geo_11', chapter: '几何图形初步', title: '余角和补角', explanation: '若两角和为90°，则互为余角；若和为180°，则互为补角。', example: '30°与60°互余，110°与70°互补。', exercises: [
    { id: 'm_geo_11_ex1', type: 'choice', question: '30°的余角是多少？', options: ['30°', '60°', '90°', '120°'], answer: 1 },
    { id: 'm_geo_11_ex2', type: 'fill', question: '若两角和为____°，则互为补角。', answer: '180' },
  ] },
  { id: 'm_geo_12', chapter: '几何图形初步', title: '余角、补角的性质', explanation: '同角（等角）的余角相等；同角（等角）的补角相等。', example: '若∠1+∠2=90°，∠1+∠3=90°，则∠2=∠3。', exercises: [
    { id: 'm_geo_12_ex1', type: 'choice', question: '若∠1+∠2=90°，∠1+∠3=90°，则∠2=？', options: ['∠1', '∠3', '90°', '180°'], answer: 1 },
    { id: 'm_geo_12_ex2', type: 'fill', question: '同角的余角____。', answer: '相等' },
  ] },

  // 第五章 相交线与平行线（8）
  { id: 'm_parallel_1', chapter: '相交线与平行线', title: '相交线', explanation: '两条直线相交，形成对顶角和邻补角。', example: '对顶角相等，邻补角互补。', exercises: [
    { id: 'm_parallel_1_ex1', type: 'choice', question: '对顶角有什么关系？', options: ['相等', '互补', '互余', '无关'], answer: 0 },
    { id: 'm_parallel_1_ex2', type: 'fill', question: '邻补角____。', answer: '互补' },
  ] },
  { id: 'm_parallel_2', chapter: '相交线与平行线', title: '垂线', explanation: '当两条直线相交所成的四个角中有一个是直角时，两直线互相垂直。', example: '过一点有且只有一条直线与已知直线垂直。', exercises: [
    { id: 'm_parallel_2_ex1', type: 'choice', question: '过一点有几条直线与已知直线垂直？', options: ['0', '1', '2', '无数'], answer: 1 },
    { id: 'm_parallel_2_ex2', type: 'fill', question: '当两条直线相交所成的四个角中有一个是____时，两直线互相垂直。', answer: '直角' },
  ] },
  { id: 'm_parallel_3', chapter: '相交线与平行线', title: '点到直线的距离', explanation: '直线外一点到这条直线的垂线段的长度，叫做点到直线的距离。', example: '垂线段最短。', exercises: [
    { id: 'm_parallel_3_ex1', type: 'choice', question: '点到直线的距离是什么的长度？', options: ['垂线段', '斜线段', '平行线段', '任意线段'], answer: 0 },
    { id: 'm_parallel_3_ex2', type: 'fill', question: '垂线段____。', answer: '最短' },
  ] },
  { id: 'm_parallel_4', chapter: '相交线与平行线', title: '同位角、内错角、同旁内角', explanation: '两条直线被第三条直线所截形成八种角，重点掌握同位角、内错角、同旁内角。', example: '”F”型同位角，”Z”型内错角，”U”型同旁内角。', exercises: [
    { id: 'm_parallel_4_ex1', type: 'choice', question: '”Z”型是什么角？', options: ['同位角', '内错角', '同旁内角', '对顶角'], answer: 1 },
    { id: 'm_parallel_4_ex2', type: 'fill', question: '”F”型是____角。', answer: '同位' },
  ] },
  { id: 'm_parallel_5', chapter: '相交线与平行线', title: '平行线', explanation: '在同一平面内，不相交的两条直线叫做平行线。', example: '黑板的对边互相平行。', exercises: [
    { id: 'm_parallel_5_ex1', type: 'choice', question: '平行线的定义是什么？', options: ['在同一平面内，不相交的两条直线', '在同一平面内，相交的两条直线', '不在同一平面内，不相交的两条直线', '不在同一平面内，相交的两条直线'], answer: 0 },
    { id: 'm_parallel_5_ex2', type: 'fill', question: '黑板的对边互相____。', answer: '平行' },
  ] },
  { id: 'm_parallel_6', chapter: '相交线与平行线', title: '平行线的判定', explanation: '同位角相等，或内错角相等，或同旁内角互补，两直线平行。', example: '若∠1=∠2（同位角），则 a∥b。', exercises: [
    { id: 'm_parallel_6_ex1', type: 'choice', question: '若同位角相等，则两直线____。', options: ['相交', '垂直', '平行', '重合'], answer: 2 },
    { id: 'm_parallel_6_ex2', type: 'fill', question: '若同旁内角____，则两直线平行。', answer: '互补' },
  ] },
  { id: 'm_parallel_7', chapter: '相交线与平行线', title: '平行线的性质', explanation: '两直线平行，同位角相等，内错角相等，同旁内角互补。', example: '若 a∥b，则∠1=∠2（同位角）。', exercises: [
    { id: 'm_parallel_7_ex1', type: 'choice', question: '若 a∥b，则同位角____。', options: ['相等', '互补', '互余', '无关'], answer: 0 },
    { id: 'm_parallel_7_ex2', type: 'fill', question: '两直线平行，内错角____。', answer: '相等' },
  ] },
  { id: 'm_parallel_8', chapter: '相交线与平行线', title: '命题与定理', explanation: '判断一件事情的语句叫命题。经过推理证实的真命题叫定理。', example: '”对顶角相等”是定理。', exercises: [
    { id: 'm_parallel_8_ex1', type: 'choice', question: '”对顶角相等”是什么？', options: ['命题', '定理', '定义', '公理'], answer: 1 },
    { id: 'm_parallel_8_ex2', type: 'fill', question: '判断一件事情的语句叫____。', answer: '命题' },
  ] },

  // 第六章 实数初步（8）
  { id: 'm_real_1', chapter: '实数', title: '平方根', explanation: '如果一个数的平方等于a，那么这个数叫做a的平方根。', example: '4的平方根是±2。', exercises: [
    { id: 'm_real_1_ex1', type: 'choice', question: '4的平方根是多少？', options: ['2', '-2', '±2', '16'], answer: 2 },
    { id: 'm_real_1_ex2', type: 'fill', question: '如果一个数的平方等于a，那么这个数叫做a的____。', answer: '平方根' },
  ] },
  { id: 'm_real_2', chapter: '实数', title: '算术平方根', explanation: '正数a的正的平方根叫做a的算术平方根，记作√a。', example: '9的算术平方根是3。', exercises: [
    { id: 'm_real_2_ex1', type: 'choice', question: '9的算术平方根是多少？', options: ['3', '-3', '±3', '81'], answer: 0 },
    { id: 'm_real_2_ex2', type: 'fill', question: '正数a的正的平方根叫做a的____。', answer: '算术平方根' },
  ] },
  { id: 'm_real_3', chapter: '实数', title: '立方根', explanation: '如果一个数的立方等于a，那么这个数叫做a的立方根。', example: '8的立方根是2。', exercises: [
    { id: 'm_real_3_ex1', type: 'choice', question: '8的立方根是多少？', options: ['2', '-2', '4', '64'], answer: 0 },
    { id: 'm_real_3_ex2', type: 'fill', question: '如果一个数的立方等于a，那么这个数叫做a的____。', answer: '立方根' },
  ] },
  { id: 'm_real_4', chapter: '实数', title: '无理数', explanation: '无限不循环小数叫做无理数。', example: '√2，π 都是无理数。', exercises: [
    { id: 'm_real_4_ex1', type: 'choice', question: '以下哪个是无理数？', options: ['1/2', '0.5', '√2', '0.333...'], answer: 2 },
    { id: 'm_real_4_ex2', type: 'fill', question: '无限不循环小数叫做____。', answer: '无理数' },
  ] },
  { id: 'm_real_5', chapter: '实数', title: '实数的概念', explanation: '有理数和无理数统称为实数。', example: '实数与数轴上的点一一对应。', exercises: [
    { id: 'm_real_5_ex1', type: 'choice', question: '有理数和无理数统称为什么？', options: ['整数', '分数', '实数', '自然数'], answer: 2 },
    { id: 'm_real_5_ex2', type: 'fill', question: '实数与数轴上的点____。', answer: '一一对应' },
  ] },
  { id: 'm_real_6', chapter: '实数', title: '实数的分类', explanation: '实数可分为正实数、0、负实数；也可分为有理数和无理数。', example: '-√3 是负无理数。', exercises: [
    { id: 'm_real_6_ex1', type: 'choice', question: '-√3 是什么类型的数？', options: ['正有理数', '负有理数', '正无理数', '负无理数'], answer: 3 },
    { id: 'm_real_6_ex2', type: 'fill', question: '实数可分为正实数、0、____。', answer: '负实数' },
  ] },
  { id: 'm_real_7', chapter: '实数', title: '实数的大小比较', explanation: '可利用数轴、近似值等方法比较实数大小。', example: '√5 ≈ 2.236，所以 √5 > 2。', exercises: [
    { id: 'm_real_7_ex1', type: 'choice', question: '√5 与 2 哪个大？', options: ['√5', '2', '相等', '无法比较'], answer: 0 },
    { id: 'm_real_7_ex2', type: 'fill', question: '比较实数大小可利用数轴、____等方法。', answer: '近似值' },
  ] },
  { id: 'm_real_8', chapter: '实数', title: '实数的运算', explanation: '实数可进行加、减、乘、除、乘方运算，运算律同样适用。', example: '√4+√9=2+3=5。', exercises: [
    { id: 'm_real_8_ex1', type: 'choice', question: '√4+√9=？', options: ['5', '7', '13', '√13'], answer: 0 },
    { id: 'm_real_8_ex2', type: 'fill', question: '实数可进行加、减、乘、除、____运算。', answer: '乘方' },
  ] },
]
