<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

<img src="../../wp-content/uploads/html-com-logo.png" alt="HTML.com logo" class="custom-logo sp-no-webp" srcset="https://html.com/wp-content/uploads/html-com-logo.png" width="250" height="53" />

[](../../index.html)

Learn HTML Code, Tags & CSS

[HTML](../../index.html)  /  [HTML Anchors: Here’s How To Create Links For Fast Navigation](../../anchors-links/index.html) / &lt;base&gt; HTML Tag

# `<base> HTML Tag`

In <span class="post-meta-category">[HTML Tags](../index.html)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](../../disclosure/index.html)

Element of  
[HTML Anchors: Here’s How To Create Links For Fast Navigation](../../anchors-links/index.html)

What does `<base> HTML Tag` do?  
The &lt;base&gt; element is used to identify a base URL upon which to build all relative URLs that appear on a webpage. In addition, if the &lt;base&gt; element has a target attribute, the target attribute will be used as the default attribute for all hyperlinks appearing in the document.

Display  
none

Null element  
This element must not contain any content, and does not need a closing tag.

<span class="underline"></span>

Contents

- [<span class="toc_number toc_depth_1">1</span> Example Code](#Example_Code)
- [<span class="toc_number toc_depth_1">2</span> Relative links](#Relative_links)
- [<span class="toc_number toc_depth_1">3</span> Default target value](#Default_target_value)
- [<span class="toc_number toc_depth_1">4</span> Placement and restrictions](#Placement_and_restrictions)
- [<span class="toc_number toc_depth_1">5</span> Browser Support for base](#Browser_Support_for_base)
- [<span class="toc_number toc_depth_1">6</span> Attributes of base](#Attributes_of_base)

## <span id="Example_Code">Example Code</span>

    <head>
    .
    .
    .
    <base href="http://example.com" target="_blank">
    </head>

## <span id="Relative_links">Relative links</span>

When creating an [anchor link](../a/index.html), the [`href`](../../attributes/a-href/index.html) attribute can specify an absolute URL, like `http://example.com`, or a relative URL such as `/`, `/page-name`, or `page-name`.

With relative URLs a slash ( `/` ) indicates the root URL of the current page, so `href="/page-name"` would link to a page at _currentdomain_`/page-name`. Leaving off the slash links to a subpage of the current URL, so `href="page-name"` would link to _current_url_`/page-name`.

Using the `<base>` element, you can change the base URL which the relative links on the page use. Instead of the current, actual URL of the current page, all relative links will be based on the URL specified in the `href` attribute of the `<base>` element.

For more information about how relative links work, see our [documentation on anchor link urls](../../anchors-links/index.html).

## <span id="Default_target_value">Default `target` value</span>

In addition to specifying a base URL for relative links, the `<base>` element allows you to specify a default `target` value for all links on the page. So, if you set `target="_blank"` in the `<base>` element, all links on the page (relative and absolute) will open in a new window, unless otherwise specified.

## <span id="Placement_and_restrictions">Placement and restrictions</span>

The `<base>` element must be placed within the document’s `<head>`, and there must only be one `<base>` element in a document. The `<base>` element must not have any content, and does not require a closing tag.

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](../../author/html/index.html)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](../../index.html).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

## <span id="Browser_Support_for_base">Browser Support for base</span>

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](../../wp-content/plugins/htmlcodetutorial-plugin/assets/images/ie-true.png)

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

<span class="browser-supported">All</span>

<span class="browser-supported">All</span>

<span class="browser-supported">All</span>

<span class="browser-supported">All</span>

<span class="browser-supported">All</span>

<span class="browser-supported">All</span>

## <span id="Attributes_of_base">Attributes of base</span>

<table><thead><tr class="header"><th>Attribute name</th><th>Values</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="../../attributes/base-target/index.html" class="linked-name">target</a><br />
</td><td></td><td>Specifies the default target value for all anchor links in the current document.</td></tr><tr class="even"><td><a href="../../attributes/base-href/index.html" class="linked-name">href</a><br />
</td><td></td><td>Specifies the base URL which will be used for all relative links in the current document.</td></tr></tbody></table>

## Post navigation

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`The Student’s Guide To Citation Styles: Here’s When (And How) To Cite`](../../resources/citation-guide/index.html)

[`HTML Img Alt Tags For SEO Best Practice – Search Engines Love Them`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](../../attributes/img-alt/index.html)

Search HTML.com

<span class="screen-reader-text">Search for:</span>

Most Popular

- <a href="../../attributes/a-target/index.html" class="popular_posts_bars_link">How To Use The &lt;a&gt; To Make Links &amp; Open Them Where You Want!</a><span class="popular_posts_bars_comment_count_hold"><a href="../../attributes/a-target/index.html#comments" class="popular_posts_bars_comment_count">2,738 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="../comment-tag/index.html" class="popular_posts_bars_link">The HTML Comment Tag: Here’s How To Use It In Your Code</a><span class="popular_posts_bars_comment_count_hold"><a href="../comment-tag/index.html#comments" class="popular_posts_bars_comment_count">1,179 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="../../attributes/input-pattern/index.html" class="popular_posts_bars_link">Input Pattern: Use It To Add Basic Data Validation In HTML5</a><span class="popular_posts_bars_comment_count_hold"><a href="../../attributes/input-pattern/index.html#comments" class="popular_posts_bars_comment_count">895 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="../iframe/index.html" class="popular_posts_bars_link">Using The HTML Tag To Create Inline Frames: Here’s How</a><span class="popular_posts_bars_comment_count_hold"><a href="../iframe/index.html#comments" class="popular_posts_bars_comment_count">746 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="../button/index.html" class="popular_posts_bars_link">Creating A Button With The HTML Button Element: Here’s How</a><span class="popular_posts_bars_comment_count_hold"><a href="../button/index.html#comments" class="popular_posts_bars_comment_count">681 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>

[HTML.com](../../index.html) © 2015-2020 [Sitemap](../../sitemap/index.html) | [Privacy](../../privacy/index.html) | [Contact](../../contact/index.html)

<span id="cn-notice-text" class="cn-text-container">We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</span><span id="cn-notice-buttons" class="cn-buttons-container"><a href="#" id="cn-accept-cookie" class="cn-set-cookie cn-button bootstrap button">Ok</a></span><a href="javascript:void(0);" id="cn-close-notice" class="cn-close-icon"></a>
