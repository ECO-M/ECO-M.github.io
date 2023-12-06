# 简述Html5

HTML 的最新稳定版本，HTML5 将 HTML 从用于构造一个文档的一个简单标记，到一个完整的应用程序开发平台。除其他功能外，HTML5
还包括新元素和用于增强存储、多媒体和硬件访问的JavaScript APIs 。

## 语义化标签

以前布局，我们基本都用 div 来做，div 对于搜索引擎来说是没有语义的

HTML5 新增了语义化标签：

````
<header> ：头部标签
<nav> ：导航标签
<article> ：内容标签
<section> ：定义文档某个区域，可看成一个大的 div
<aside> ：侧边栏标签
<footer> ：尾部标签
````

result

````
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>语义化标签</title>
</head>    
<style>
    body {
        margin: 0;
        padding: 0;
        width: 340px;
    }

    header, nav {
        height: 45px;
        line-height: 45px;
        background-color: #BAD585;
        border-radius: 6px;
        margin-bottom: 10px;
        text-align: center;
    }

    article {
        float: left;
        width: 190px;
        height: 160px;
        background-color: #BAD585;
        border-radius: 6px;
        margin: 0 10px 10px 0;
        padding: 20px 0 0 0;
        text-align: center;
        box-sizing: border-box;
    }

    article section {
        width: 170px;
        height: 40px;
        background-color: #D9EBB7;
        border-radius: 6px;
        text-align: center;
        margin: 30px auto 0 auto;
    }

    aside {
        float: left;
        width: 140px;
        height: 160px;
        background-color: #BAD585;
        padding: 20px 0 0 0;
        border-radius: 6px;
        margin-bottom: 10px;
        text-align: center;
        box-sizing: border-box;
    }

    footer {
        width: 100%;
        height: 45px;
        line-height: 45px;
        background-color: #BAD585;
        border-radius: 6px;
        margin-bottom: 10px;
        text-align: center;
        float: left;
    }
</style>

<body>
<header>&lt;header&gt;</header>
<nav>&lt;nav&gt;</nav>
<article>
    &lt;article&gt;
    <section>&lt;section&gt;</section>
</article>
<aside>&lt;aside&gt;</aside>
<footer>&lt;footer&gt;</footer>
</body>
</html>
````

![H5 图片](/images/zoom-mark.webp)

注意：

- 在没有 css 时，页面也能呈现较好的内容结构
- SEO 友好，爬虫依赖标签来确定上下文及关键字的权重<br>
- 这种语义化标准主要是针对搜索引擎的<br>
- 这些新标签页面中可以使用多次<br>
- 在 IE9 中，需要把这些元素转换为块级元素<br>
- 其实，我们移动端更喜欢使用这些标签<br>
- 可维护性，可读性；看到对应的标签就知道大致包含的内容了，维护起来自然也方便许多

## 多媒体标签

新增的多媒体标签主要包含两个：

1. 音频：```<audio>```
2. 视频：```<video>```

使用它们可以很方便地在页面中嵌入音频和视频，而不再去使用 flash 和其他浏览器插件

**video**

````
<video src="文件地址" controls="controls"></video>

````

考虑到兼容性，可以这样写

````
<video controls="controls" width="300">
	<source src="movie.ogg" type="video/ogg" >
	<source src="movie.mp4" type="video/mp4" >
	您的浏览器暂不支持 <video> 标签播放视频
</video>

````

result：

````
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>video标签</title>
</head>
<style>
   video {
     width: 100%;
   }
</style>

<body>
    <video src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/mi12sltli3b/video1-2.mp4" autoplay="autoplay"
        muted="muted" controls="controls" loop="loop"></video>
</body>

</html>

````

**audio**

````
<audio src="文件地址" controls="controls"></audio >
````

考虑到兼容性，可以这样写

````
<audio controls="controls" width="300">
	<source src="music.mp3" type="audio/mpeg" >
	<source src="music.ogg" type="audio/ogg" >
	您的浏览器暂不支持 <audio > 标签播放音频
</audio >
````

result：

````
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>音频标签audio</title>
</head>

<body>
    <h3>Shadow of the sun</h3>
    <audio
        src="https://webfs.ali.kugou.com/202208151945/861843bcad9089cb46825a6ff2a40868/G242/M09/1B/01/0pQEAF-NTZKAP-HiACOcMEe9M0M964.mp3"
        autoplay="autoplay" controls="controls">
    </audio>
</body>

</html>
````

温馨提示：谷歌浏览器把自动播放禁止了，目前还无法解决，等到学习 js 才能解决

多媒体标签总结：

- 音频标签和视频标签使用方式基本一致<br>
- 浏览器支持情况不同<br>
- 谷歌浏览器把视频和音频自动播放禁止了<br>
- 我们可以给视频标签添加 muted 属性来静音播放视频，音频不可以（可以通过 js 解决）<br>
- 视频标签是重点，我们经常设置自动播放，不使用 controls 控件、循环和设置大小属性<br>

## 新增的input类型

为了让开发者更加方便地创建各种类型的表单控件，同时也能更好地满足用户的输入需求，HTML5 对 input 的 type 进行了拓展，主要有以下常用类型

- color 色值选择器
- date、datetime、month、week、time 等时间相关的选择；在对样式要求不高时，可以作为选择
- email 地址输入域
- search 搜索域，与 datalist 配合使用
- tel 电话号码输入
- number 数字输入
- range 范围选择器

````
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>新增input表单</title>
</head>

<body>
    <form action="">
        <ul>
            <li>邮箱：<input type="email"></li>
            <li>网址：<input type="url"></li>
            <li>日期：<input type="date"></li>
            <li>时间：<input type="time"></li>
            <li>数字：<input type="number"></li>
            <li>手机号码：<input type="tel"></li>
            <li>搜索：<input type="search"></li>
            <li>颜色：<input type="color"></li>
            <li><input type="submit" value="提交"></li>
        </ul>
    </form>
</body>
</html>
````

![H5 图片](/images/mark-input.webp)

重点记住：number、tel、search 这三个

## 新增的表单属性

可以通过以下设置方式修改 placeholder 里面的字体颜色：

````
input::placeholder {
	color: cyan;
}
````

result：

````
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>新增表单属性</title>
    <style>
        input::placeholder {
            color: cyan;
        }
    </style>
</head>

<body>
    <form action="">
        <input type="search" name="" id="" required="required" placeholder="请输入搜索内容" autofocus="autofocus"
            autocomplete="off">
        <input type="file" name="" id="" multiple="multiple">
        <input type="submit" value="提交">
    </form>
</body>
</html>
````

![H5 图片](/images/mark-search.webp)