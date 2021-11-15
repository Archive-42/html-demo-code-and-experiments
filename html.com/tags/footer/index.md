<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

<img src="https://html.com/wp-content/uploads/html-com-logo.png" alt="HTML.com logo" class="custom-logo sp-no-webp" srcset="https://html.com/wp-content/uploads/html-com-logo.png" width="250" height="53" />

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [HTML Document Structure Before And After HTML5 – Here’s What Changed](https://html.com/document/) / &lt;footer&gt; HTML Tag

New in HTML5.

`<footer> HTML Tag`
===================

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/), [New](https://html.com/new/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[HTML Document Structure Before And After HTML5 – Here’s What Changed](https://html.com/document/)

What does `<footer> HTML Tag` do?  
The &lt;footer&gt; element is a structural element used to identify the footer of a page, document, article, or section. A &lt;footer&gt; typically contains copyright and authorship information or navigational elements pertaining to the contents of the parent element.

Display  
block

Usage  
semantic

<span class="underline"></span>

Using `<footer>`
----------------

The obvious place for the `<footer>` element is at the bottom of a web page. Most sites have a footer (with copyright, contact, and other info), and now, thanks to [HTML5](https://html.com/html5/), you can create this with the semantic-meaningful `<footer>` element instead of a meaningless [`<div>`](https://html.com/tags/div/).

    <!DOCTYPE html> <html>  <head>   .   .   .  </head>  <body>   <header>    <h1><!-- Site or Page Title --></h1>    <nav><!-- main navigation --> </nav>   </header>   <main>    <article>     <!-- main article content -->    </article>   </main>   <aside>    <!-- sidebar -->   </aside>   <footer>    <section>     <!-- Copyright Info -->    </section>    <address>     <!-- Contact Info -->    </address>   </footer>   <script>// Javascript </script>  </body> </html> 

You can also use `<footer>` to define a footer for any section of content, not just the page as a whole. (The [`<header>`](https://html.com/tags/header/) element works this way as well.)

    <article>  <header>   <h2>Title of Article</h2>   by Author's Name  </header>  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies interdum egestas. Cras placerat lacinia vulputate. Curabitur mattis diam ac est volutpat laoreet.</p>  <footer>   <dl>    <dt>Published</dt>    <dd>13 November 2015</dd>    <dt>Tags</dt>    <dd>Sample Posts, Fake Latin, Semantic Markup</dd>   </dl>  </footer> </article> 

Title of Article
----------------

by Author’s Name

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies interdum egestas. Cras placerat lacinia vulputate. Curabitur mattis diam ac est volutpat laoreet.

Published

13 November 2015

Tags

Sample Posts, Fake Latin, Semantic Markup

The important thing to remember is that the `<footer>` is related to its *parent element*. If it inside an [`<article>`](https://html.com/tags/article/) element, then it is the footer of that article. If it is the last element inside the [`<body>`](https://html.com/tags/body/) element, then it is the footer of the page as a whole. For more information about this and related elements, see our [tutorial on semantic document structure](https://html.com/tags/).

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and tutorials.</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

Browser Support for footer
--------------------------

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/ie-true.png)

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/firefox-true.png)

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/chrome-true.png)

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/edge-true.png)

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/safari-true.png)

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/opera-true.png)

<span class="browser-supported">11</span>

<span class="browser-supported">34</span>

<span class="browser-supported">45</span>

<span class="browser-supported">13</span>

<span class="browser-supported">9</span>

<span class="browser-supported">43</span>

Post navigation
---------------

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`HTML Figure Element: Here’s How It Identifies Self-Contained Content`](https://html.com/tags/figure/)

[`Learn What HTML Header (New Semantic Document Tag) Does`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/tags/header/)

Search HTML.com

<span class="screen-reader-text">Search for:</span>

Most Popular

-   <a href="https://html.com/attributes/a-target/" class="popular_posts_bars_link">How To Use The &lt;a&gt; To Make Links &amp; Open Them Where You Want!</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/attributes/a-target/#comments" class="popular_posts_bars_comment_count">2,738 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="https://html.com/tags/comment-tag/" class="popular_posts_bars_link">The HTML Comment Tag: Here’s How To Use It In Your Code</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/comment-tag/#comments" class="popular_posts_bars_comment_count">1,179 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="https://html.com/attributes/input-pattern/" class="popular_posts_bars_link">Input Pattern: Use It To Add Basic Data Validation In HTML5</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/attributes/input-pattern/#comments" class="popular_posts_bars_comment_count">895 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="https://html.com/tags/iframe/" class="popular_posts_bars_link">Using The HTML Tag To Create Inline Frames: Here’s How</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/iframe/#comments" class="popular_posts_bars_comment_count">746 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="https://html.com/tags/button/" class="popular_posts_bars_link">Creating A Button With The HTML Button Element: Here’s How</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/button/#comments" class="popular_posts_bars_comment_count">681 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>

[HTML.com](https://html.com/) © 2015-2020 [Sitemap](https://html.com/sitemap/) | [Privacy](https://html.com/privacy/) | [Contact](https://html.com/contact/)

<span id="cn-notice-text" class="cn-text-container">We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</span><span id="cn-notice-buttons" class="cn-buttons-container"><a href="#" id="cn-accept-cookie" class="cn-set-cookie cn-button bootstrap button">Ok</a></span><a href="javascript:void(0);" id="cn-close-notice" class="cn-close-icon"></a>
