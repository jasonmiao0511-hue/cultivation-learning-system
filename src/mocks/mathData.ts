export interface MathTopic {
  id: string
  chapter: string
  title: string
  explanation: string
  example: string
  exercises?: { q: string; options?: string[]; answer?: number | string }[]
}

export const MATH_TOPICS: MathTopic[] = [
  // 第一章 有理数（12）
  { id: 'm_rational_1', chapter: '有理数', title: '正数和负数', explanation: '大于0的数叫做正数；在正数前加“-”号的数叫做负数。0既不是正数也不是负数。', example: '例如：+3，-5，0。' },
  { id: 'm_rational_2', chapter: '有理数', title: '有理数的概念', explanation: '整数和分数统称为有理数。整数包括正整数、0、负整数；分数包括正分数、负分数。', example: '例如：-2，0，3/4 都是有理数。' },
  { id: 'm_rational_3', chapter: '有理数', title: '数轴', explanation: '规定了原点、正方向和单位长度的直线叫做数轴。', example: '在数轴上，右边的数总比左边大。' },
  { id: 'm_rational_4', chapter: '有理数', title: '相反数', explanation: '只有符号不同的两个数互为相反数。0的相反数是0。', example: '3的相反数是-3，-5的相反数是5。' },
  { id: 'm_rational_5', chapter: '有理数', title: '绝对值', explanation: '数轴上表示数a的点与原点的距离叫做a的绝对值，记作|a|。', example: '|-4|=4，|3|=3，|0|=0。' },
  { id: 'm_rational_6', chapter: '有理数', title: '有理数的大小比较', explanation: '正数大于0，0大于负数；两个负数，绝对值大的反而小。', example: '-5 < -3，因为|-5| > |-3|。' },
  { id: 'm_rational_7', chapter: '有理数', title: '有理数的加法（一）', explanation: '同号两数相加，取相同符号，并把绝对值相加。', example: '(-3)+(-5)=-(3+5)=-8。' },
  { id: 'm_rational_8', chapter: '有理数', title: '有理数的加法（二）', explanation: '异号两数相加，取绝对值较大的加数的符号，并用较大绝对值减去较小绝对值。', example: '(-7)+4=-(7-4)=-3。' },
  { id: 'm_rational_9', chapter: '有理数', title: '有理数的减法', explanation: '减去一个数，等于加上这个数的相反数。', example: '5-(-3)=5+3=8。' },
  { id: 'm_rational_10', chapter: '有理数', title: '有理数的加减混合运算', explanation: '可统一成加法运算，再利用加法法则和运算律简化。', example: '(-2)+3-(-5)=(-2)+3+5=6。' },
  { id: 'm_rational_11', chapter: '有理数', title: '有理数的乘法', explanation: '两数相乘，同号得正，异号得负，并把绝对值相乘。', example: '(-3)×(-4)=12；(-2)×5=-10。' },
  { id: 'm_rational_12', chapter: '有理数', title: '有理数的除法', explanation: '除以一个不等于0的数，等于乘这个数的倒数。', example: '(-6)÷(-2)=3；8÷(-4)=-2。' },

  // 第二章 整式的加减（10）
  { id: 'm_poly_1', chapter: '整式的加减', title: '用字母表示数', explanation: '用字母可以表示任意数或数量关系，使表达更简洁。', example: '长方形面积 S=ab。' },
  { id: 'm_poly_2', chapter: '整式的加减', title: '单项式', explanation: '由数与字母的积组成的代数式叫做单项式。单独的一个数或字母也是单项式。', example: '3x²，-5，a 都是单项式。' },
  { id: 'm_poly_3', chapter: '整式的加减', title: '多项式', explanation: '几个单项式的和叫做多项式。多项式中次数最高的项的次数叫做多项式的次数。', example: '2x²-3x+1 是二次三项式。' },
  { id: 'm_poly_4', chapter: '整式的加减', title: '同类项', explanation: '所含字母相同，并且相同字母的指数也相同的项叫做同类项。', example: '3x²y 与 -5x²y 是同类项。' },
  { id: 'm_poly_5', chapter: '整式的加减', title: '合并同类项', explanation: '把同类项的系数相加，字母和字母的指数不变。', example: '3x+2x=(3+2)x=5x。' },
  { id: 'm_poly_6', chapter: '整式的加减', title: '去括号法则', explanation: '括号前是“+”，去掉括号后各项不变号；括号前是“-”，去掉括号后各项都变号。', example: 'a-(b-c)=a-b+c。' },
  { id: 'm_poly_7', chapter: '整式的加减', title: '添括号法则', explanation: '添括号时，括号前是“+”，括到括号里的各项不变号；括号前是“-”，括到括号里的各项都变号。', example: 'a-b+c=a-(b-c)。' },
  { id: 'm_poly_8', chapter: '整式的加减', title: '整式的加减运算', explanation: '整式加减的一般步骤：去括号，合并同类项。', example: '(3x-2)+(2x+5)=5x+3。' },
  { id: 'm_poly_9', chapter: '整式的加减', title: '化简求值', explanation: '先化简整式，再把字母的值代入计算。', example: '当 x=2 时，x²-3x+1=4-6+1=-1。' },
  { id: 'm_poly_10', chapter: '整式的加减', title: '整式加减的应用', explanation: '利用整式表示实际问题中的数量关系。', example: '长方形周长 C=2(a+b)。' },

  // 第三章 一元一次方程（12）
  { id: 'm_eq_1', chapter: '一元一次方程', title: '从算式到方程', explanation: '含有未知数的等式叫做方程。只含一个未知数，且未知数次数为1的方程叫一元一次方程。', example: '2x+3=7 是一元一次方程。' },
  { id: 'm_eq_2', chapter: '一元一次方程', title: '方程的解', explanation: '使方程左右两边相等的未知数的值叫做方程的解。', example: 'x=2 是方程 2x+3=7 的解。' },
  { id: 'm_eq_3', chapter: '一元一次方程', title: '等式的性质1', explanation: '等式两边加（或减）同一个数或式子，结果仍相等。', example: '若 a=b，则 a+c=b+c。' },
  { id: 'm_eq_4', chapter: '一元一次方程', title: '等式的性质2', explanation: '等式两边乘同一个数，或除以同一个不为0的数，结果仍相等。', example: '若 a=b，则 ac=bc；a/c=b/c（c≠0）。' },
  { id: 'm_eq_5', chapter: '一元一次方程', title: '移项', explanation: '把等式一边的某项变号后移到另一边，叫做移项。', example: '2x+3=7 → 2x=7-3 → 2x=4。' },
  { id: 'm_eq_6', chapter: '一元一次方程', title: '合并同类项解方程', explanation: '通过合并同类项，把方程化为 ax=b 的形式。', example: '3x+2x=10 → 5x=10 → x=2。' },
  { id: 'm_eq_7', chapter: '一元一次方程', title: '去括号解方程', explanation: '先去括号，再移项、合并同类项、系数化为1。', example: '2(x-1)=4 → 2x-2=4 → 2x=6 → x=3。' },
  { id: 'm_eq_8', chapter: '一元一次方程', title: '去分母解方程', explanation: '方程两边同乘各分母的最小公倍数，消去分母。', example: 'x/2+1=3 → x+2=6 → x=4。' },
  { id: 'm_eq_9', chapter: '一元一次方程', title: '实际问题与一元一次方程（一）', explanation: '列方程解应用题：审、设、列、解、验、答。', example: '和差倍分问题：设未知数，找等量关系。' },
  { id: 'm_eq_10', chapter: '一元一次方程', title: '实际问题与一元一次方程（二）', explanation: '行程问题：路程=速度×时间。注意相向、同向、追及。', example: '相遇问题：甲路程+乙路程=总路程。' },
  { id: 'm_eq_11', chapter: '一元一次方程', title: '实际问题与一元一次方程（三）', explanation: '工程问题：工作总量=工作效率×工作时间。', example: '常设工作总量为1。' },
  { id: 'm_eq_12', chapter: '一元一次方程', title: '实际问题与一元一次方程（四）', explanation: '利润问题：利润=售价-进价；利润率=利润/进价×100%。', example: '打折后的售价=标价×折扣。' },

  // 第四章 几何图形初步（12）
  { id: 'm_geo_1', chapter: '几何图形初步', title: '立体图形与平面图形', explanation: '各部分不都在同一平面内的图形叫立体图形；都在同一平面内的叫平面图形。', example: '长方体是立体图形，长方形是平面图形。' },
  { id: 'm_geo_2', chapter: '几何图形初步', title: '点、线、面、体', explanation: '点动成线，线动成面，面动成体。', example: '笔尖在纸上移动形成线。' },
  { id: 'm_geo_3', chapter: '几何图形初步', title: '直线、射线、线段', explanation: '直线没有端点，向两方无限延伸；射线有一个端点；线段有两个端点。', example: '手电筒发出的光可看作射线。' },
  { id: 'm_geo_4', chapter: '几何图形初步', title: '直线公理', explanation: '经过两点有一条直线，并且只有一条直线。简单说成：两点确定一条直线。', example: '木工弹墨线利用两点确定一条直线。' },
  { id: 'm_geo_5', chapter: '几何图形初步', title: '线段的长短比较', explanation: '可用度量法或叠合法比较两条线段的长短。', example: '用尺子量出线段长度再比较。' },
  { id: 'm_geo_6', chapter: '几何图形初步', title: '线段的中点', explanation: '把线段分成两条相等线段的点叫做线段的中点。', example: '若 M 是 AB 中点，则 AM=MB=½AB。' },
  { id: 'm_geo_7', chapter: '几何图形初步', title: '角的概念', explanation: '有公共端点的两条射线组成的图形叫做角。', example: '∠AOB 由射线 OA 和 OB 组成。' },
  { id: 'm_geo_8', chapter: '几何图形初步', title: '角的度量', explanation: '角的单位有度、分、秒。1°=60′，1′=60″。', example: '30°15′=30.25°。' },
  { id: 'm_geo_9', chapter: '几何图形初步', title: '角的比较与运算', explanation: '角可以比较大小，也可以进行和差运算。', example: '∠AOC=∠AOB+∠BOC。' },
  { id: 'm_geo_10', chapter: '几何图形初步', title: '角的平分线', explanation: '从一个角的顶点出发，把这个角分成两个相等的角的射线叫做角的平分线。', example: '若 OC 平分∠AOB，则∠AOC=∠BOC。' },
  { id: 'm_geo_11', chapter: '几何图形初步', title: '余角和补角', explanation: '若两角和为90°，则互为余角；若和为180°，则互为补角。', example: '30°与60°互余，110°与70°互补。' },
  { id: 'm_geo_12', chapter: '几何图形初步', title: '余角、补角的性质', explanation: '同角（等角）的余角相等；同角（等角）的补角相等。', example: '若∠1+∠2=90°，∠1+∠3=90°，则∠2=∠3。' },

  // 第五章 相交线与平行线（8）
  { id: 'm_parallel_1', chapter: '相交线与平行线', title: '相交线', explanation: '两条直线相交，形成对顶角和邻补角。', example: '对顶角相等，邻补角互补。' },
  { id: 'm_parallel_2', chapter: '相交线与平行线', title: '垂线', explanation: '当两条直线相交所成的四个角中有一个是直角时，两直线互相垂直。', example: '过一点有且只有一条直线与已知直线垂直。' },
  { id: 'm_parallel_3', chapter: '相交线与平行线', title: '点到直线的距离', explanation: '直线外一点到这条直线的垂线段的长度，叫做点到直线的距离。', example: '垂线段最短。' },
  { id: 'm_parallel_4', chapter: '相交线与平行线', title: '同位角、内错角、同旁内角', explanation: '两条直线被第三条直线所截形成八种角，重点掌握同位角、内错角、同旁内角。', example: '“F”型同位角，“Z”型内错角，“U”型同旁内角。' },
  { id: 'm_parallel_5', chapter: '相交线与平行线', title: '平行线', explanation: '在同一平面内，不相交的两条直线叫做平行线。', example: '黑板的对边互相平行。' },
  { id: 'm_parallel_6', chapter: '相交线与平行线', title: '平行线的判定', explanation: '同位角相等，或内错角相等，或同旁内角互补，两直线平行。', example: '若∠1=∠2（同位角），则 a∥b。' },
  { id: 'm_parallel_7', chapter: '相交线与平行线', title: '平行线的性质', explanation: '两直线平行，同位角相等，内错角相等，同旁内角互补。', example: '若 a∥b，则∠1=∠2（同位角）。' },
  { id: 'm_parallel_8', chapter: '相交线与平行线', title: '命题与定理', explanation: '判断一件事情的语句叫命题。经过推理证实的真命题叫定理。', example: '“对顶角相等”是定理。' },

  // 第六章 实数初步（8）
  { id: 'm_real_1', chapter: '实数', title: '平方根', explanation: '如果一个数的平方等于a，那么这个数叫做a的平方根。', example: '4的平方根是±2。' },
  { id: 'm_real_2', chapter: '实数', title: '算术平方根', explanation: '正数a的正的平方根叫做a的算术平方根，记作√a。', example: '9的算术平方根是3。' },
  { id: 'm_real_3', chapter: '实数', title: '立方根', explanation: '如果一个数的立方等于a，那么这个数叫做a的立方根。', example: '8的立方根是2。' },
  { id: 'm_real_4', chapter: '实数', title: '无理数', explanation: '无限不循环小数叫做无理数。', example: '√2，π 都是无理数。' },
  { id: 'm_real_5', chapter: '实数', title: '实数的概念', explanation: '有理数和无理数统称为实数。', example: '实数与数轴上的点一一对应。' },
  { id: 'm_real_6', chapter: '实数', title: '实数的分类', explanation: '实数可分为正实数、0、负实数；也可分为有理数和无理数。', example: '-√3 是负无理数。' },
  { id: 'm_real_7', chapter: '实数', title: '实数的大小比较', explanation: '可利用数轴、近似值等方法比较实数大小。', example: '√5 ≈ 2.236，所以 √5 > 2。' },
  { id: 'm_real_8', chapter: '实数', title: '实数的运算', explanation: '实数可进行加、减、乘、除、乘方运算，运算律同样适用。', example: '√4+√9=2+3=5。' },
]
