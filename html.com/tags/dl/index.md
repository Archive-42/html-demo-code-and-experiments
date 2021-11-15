<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

<img src="https://html.com/wp-content/uploads/html-com-logo.png" alt="HTML.com logo" class="custom-logo sp-no-webp" srcset="https://html.com/wp-content/uploads/html-com-logo.png" width="250" height="53" />

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [Lists Bring Order To Web Pages: Here’s The HTML Code To Create Them](https://html.com/lists/) / &lt;dl&gt; HTML Tag

`<dl> HTML Tag`
===============

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[Lists Bring Order To Web Pages: Here’s The HTML Code To Create Them](https://html.com/lists/)

What does `<dl> HTML Tag` do?  
The &lt;dl&gt; element defines a description list.

Display  
inline

Usage  
textual

Contents

-   [<span class="toc_number toc_depth_1">1</span> Code Example](#Code_Example)
-   [<span class="toc_number toc_depth_1">2</span> Description Lists](#Description_Lists)
-   [<span class="toc_number toc_depth_1">3</span> When not to use &lt;dl&gt;](#When_not_to_use_ltdlgt)
-   [<span class="toc_number toc_depth_1">4</span> Browser Support for dl](#Browser_Support_for_dl)
-   [<span class="toc_number toc_depth_1">5</span> Attributes of dl](#Attributes_of_dl)

<span id="Code_Example">Code Example</span>
-------------------------------------------

    <dl>
     <dt>HTML</dt>
     <dd>Hypertext Markup Language, the language for authoring web documents.</dd>
     <dt>CSS</dt>
     <dd>Cascading Style Sheets, the language for defining the styles and presentation of an HTML document.</dd>
     <dt> JavaScript</dt>
     <dd>A scripting language built-in to most browsers and designed to be used with web documents.</dd>
    </dl>

HTML  
Hypertext Markup Language, the language for authoring web documents.

CSS  
Cascading Style Sheets, the language for defining the styles and presentation of an HTML document.

 JavaScript  
A scripting language built-in to most browsers and designed to be used with web documents.

<span class="underline"></span>

<span id="Description_Lists">Description Lists</span>
-----------------------------------------------------

The description list allows you to create a list of terms and then provide one or more descriptions for each term. In HTML 4, the `<dl>` tag defined a “definition list.” But in [HTML5](https://html.com/html5/), this has been changed to “description list.” This change has little meaning, other than to indicate that the terms and descriptions don’t have to be definitions. For example, you could use the description list for presenting metadata on [a blog](https://blogging.com/) post:

    <dl>  <dt>Author</dt>  <dd>Kate Smith</dd>  <dt>Published</dt>  <dd>13 November 2015</dd>  <dt>Tags</dt>  <dd>HTML, CSS, JS, monkeys</dd> </dl> 

Author  
Kate Smith

Published  
13 November 2015

Tags  
HTML, CSS, JS, monkeys

The `<dl>` element can be used for any type of one-to-many name-value pair lists.

<span id="When_not_to_use_ltdlgt">When *not* to use `<dl>`</span>
-----------------------------------------------------------------

While, generally, the definition of the `<dl>` tag has expanded between HTML 4 and HTML5, there is one use case which was formerly suggested and which has now been deprecated: dialogue.

    <!-- DEPRECATED -->  <dl> <dt>Rick</dt> <dd>What's that you're playing?</dd> <dt>Sam</dt> <dd>A little something on my own.</dd> <dt>Rick</dt> <dd>Stop it. You know what I want to hear.</dd> <dt>Sam</dt> <dd>No, I don't.</dd> <dt>Rick</dt> <dd>You played it for her, you can play it for me.</dd> <dt>Sam<dt> <dd>I don't think I can remember</dd> <dt>Rick</dt> <dd>If she can stand it, I can. Play it.</dd> <dt>Sam</dt> <dd>Yes, boss.</dd> </dl> 

Rick

What’s that you’re playing?

Sam

A little something on my own.

Rick

Stop it. You know what I want to hear.

Sam

No, I don’t.

Rick

You played it for her, you can play it for me.

Sam

I don’t think I can remember

Rick

If she can stand it, I can. Play it.

Sam

Yes, boss.

While this is deliberately against the HTML specification, it is hard to imagine any problems created by this approach to marking up dialog. (Use at your own risk, though).

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

<span id="Browser_Support_for_dl">Browser Support for dl</span>
---------------------------------------------------------------

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

<span class="browser-supported">All</span>

<span class="browser-supported">All</span>

<span class="browser-supported">All</span>

<span class="browser-supported">All</span>

<span class="browser-supported">All</span>

<span class="browser-supported">All</span>

<span id="Attributes_of_dl">Attributes of dl</span>
---------------------------------------------------

<table><thead><tr class="header"><th>Attribute name</th><th>Values</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="https://html.com/attributes/dl-compact/" class="linked-name deprecated">compact</a><br />
</td><td></td><td>Was used to specify a compact display style for a description list. Deprecated. Use CSS instead.</td></tr></tbody></table>

Post navigation
---------------

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`The Student’s Guide To Citation Styles: Here’s When (And How) To Cite`](https://html.com/resources/citation-guide/)

[`HTML Img Alt Tags For SEO Best Practice – Search Engines Love Them`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/attributes/img-alt/)

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
