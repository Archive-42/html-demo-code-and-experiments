<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [HTML Frames Are Obsolete In HTML5: Here's How To Make Them Responsive](https://html.com/frames/) / Using The HTML Tag To Create Inline Frames: Here's How

# `Using The HTML Tag To Create Inline Frames: Here’s How`

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[HTML Frames Are Obsolete In HTML5: Here's How To Make Them Responsive](https://html.com/frames/)

What does `Using The HTML Tag To Create Inline Frames: Here's How` do?  
The &lt;iframe&gt; creates an inline frame, which embeds an independent HTML document into the current document.

Display  
block

Contents

- [<span class="toc_number toc_depth_1">1</span> Code Example](#Code_Example)
- [<span class="toc_number toc_depth_1">2</span> Powerful, but easy to misuse](#Powerful_but_easy_to_misuse)
  - [<span class="toc_number toc_depth_2">2.1</span> How &lt;iframe&gt; and &lt;frame&gt; are similar, and how they are different](#How_ltiframegt_and_ltframegt_are_similar_and_how_they_are_different)
- [<span class="toc_number toc_depth_1">3</span> Do not recreate frame-based layouts with iframe](#Do_not_recreate_frame-based_layouts_with_iframe)
- [<span class="toc_number toc_depth_1">4</span> Good (and terrible) uses for &lt;iframe&gt;](#Good_and_terrible_uses_for_ltiframegt)
- [<span class="toc_number toc_depth_1">5</span> Browser Support for iframe](#Browser_Support_for_iframe)
- [<span class="toc_number toc_depth_1">6</span> Attributes of iframe](#Attributes_of_iframe)

## <span id="Code_Example">Code Example</span>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/owsfdh4gxyc" frameborder="0" allowfullscreen></iframe>

<span class="underline"></span>

## <span id="Powerful_but_easy_to_misuse">Powerful, but easy to misuse</span>

Back in the bad old days of website design, there were a lot of [`<frame>`](https://html.com/tags/frame/) elements hanging around, ruining everyone’s day. They were almost always a bad approach to design. Thankfully, the `<frame>` element has been [deprecated in HTML5](https://html.com/html5/), but the `<iframe>`, or “inline frame” is still available. Should it have been deprecated too? Is it best to just avoid it? There are some valid uses for this element, but you really need to understand what it is and how it works in order to avoid some of the pitfalls that were so common in [the dark times](https://en.wikipedia.org/wiki/1990s).

### <span id="How_ltiframegt_and_ltframegt_are_similar_and_how_they_are_different">How `<iframe>` and `<frame>` are similar, and how they are different</span>

Both elements represent an independant HTML document. They content for the document is referenced in the `src` attribute of each element, so it is actually a fully independent resource being _referenced_ from the current document.

    <!-- You can do this --> <iframe src="https://example.com"></iframe>   <!-- But you CANNOT do this --> <iframe>  <!DOCTYPE html>  <html>   <head>   .   .   .   </head>   <body>   .   .   .   </body>  </html> </iframe>

The main difference between `<iframe>` and `<frame>` is that `<iframe>` implements this in a way that makes sense, that respects what an HTML document is in the first place. The contents of the `<iframe>` are displayed inside an element which is clearly a part of the current document. For example, consider this embedded YouTube video:

    <iframe width="560" height="315" src="https://www.youtube.com/embed/M2kSJbLbIgQ" frameborder="0" allowfullscreen></iframe>

The video is clearly _on the page_, not in some separate panel somewhere else. The `<frame>` element broke this paradigm and allowed the document to exert control over the browser window, breaking it into several smaller panels (frames), which each displayed a different document. (It was terrible.) All of the other differences between `<frames>` and `<iframes>` stem from this basic difference.

## <span id="Do_not_recreate_frame-based_layouts_with_iframe">Do not recreate frame-based layouts with iframe</span>

You may find yourself tasked with updating or redesigning an old website that was built using frames. And then you might find yourself tempted to use `<iframes>` and fixed-width design to recreate the same nightmare of independent panels and sub-windows. Then you’ll discover that you can’t use the `target` attribute to open a link in a particular frame. That _should_ stop you, but then you might start looking for JavaScript solutions, and then you’ll rebuild something terrible. Please don’t do this.

## <span id="Good_and_terrible_uses_for_ltiframegt">Good (and terrible) uses for `<iframe>`</span>

There are some legitimate uses for `<iframe>`, and mimicking terrible design patterns from the 1990s is not one of them. Here are a few:

- embedding third-party media
- embedding your own media in a document-agnostic way
- embedding code examples (we do it on this site)
- embedding third party “applets” like payment forms

And here are some terrible uses for `<iframe>`

- photo gallery
- forum or chan

Basically — if you need to embed some independant, already-existing HTML document into the current document, use an `<iframe>`. If you are building all of it from scratch together, there is almost no good reason to break a page design into several independent documents, especially if they \_aren’t actually independent pieces of content.

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and tutorials.</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

## <span id="Browser_Support_for_iframe">Browser Support for iframe</span>

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

## <span id="Attributes_of_iframe">Attributes of iframe</span>

<table><thead><tr class="header"><th>Attribute name</th><th>Values</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="https://html.com/attributes/iframe-sandbox/" class="linked-name">sandbox</a><br />
</td><td></td><td>Places a set of security and usability restrictions on the iframe.</td></tr><tr class="even"><td><a href="https://html.com/attributes/iframe-scrolling/" class="linked-name deprecated">scrolling</a><br />
</td><td></td><td>Was used to toggle scrolling on iframes. Deprecated in HTML5. Use CSS instead.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/iframe-name/" class="linked-name">name</a><br />
</td><td></td><td>Specifies the name of an iframe.</td></tr><tr class="even"><td><a href="https://html.com/attributes/iframe-align/" class="linked-name deprecated">align</a><br />
</td><td></td><td>Was used to set the alignment of an inline frame relative to surrounding elements. Deprecated. Use CSS instead.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/iframe-frameborder/" class="linked-name deprecated">frameborder</a><br />
</td><td></td><td>Was used to toggle the display of a border around an iframe. Deprecated in HTML5. Use CSS instead.</td></tr><tr class="even"><td><a href="https://html.com/attributes/iframe-longdesc/" class="linked-name deprecated">longdesc</a><br />
</td><td></td><td>Was used to specify URL containing a long description of an iframe. Deprecated in HTML5. Use CSS instead.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/iframe-marginwidth/" class="linked-name deprecated">marginwidth</a><br />
</td><td></td><td>Was used to control the width of margins around an iframe. Deprecated in HTML5. Use CSS instead.</td></tr><tr class="even"><td><a href="https://html.com/attributes/iframe-src/" class="linked-name">src</a><br />
</td><td></td><td>Specifies the URL of a document to display in an iframe.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/iframe-vspace/" class="linked-name deprecated">vspace</a><br />
</td><td></td><td>Was used to control the vertical spacing around an iframe. Deprecated in HTML5. Use CSS instead.</td></tr><tr class="even"><td><a href="https://html.com/attributes/iframe-width/" class="linked-name">width</a><br />
</td><td></td><td>Specifies the width of an iframe.</td></tr></tbody></table>

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
