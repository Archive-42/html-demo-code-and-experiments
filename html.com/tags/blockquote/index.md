<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

<img src="https://html.com/wp-content/uploads/html-com-logo.png" alt="HTML.com logo" class="custom-logo sp-no-webp" srcset="https://html.com/wp-content/uploads/html-com-logo.png" width="250" height="53" />

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [Learn How Fonts And Web Typography Work In HTML: A Beginner's Guide](https://html.com/fonts/) / &lt;blockquote&gt; HTML Tag

`<blockquote> HTML Tag`
=======================

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[Learn How Fonts And Web Typography Work In HTML: A Beginner's Guide](https://html.com/fonts/)

What does `<blockquote> HTML Tag` do?  
The &lt;blockquote&gt; element defines a block of text that is a direct quotation. The &lt;quote&gt; element should be used when a quotation is presented inline with the surrounding text, but when the quotation is presented as a separate paragraph, &lt;blockquote&gt; is the appropriate element to use to identify the quotation.

Display  
block

Usage  
semantic | textual

Contents

-   [<span class="toc_number toc_depth_1">1</span> Code Example](#Code_Example)
-   [<span class="toc_number toc_depth_1">2</span> Styling Blockquotes](#Styling_Blockquotes)
-   [<span class="toc_number toc_depth_1">3</span> Using &lt;cite&gt; with &lt;blockquote&gt;](#Using_ltcitegt_with_ltblockquotegt)
-   [<span class="toc_number toc_depth_1">4</span> The &lt;q&gt; element](#The_ltqgt_element)
-   [<span class="toc_number toc_depth_1">5</span> Browser Support for blockquote](#Browser_Support_for_blockquote)

<span id="Code_Example">Code Example</span>
-------------------------------------------

    When quoting more than a few words in your document, you should use a <code>&lt;blockquote&gt;</code> to set the quoted text off from the surrounding text.

    <blockquote>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi lacus, auctor sit amet purus vel, gravida luctus lectus. Aenean rhoncus dapibus enim, sit amet faucibus leo ornare vitae.
    </blockquote>

When quoting more than a few words in your document, you should use a `<blockquote>` to set the quoted text off from the surrounding text.

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi lacus, auctor sit amet purus vel, gravida luctus lectus. Aenean rhoncus dapibus enim, sit amet faucibus leo ornare vitae.

<span class="underline"></span>

<span id="Styling_Blockquotes">Styling Blockquotes</span>
---------------------------------------------------------

How you style `<blockquotes>` depends on your specific site design, but there are a handful of things that have become fairly common practice. You don’t have to follow them, but you might find that it is helpful to do so. The most common practice for `<blockquote>` styling is indentation via CSS `margin`. This is usually done just on the left side. In fully-justified text, though, it can be helpful to place margins on both sides of the quote.

    .justified {  text-align: justify; } blockquote {  margin: 0 50px; } 

    <div class="justified"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus felis eget tempor lobortis. Nunc iaculis lacus risus, a molestie libero facilisis sit amet. Proin vitae diam non leo commodo ullamcorper euismod vel lacus. Morbi iaculis tincidunt enim. Nunc semper facilisis elit, quis pulvinar sem efficitur sit amet.</p> <blockquote> Fusce vestibulum molestie ultricies. Quisque non eros nec leo elementum elementum. Etiam non fermentum leo, in mollis urna. Quisque quis tortor tempus, sollicitudin turpis et, tempus enim. </blockquote> <p> Proin sed tincidunt urna, et auctor mauris. Vestibulum gravida tellus sit amet interdum ultrices. Nulla suscipit odio ut est efficitur sollicitudin.</p> </div> 

\#justify-bq{ text-align: justify; } \#justify-bq blockquote { margin: 0 50px; } Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus felis eget tempor lobortis. Nunc iaculis lacus risus, a molestie libero facilisis sit amet. Proin vitae diam non leo commodo ullamcorper euismod vel lacus. Morbi iaculis tincidunt enim. Nunc semper facilisis elit, quis pulvinar sem efficitur sit amet.

> Fusce vestibulum molestie ultricies. Quisque non eros nec leo elementum elementum. Etiam non fermentum leo, in mollis urna. Quisque quis tortor tempus, sollicitudin turpis et, tempus enim.

Proin sed tincidunt urna, et auctor mauris. Vestibulum gravida tellus sit amet interdum ultrices. Nulla suscipit odio ut est efficitur sollicitudin.

The other very common styling pattern is to place a vertical line or border along the left edge of the blockquote. This is usually done in alignment with the edge of the surrounding text, which requires using `padding` in place of `margin` to achieve proper indentation. (CSS `border`s go inside of `margin` and outside of `padding`.) You may also want to set the left margin to `0` to override the default margin. This works well whether or not the text is justified.

    blockquote {  padding: 0 50px;  margin-left: 0;  border-left: 2px solid gray; } 

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus felis eget tempor lobortis. Nunc iaculis lacus risus, a molestie libero facilisis sit amet. Proin vitae diam non leo commodo ullamcorper euismod vel lacus. Morbi iaculis tincidunt enim. Nunc semper facilisis elit, quis pulvinar sem efficitur sit amet.</p> <blockquote> Fusce vestibulum molestie ultricies. Quisque non eros nec leo elementum elementum. Etiam non fermentum leo, in mollis urna. Quisque quis tortor tempus, sollicitudin turpis et, tempus enim. </blockquote> <p> Proin sed tincidunt urna, et auctor mauris. Vestibulum gravida tellus sit amet interdum ultrices. Nulla suscipit odio ut est efficitur sollicitudin.</p> 

\#border-blockquote { padding: 0 50px; margin-left: 0; border-left: 2px solid gray; } Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus felis eget tempor lobortis. Nunc iaculis lacus risus, a molestie libero facilisis sit amet. Proin vitae diam non leo commodo ullamcorper euismod vel lacus. Morbi iaculis tincidunt enim. Nunc semper facilisis elit, quis pulvinar sem efficitur sit amet.

> Fusce vestibulum molestie ultricies. Quisque non eros nec leo elementum elementum. Etiam non fermentum leo, in mollis urna. Quisque quis tortor tempus, sollicitudin turpis et, tempus enim.

Proin sed tincidunt urna, et auctor mauris. Vestibulum gravida tellus sit amet interdum ultrices. Nulla suscipit odio ut est efficitur sollicitudin.

<span id="Using_ltcitegt_with_ltblockquotegt">Using `<cite>` with `<blockquote>`</span>
---------------------------------------------------------------------------------------

Some people recommend using the [`<cite>`](https://html.com/tags/cite/) element to identify the source of a quote.

    <blockquote> You should use the <cite> element to identify the source of a quote. —<cite>Some People</cite> </blockquote> 

However, this is *not* allowed according to the HTML5 standard. There is some contention about what exactly the `<cite>` element should contain, but both the W3C and WHATWG agree that this is not how the element should be used. The `<cite>` element should be used to identify the *title of a work*, not its author or the source of an arbitrary quote.

    <blockquote> The cite element represents the title of a work (e.g. a book, a paper, an essay, a poem, a score, a song, a script, a film, a TV show, a game, a sculpture, a painting, a theatre production, a play, an opera, a musical, an exhibition, a legal case report, a computer program, etc). This can be a work that is being quoted or referenced in detail (i.e. a citation), or it can just be a work that is mentioned in passing.  A person's name is not the title of a work — even if people call that person a piece of work — and the element must therefore not be used to mark up people's names. (In some cases, the b element might be appropriate for names; e.g. in a gossip article where the names of famous people are keywords rendered with a different style to draw attention to them. In other cases, if an element is really needed, the span element can be used.)  —<cite><a href="https://html.spec.whatwg.org/multipage/semantics.html#the-cite-element">HTML Living Standard</a></cite>, Web Hypertext Application Technology Working Group </blockquote> 

> The cite element represents the title of a work (e.g. a book, a paper, an essay, a poem, a score, a song, a script, a film, a TV show, a game, a sculpture, a painting, a theatre production, a play, an opera, a musical, an exhibition, a legal case report, a computer program, etc). This can be a work that is being quoted or referenced in detail (i.e. a citation), or it can just be a work that is mentioned in passing. A person’s name is not the title of a work — even if people call that person a piece of work — and the element must therefore not be used to mark up people’s names. (In some cases, the b element might be appropriate for names; e.g. in a gossip article where the names of famous people are keywords rendered with a different style to draw attention to them. In other cases, if an element is really needed, the span element can be used.) —[HTML Living Standard](https://html.spec.whatwg.org/multipage/semantics.html#the-cite-element), Web Hypertext Application Technology Working Group

While the W3C’s recommendation for HTML5 said that the `<cite>` element *could* include an author’s name (along with the title), it is best to follow the WHATWG standard and use it only for the title of the work.

<span id="The_ltqgt_element">The `<q>` element</span>
-----------------------------------------------------

Almost everyone knows and used the `<blockquote>` element, but very few composers of HTML documents know about or use the [`<q>`](https://html.com/tags/q/) element, which represents a inline quote. Since quote punctuation marks are actually different in different regions, you may want to consider using `<q>` as an alternative to typographical quote marks.

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and tutorials.</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

<span id="Browser_Support_for_blockquote">Browser Support for blockquote</span>
-------------------------------------------------------------------------------

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

Post navigation
---------------

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`The Student’s Guide To Citation Styles: Here’s When (And How) To Cite`](https://html.com/resources/citation-guide/)

[`HTML Img Alt Tags For SEO Best Practice – Search Engines Love Them`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/attributes/img-alt/)

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
