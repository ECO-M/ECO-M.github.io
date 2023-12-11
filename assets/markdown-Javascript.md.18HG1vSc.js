import{_ as s,o as n,c as e,R as a}from"./chunks/framework.T1JPdAmG.js";const p="/myBlog/assets/mark-prototype.AGccERTc.png",P=JSON.parse('{"title":"JavaScript","description":"","frontmatter":{},"headers":[],"relativePath":"markdown-Javascript.md","filePath":"markdown-Javascript.md"}'),o={name:"markdown-Javascript.md"},l=a(`<h1 id="javascript" tabindex="-1">JavaScript <a class="header-anchor" href="#javascript" aria-label="Permalink to &quot;JavaScript&quot;">​</a></h1><h2 id="深入原型到原型链" tabindex="-1">深入原型到原型链 <a class="header-anchor" href="#深入原型到原型链" aria-label="Permalink to &quot;深入原型到原型链&quot;">​</a></h2><p>构造函数创建对象，我们先使用构造函数创建一个对象：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function Person() {</span></span>
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
<span class="line"><span style="color:#24292e;">console.log(person2.name) // Pineapple</span></span></code></pre></div><p>那这个函数的 prototype 属性到底指向的是什么呢？是这个函数的原型吗？</p><p>其实，函数的 prototype 属性指向了一个对象，这个对象正是调用该构造函数而创建的实例的原型，也就是这个例子中的 person1 和 person2 的原型。</p><p>那什么是原型呢？你可以这样理解：每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型&quot;继承&quot;属性。</p><p>让我们用一张图表示构造函数和实例原型之间的关系：</p><p><img src="`+p+'" alt="H5 图片"></p>',15),t=[l];function r(c,i,d,y,h,m){return n(),e("div",null,t)}const _=s(o,[["render",r]]);export{P as __pageData,_ as default};
