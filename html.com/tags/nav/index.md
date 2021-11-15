<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

<img src="https://html.com/wp-content/uploads/html-com-logo.png" alt="HTML.com logo" class="custom-logo sp-no-webp" srcset="https://html.com/wp-content/uploads/html-com-logo.png" width="250" height="53" />

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [Lists Bring Order To Web Pages: Here’s The HTML Code To Create Them](https://html.com/lists/) / &lt;nav&gt; HTML Tag

New in HTML5.

`<nav> HTML Tag`
================

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/), [New](https://html.com/new/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[Lists Bring Order To Web Pages: Here’s The HTML Code To Create Them](https://html.com/lists/)

What does `<nav> HTML Tag` do?  
The &lt;nav&gt; element identifies a group of navigation links. Links in a &lt;nav&gt; element may point to other webpages or to different sections of the same webpage.

Display  
block

Usage  
semantic | structural

Contents

-   [<span class="toc_number toc_depth_1">1</span> Code Example](#Code_Example)
-   [<span class="toc_number toc_depth_1">2</span> Building Navigation Menus](#Building_Navigation_Menus)
    -   [<span class="toc_number toc_depth_2">2.1</span> Usage Hints](#Usage_Hints)
    -   [<span class="toc_number toc_depth_2">2.2</span> Layout Hints](#Layout_Hints)
-   [<span class="toc_number toc_depth_1">3</span> Browser Support for nav](#Browser_Support_for_nav)
-   [<span class="toc_number toc_depth_1">4</span> Attributes of nav](#Attributes_of_nav)

<span id="Code_Example">Code Example</span>
-------------------------------------------

    <nav>
    <a href="/flamingo-facts/">Flamingo Facts</a> 
    &bull;
    <a href="/flamingo-food/">Flamingo Food</a> 
    &bull;
    <a href="/flamingo-species/">Flamingo Species</a> 
    &bull;
    <a href="/flamingo-habitat/">Flamingo Habitat</a> 
    &bull;
    <a href="/flamingo-mail/">Contact Us</a>
    </nav>

[Flamingo Facts](https://html.com/flamingo-facts/) • [Flamingo Food](https://html.com/flamingo-food/) • [Flamingo Species](https://html.com/flamingo-species/) • [Flamingo Habitat](https://html.com/flamingo-habitat/) • [Contact Us](https://html.com/flamingo-mail/)

<span class="underline"></span>

<span id="Building_Navigation_Menus">Building Navigation Menus</span>
---------------------------------------------------------------------

In HTML 4, coding a horizontal navigation menu required both HTML and CSS code. The list of links would have to be coded within the [`ul`](https://html.com/tags/ul/) element, and then a style applied to create the horizontal layout.

`nav` is a new element that makes it much easier to create a navigation menu. It creates a neat, horizontal menu of text links, and helps screen reading software to correctly identify the primary navigation areas in a document.

### <span id="Usage_Hints">Usage Hints</span>

You can have multiple `nav` lists in the same page or document, but you don’t have to use the `nav` element for *all* of the links in your document. `nav` is best reserved for the primary navigation areas, like the main menu across the top of a page or section.

Links within a `nav` can be coded within an `ul` list, or simply coded as separate links, without the `ul` element. For full backwards compatibility, the `ul` option is recommended so that the list will be displayed somewhat correctly in older browsers.

### <span id="Layout_Hints">Layout Hints</span>

For clarity, it’s best to use a separator between links. This helps to make each list item distinct from the ones around it. In our code sample, we’ve used `&bull;` for this purpose.

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/19acdfaa8761aac8a56ea06794f3dc88?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/19acdfaa8761aac8a56ea06794f3dc88?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Claire Broadley](https://html.com/author/claire/)

<span class="fn">Claire is seasoned technical writer, editor, and HTML enthusiast. She writes for HTML.com and runs a content agency, Red Robot Media.</span>

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

<span id="Browser_Support_for_nav">Browser Support for nav</span>
-----------------------------------------------------------------

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

<span class="browser-supported">9</span>

<span class="browser-supported">4</span>

<span class="browser-supported">9</span>

<span class="browser-supported">12</span>

<span class="browser-supported">5</span>

<span class="browser-supported">11</span>

<span id="Attributes_of_nav">Attributes of nav</span>
-----------------------------------------------------

<table><thead><tr class="header"><th>Attribute name</th><th>Values</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="https://html.com/attributes/multicol-gutter/" class="linked-name deprecated">gutter</a><br />
</td><td></td><td></td></tr></tbody></table>

Post navigation
---------------

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`<meter> HTML Tag`](https://html.com/tags/meter/)

[`<object> HTML Tag`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/tags/object/)

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
