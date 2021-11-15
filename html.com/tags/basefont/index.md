<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

<img src="../../wp-content/uploads/html-com-logo.png" alt="HTML.com logo" class="custom-logo sp-no-webp" srcset="https://html.com/wp-content/uploads/html-com-logo.png" width="250" height="53" />

[](../../index.html)

Learn HTML Code, Tags & CSS

[HTML](../../index.html)  /  [Learn How Fonts And Web Typography Work In HTML: A Beginner's Guide](../../fonts/index.html) / &lt;basefont&gt; HTML Tag

Deprecated in HTML5. Do not use.

# `<basefont> HTML Tag`

In <span class="post-meta-category">[Deprecated](../../deprecated/index.html), [HTML Tags](../index.html)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](../../disclosure/index.html)

Element of  
[Learn How Fonts And Web Typography Work In HTML: A Beginner's Guide](../../fonts/index.html)

What does `<basefont> HTML Tag` do?  
The &lt;basefont&gt; element was used to set the default font size for an HTML document. Deprecated in HTML 4.01 and removed entirely from HTML5, &lt;basefont&gt; is not supported by modern browsers and font styling should be controlled with CSS.

Display  
none

Null element  
This element must not contain any content, and does not need a closing tag.

<span class="underline"></span>

## The right way to set a “base font”

Use CSS for all typographical styling. Usually, the best approach for setting a document-wide font is to place your font rules in the `body`.

    body {  font-family: Garamond, "Linux Libertine", Georgia, "Times New Roman", serif;  font-size: 16px;  font-weight: normal;  color: #000000; }

Because of the “cascade”, these rules will be inherited by all the other elements, and you can simply modify them from there. For example, if you want to make your main headlines twice the size as the other text, and your navigation menu slightly smaller than normal text, you can use `em`s to scale sizes based on the size you declared in your `body` rules.

    h1 {  font-size: 2em;  }  .main-nav {  font-size: .8em; }

If you approach all your font sizing and styling this way, if you want to change the overall font size (or if the user wants to do so), changes to the `body` font size will be reflected in the whole document, and all the different sizes will scale up and down appropriately. See our [tutorials](../../index.html) on [CSS](../../css/index.html) and [Web Typography](../../fonts/index.html) for more information.

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](../../author/html/index.html)

<span class="fn">Adam is a technical writer who specializes in developer documentation and tutorials.</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

## Attributes of basefont

<table><thead><tr class="header"><th>Attribute name</th><th>Values</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="../../attributes/basefont-color/index.html" class="linked-name deprecated">color</a><br />
</td><td></td><td>Used to set the text color for a whole document. Deprecated. Use CSS instead.</td></tr><tr class="even"><td><a href="../../attributes/basefont-face/index.html" class="linked-name deprecated">face</a><br />
</td><td></td><td>Was used to set the base font face for a document. Deprecated. Use CSS instead.</td></tr><tr class="odd"><td><a href="../../attributes/basefont-size/index.html" class="linked-name deprecated">size</a><br />
</td><td></td><td>Was used to set the base font size for a whole document. Deprecated. Use CSS instead.</td></tr></tbody></table>

## Post navigation

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`The Student’s Guide To Citation Styles: Here’s When (And How) To Cite`](../../resources/citation-guide/index.html)

[`HTML Img Alt Tags For SEO Best Practice – Search Engines Love Them`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](../../attributes/img-alt/index.html)

Search HTML.com

<span class="screen-reader-text">Search for:</span>

Most Popular

- <a href="../../attributes/a-target/index.html" class="popular_posts_bars_link">How To Use The &lt;a&gt; To Make Links &amp; Open Them Where You Want!</a><span class="popular_posts_bars_comment_count_hold"><a href="../../attributes/a-target/index.html#comments" class="popular_posts_bars_comment_count">2,742 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="../comment-tag/index.html" class="popular_posts_bars_link">The HTML Comment Tag: Here’s How To Use It In Your Code</a><span class="popular_posts_bars_comment_count_hold"><a href="../comment-tag/index.html#comments" class="popular_posts_bars_comment_count">1,182 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="../../attributes/input-pattern/index.html" class="popular_posts_bars_link">Input Pattern: Use It To Add Basic Data Validation In HTML5</a><span class="popular_posts_bars_comment_count_hold"><a href="../../attributes/input-pattern/index.html#comments" class="popular_posts_bars_comment_count">905 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="../iframe/index.html" class="popular_posts_bars_link">Using The HTML Tag To Create Inline Frames: Here’s How</a><span class="popular_posts_bars_comment_count_hold"><a href="../iframe/index.html#comments" class="popular_posts_bars_comment_count">748 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="../img/index.html" class="popular_posts_bars_link">HTML Tags Guide To Adding Images To Your Web Documents</a><span class="popular_posts_bars_comment_count_hold"><a href="../img/index.html#comments" class="popular_posts_bars_comment_count">686 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>

[HTML.com](../../index.html) © 2015-2020 [Sitemap](../../sitemap/index.html) | [Privacy](../../privacy/index.html) | [Contact](../../contact/index.html)

<span id="cn-notice-text" class="cn-text-container">We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</span><span id="cn-notice-buttons" class="cn-buttons-container"><a href="#" id="cn-accept-cookie" class="cn-set-cookie cn-button bootstrap button">Ok</a></span><a href="javascript:void(0);" id="cn-close-notice" class="cn-close-icon"></a>
