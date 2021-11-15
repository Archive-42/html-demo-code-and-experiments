<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [Learn How Fonts And Web Typography Work In HTML: A Beginner's Guide](https://html.com/fonts/) / Using br To Insert Line Breaks In HTML: Here's How

# `Using br To Insert Line Breaks In HTML: Here’s How`

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[Learn How Fonts And Web Typography Work In HTML: A Beginner's Guide](https://html.com/fonts/)

What does `Using br To Insert Line Breaks In HTML: Here's How` do?  
The &lt;br&gt; element is used to insert a line break or carriage-return within a parent element such as a paragraph without breaking out of the parent container.

Display  
inline

Usage  
textual

Contents

- [<span class="toc_number toc_depth_1">1</span> Code Example](#Code_Example)
- [<span class="toc_number toc_depth_1">2</span> Don’t abuse line breaks](#Don8217t_abuse_line_breaks)
- [<span class="toc_number toc_depth_1">3</span> Browser Support for br](#Browser_Support_for_br)
- [<span class="toc_number toc_depth_1">4</span> Attributes of br](#Attributes_of_br)

## <span id="Code_Example">Code Example</span>

    This sentence and the next will be on different lines.<br>This sentence and the one before will be on different lines.

This sentence and the next will be on different lines.  
This sentence and the one before will be on different lines.

<span class="underline"></span>

## <span id="Don8217t_abuse_line_breaks">Don’t abuse line breaks</span>

The `<br>` element creates a line break. It can be easy to abuse this element to create styling which that mimics better, more semantic options like [paragraphs ( `<p>` )](https://html.com/tags/p/) and [lists](https://html.com/tags/ul/). Generally, the `<br>` element should only be used if the line break itself is an intrinsic part of the content. This might be the case, for example, with:

- addresses
- poetry
- code samples

<!-- -->

    John Smith<br> c/o Jane Smythe<br> 123 Main St.<br> Northeast Southwestershire, XY 12345

John Smith  
c/o Jane Smythe  
123 Main St.  
Northeast Southwestershire, XY 12345

    <blockquote> <p>Out of the night that covers me,<br> Black as the pit from pole to pole,<br> I thank whatever gods may be<br> For my unconquerable soul.</p> <p>In the fell clutch of circumstance<br> I have not winced nor cried aloud.<br> Under the bludgeonings of chance<br> My head is bloody, but unbowed.</p> <p>Beyond this place of wrath and tears<br> Looms but the Horror of the shade,<br> And yet the menace of the years<br> Finds, and shall find me, unafraid.</p> <p>It matters not how strait the gate,<br> How charged with punishments the scroll,<br> I am the master of my fate:<br> I am the captain of my soul.</p> — <cite>Invictus</cite>, by William Ernest Henley </blockquote>

> Out of the night that covers me,  
> Black as the pit from pole to pole,  
> I thank whatever gods may be  
> For my unconquerable soul. In the fell clutch of circumstance  
> I have not winced nor cried aloud.  
> Under the bludgeonings of chance  
> My head is bloody, but unbowed. Beyond this place of wrath and tears  
> Looms but the Horror of the shade,  
> And yet the menace of the years  
> Finds, and shall find me, unafraid. It matters not how strait the gate,  
> How charged with punishments the scroll,  
> I am the master of my fate:  
> I am the captain of my soul.
>
> — Invictus, by William Ernest Henley

If you find yourself using `<br>` to separate blocks of texts, you may need to think about using paragraph tags or another element. If you are using them to create more space between items, you should use CSS `margin`.

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

## <span id="Browser_Support_for_br">Browser Support for br</span>

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

## <span id="Attributes_of_br">Attributes of br</span>

<table><thead><tr class="header"><th>Attribute name</th><th>Values</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="https://html.com/attributes/br-clear/" class="linked-name deprecated">clear</a><br />
</td><td></td><td>Was used to ensure that line breaks "cleared" floated or aligned elements above them. Deprecated.</td></tr></tbody></table>

## Post navigation

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`The Student’s Guide To Citation Styles: Here’s When (And How) To Cite`](https://html.com/resources/citation-guide/)

[`HTML Img Alt Tags For SEO Best Practice – Search Engines Love Them`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/attributes/img-alt/)

Search HTML.com

<span class="screen-reader-text">Search for:</span>

Most Popular

- <a href="https://html.com/attributes/a-target/" class="popular_posts_bars_link">How To Use The &lt;a&gt; To Make Links &amp; Open Them Where You Want!</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/attributes/a-target/#comments" class="popular_posts_bars_comment_count">2,738 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="https://html.com/tags/comment-tag/" class="popular_posts_bars_link">The HTML Comment Tag: Here’s How To Use It In Your Code</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/comment-tag/#comments" class="popular_posts_bars_comment_count">1,179 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="https://html.com/attributes/input-pattern/" class="popular_posts_bars_link">Input Pattern: Use It To Add Basic Data Validation In HTML5</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/attributes/input-pattern/#comments" class="popular_posts_bars_comment_count">895 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="https://html.com/tags/iframe/" class="popular_posts_bars_link">Using The HTML Tag To Create Inline Frames: Here’s How</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/iframe/#comments" class="popular_posts_bars_comment_count">746 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="https://html.com/tags/button/" class="popular_posts_bars_link">Creating A Button With The HTML Button Element: Here’s How</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/button/#comments" class="popular_posts_bars_comment_count">681 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>

[HTML.com](https://html.com/) © 2015-2020 [Sitemap](https://html.com/sitemap/) | [Privacy](https://html.com/privacy/) | [Contact](https://html.com/contact/)

<span id="cn-notice-text" class="cn-text-container">We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</span><span id="cn-notice-buttons" class="cn-buttons-container"><a href="#" id="cn-accept-cookie" class="cn-set-cookie cn-button bootstrap button">Ok</a></span><a href="javascript:void(0);" id="cn-close-notice" class="cn-close-icon"></a>
