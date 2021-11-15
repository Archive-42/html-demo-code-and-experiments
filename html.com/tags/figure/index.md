<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>



[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [Web Images: Best Practices and HTML Code In One Useful Guide](https://html.com/images/) / HTML Figure Element: Here’s How It Identifies Self-Contained Content

New in HTML5.

`HTML Figure Element: Here’s How It Identifies Self-Contained Content`
======================================================================

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/), [New](https://html.com/new/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[Web Images: Best Practices and HTML Code In One Useful Guide](https://html.com/images/)

What does `HTML Figure Element: Here’s How It Identifies Self-Contained Content` do?  
The &lt;figure&gt; element identifies self-contained content related to the main content, such as an image, table, or chart. The &lt;figcaption&gt; element is often nested within a &lt;figure&gt; element to add a caption to the content identified by the &lt;figure&gt; tags.

Display  
block

Usage  
structural

Contents

-   [<span class="toc_number toc_depth_1">1</span> Code Example](#Code_Example)
-   [<span class="toc_number toc_depth_1">2</span> Self contained content](#Self_contained_content)
-   [<span class="toc_number toc_depth_1">3</span> &lt;figure&gt; vs. &lt;aside&gt;](#ltfiguregt_vs_ltasidegt)
-   [<span class="toc_number toc_depth_1">4</span> Browser Support for figure](#Browser_Support_for_figure)

<span id="Code_Example">Code Example</span>
-------------------------------------------

    <figure>
    <img src="/wp-content/uploads/flamingo.jpg" alt="flamingo">
    <figcaption><i>fig. 1</i> A pink flamingo.</figcaption>
    </figure>

<figure><img src="https://html.com/wp-content/uploads/flamingo.jpg" alt="fig. 1 A pink flamingo." class="sp-no-webp" srcset="/wp-content/uploads/flamingo.jpg" /><figcaption><em>fig. 1</em> A pink flamingo.</figcaption></figure>

<span class="underline"></span>

<span id="Self_contained_content">Self contained content</span>
---------------------------------------------------------------

The `<figure>` element is [new in HTML5](https://html.com/html5/), and is one of those elements that the web development community is still just a little unsure of. Here is what the [W3C specification says about it](https://www.w3.org/TR/2011/WD-html5-author-20110809/the-figure-element.html):

> The figure element represents a unit of content, optionally with a caption, that is self-contained, that is typically referenced as a single unit from the main flow of the document, and that can be moved away from the main flow of the document without affecting the document’s meaning.

Further, it specifies that the contents of the `<figure>` element should be [flow content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content), with an optional [caption](https://html.com/tags/figcaption/) either before or after the content. In theory, this could be used for several types of things: sidebars, pullquotes, asides, charts, images, secondary media. In practice, the most common use is for captioned images and charts. This makes sense, as “figure” has a meaning in academic and technical writing — an illustration, image, chart, or other visual content, usually captioned, related to the main content but often found separated from it. There is no reason, though, that it *couldn’t* be used for some of those other purposes.

<span id="ltfiguregt_vs_ltasidegt">`<figure>` vs. `<aside>`</span>
------------------------------------------------------------------

The `<figure>` and [`<aside>`](https://html.com/tags/aside/) element seem to have similar uses, according to the specification. Some people use `<aside>` for pull quotes and content-related sidebars, so there is some overlap. But there are also some differences. The major difference, of course, is that `<aside>` doesn’t have a built-in [caption](https://html.com/tags/figcaption/) element. So if you side-content requires a caption, that might indicate that it is really a `<figure>`. More importantly, though, the `<figure>` is for content directly related to the main content, while `<aside>` is for “tangentially related” content. This suggests that pull-quotes, infographics, charts, and other content specific to a particular article of content should be placed in a `<figure>`, while the `<aside>` element should be used for sidebar sections and (perhaps) comments.

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

<span id="Browser_Support_for_figure">Browser Support for figure</span>
-----------------------------------------------------------------------

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

<span class="browser-supported">43</span>

<span class="browser-supported">45</span>

<span class="browser-supported">13</span>

<span class="browser-supported">9</span>

<span class="browser-supported">34</span>

Post navigation
---------------

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`<figcaption> HTML Tag`](https://html.com/tags/figcaption/)

[`<footer> HTML Tag`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/tags/footer/)

Search HTML.com

<span class="screen-reader-text">Search for:</span>

Most Popular

-   <a href="https://html.com/attributes/a-target/" class="popular_posts_bars_link">How To Use The &lt;a&gt; To Make Links &amp; Open Them Where You Want!</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/attributes/a-target/#comments" class="popular_posts_bars_comment_count">2,742 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="https://html.com/tags/comment-tag/" class="popular_posts_bars_link">The HTML Comment Tag: Here’s How To Use It In Your Code</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/comment-tag/#comments" class="popular_posts_bars_comment_count">1,182 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="https://html.com/attributes/input-pattern/" class="popular_posts_bars_link">Input Pattern: Use It To Add Basic Data Validation In HTML5</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/attributes/input-pattern/#comments" class="popular_posts_bars_comment_count">905 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="https://html.com/tags/iframe/" class="popular_posts_bars_link">Using The HTML Tag To Create Inline Frames: Here’s How</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/iframe/#comments" class="popular_posts_bars_comment_count">748 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="https://html.com/tags/img/" class="popular_posts_bars_link">HTML Tags Guide To Adding Images To Your Web Documents</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/img/#comments" class="popular_posts_bars_comment_count">686 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>

[HTML.com](https://html.com/) © 2015-2020 [Sitemap](https://html.com/sitemap/) | [Privacy](https://html.com/privacy/) | [Contact](https://html.com/contact/)

<span id="cn-notice-text" class="cn-text-container">We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</span><span id="cn-notice-buttons" class="cn-buttons-container"><a href="#" id="cn-accept-cookie" class="cn-set-cookie cn-button bootstrap button">Ok</a></span><a href="javascript:void(0);" id="cn-close-notice" class="cn-close-icon"></a>
