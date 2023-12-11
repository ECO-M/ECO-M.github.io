import{_ as s,o as n,c as a,R as e}from"./chunks/framework.T1JPdAmG.js";const l="/myBlog/assets/zoom-mark.3ZNWT0sK.webp",t="/myBlog/assets/mark-input.J77_sMD4.webp",p="/myBlog/assets/mark-search._SGO0a-F.webp",o="/myBlog/assets/mark-localStorage.hcpc9aqp.webp",v=JSON.parse('{"title":"简述Html5","description":"","frontmatter":{},"headers":[],"relativePath":"markdown-html5.md","filePath":"markdown-html5.md"}'),c={name:"markdown-html5.md"},i=e(`<h1 id="简述html5" tabindex="-1">简述Html5 <a class="header-anchor" href="#简述html5" aria-label="Permalink to &quot;简述Html5&quot;">​</a></h1><p>HTML 的最新稳定版本，HTML5 将 HTML 从用于构造一个文档的一个简单标记，到一个完整的应用程序开发平台。除其他功能外，HTML5 还包括新元素和用于增强存储、多媒体和硬件访问的JavaScript APIs 。</p><h2 id="语义化标签" tabindex="-1">语义化标签 <a class="header-anchor" href="#语义化标签" aria-label="Permalink to &quot;语义化标签&quot;">​</a></h2><p>以前布局，我们基本都用 div 来做，div 对于搜索引擎来说是没有语义的</p><p>HTML5 新增了语义化标签：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;header&gt; ：头部标签</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;nav&gt; ：导航标签</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;article&gt; ：内容标签</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;section&gt; ：定义文档某个区域，可看成一个大的 div</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;aside&gt; ：侧边栏标签</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;footer&gt; ：尾部标签</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;header&gt; ：头部标签</span></span>
<span class="line"><span style="color:#24292e;">&lt;nav&gt; ：导航标签</span></span>
<span class="line"><span style="color:#24292e;">&lt;article&gt; ：内容标签</span></span>
<span class="line"><span style="color:#24292e;">&lt;section&gt; ：定义文档某个区域，可看成一个大的 div</span></span>
<span class="line"><span style="color:#24292e;">&lt;aside&gt; ：侧边栏标签</span></span>
<span class="line"><span style="color:#24292e;">&lt;footer&gt; ：尾部标签</span></span></code></pre></div><p>result</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;title&gt;语义化标签&lt;/title&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/head&gt;    </span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    body {</span></span>
<span class="line"><span style="color:#e1e4e8;">        margin: 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">        padding: 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">        width: 340px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    header, nav {</span></span>
<span class="line"><span style="color:#e1e4e8;">        height: 45px;</span></span>
<span class="line"><span style="color:#e1e4e8;">        line-height: 45px;</span></span>
<span class="line"><span style="color:#e1e4e8;">        background-color: #BAD585;</span></span>
<span class="line"><span style="color:#e1e4e8;">        border-radius: 6px;</span></span>
<span class="line"><span style="color:#e1e4e8;">        margin-bottom: 10px;</span></span>
<span class="line"><span style="color:#e1e4e8;">        text-align: center;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    article {</span></span>
<span class="line"><span style="color:#e1e4e8;">        float: left;</span></span>
<span class="line"><span style="color:#e1e4e8;">        width: 190px;</span></span>
<span class="line"><span style="color:#e1e4e8;">        height: 160px;</span></span>
<span class="line"><span style="color:#e1e4e8;">        background-color: #BAD585;</span></span>
<span class="line"><span style="color:#e1e4e8;">        border-radius: 6px;</span></span>
<span class="line"><span style="color:#e1e4e8;">        margin: 0 10px 10px 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">        padding: 20px 0 0 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">        text-align: center;</span></span>
<span class="line"><span style="color:#e1e4e8;">        box-sizing: border-box;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    article section {</span></span>
<span class="line"><span style="color:#e1e4e8;">        width: 170px;</span></span>
<span class="line"><span style="color:#e1e4e8;">        height: 40px;</span></span>
<span class="line"><span style="color:#e1e4e8;">        background-color: #D9EBB7;</span></span>
<span class="line"><span style="color:#e1e4e8;">        border-radius: 6px;</span></span>
<span class="line"><span style="color:#e1e4e8;">        text-align: center;</span></span>
<span class="line"><span style="color:#e1e4e8;">        margin: 30px auto 0 auto;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    aside {</span></span>
<span class="line"><span style="color:#e1e4e8;">        float: left;</span></span>
<span class="line"><span style="color:#e1e4e8;">        width: 140px;</span></span>
<span class="line"><span style="color:#e1e4e8;">        height: 160px;</span></span>
<span class="line"><span style="color:#e1e4e8;">        background-color: #BAD585;</span></span>
<span class="line"><span style="color:#e1e4e8;">        padding: 20px 0 0 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">        border-radius: 6px;</span></span>
<span class="line"><span style="color:#e1e4e8;">        margin-bottom: 10px;</span></span>
<span class="line"><span style="color:#e1e4e8;">        text-align: center;</span></span>
<span class="line"><span style="color:#e1e4e8;">        box-sizing: border-box;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    footer {</span></span>
<span class="line"><span style="color:#e1e4e8;">        width: 100%;</span></span>
<span class="line"><span style="color:#e1e4e8;">        height: 45px;</span></span>
<span class="line"><span style="color:#e1e4e8;">        line-height: 45px;</span></span>
<span class="line"><span style="color:#e1e4e8;">        background-color: #BAD585;</span></span>
<span class="line"><span style="color:#e1e4e8;">        border-radius: 6px;</span></span>
<span class="line"><span style="color:#e1e4e8;">        margin-bottom: 10px;</span></span>
<span class="line"><span style="color:#e1e4e8;">        text-align: center;</span></span>
<span class="line"><span style="color:#e1e4e8;">        float: left;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;header&gt;&amp;lt;header&amp;gt;&lt;/header&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;nav&gt;&amp;lt;nav&amp;gt;&lt;/nav&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;article&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &amp;lt;article&amp;gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;section&gt;&amp;lt;section&amp;gt;&lt;/section&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/article&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;aside&gt;&amp;lt;aside&amp;gt;&lt;/aside&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;footer&gt;&amp;lt;footer&amp;gt;&lt;/footer&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;title&gt;语义化标签&lt;/title&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/head&gt;    </span></span>
<span class="line"><span style="color:#24292e;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;">    body {</span></span>
<span class="line"><span style="color:#24292e;">        margin: 0;</span></span>
<span class="line"><span style="color:#24292e;">        padding: 0;</span></span>
<span class="line"><span style="color:#24292e;">        width: 340px;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    header, nav {</span></span>
<span class="line"><span style="color:#24292e;">        height: 45px;</span></span>
<span class="line"><span style="color:#24292e;">        line-height: 45px;</span></span>
<span class="line"><span style="color:#24292e;">        background-color: #BAD585;</span></span>
<span class="line"><span style="color:#24292e;">        border-radius: 6px;</span></span>
<span class="line"><span style="color:#24292e;">        margin-bottom: 10px;</span></span>
<span class="line"><span style="color:#24292e;">        text-align: center;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    article {</span></span>
<span class="line"><span style="color:#24292e;">        float: left;</span></span>
<span class="line"><span style="color:#24292e;">        width: 190px;</span></span>
<span class="line"><span style="color:#24292e;">        height: 160px;</span></span>
<span class="line"><span style="color:#24292e;">        background-color: #BAD585;</span></span>
<span class="line"><span style="color:#24292e;">        border-radius: 6px;</span></span>
<span class="line"><span style="color:#24292e;">        margin: 0 10px 10px 0;</span></span>
<span class="line"><span style="color:#24292e;">        padding: 20px 0 0 0;</span></span>
<span class="line"><span style="color:#24292e;">        text-align: center;</span></span>
<span class="line"><span style="color:#24292e;">        box-sizing: border-box;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    article section {</span></span>
<span class="line"><span style="color:#24292e;">        width: 170px;</span></span>
<span class="line"><span style="color:#24292e;">        height: 40px;</span></span>
<span class="line"><span style="color:#24292e;">        background-color: #D9EBB7;</span></span>
<span class="line"><span style="color:#24292e;">        border-radius: 6px;</span></span>
<span class="line"><span style="color:#24292e;">        text-align: center;</span></span>
<span class="line"><span style="color:#24292e;">        margin: 30px auto 0 auto;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    aside {</span></span>
<span class="line"><span style="color:#24292e;">        float: left;</span></span>
<span class="line"><span style="color:#24292e;">        width: 140px;</span></span>
<span class="line"><span style="color:#24292e;">        height: 160px;</span></span>
<span class="line"><span style="color:#24292e;">        background-color: #BAD585;</span></span>
<span class="line"><span style="color:#24292e;">        padding: 20px 0 0 0;</span></span>
<span class="line"><span style="color:#24292e;">        border-radius: 6px;</span></span>
<span class="line"><span style="color:#24292e;">        margin-bottom: 10px;</span></span>
<span class="line"><span style="color:#24292e;">        text-align: center;</span></span>
<span class="line"><span style="color:#24292e;">        box-sizing: border-box;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    footer {</span></span>
<span class="line"><span style="color:#24292e;">        width: 100%;</span></span>
<span class="line"><span style="color:#24292e;">        height: 45px;</span></span>
<span class="line"><span style="color:#24292e;">        line-height: 45px;</span></span>
<span class="line"><span style="color:#24292e;">        background-color: #BAD585;</span></span>
<span class="line"><span style="color:#24292e;">        border-radius: 6px;</span></span>
<span class="line"><span style="color:#24292e;">        margin-bottom: 10px;</span></span>
<span class="line"><span style="color:#24292e;">        text-align: center;</span></span>
<span class="line"><span style="color:#24292e;">        float: left;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;header&gt;&amp;lt;header&amp;gt;&lt;/header&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;nav&gt;&amp;lt;nav&amp;gt;&lt;/nav&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;article&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &amp;lt;article&amp;gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;section&gt;&amp;lt;section&amp;gt;&lt;/section&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/article&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;aside&gt;&amp;lt;aside&amp;gt;&lt;/aside&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;footer&gt;&amp;lt;footer&amp;gt;&lt;/footer&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/html&gt;</span></span></code></pre></div><p><img src="`+l+`" alt="H5 图片"></p><p>注意：</p><ul><li>在没有 css 时，页面也能呈现较好的内容结构</li><li>SEO 友好，爬虫依赖标签来确定上下文及关键字的权重<br></li><li>这种语义化标准主要是针对搜索引擎的<br></li><li>这些新标签页面中可以使用多次<br></li><li>在 IE9 中，需要把这些元素转换为块级元素<br></li><li>其实，我们移动端更喜欢使用这些标签<br></li><li>可维护性，可读性；看到对应的标签就知道大致包含的内容了，维护起来自然也方便许多</li></ul><h2 id="多媒体标签" tabindex="-1">多媒体标签 <a class="header-anchor" href="#多媒体标签" aria-label="Permalink to &quot;多媒体标签&quot;">​</a></h2><p>新增的多媒体标签主要包含两个：</p><ol><li>音频：<code>&lt;audio&gt;</code></li><li>视频：<code>&lt;video&gt;</code></li></ol><p>使用它们可以很方便地在页面中嵌入音频和视频，而不再去使用 flash 和其他浏览器插件</p><p><strong>video</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;video src=&quot;文件地址&quot; controls=&quot;controls&quot;&gt;&lt;/video&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;video src=&quot;文件地址&quot; controls=&quot;controls&quot;&gt;&lt;/video&gt;</span></span></code></pre></div><p>考虑到兼容性，可以这样写</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;video controls=&quot;controls&quot; width=&quot;300&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;source src=&quot;movie.ogg&quot; type=&quot;video/ogg&quot; &gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;source src=&quot;movie.mp4&quot; type=&quot;video/mp4&quot; &gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	您的浏览器暂不支持 &lt;video&gt; 标签播放视频</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/video&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;video controls=&quot;controls&quot; width=&quot;300&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;source src=&quot;movie.ogg&quot; type=&quot;video/ogg&quot; &gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;source src=&quot;movie.mp4&quot; type=&quot;video/mp4&quot; &gt;</span></span>
<span class="line"><span style="color:#24292e;">	您的浏览器暂不支持 &lt;video&gt; 标签播放视频</span></span>
<span class="line"><span style="color:#24292e;">&lt;/video&gt;</span></span></code></pre></div><p>result：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;title&gt;video标签&lt;/title&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">   video {</span></span>
<span class="line"><span style="color:#e1e4e8;">     width: 100%;</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;video src=&quot;https://cdn.cnbj1.fds.api.mi-img.com/product-images/mi12sltli3b/video1-2.mp4&quot; autoplay=&quot;autoplay&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">        muted=&quot;muted&quot; controls=&quot;controls&quot; loop=&quot;loop&quot;&gt;&lt;/video&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;title&gt;video标签&lt;/title&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;">   video {</span></span>
<span class="line"><span style="color:#24292e;">     width: 100%;</span></span>
<span class="line"><span style="color:#24292e;">   }</span></span>
<span class="line"><span style="color:#24292e;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;video src=&quot;https://cdn.cnbj1.fds.api.mi-img.com/product-images/mi12sltli3b/video1-2.mp4&quot; autoplay=&quot;autoplay&quot;</span></span>
<span class="line"><span style="color:#24292e;">        muted=&quot;muted&quot; controls=&quot;controls&quot; loop=&quot;loop&quot;&gt;&lt;/video&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;/html&gt;</span></span></code></pre></div><p><strong>audio</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;audio src=&quot;文件地址&quot; controls=&quot;controls&quot;&gt;&lt;/audio &gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;audio src=&quot;文件地址&quot; controls=&quot;controls&quot;&gt;&lt;/audio &gt;</span></span></code></pre></div><p>考虑到兼容性，可以这样写</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;audio controls=&quot;controls&quot; width=&quot;300&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;source src=&quot;music.mp3&quot; type=&quot;audio/mpeg&quot; &gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;source src=&quot;music.ogg&quot; type=&quot;audio/ogg&quot; &gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	您的浏览器暂不支持 &lt;audio &gt; 标签播放音频</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/audio &gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;audio controls=&quot;controls&quot; width=&quot;300&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;source src=&quot;music.mp3&quot; type=&quot;audio/mpeg&quot; &gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;source src=&quot;music.ogg&quot; type=&quot;audio/ogg&quot; &gt;</span></span>
<span class="line"><span style="color:#24292e;">	您的浏览器暂不支持 &lt;audio &gt; 标签播放音频</span></span>
<span class="line"><span style="color:#24292e;">&lt;/audio &gt;</span></span></code></pre></div><p>result：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;title&gt;音频标签audio&lt;/title&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;h3&gt;Shadow of the sun&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;audio</span></span>
<span class="line"><span style="color:#e1e4e8;">        src=&quot;https://webfs.ali.kugou.com/202208151945/861843bcad9089cb46825a6ff2a40868/G242/M09/1B/01/0pQEAF-NTZKAP-HiACOcMEe9M0M964.mp3&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">        autoplay=&quot;autoplay&quot; controls=&quot;controls&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/audio&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;title&gt;音频标签audio&lt;/title&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;h3&gt;Shadow of the sun&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;audio</span></span>
<span class="line"><span style="color:#24292e;">        src=&quot;https://webfs.ali.kugou.com/202208151945/861843bcad9089cb46825a6ff2a40868/G242/M09/1B/01/0pQEAF-NTZKAP-HiACOcMEe9M0M964.mp3&quot;</span></span>
<span class="line"><span style="color:#24292e;">        autoplay=&quot;autoplay&quot; controls=&quot;controls&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/audio&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;/html&gt;</span></span></code></pre></div><p>温馨提示：谷歌浏览器把自动播放禁止了，目前还无法解决，等到学习 js 才能解决</p><p>多媒体标签总结：</p><ul><li>音频标签和视频标签使用方式基本一致<br></li><li>浏览器支持情况不同<br></li><li>谷歌浏览器把视频和音频自动播放禁止了<br></li><li>我们可以给视频标签添加 muted 属性来静音播放视频，音频不可以（可以通过 js 解决）<br></li><li>视频标签是重点，我们经常设置自动播放，不使用 controls 控件、循环和设置大小属性<br></li></ul><h2 id="新增的input类型" tabindex="-1">新增的input类型 <a class="header-anchor" href="#新增的input类型" aria-label="Permalink to &quot;新增的input类型&quot;">​</a></h2><p>为了让开发者更加方便地创建各种类型的表单控件，同时也能更好地满足用户的输入需求，HTML5 对 input 的 type 进行了拓展，主要有以下常用类型</p><ul><li>color 色值选择器</li><li>date、datetime、month、week、time 等时间相关的选择；在对样式要求不高时，可以作为选择</li><li>email 地址输入域</li><li>search 搜索域，与 datalist 配合使用</li><li>tel 电话号码输入</li><li>number 数字输入</li><li>range 范围选择器</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;title&gt;新增input表单&lt;/title&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;form action=&quot;&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;li&gt;邮箱：&lt;input type=&quot;email&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;li&gt;网址：&lt;input type=&quot;url&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;li&gt;日期：&lt;input type=&quot;date&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;li&gt;时间：&lt;input type=&quot;time&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;li&gt;数字：&lt;input type=&quot;number&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;li&gt;手机号码：&lt;input type=&quot;tel&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;li&gt;搜索：&lt;input type=&quot;search&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;li&gt;颜色：&lt;input type=&quot;color&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;li&gt;&lt;input type=&quot;submit&quot; value=&quot;提交&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/form&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;title&gt;新增input表单&lt;/title&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;form action=&quot;&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;li&gt;邮箱：&lt;input type=&quot;email&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;li&gt;网址：&lt;input type=&quot;url&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;li&gt;日期：&lt;input type=&quot;date&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;li&gt;时间：&lt;input type=&quot;time&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;li&gt;数字：&lt;input type=&quot;number&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;li&gt;手机号码：&lt;input type=&quot;tel&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;li&gt;搜索：&lt;input type=&quot;search&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;li&gt;颜色：&lt;input type=&quot;color&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;li&gt;&lt;input type=&quot;submit&quot; value=&quot;提交&quot;&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/form&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/html&gt;</span></span></code></pre></div><p><img src="`+t+`" alt="H5 图片"></p><p>重点记住：number、tel、search 这三个</p><h2 id="新增的表单属性" tabindex="-1">新增的表单属性 <a class="header-anchor" href="#新增的表单属性" aria-label="Permalink to &quot;新增的表单属性&quot;">​</a></h2><p>可以通过以下设置方式修改 placeholder 里面的字体颜色：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">input::placeholder {</span></span>
<span class="line"><span style="color:#e1e4e8;">	color: cyan;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">input::placeholder {</span></span>
<span class="line"><span style="color:#24292e;">	color: cyan;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>result：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;title&gt;新增表单属性&lt;/title&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        input::placeholder {</span></span>
<span class="line"><span style="color:#e1e4e8;">            color: cyan;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;form action=&quot;&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;input type=&quot;search&quot; name=&quot;&quot; id=&quot;&quot; required=&quot;required&quot; placeholder=&quot;请输入搜索内容&quot; autofocus=&quot;autofocus&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">            autocomplete=&quot;off&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;input type=&quot;file&quot; name=&quot;&quot; id=&quot;&quot; multiple=&quot;multiple&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;input type=&quot;submit&quot; value=&quot;提交&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/form&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;title&gt;新增表单属性&lt;/title&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;">        input::placeholder {</span></span>
<span class="line"><span style="color:#24292e;">            color: cyan;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/style&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;form action=&quot;&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;input type=&quot;search&quot; name=&quot;&quot; id=&quot;&quot; required=&quot;required&quot; placeholder=&quot;请输入搜索内容&quot; autofocus=&quot;autofocus&quot;</span></span>
<span class="line"><span style="color:#24292e;">            autocomplete=&quot;off&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;input type=&quot;file&quot; name=&quot;&quot; id=&quot;&quot; multiple=&quot;multiple&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;input type=&quot;submit&quot; value=&quot;提交&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/form&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/html&gt;</span></span></code></pre></div><p><img src="`+p+`" alt="H5 图片"></p><h2 id="web-storage" tabindex="-1">Web Storage <a class="header-anchor" href="#web-storage" aria-label="Permalink to &quot;Web Storage&quot;">​</a></h2><p>HTML5 新增了 localStorage、sessionStorage 用来缓存数据；使用时非常简单</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">localStorage.setItem(&quot;name&quot;, &quot;value&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">localStorage.getItem(&quot;name&quot;); // =&gt; &#39;value&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">localStorage.removeItem(&quot;name&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">localStorage.clear(); // 删除所有数据</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">sessionStorage.setItem(&quot;name&quot;, &quot;value&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">sessionStorage.setItem(&quot;name&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">sessionStorage.setItem(&quot;name&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">sessionStorage.clear();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">localStorage.setItem(&quot;name&quot;, &quot;value&quot;);</span></span>
<span class="line"><span style="color:#24292e;">localStorage.getItem(&quot;name&quot;); // =&gt; &#39;value&#39;</span></span>
<span class="line"><span style="color:#24292e;">localStorage.removeItem(&quot;name&quot;);</span></span>
<span class="line"><span style="color:#24292e;">localStorage.clear(); // 删除所有数据</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">sessionStorage.setItem(&quot;name&quot;, &quot;value&quot;);</span></span>
<span class="line"><span style="color:#24292e;">sessionStorage.setItem(&quot;name&quot;);</span></span>
<span class="line"><span style="color:#24292e;">sessionStorage.setItem(&quot;name&quot;);</span></span>
<span class="line"><span style="color:#24292e;">sessionStorage.clear();</span></span></code></pre></div><h3 id="与-cookie-对比" tabindex="-1">与 cookie 对比 <a class="header-anchor" href="#与-cookie-对比" aria-label="Permalink to &quot;与 cookie 对比&quot;">​</a></h3><hr><p>在这之前，我们一般通过 cookie 来存储数据，限制非常严重</p><ul><li>cookie 只有 4k，而 Web Storage 约为 5M</li><li>cookie 中的信息会发送到服务器，过大会造成负担；老项目的性能优化，cookie 的缩减是很重要的一项</li><li>操作简单，cookie 是一串字符串，每次都需要从字符串中解析，尽管我们可以封装 cookieUtils，但 Web Storage 则天然具有简单的 API</li><li>查询快，如上 cookie 需要解析字符串，而 Web Storage 则使用散列存储，快速查询</li></ul><h3 id="localstorage-与-sessionstorage" tabindex="-1">localStorage 与 sessionStorage <a class="header-anchor" href="#localstorage-与-sessionstorage" aria-label="Permalink to &quot;localStorage 与 sessionStorage&quot;">​</a></h3><hr><p>浏览器可以通过 localStorage 与 sessionStorage 安全地存储键值对；内容会保存在同一个源下的 Storage 对象中</p><p><img src="`+o+`" alt="H5 图片"></p><p>localStorage 中存储的数据除非主动清除，如清除浏览器缓存、上图 Application 清除 Storage、调用 clear 代码清除；否则会一直存在。这也就意味着关闭浏览器后再次打开，仍然可以缓存，适合持久化缓存应用场景</p><p>sessionStorage 中的数据则和会话窗口有关，多个 tab 栏中可以公用，但一旦浏览器关闭，则数据清除，适合临时存储登录 token</p><h3 id="监听变化" tabindex="-1">监听变化 <a class="header-anchor" href="#监听变化" aria-label="Permalink to &quot;监听变化&quot;">​</a></h3><hr><p>当 Web Storage 发生变化时，会触发 storage 事件，回调参数中会返回变更的存储值</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">window.addEventListener(&#39;storage&#39;, (event) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 来自清除缓存，变更 cookie</span></span>
<span class="line"><span style="color:#e1e4e8;">  if (e.key == null) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    docCookies.removeItem(&#39;pageLoaded&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    docCookies.removeItem(&#39;detailLoaded&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">window.addEventListener(&#39;storage&#39;, (event) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  // 来自清除缓存，变更 cookie</span></span>
<span class="line"><span style="color:#24292e;">  if (e.key == null) {</span></span>
<span class="line"><span style="color:#24292e;">    docCookies.removeItem(&#39;pageLoaded&#39;);</span></span>
<span class="line"><span style="color:#24292e;">    docCookies.removeItem(&#39;detailLoaded&#39;)</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><p>这个事件可以用来配合 css inline 进行极致的性能优化（适用于 PHP 的静态模版渲染、SSR），如果是第一次加载，则将 css 的内容放到 html 的 style 中；如果 css 缓存了，则从缓存中获取通过 link 加载 css，配合着将脚本放到 body 底部，可以做到首屏渲染无需请求任何资源</p><p>注意：这里要求 css 的内容不能太大，如果将 css 以 style 形式放到 html 中，对 Doc 文档的 fetch 影响较大，则得不偿失（一般情况下，几十 KB 的大小，对 html 的下载时间的影响都不大）</p><h3 id="无痕模式下不可用" tabindex="-1">无痕模式下不可用 <a class="header-anchor" href="#无痕模式下不可用" aria-label="Permalink to &quot;无痕模式下不可用&quot;">​</a></h3><hr><p>浏览器会在无痕模式下禁用 Web Storage，使用时需要进行可用性检测</p><p><code>typeof Storage !== &quot;undefined&quot;</code></p><h3 id="大小问题" tabindex="-1">大小问题 <a class="header-anchor" href="#大小问题" aria-label="Permalink to &quot;大小问题&quot;">​</a></h3><hr><p>尽管 Web Storage 拥有 5M 左右的大小，但如果存储过于大量的 json 数据，依然非常容易满；而在存储接近满时，性能会非常差，很容易造成移动端卡顿</p><h3 id="indexdb-与-localforage" tabindex="-1">indexDB 与 localforage <a class="header-anchor" href="#indexdb-与-localforage" aria-label="Permalink to &quot;indexDB 与 localforage&quot;">​</a></h3><hr><p>使用 indexDB 可以很好的解决上述两个问题，它是一种类似数据库操作的存储结构，具有事务处理的特性，非常适合存储表格形式的数据，使用可参考 MDN 文档</p><p>由于 indexDB 的 API 非常繁琐，推荐使用封装好的 JavaScript 库，如 localforage</p><p>localforage 有一个优雅降级策略，若浏览器不支持 IndexedDB 或 WebSQL，则使用 localStorage</p><h3 id="不支持跨域" tabindex="-1">不支持跨域 <a class="header-anchor" href="#不支持跨域" aria-label="Permalink to &quot;不支持跨域&quot;">​</a></h3><hr><p>注意，Web Storage 和 indexDB 存储的内容会保存在同一个 Origin 下，一旦跨域，就无法访问</p><p>如果需要跨域访问</p><ul><li>如果是自己内部站点，拥有相同二级域，可以通过 iframe + postMessage 来进行通讯</li><li>另一种就是通过 WebSocket 长连接</li></ul><h3 id="安全考虑" tabindex="-1">安全考虑 <a class="header-anchor" href="#安全考虑" aria-label="Permalink to &quot;安全考虑&quot;">​</a></h3><p>避免将敏感数据存储在 Storage 中（如用户手机号等），容易受到攻击</p><h2 id="web-worker" tabindex="-1">Web Worker <a class="header-anchor" href="#web-worker" aria-label="Permalink to &quot;Web Worker&quot;">​</a></h2><p>一句话，Web Worker 让 JavaScript 拥有了多线程处理的能力，简直是牛逼 plus</p><p>我们可以可以抽离一部分功能到 Web Worker 中，如复杂计算、处理，在结束后，通过 postMessage 并携带结果返回给主线程</p><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><hr><p>主页面 js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 主线程中初始化Web Worker</span></span>
<span class="line"><span style="color:#e1e4e8;">let myWorker = new Worker(&#39;worker.js&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 接收Worker消息事件</span></span>
<span class="line"><span style="color:#e1e4e8;">myWorker.addEventListener(</span></span>
<span class="line"><span style="color:#e1e4e8;">  &#39;message&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  function (e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(&#39;Received message &#39; + e.data);</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  false</span></span>
<span class="line"><span style="color:#e1e4e8;">);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 发送消息给Worker</span></span>
<span class="line"><span style="color:#e1e4e8;">myWorker.postMessage([42, 1337]);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 主线程中初始化Web Worker</span></span>
<span class="line"><span style="color:#24292e;">let myWorker = new Worker(&#39;worker.js&#39;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 接收Worker消息事件</span></span>
<span class="line"><span style="color:#24292e;">myWorker.addEventListener(</span></span>
<span class="line"><span style="color:#24292e;">  &#39;message&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  function (e) {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(&#39;Received message &#39; + e.data);</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  false</span></span>
<span class="line"><span style="color:#24292e;">);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 发送消息给Worker</span></span>
<span class="line"><span style="color:#24292e;">myWorker.postMessage([42, 1337]);</span></span></code></pre></div><p>worker.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">self.addEventListener(&#39;message&#39;, function(e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  let numbers = e.data;</span></span>
<span class="line"><span style="color:#e1e4e8;">  let sum = numbers.reduce(function(a, b) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      return a + b;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }, 0);</span></span>
<span class="line"><span style="color:#e1e4e8;">  self.postMessage(sum);</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">self.addEventListener(&#39;message&#39;, function(e) {</span></span>
<span class="line"><span style="color:#24292e;">  let numbers = e.data;</span></span>
<span class="line"><span style="color:#24292e;">  let sum = numbers.reduce(function(a, b) {</span></span>
<span class="line"><span style="color:#24292e;">      return a + b;</span></span>
<span class="line"><span style="color:#24292e;">  }, 0);</span></span>
<span class="line"><span style="color:#24292e;">  self.postMessage(sum);</span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><p>我们就完成一个运行在后台的加法计算 worker 了</p><h3 id="优缺点" tabindex="-1">优缺点 <a class="header-anchor" href="#优缺点" aria-label="Permalink to &quot;优缺点&quot;">​</a></h3><hr><p>优点：Web Worker拥有独立的内存空间和线程池，即使处理出错或内存溢出，也不会阻塞主线程；同时充分利用多核进行计算任务，极大提升页面性能</p><p>缺点：不具备 DOM 操作能力，什么 window、document 统统不能操作，可以理解，因为在多线程环境下如果随意访问DOM，你操作一下，它操作一下，以谁为准呢？所以浏览器并未开放这个权限，如果需要操作 DOM，在主线程去操作</p>`,94),r=[i];function u(g,y,d,q,h,m){return n(),a("div",null,r)}const k=s(c,[["render",u]]);export{v as __pageData,k as default};
