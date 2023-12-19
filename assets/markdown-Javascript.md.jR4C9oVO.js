import{_ as s,o as n,c as e,R as a}from"./chunks/framework.T1JPdAmG.js";const p="/myBlog/assets/mark-prototype.fsG2itz5.png",o="/myBlog/assets/mark-proto.AGccERTc.png",l="/myBlog/assets/mark-constructor.xROAA9zJ.png",t="/myBlog/assets/mark-proto-prototype.K5_zCShs.png",r="/myBlog/assets/mark-prototypeEnd.ItaedGf0.png",P=JSON.parse('{"title":"JavaScript","description":"","frontmatter":{},"headers":[],"relativePath":"markdown-Javascript.md","filePath":"markdown-Javascript.md"}'),c={name:"markdown-Javascript.md"},i=a(`<h1 id="javascript" tabindex="-1">JavaScript <a class="header-anchor" href="#javascript" aria-label="Permalink to &quot;JavaScript&quot;">​</a></h1><h2 id="深入原型到原型链" tabindex="-1">深入原型到原型链 <a class="header-anchor" href="#深入原型到原型链" aria-label="Permalink to &quot;深入原型到原型链&quot;">​</a></h2><p>构造函数创建对象，我们先使用构造函数创建一个对象：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function Person() {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var person = new Person();</span></span>
<span class="line"><span style="color:#e1e4e8;">person.name = &#39;Pineapple&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(person.name) // Pineapple</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function Person() {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var person = new Person();</span></span>
<span class="line"><span style="color:#24292e;">person.name = &#39;Pineapple&#39;;</span></span>
<span class="line"><span style="color:#24292e;">console.log(person.name) // Pineapple</span></span></code></pre></div><p>在这个例子中，Person 就是一个构造函数，我们使用 new 创建了一个实例对象 person。</p><p>很简单吧，接下来进入正题：</p><h3 id="prototype" tabindex="-1">prototype <a class="header-anchor" href="#prototype" aria-label="Permalink to &quot;prototype&quot;">​</a></h3><hr><p>每个函数都有一个 prototype 属性，就是我们经常在各种例子中看到的那个 prototype ，比如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function Person() {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">// 虽然写在注释里，但是你要注意：</span></span>
<span class="line"><span style="color:#e1e4e8;">// prototype是函数才会有的属性</span></span>
<span class="line"><span style="color:#e1e4e8;">Person.prototype.name = &#39;Pineapple&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">var person1 = new Person();</span></span>
<span class="line"><span style="color:#e1e4e8;">var person2 = new Person();</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(person1.name) // Pineapple</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(person2.name) // Pineapple</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function Person() {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">// 虽然写在注释里，但是你要注意：</span></span>
<span class="line"><span style="color:#24292e;">// prototype是函数才会有的属性</span></span>
<span class="line"><span style="color:#24292e;">Person.prototype.name = &#39;Pineapple&#39;;</span></span>
<span class="line"><span style="color:#24292e;">var person1 = new Person();</span></span>
<span class="line"><span style="color:#24292e;">var person2 = new Person();</span></span>
<span class="line"><span style="color:#24292e;">console.log(person1.name) // Pineapple</span></span>
<span class="line"><span style="color:#24292e;">console.log(person2.name) // Pineapple</span></span></code></pre></div><p>那这个函数的 prototype 属性到底指向的是什么呢？是这个函数的原型吗？</p><p>其实，函数的 prototype 属性指向了一个对象，这个对象正是调用该构造函数而创建的实例的原型，也就是这个例子中的 person1 和 person2 的原型。</p><p>那什么是原型呢？你可以这样理解：每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型&quot;继承&quot;属性。</p><p>让我们用一张图表示构造函数和实例原型之间的关系：</p><p><img src="`+p+`" alt="H5 图片"></p><p>在这张图中我们用 Object.prototype 表示实例原型。</p><p>那么我们该怎么表示实例与实例原型，也就是 person 和 Person.prototype 之间的关系呢，这时候我们就要讲到第二个属性：</p><h3 id="proto" tabindex="-1">__<em>proto__</em> <a class="header-anchor" href="#proto" aria-label="Permalink to &quot;\\_\\__proto\\_\\__&quot;">​</a></h3><hr><p>这是每一个JavaScript对象(除了 null )都具有的一个属性，叫__proto__，这个属性会指向该对象的原型。</p><p>为了证明这一点,我们可以在火狐或者谷歌中输入：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function Person() {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var person = new Person();</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(person.__proto__ === Person.prototype); // true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function Person() {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var person = new Person();</span></span>
<span class="line"><span style="color:#24292e;">console.log(person.__proto__ === Person.prototype); // true</span></span></code></pre></div><p>于是我们更新下关系图：</p><p><img src="`+o+`" alt="H5 图片"></p><p>既然实例对象和构造函数都可以指向原型，那么原型是否有属性指向构造函数或者实例呢？</p><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><hr><p>指向实例倒是没有，因为一个构造函数可以生成多个实例，但是原型指向构造函数倒是有的，这就要讲到第三个属性：constructor，每个原型都有一个 constructor 属性指向关联的构造函数。</p><p>为了验证这一点，我们可以尝试：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function Person() {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(Person === Person.prototype.constructor); // true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function Person() {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">console.log(Person === Person.prototype.constructor); // true</span></span></code></pre></div><p>所以再更新下关系图： <img src="`+l+`" alt="H5 图片"> 综上我们已经得出：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function Person() {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">var person = new Person();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(person.__proto__ == Person.prototype) // true</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(Person.prototype.constructor == Person) // true</span></span>
<span class="line"><span style="color:#e1e4e8;">// 顺便学习一个ES5的方法,可以获得对象的原型</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(Object.getPrototypeOf(person) === Person.prototype) // true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function Person() {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">var person = new Person();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">console.log(person.__proto__ == Person.prototype) // true</span></span>
<span class="line"><span style="color:#24292e;">console.log(Person.prototype.constructor == Person) // true</span></span>
<span class="line"><span style="color:#24292e;">// 顺便学习一个ES5的方法,可以获得对象的原型</span></span>
<span class="line"><span style="color:#24292e;">console.log(Object.getPrototypeOf(person) === Person.prototype) // true</span></span></code></pre></div><p>了解了构造函数、实例原型、和实例之间的关系，接下来我们讲讲实例和原型的关系：</p><h3 id="实例与原型" tabindex="-1">实例与原型 <a class="header-anchor" href="#实例与原型" aria-label="Permalink to &quot;实例与原型&quot;">​</a></h3><hr><p>当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。</p><p>举个例子：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function Person() {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Person.prototype.name = &#39;Kevin&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">var person = new Person();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">person.name = &#39;Daisy&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(person.name) // Daisy</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">delete person.name;</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(person.name) // Kevin</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function Person() {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Person.prototype.name = &#39;Kevin&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">var person = new Person();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">person.name = &#39;Daisy&#39;;</span></span>
<span class="line"><span style="color:#24292e;">console.log(person.name) // Daisy</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">delete person.name;</span></span>
<span class="line"><span style="color:#24292e;">console.log(person.name) // Kevin</span></span></code></pre></div><p>在这个例子中，我们给实例对象 person 添加了 name 属性，当我们打印 person.name 的时候，结果自然为 Daisy。</p><p>但是当我们删除了 person 的 name 属性时，读取 person.name，从 person 对象中找不到 name 属性就会从 person 的原型也就是 person.<strong>proto</strong> ，也就是 Person.prototype中查找，幸运的是我们找到了 name 属性，结果为 Kevin。</p><p>但是万一还没有找到呢？原型的原型又是什么呢？</p><h3 id="原型的原型" tabindex="-1">原型的原型 <a class="header-anchor" href="#原型的原型" aria-label="Permalink to &quot;原型的原型&quot;">​</a></h3><hr><p>在前面，我们已经讲了原型也是一个对象，既然是对象，我们就可以用最原始的方式创建它，那就是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var obj = new Object();</span></span>
<span class="line"><span style="color:#e1e4e8;">obj.name = &#39;Kevin&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(obj.name) // Kevin</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var obj = new Object();</span></span>
<span class="line"><span style="color:#24292e;">obj.name = &#39;Kevin&#39;</span></span>
<span class="line"><span style="color:#24292e;">console.log(obj.name) // Kevin</span></span></code></pre></div><p>其实原型对象就是通过 Object 构造函数生成的，结合之前所讲，实例的 <strong>proto</strong> 指向构造函数的 prototype ，所以我们再更新下关系图： <img src="`+t+'" alt="H5 图片"></p><h3 id="原型链" tabindex="-1">原型链 <a class="header-anchor" href="#原型链" aria-label="Permalink to &quot;原型链&quot;">​</a></h3><p>那 Object.prototype 的原型呢？</p><p>null，我们可以打印：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">console.log(Object.prototype.__proto__ === null) // true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">console.log(Object.prototype.__proto__ === null) // true</span></span></code></pre></div><p>然而 null 究竟代表了什么呢？</p><p>引用阮一峰老师的 《undefined与null的区别》 就是：</p><blockquote><p>null 表示“没有对象”，即该处不应该有值。</p></blockquote><p>所以 Object.prototype.<strong>proto</strong> 的值为 null 跟 Object.prototype 没有原型，其实表达了一个意思。</p><p>所以查找属性的时候查到 Object.prototype 就可以停止查找了。</p><p>最后一张关系图也可以更新为：</p><p><img src="'+r+`" alt="H5 图片"></p><p>顺便还要说一下，图中由相互关联的原型组成的链状结构就是原型链，也就是蓝色的这条线。</p><h3 id="补充" tabindex="-1">补充 <a class="header-anchor" href="#补充" aria-label="Permalink to &quot;补充&quot;">​</a></h3><hr><p>最后，补充三点大家可能不会注意的地方：</p><h4 id="constructor-1" tabindex="-1">constructor <a class="header-anchor" href="#constructor-1" aria-label="Permalink to &quot;constructor&quot;">​</a></h4><p>首先是 constructor 属性，我们看个例子：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function Person() {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var person = new Person();</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(person.constructor === Person); // true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function Person() {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var person = new Person();</span></span>
<span class="line"><span style="color:#24292e;">console.log(person.constructor === Person); // true</span></span></code></pre></div><p>当获取 person.constructor 时，其实 person 中并没有 constructor 属性,当不能读取到constructor 属性时，会从 person 的原型也就是 Person.prototype 中读取，正好原型中有该属性，所以：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">person.constructor === Person.prototype.constructor</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">person.constructor === Person.prototype.constructor</span></span></code></pre></div><h4 id="proto-1" tabindex="-1">__<em>proto__</em> <a class="header-anchor" href="#proto-1" aria-label="Permalink to &quot;\\_\\__proto\\_\\__&quot;">​</a></h4><p>其次是 <strong>proto</strong> ，绝大部分浏览器都支持这个非标准的方法访问原型，然而它并不存在于 Person.prototype 中，实际上，它是来自于 Object.prototype ，与其说是一个属性，不如说是一个 getter/setter，当使用 obj.<strong>proto</strong> 时，可以理解成返回了 Object.getPrototypeOf(obj)。</p>`,68),y=[i];function d(u,h,g,v,m,b){return n(),e("div",null,y)}const k=s(c,[["render",d]]);export{P as __pageData,k as default};
