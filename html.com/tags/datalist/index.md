<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [HTML Web Forms Tutorial For Coding Beginners](https://html.com/forms/) / HTML Code: You Can Use It, But Does Your Browser Support It?

New in HTML5.

# `HTML Code: You Can Use It, But Does Your Browser Support It?`

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/), [New](https://html.com/new/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[HTML Web Forms Tutorial For Coding Beginners](https://html.com/forms/)

What does ` HTML Code: You Can Use It, But Does Your Browser Support It?` do?  
The &lt;datalist&gt; element is used to define autocompletion values for an associated &lt;input&gt; element. Suggested autocompletion values are added to a datalist by nesting one or more &lt;option&gt; elements between the opening and closing &lt;datalist&gt; tags.

Display  
inline

Contents

- [<span class="toc_number toc_depth_1">1</span> Code Example](#Code_Example)
- [<span class="toc_number toc_depth_1">2</span> Autocomplete](#Autocomplete)
  - [<span class="toc_number toc_depth_2">2.1</span> Not well supported](#Not_well_supported)
  - [<span class="toc_number toc_depth_2">2.2</span> Alternatives to &lt;datalist&gt;](#Alternatives_to_ltdatalistgt)
- [<span class="toc_number toc_depth_1">3</span> Browser Support for datalist](#Browser_Support_for_datalist)

## <span id="Code_Example">Code Example</span>

    <label for="color">Favorite Color</label>
    <input list="colors" name="color">
    <datalist id="colors">
        <option value="Green">
        <option value="Red">
        <option value="Blue">
        <option value="Yellow">
        <option value="Orange">
        <option value="Purple">
        <option value="Black">
        <option value="White">
        <option value="Gray">
        <option value="Plaid">
    </datalist>

Favorite Color

<span class="underline"></span>

## <span id="Autocomplete">Autocomplete</span>

The `<datalist>` element provides an HTML-only way of providing a set of auto-complete options to a text [`<input>`](https://html.com/tags/input/) form field. This can be used similar to a [`<select>`](https://html.com/tags/select/) (drop-down) menu, but also allows for free entry by the user.

### <span id="Not_well_supported">Not well supported</span>

The `<datalist>` element is not well supported across all browsers. Several browsers do not support it at all, and (as of this writing) no browser supports the full specification. For that reason, it is probably best to find alternate ways of accomplishing the same effect.

### <span id="Alternatives_to_ltdatalistgt">Alternatives to `<datalist>`</span>

If you can actually limit the user’s input to the predefined options, and you don’t need free-entry, you can simply use the standard [`<select>`](https://html.com/tags/select/) element. If you need type-entry autocomplete, the most widely supported solution is Javascript. [JQueryUI](https://jqueryui.com/)‘s [autocomplete](https://jqueryui.com/autocomplete/) module is probably the most commonly used option.

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

## <span id="Browser_Support_for_datalist">Browser Support for datalist</span>

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/ie-true.png)

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/firefox-true.png)

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/chrome-true.png)

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/edge-true.png)

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/safari-false.png)

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden" />

![](https://html.com/wp-content/plugins/htmlcodetutorial-plugin/assets/images/opera-true.png)

<span class="browser-supported">11 (incomplete)</span>

<span class="browser-supported">43 (incomplete)</span>

<span class="browser-supported">45 (incomplete)</span>

<span class="browser-supported">13 (incomplete)</span>

<span class="browser-not-supported">Not supported.</span>

<span class="browser-supported">34 (incomplete)</span>

## Post navigation

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`<canvas> HTML Tag`](https://html.com/tags/canvas/)

[`<details> HTML Tag`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/tags/details/)

Search HTML.com

<span class="screen-reader-text">Search for:</span>

Most Popular

- <a href="https://html.com/attributes/a-target/" class="popular_posts_bars_link">How To Use The &lt;a&gt; To Make Links &amp; Open Them Where You Want!</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/attributes/a-target/#comments" class="popular_posts_bars_comment_count">2,742 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="https://html.com/tags/comment-tag/" class="popular_posts_bars_link">The HTML Comment Tag: Here’s How To Use It In Your Code</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/comment-tag/#comments" class="popular_posts_bars_comment_count">1,182 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="https://html.com/attributes/input-pattern/" class="popular_posts_bars_link">Input Pattern: Use It To Add Basic Data Validation In HTML5</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/attributes/input-pattern/#comments" class="popular_posts_bars_comment_count">905 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="https://html.com/tags/iframe/" class="popular_posts_bars_link">Using The HTML Tag To Create Inline Frames: Here’s How</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/iframe/#comments" class="popular_posts_bars_comment_count">748 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="https://html.com/tags/img/" class="popular_posts_bars_link">HTML Tags Guide To Adding Images To Your Web Documents</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/img/#comments" class="popular_posts_bars_comment_count">686 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>

[HTML.com](https://html.com/) © 2015-2020 [Sitemap](https://html.com/sitemap/) | [Privacy](https://html.com/privacy/) | [Contact](https://html.com/contact/)

<span id="cn-notice-text" class="cn-text-container">We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</span><span id="cn-notice-buttons" class="cn-buttons-container"><a href="#" id="cn-accept-cookie" class="cn-set-cookie cn-button bootstrap button">Ok</a></span><a href="javascript:void(0);" id="cn-close-notice" class="cn-close-icon"></a>
