<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

<img src="../../wp-content/uploads/html-com-logo.png" alt="HTML.com logo" class="custom-logo sp-no-webp" srcset="https://html.com/wp-content/uploads/html-com-logo.png" width="250" height="53" />

[](../../index.html)

Learn HTML Code, Tags & CSS

[HTML](../../index.html)  /  [HTML Document Structure Before And After HTML5 – Here’s What Changed](../../document/index.html) / HTML Article Element: Learn When (And Where) To Use It Now

New in HTML5.

`HTML Article Element: Learn When (And Where) To Use It Now`
============================================================

In <span class="post-meta-category">[HTML Tags](../index.html), [New](../../new/index.html)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](../../disclosure/index.html)

Element of  
[HTML Document Structure Before And After HTML5 – Here’s What Changed](../../document/index.html)

What does `HTML Article Element: Learn When (And Where) To Use It Now` do?  
The &lt;article&gt; element identifies a self-contained piece of content which could theoretically be distributed to other websites and platforms as a stand-alone unit. The &lt;article&gt; element is a good choice to contain entire blog posts, news articles, and similar content.

Display  
block

Usage  
semantic | structural

<span class="underline"></span>

Independent Unit of Content
---------------------------

The `<article>` tag is one of the new semantic elements introduced with [HTML5](../../html5/index.html). According to the [HTML5 specification](https://html.spec.whatwg.org/multipage/sections.html):

> The article element represents a section of content that forms an independent part of a document or site; for example, a magazine or newspaper article, or [a blog](https://blogging.com/) entry.

This is most often used in two contexts:

-   On a page with a single piece of content, a single `<article>` element can be used to contain the main content and set it off from the rest of the page.
-   On a page with multiple pieces of content (a blog index page, a search results page, a category page, a news feed), multiple `<article>` elements can be used to contain each individual piece of content.

Either way, this is functionally similar to using [`<div>`](../div/index.html) elements, and the display and styling work the same. However, using the `<article>` element instead of `<div>` provides more semantic information to screen readers, search engines, and third-party applications.

Example Code
------------

    <!-- Blog Index Page - Multiple Article Elements -->  <body>   <header>     <h1>Title of Site</h1>   </header>   <main>     <article>       <header>         <h2>Title of Blog Post</h2>       </header>       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  <a href="">Read More.</a></p>     </article>     <article>       <header>         <h2>Title of Blog Post</h2>       </header>       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  <a href="">Read More.</a></p>     </article>     <article>       <header>         <h2>Title of Blog Post</h2>       </header>       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  <a href="">Read More.</a></p>     </article>   </main> </body>  <!-- Single-Article Page -->  <body>   <header>     <h2><a href="/">Title of Site</a></h2> <!-- Some people omit the <h2> tags. -->   </header>   <main>     <article>       <header>         <h1>Title of Page or Blog Post</h1>         <!-- Post data such as author, publication time, and tags may go here. -->       </header>       <!-- The article content. -->     </article>   </main> </body> 

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](../../author/html/index.html)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](../../index.html).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

Browser Support for article
---------------------------

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](../../wp-content/plugins/htmlcodetutorial-plugin/assets/images/ie-false.png)

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](../../wp-content/plugins/htmlcodetutorial-plugin/assets/images/firefox-true.png)

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](../../wp-content/plugins/htmlcodetutorial-plugin/assets/images/chrome-true.png)

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](../../wp-content/plugins/htmlcodetutorial-plugin/assets/images/edge-true.png)

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](../../wp-content/plugins/htmlcodetutorial-plugin/assets/images/safari-true.png)

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](../../wp-content/plugins/htmlcodetutorial-plugin/assets/images/opera-true.png)

<span class="browser-not-supported">Not supported.</span>

<span class="browser-supported">43</span>

<span class="browser-supported">45</span>

<span class="browser-supported">13</span>

<span class="browser-supported">9</span>

<span class="browser-supported">34</span>

Post navigation
---------------

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`<acronym> HTML Tag`](../acronym/index.html)

[`HTML5 Aside Element: Here Are The Good (And Not So Good) Uses For It`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](../aside/index.html)

Search HTML.com

<span class="screen-reader-text">Search for:</span>

Most Popular

-   <a href="../../attributes/a-target/index.html" class="popular_posts_bars_link">How To Use The &lt;a&gt; To Make Links &amp; Open Them Where You Want!</a><span class="popular_posts_bars_comment_count_hold"><a href="../../attributes/a-target/index.html#comments" class="popular_posts_bars_comment_count">2,738 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="../comment-tag/index.html" class="popular_posts_bars_link">The HTML Comment Tag: Here’s How To Use It In Your Code</a><span class="popular_posts_bars_comment_count_hold"><a href="../comment-tag/index.html#comments" class="popular_posts_bars_comment_count">1,179 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="../../attributes/input-pattern/index.html" class="popular_posts_bars_link">Input Pattern: Use It To Add Basic Data Validation In HTML5</a><span class="popular_posts_bars_comment_count_hold"><a href="../../attributes/input-pattern/index.html#comments" class="popular_posts_bars_comment_count">895 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="../iframe/index.html" class="popular_posts_bars_link">Using The HTML Tag To Create Inline Frames: Here’s How</a><span class="popular_posts_bars_comment_count_hold"><a href="../iframe/index.html#comments" class="popular_posts_bars_comment_count">746 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="../button/index.html" class="popular_posts_bars_link">Creating A Button With The HTML Button Element: Here’s How</a><span class="popular_posts_bars_comment_count_hold"><a href="../button/index.html#comments" class="popular_posts_bars_comment_count">681 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>

[HTML.com](../../index.html) © 2015-2020 [Sitemap](../../sitemap/index.html) | [Privacy](../../privacy/index.html) | [Contact](../../contact/index.html)

<span id="cn-notice-text" class="cn-text-container">We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</span><span id="cn-notice-buttons" class="cn-buttons-container"><a href="#" id="cn-accept-cookie" class="cn-set-cookie cn-button bootstrap button">Ok</a></span><a href="javascript:void(0);" id="cn-close-notice" class="cn-close-icon"></a>
