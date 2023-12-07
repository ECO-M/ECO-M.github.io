# 简述Css3

CSS是层叠样式表（Cascading Style Sheets）的缩写，是一种用来描述网页样式和布局的语言，可以控制网页的字体、颜色、对齐方式、边框、背景等外观相关属性。它可以使网页实现更加优美和动态的效果。

在网页开发中，HTML负责网页结构和内容，而CSS则负责网页的展示效果。CSS的作用可以说是为HTML文档添加样式和布局，使之呈现更加美观、易读、易用的页面。通过CSS，可以实现网页的响应式设计，使网页在不同设备屏幕上都有较好的展示效果，增强了用户的交互体验。同时，CSS还可以提高网页的性能，通过分离样式和内容，减小页面文件的大小，使得网页的加载速度更快。

## CSS 选择器及其优先级

|    选择器    |    格式    | 优先级权重 |
|:---------:|:------:|:-----:|
| !important  |  | 10000 |
| 内联样式  |   #id | 1000  |
| id 选择器 |   .classname |  100  |
| 类选择器 |   a[ref=“eee”] |  10   |
| 属性选择器 |   li:last-child |  10   |
| 伪类选择器 |   div |   1   |
| 伪元素选择器 |   li::after |   1   |
| 相邻兄弟选择器 |   h1+p |   0   |
| 子选择器 |   ul>li |   0   |
| 后代选择器 |   li a |   0   |
| 后代选择器 |  *  |   0   |

注意事项：

- !important 声明的样式的优先级最高；<br>
- 如果优先级相同，则最后出现的样式生效；<br>
- 继承得到的样式的优先级最低；<br>
- 通用选择器（*）、子选择器（>）和相邻同胞选择器（+）并不在这四个等级中，它们的权值都为 0 ；<br>
- 样式表的来源不同时，优先级顺序为：内联样式 > 内部样式 > 外部样式 > 浏览器用户自定义样式 > 浏览器默认样式。<br>

## 对盒模型的理解

CSS3 中的盒模型有以下两种：<code>标准盒模型</code>、<code>IE 盒模型</code><br>

<code>盒模型</code>是由四个部分组成的，分别是 <code>margin</code>、<code>border</code>、<code>padding</code> 和 <code>content。</code><br>

<code>标准盒模型</code>和 IE 盒模型的区别在于设置 <code>width</code> 和 <code>height</code> 时，所对应的范围不同：<br>
标准盒模型的 width 和 height 属性的范围只包含了 <code>content</code>，<br>
IE 盒模型的 width 和 height 属性的范围包含了 <code>border</code>、<code>padding</code> 和 <code>content</code>。<br>

可以通过修改元素的 box-sizing 属性来改变元素的盒模型：<br>
box-sizing: <code>content-box</code>表示标准盒模型（默认值）<br>
box-sizing: <code>border-box</code>表示 IE 盒模型（怪异盒模型）<br>

## CSS 中可继承与不可继承属性有哪些

可继承：

<code>字体系列</code> font-family font-weight font-size

<code>文本系列</code> color text-align line-height

<code>可见系列</code> 如 visibility

::: info 由于属性太多，这里只列举常见的可继承的属性
:::

## CSS 优化和提高性能的方法有哪些？

####  加载性能：

- css 压缩, 减小文件体积。
- css 单一样式 margin-bottom:bottom； margin-left:left；比 margin:top 0 bottom 0；执行效率高。
- 减少使用 @import，建议使用 link，因为 link 在页面加载时一起加载，import 是页面加载完成之后再加载。

#### 选择器性能：

- <code>关键</code>选择器, 减少层级, 最高不超过3层
- 尽量使用<code>class</code>, 避免使用html标签选择
- 少使用<code>后代</code>选择器, 后代选择器<code>开销高</code>
- 避免对<code>可继承</code>的属性<code>重复</code>定义
- 避免使用<code>通配</code>规则, 只对需要的元素进行处理`

#### 渲染性能：

- 慎重使用高性能属性：<code>浮动</code>、<code>定位</code>。
- 尽量减少页面<code>重排</code>、<code>重绘</code>。
- 属性值为 0 时，不加单位。
- 属性值为浮动小数 0.**，可以<code>省略</code>小数点之前的 0。
- 不使用<code>@import</code>前缀，它会影响 css 的<code>加载速度</code>。

#### 可维护性：

- 抽离 <code>css</code>, 提高<code>可复用性</code>。
- 样式与内容<code>分离</code>, 提高<code>可维护性</code>。

## CSS 预处理器/后处理器是什么？为什么要使用它们？

预处理器， 如：<code>less</code>，<code>sass</code>，用来预编译 sass或者less，增加了 css 代码的<code>复用性</code>。层级，循环， 变量，循环等功能对UI组件<code>更易开发</code>与<code>维护</code>。

后处理器， 如： <code>PostCSS</code>，通常是在完成的样式表中根据 CSS 规范处理 CSS<code>有效</code>。最常做的是添加浏览器私有<code>前缀</code>，解决跨浏览器<code>兼容性</code>的问题。

使用原因：

1. 结构清晰， 便于<code>扩展</code>
2. 可以很方便的<code>屏蔽</code>浏览器私有语法的差异
3. 完美的<code>兼容</code>了 CSS 代码，可以应用到老项目中
4. 可以轻松实现<code>多重继承</code>

## link 和 @import 的区别

两者都是外部引用 CSS 的方式，它们的区别如下：<br>

<code>link</code> 是 XHTML 标签，除了加载 CSS 外，还可以定义 RSS 等其他事务；  <code>@import</code> 只能加载 CSS。<br>
<code>link</code> 引用 CSS 时，在页面载入时同时加载；  <code>@import</code> 需要页面网页完全载入以后加载。<br>
<code>link</code> 是 XHTML 标签，无兼容问题；  <code>@import</code> 是在 CSS2.1 提出的，低版本的浏览器不支持。<br>
<code>link</code> 支持使用 Javascript 控制 DOM 去改变样式；  <code>@import</code> 不支持。<br>

## transition 和 animation 的区别

<code>transition</code> 是<code>过度属性</code>，强调过度，它的实现需要触发一个事件（比如鼠标移动上去，焦点，点击等）才执行动画。它类似于 flash 的补间动画，设置一个开始关键帧，一个结束关键帧。<br>

<code>animation</code> 是<code>动画属性</code>，它的实现不需要触发事件，设定好时间之后可以自己执行，且可以循环一个动画。它也类似于 flash 的补间动画，但是它可以设置多个关键帧（用@keyframe 定义）完成动画。<br>

## display:none 与 visibility:hidden 的区别

这两个属性都是让元素隐藏，不可见。两者区别如下：

1. 在渲染树中

- <code>display:none</code> 不渲染元素
- <code>sibility:hidden</code>渲染元素，只是不可见

2. 是否是继承属性

- <code>display:none</code> 是非继承属性，子孙节点会随着父节点从渲染树消失，通过修改子孙节点的属性也无法显示；
- <code>visibility:hidden</code> 是继承属性，子孙节点消失是由于继承了hidden，通过设置visibility:visible可以让子孙节点显示；

3. 重排与重绘

- <code>display:none</code> 修改此属性，会导致整个文档重排
- <code>visibility:hidden</code> 修改此属性，只会导致当前元素重绘

## 为什么有时候⽤ translate 来改变位置而不是定位？

<code>translate</code> 不会触发浏览器重排和重绘,只会触发复合, 利用GPU效率高<br>
<code>绝对定位</code>会导致重排, 进而触发重绘, 利用CPU效率低

## 单行、多行文本溢出隐藏

#### 单行文本溢出
````
overflow: hidden;            // 溢出隐藏
text-overflow: ellipsis;      // 溢出用省略号显示
white-space: nowrap;         // 规定段落中的文本不进行换行
````
#### 多行文本溢出
````
overflow: hidden;            // 溢出隐藏
text-overflow: ellipsis;     // 溢出用省略号显示
display: -webkit-box;         // 作为弹性伸缩盒子模型显示。
-webkit-box-orient: vertical; // 设置伸缩盒子的子元素排列方式：从上到下垂直排列
-webkit-line-clamp: 3;        // 显示的行数
````
#### 对媒体查询的理解？
````
<!-- link元素中的CSS媒体查询 -->
<link rel="stylesheet" media="(max-width: 800px)" href="example.css" />
<!-- 样式表中的CSS媒体查询 -->
<style>
@media (max-width: 600px) {
  .facet_sidebar {
    display: none;
  }
}
</style>
````
简单来说，@media 可以针对不同的屏幕尺寸设置不同的样式，特别是需要设置设计响应式的页面。

## 对 CSS 工程化的理解

CSS 工程化是为了解决以下问题：<br>

宏观设计： <code>CSS</code> 代码如何组织、如何拆分、模块结构怎样设计？<br>
编码优化： 怎样写出更好的 CSS ？<br>
构建： 如何处理我的 CSS，才能让它的<code>打包</code>结果最优？<br>
可维护性： 容易变更, 容易接手

以下三个方向都是时下比较流行的、普适性非常好的 CSS 工程化实践：<br>
预处理器： Less、 Sass 等；<br>
后处理器： PostCSS<br>
Webpack loader 等 。

如何用 Webpack 实现对 CSS 的处理：<br>
css-loader： 导入 CSS 模块，对 CSS 代码进行编译处理；<br>
style-loader： 创建 style 标签，把 CSS 内容写入标签。<br>

在实际使用中，<code>css-loader 的执行顺序一定要安排在 style-loader 的前面</code>。因为只有完成了编译过程，才可以对 css 代码进行插入；若提前插入了未编译的代码，那么 webpack 是无法理解这坨东西的，它会无情报错

## 如何判断元素是否到达可视区域

#### 以图片显示为例：

- window.innerHeight是浏览器可视区的高度；
- document.body.scrollTop || document.documentElement.scrollTop是浏览器滚动的过的距离；
- imgs.offsetTop 是元素顶部距离文档顶部的高度（包括滚动条的距离）；
- 内容达到显示区域的：img.offsetTop < window.innerHeight + document.body.scrollTop;

![H5 图片](/images/zoom-in-crop-mark.webp)

## z-index 属性在什么情况下会失效

通常 <code>z-index</code> 的使用是在有两个<code>重叠</code>的标签，z-index 值越大就越是在上层。z-index 元素的 <code>position</code> 属性需要是 <code>relative</code>，<code>absolute</code> 或是 <code>fixed</code>。

z-index 属性在下列情况下会失效：

- 父元素 position 为 <code>relative</code> 时，子元素的 z-index 失效。解决：父元素 position 改为 absolute 或 static；
- 元素没有设置 position 属性为非 static 属性。解决：设置该元素的 position 属性为 relative，absolute 或是 fixed；
- 元素在设置 z-index 的同时还设置了 <code>float</code> 浮动。解决：去除 float，改为 <code>display：inline-block</code>；

## CSS3 中的 transform 有哪些属性

- translate 位移
- rotate 旋转
- scale 缩放
- skew 斜切

## 常见的 CSS 布局单位

像素px <code>基本</code>布局单位<br>

百分比% ，相对于<code>父元素</code>的<code>百分比</code>，从而实现响应式的效果。<br>

em 相对于父元素的文本的<code>倍数</code>。如果父元素未设置 <code>font-size</code>，则相对于浏览器的<code>默认</code>字体尺寸(默认 16px)。<br>

rem  相对于根元素 <code>font-size</code> 的倍数。作用：利用 rem 可以实现简单的<code>响应式</code>布局，可以利用 html 元素中字体的大小与屏幕间的比值来设置 font-size 的值，以此实现当屏幕分辨率变化时让元素也随之变化。<br>

vw： 相对于视窗的宽度，视窗宽度是 100vw；<br>

vh： 相对于视窗的高度，视窗高度是 100vh；<br>

vmin： vw 和 vh 中的较小值；<br>

vmax： vw 和 vh 中的较大值；<br>

<code>vw</code> 和百分比的区别是: <code>vw</code> 相对于视窗, <code>%</code> 相对于父元素

## px、em、rem 的区别及使用场景

- <code>px</code> 是固定的像素，一旦设置了就无法因为适应页面大小而改变。
- <code>em</code> 和 <code>rem</code> 相对于 px 更具有灵活性，他们是<code>相对</code>长度单位，其长度不是固定的，更适用于响应式布局。
- em 是相对于其<code>父元素</code>来设置字体大小，这样就会存在一个问题，进行任何元素设置，都有可能需要知道他父元素的大小。而 rem 是相对于<code>根元素</code>，这样就意味着，只需要在根元素确定一个参考值。

#### 使用场景：

- 对于只需要适配<code>少部分</code>移动设备，且分辨率对页面影响不大的，使用 <code>px</code> 即可 。
- 对于需要适配<code>各种</code>移动设备，使用 <code>rem</code>，例如需要适配 iPhone 和 iPad 等分辨率差别比较挺大的设备。

## 如何根据设计稿进行移动端适配？

移动端适配主要有<code>两个</code>维度：

适配不同像素密度，针对不同的<code>像素密度</code>，使用 CSS <code>媒体查询</code>，选择不同精度的图片，以保证图片不会<code>失真</code>；

适配不同屏幕大小，由于不同的屏幕有着不同的<code>逻辑像素</code>大小，所以如果直接使用 <code>px</code> 单位，会使得开发的页面在某一款手机上可以准确显示，但是在另一款手机上就会<code>失真</code>。为了适配不同屏幕的大小，应按照比例来还原设计稿的内容。

为了能让页面的尺寸自适应，可以使用 <code>rem</code>，<code>em</code>，<code>vw</code>，<code>vh</code> 等相对单位。

## 响应式设计的概念及基本原理

<code>响应式网站</code>是指一个网站能够<code>兼容多个终端</code>。

关于原理： 基本原理是通过媒体查询（@media）查询检测不同的设备屏幕尺寸做处理。

关于兼容： 页面头部必须有 <code>meta</code> 声明的 <code>viewport</code>。

````
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
````

## 对 BFC 的理解，如何创建 BFC

先来看两个相关的概念：

- Box: Box 是 CSS 布局的对象和基本单位，⼀个⻚⾯是由很多个 Box 组成的，这个 Box 就是我们所说的盒模型。
- Formatting context：块级上下⽂格式化，它是⻚⾯中的⼀块渲染区域，并且有⼀套渲染规则，它决定了其⼦元素将如何定位，以及和其他元素的关系和相互作⽤。

块格式化上下文（Block Formatting Context，BFC）是 Web 页面的可视化 CSS 渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。

通俗来讲：BFC 是一个独立的布局环境，可以理解为一个容器，在这个容器中按照一定规则进行物品摆放，并且不会影响其它环境中的物品。如果一个元素符合触发 BFC 的条件，则 BFC 中的元素布局不受外部影响。

#### 创建 BFC 的条件：

- 根元素：body；
- 元素设置浮动：float 除 none 以外的值；
- 元素设置绝对定位：position (absolute、fixed)；
- display 值为：inline-block、table-cell、table-caption、flex 等；
- overflow 值为：hidden、auto、scroll；

#### BFC 的特点：

- 垂直方向上，自上而下排列，和文档流的排列方式一致。
- 在 BFC 中上下相邻的两个容器的 margin 会重叠
- 计算 BFC 的高度时，需要计算浮动元素的高度
- BFC 区域不会与浮动的容器发生重叠
- BFC 是独立的容器，容器内部元素不会影响外部元素
- 每个元素的左 margin 值和容器的左 border 相接触

#### BFC 的作用：

- 解决 margin 的重叠问题：由于 BFC 是一个独立的区域，内部的元素和外部的元素互不影响，将两个元素变为两个 BFC，就解决了 margin 重叠的问题。
- 解决高度塌陷的问题：在对子元素设置浮动后，父元素会发生高度塌陷，也就是父元素的高度变为 0。解决这个问题，只需要把父元素变成一个 BFC。常用的办法是给父元素设置overflow:hidden。
- 创建自适应两栏布局：可以用来创建自适应两栏布局：左边的宽度固定，右边的宽度自适应。

````
<div class="left"></div>
<div class="right"></div>

.left{
     width: 100px;
     height: 200px;
     background: red;
     float: left;
 }
 .right{
     height: 300px;
     background: blue;
     overflow: hidden;
 }
````
左侧设置float:left，右侧设置overflow: hidden。这样右边就触发了 BFC，BFC 的区域不会与浮动元素发生重叠，所以两侧就不会发生重叠，实现了自适应两栏布局。

## 什么是 margin 重叠问题？如何解决？

问题描述：

两个块级元素的上外边距和下外边距可能会合并（折叠）为一个外边距，其大小会取其中外边距值大的那个，这种行为就是外边距折叠。需要注意的是，浮动的元素和绝对定位这种脱离文档流的元素的外边距不会折叠。重叠只会出现在垂直方向。

计算原则：

折叠合并后外边距的计算原则如下：

- 如果两者都是正数，取大者
- 如果是一正一负，取正值减去负值的绝对值
- 两个都是负值时，取绝对值大者

解决办法：<br>

对于折叠的情况，主要有两种：<code>兄弟之间重叠</code>和<code>父子之间重叠</code>

1. 兄弟之间重叠

- 底部元素变为行内盒子：display: inline-block
- 底部元素设置浮动：float
- 底部元素的 position 的值为absolute/fixed

2. 父子之间重叠

- 父元素加入：overflow: hidden
- 父元素添加透明边框：border:1px solid transparent
- 子元素变为行内盒子：display: inline-block
- 子元素加入浮动属性或定位

## 元素的层叠顺序

层叠顺序，英文称作 stacking order，表示元素发生层叠时有着特定的垂直显示顺序。下面是盒模型的层叠规则：

![H5 图片](/images/zIndexcrop-mark.webp)

对于上图，由上到下分别是：

1. 背景和边框：建立当前层叠上下文元素的背景和边框。
2. 负的 z-index：当前层叠上下文中，z-index 属性值为负的元素。
3. 块级盒：文档流内非行内级非定位后代元素。
4. 浮动盒：非定位浮动元素。
5. 行内盒：文档流内行内级非定位后代元素。
6. z-index:0：层叠级数为 0 的定位元素。
7. 正 z-index：z-index 属性值为正的定位元素。

::: tip 提示
当定位元素 z-index:auto，生成盒在当前层叠上下文中的层级为 0，不会建立新的层叠上下文，除非是根元素。
:::

## position 的属性有哪些，区别是什么

| position  |                                  有以下属性值： |   |
|:---------:|:----------------------------------------:|:-:|
|    属性值    | 概述                         |   |
| absolute  | 生成绝对定位的元素，相对于 static 定位以外的一个父元素进行定位。元素的位置通过 left、top、right、bottom 属性进行规定。 |   |
| relative  | 生成相对定位的元素，相对于其原来的位置进行定位。元素的位置通过 left、top、right、bottom 属性进行规定。 |   |
|   fixed   |  生成绝对定位的元素，指定元素相对于屏幕视⼝（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变，⽐如回到顶部的按钮⼀般都是⽤此定 | 位⽅式。 |
|  static   | 	默认值，没有定位，元素出现在正常的文档流中，会忽略 top, bottom, left, right 或者 z-index 声明，块级元素从上往下纵向排布，⾏级元素从左 |   向右排列。 |
| inherit   |  规定从父元素继承 position 属性的值  |   |

前面三者的定位方式如下：

relative： 元素的定位永远是相对于元素自身位置的，和其他元素没关系，也不会影响其他元素。

fixed： 元素的定位是相对于 window （或者 iframe）边界的，和其他元素没有关系。但是它具有破坏性，会导致其他元素位置的变化。

absolute： 元素的定位相对于前两者要复杂许多。如果为 <code>absolute</code>设置了 <code>top</code>、<code>left</code>，浏览器会根据什么去确定它的纵向和横向的偏移量呢？答案是浏览器会递归查找该元素的所有父元素，如果找到一个设置了<code>position:relative/absolute/fixed</code>的元素，就以该元素为基准定位，如果没找到，就以浏览器边界定位。

## display、float、position 的关系

1. 首先判断 display 属性是否为 none，如果为 none，则 position 和 float 属性的值不影响元素最后的表现。
2. 然后判断 position 的值是否为 absolute 或者 fixed，如果是，则 float 属性失效，并且 display 的值应该被设置为 table 或者 block，具体转换需要看初始转换值。
3. 如果 position 的值不为 absolute 或者 fixed，则判断 float 属性的值是否为 none，如果不是，则 display 的值则按上面的规则转换。注意，如果 position 的值为 relative 并且 float 属性的值存在，则 relative 相对于浮动后的最终位置定位。
4. 如果 float 的值为 none，则判断元素是否为根元素，如果是根元素则 display 属性按照上面的规则转换，如果不是，则保持指定的 display 属性值不变。

总的来说，可以把它看作是一个类似优先级的机制，<code>position:absolute</code> 和 <code>position:fixed</code>优先级最高，有它存在的时候，浮动不起作用，<code>display</code>的值也需要调整；其次，元素的 <code>float</code> 特性的值不是 <code>none</code> 的时候或者它是根元素的时候，调整 <code>display</code> 的值；最后，非根元素，并且非浮动元素，并且非绝对定位的元素，<code>display</code> 特性值同设置值。

## absolute 与 fixed 共同点与不同点

共同点：

- 改变行内元素的呈现方式，将 display 置为 <code>inline-block</code>
- 使元素<code>脱离</code>普通文档流，不再占据文档物理空间
- 覆盖<code>非定位</code>文档元素

不同点：

- <code>absolute</code> 与 <code>fixed</code> 的根元素不同，<code>absolute</code> 的根元素可以设置，<code>fixed</code> 根元素是浏览器。
- 在有滚动条的页面中，<code>absolute</code> 会跟着父元素进行移动，<code>fixed</code> 固定在页面的具体位置。

## 对 sticky 定位的理解

<code>sticky</code> 英文字面意思是粘贴，所以可以把它称之为粘性定位。语法：position: sticky; 基于用户的<code>滚动位置</code>来定位。

粘性定位的元素是依赖于用户的滚动，在 <code>position:relative</code> 与 <code>position:fixed</code> 定位之间切换。它的行为就像 <code>position:relative</code>; 而当页面滚动超出目标区域时，它的表现就像 <code>position:fixed</code>;，它会固定在目标位置。元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。这个特定阈值指的是 top, right, bottom 或 left 之一，换言之，指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。

