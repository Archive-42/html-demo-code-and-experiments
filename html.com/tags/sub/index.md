<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>



[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [Learn How Fonts And Web Typography Work In HTML: A Beginner's Guide](https://html.com/fonts/) / &lt;sub&gt; HTML Tag

`<sub> HTML Tag`
================

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[Learn How Fonts And Web Typography Work In HTML: A Beginner's Guide](https://html.com/fonts/)

What does `<sub> HTML Tag` do?  
The &lt;sub&gt; element is used to identify characters that should be rendered in a subscript position. The element should be used mark text according to typographical conventions and not stylistic purposes. Text that is to appear subscript for purely stylistic purposes should be styled with CSS.

Display  
inline

Usage  
textual

Code Example
------------

    <p>The basic formula for water is H<sub>2</sub>0.</p>

The basic formula for water is H<sub>2</sub>0.

<span class="underline"></span>

When are Subscripts Used?
-------------------------

Anytime a letter or number should appear as a subscript for reasons that *are not* purely stylistic, the `<sub>` element is appropriate. However, if the effect is being applied for purely stylistic purposes, use [CSS](https://html.com/css/). In particular, check out this [free CSS snippet at GitHub](https://gist.github.com/unruthless/413930) which you can use to add subscripts and superscripts with CSS rather than by using the HTML `<sub>` and `<sup>` elements. Let’s take a look at how those CSS rendered subscripts compare to those applied by the HTML`<sub>` element.

    <style> .sub, .sup {   font-size: 75%;   line-height: 0;   position: relative;   vertical-align: baseline; }   .sub {   bottom: -0.25em; } .sup {   top: -0.5em } </style> <p>In some cases, such as the when dealing with a chemical formula like H<sub>2</sub>0, it's appropriate to use the <code>sub</code> element.</p> <p>In other cases, such as when adding subscripts for stylistics purposes to a logo like <a href="https://latex-project.org/" target="_blank">L<sup>A</sup>T<sub>E</sub>X</a>, you should really use CSS to create the desired effect.</p> 

Let’s see what our browser does with that bit of code.

.sub, .sup{font-size: 75%; line-height: 0; position: relative; vertical-align: baseline;}.sub{bottom: -0.25em;}.sup{top: -0.5em}In some cases, such as the when dealing with a chemical formula like H<sub>2</sub>0, it’s appropriate to use the `sub` element.

In other cases, such as when adding subscripts for stylistics purposes to a logo like [L<sup>A</sup>T<sub>E</sub>X](https://latex-project.org/), you should really use CSS to create the desired effect.

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

Post navigation
---------------

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`How To Use  In HTML`](https://html.com/attributes/img-src/)

[`<td nowrap>`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/attributes/td-nowrap/)

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
