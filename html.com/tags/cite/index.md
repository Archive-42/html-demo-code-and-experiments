<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  &lt;cite&gt; HTML Tag

# `<cite> HTML Tag`

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

What does `<cite> HTML Tag` do?  
The &lt;cite&gt; element identifies the source of a quotation or creative work. Use the element to identify the name rather than the author or creator of a referenced creative work.

Display  
inline

Contents

- [<span class="toc_number toc_depth_1">1</span> Code Example](#Code_Example)
- [<span class="toc_number toc_depth_1">2</span> When to use &lt;cite&gt;](#When_to_use_ltcitegt)
  - [<span class="toc_number toc_depth_2">2.1</span> A bit of controversy](#A_bit_of_controversy)
- [<span class="toc_number toc_depth_1">3</span> Browser Support for &lt;cite&gt; HTML Tag](#Browser_Support_for_ltcitegt_HTML_Tag)

## <span id="Code_Example">Code Example</span>

    <blockquote>
    Any inaccuracies in this index may be explained by the fact that it has been sorted with the help of a computer.<br>
    &mdash; from <cite>The Art of Computer Programming</cite> by Donald Knuth
    </blockquote>

> Any inaccuracies in this index may be explained by the fact that it has been sorted with the help of a computer.  
> — from The Art of Computer Programming by Donald Knuth

<span class="underline"></span>

## <span id="When_to_use_ltcitegt">When to use `<cite>`</span>

The purpose of the `<cite>` element is to identify the source of a quote. The element should contain the title of a work from which the quote comes. The `<cite>` tag is an underused element. It provides little or no presentational value, and is only there to add semantic information to [`<blockquote>`](https://html.com/tags/blockquote/) and [`<q>`](https://html.com/tags/q/) elements. Most WYSIWYG editors (like the WordPress visual editor, for example) don’t even provide an easy way to add the `<cite>` element to text. However, if you are interested in contributing the semantic web, it is worthwhile to take the time to add it when appropriate.

### <span id="A_bit_of_controversy">A bit of controversy</span>

There are two different opinions about what should be included in the `<cite>` element. The more restrictive opinion is that _only_ the title of a work should be included. The less restrictive opinion is that the title of a work _and also the author_ can be included.

    <!-- More Restrictive --> <blockquote> I am the master of my fate, I am the captain of my sail. - from <cite>Invictus</cite>, by William Ernest Henley </blockquote>   <!-- Less Restrictive --> <blockquote> I am the master of my fate, I am the captain of my sail. - from <cite>Invictus, by William Ernest Henley</cite> </blockquote>

Which standard to follow depends on you. If you care a lot about HTML validation and following standards, you probably want to follow the more restrictive practice. If you are interested in pushing web standards forward, you might want to adopt the more liberal practice. Either way, it is important to realize that _just an author’s name_ is never a valid use of the `<cite>` element. It should always contain at least the title of a work and, optionally, additional information such as the author.

    <!-- DO NOT DO THIS --> <blockquote> I am the master of my fate, I am the captain of my sail. - <cite>William Ernest Henley</cite> </blockquote>

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

## <span id="Browser_Support_for_ltcitegt_HTML_Tag">Browser Support for &lt;cite&gt; HTML Tag</span>

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
