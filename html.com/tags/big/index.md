<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [Learn How Fonts And Web Typography Work In HTML: A Beginner's Guide](https://html.com/fonts/) / &lt;big&gt; HTML Tag

Deprecated in HTML5. Do not use.

# `<big> HTML Tag`

In <span class="post-meta-category">[Deprecated](https://html.com/deprecated/), [HTML Tags](https://html.com/tags/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[Learn How Fonts And Web Typography Work In HTML: A Beginner's Guide](https://html.com/fonts/)

What does `<big> HTML Tag` do?  
The &lt;big&gt; element was used to cause the selected text to appear one size larger than the surrounding text. This purely presentational tag was removed from HTML5 and should not be used. Instead, use CSS to control font size.

Display  
inline

Usage  
textual

## Code Example

    Big text is <big>bigger</big> than regular text.

Big text is bigger than regular text.

<span class="underline"></span>

## It works, but don’t use it.

The `<big>` element is still supported in most browsers, but it is no longer a part of the [HTML5](https://html.com/html5/) specification. That means that it is _not valid_, and it may not continue to be supported in web browsers. If you need text to be larger, use CSS and the `em` sizing unit (`em`s are relative to their surrounding text).

    .big {  font-size: 1.3em; }

    Spans with class of "big" are <span class="big">bigger</span> than the surrounding text.

\#big { font-size: 1.3em; } Spans with class of “big” are <span id="big">bigger</span> than the surrounding text.

Usually, even this is a bad idea. While it is valid HTML, there are very few instances where a span of larger-than-normal text, without any semantic motivation, is a good idea. If you find yourself doing something like `class="big"`, ask yourself whether a headline tag (`<h1>`, `<h2>`, `<h3>`, etc.) or an emphasis tag (`<em>`, `<strong>`) would be more appropriate.

## You can still use the `<small>` tag

The `<big>` element was deprecated, but the [`<small>`](https://html.com/tags/small/) element is still available in HTML5. This seems like an inconsistency (and it might be), but there are potentially legitimate uses for the `<small>` element within normal text. One example is subtitles.

    <!-- This doesn't really make sense -->  <h1>The Title of the Page</h1> <h2>The Subtitle of the Page</h2>  <!-- Better idea -->  <h1>The Title of the Page <br> <small>The Subtitle of the Page</small></h1>

The first example (using `<h1>` and `<h2>`) doesn’t make any sense because headlines elements are supposed to work in a sectioned hierarchy. The `<h2>` element _should_ only refer to the content immediately following it, not to the whole document. For more information, see our [documentation on the `<small>` element](https://html.com/tags/small/).

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

## Post navigation

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`The Student’s Guide To Citation Styles: Here’s When (And How) To Cite`](https://html.com/resources/citation-guide/)

[`HTML Img Alt Tags For SEO Best Practice – Search Engines Love Them`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/attributes/img-alt/)

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
