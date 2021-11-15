<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

<img src="../../wp-content/uploads/html-com-logo.png" alt="HTML.com logo" class="custom-logo sp-no-webp" srcset="https://html.com/wp-content/uploads/html-com-logo.png" width="250" height="53" />

[](../../index.html)

Learn HTML Code, Tags & CSS

[HTML](../../index.html)  /  [HTML Document Structure Before And After HTML5 – Here’s What Changed](../../document/index.html) / HTML5 Aside Element: Here Are The Good (And Not So Good) Uses For It

New in HTML5.

`HTML5 Aside Element: Here Are The Good (And Not So Good) Uses For It`
======================================================================

In <span class="post-meta-category">[HTML Tags](../index.html), [New](../../new/index.html)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](../../disclosure/index.html)

Element of  
[HTML Document Structure Before And After HTML5 – Here’s What Changed](../../document/index.html)

What does `HTML5 Aside Element: Here Are The Good (And Not So Good) Uses For It` do?  
The &lt;aside&gt; element is used to identify content that is related to the primary content of the webpage, but does not constitute the primary content of the page. Author information, related links, related content, and advertisements are exampes of content that may be found in an aside element.

Display  
block

Usage  
semantic | structural

<span class="underline"></span>

Using Aside
-----------

There is actually some confusion and even disagreement over the exact nature and purpose of `<aside>`, so let’s look at the [HTML5 specification](https://html.spec.whatwg.org/multipage/semantics.html#the-aside-element):

> The aside element represents a section of a page that consists of content that is tangentially related to the content around the aside element, and which could be considered separate from that content. Such sections are often represented as sidebars in printed typography.  
> The element can be used for typographical effects like pull quotes or sidebars, for advertising, for groups of nav elements, and for other content that is considered separate from the main content of the page.

This means that any of the following may be valid uses of the `<aside>` element:

-   bibliography or endnotes
-   comments
-   pull quotes
-   editorial sidebars
-   additional information
-   website sidebars unrelated to the content

The following are most likely *not* good uses of the `<aside>` element:

-   article post data (byline, publication date, etc.)
-   post-specific navigation, such as next and previous or related posts

Note that while the above list is somewhat conjectural, there is one potential use of `<aside>` which is specifically prohibited by the specification: parenthetical information within the flow of an article.

Code Example
------------

    <!-- Several potential placements for <aside> -->

    <body>
      <main>
        <article>
          <header>
            <h1>Title of Article</h1>
            <!-- Post Data: Byline, dateline -->
          </header>
          <main>
          <!-- Article Content -->
            <aside><!-- Pull Quote --></aside>
          </main>
          <aside>
            <!-- Comment Section -->
          </aside>
          <footer>
            <!-- Post Date: Tags, Categories, Navigation -->
          </footer>
        </article>
      </main>
      <aside>
        <!-- Website sidebar: Advertising, Post Index, Login Forms -->
      </aside>
    </body>

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="../../wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](../../author/html/index.html)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](../../index.html).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

Browser Support for aside
-------------------------

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

<span class="browser-supported">9</span>

<span class="browser-supported">43</span>

<span class="browser-supported">45</span>

<span class="browser-supported">13</span>

<span class="browser-supported">9</span>

<span class="browser-supported">34</span>

Post navigation
---------------

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`HTML Article Element: Learn When (And Where) To Use It Now`](../article/index.html)

[`New Audio HTML Element: Master It Out Now With Our Code Example`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](../audio/index.html)

Search HTML.com

<span class="screen-reader-text">Search for:</span>

Most Popular

-   <a href="../../attributes/a-target/index.html" class="popular_posts_bars_link">How To Use The &lt;a&gt; To Make Links &amp; Open Them Where You Want!</a><span class="popular_posts_bars_comment_count_hold"><a href="../../attributes/a-target/index.html#comments" class="popular_posts_bars_comment_count">2,738 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="../comment-tag/index.html" class="popular_posts_bars_link">The HTML Comment Tag: Here’s How To Use It In Your Code</a><span class="popular_posts_bars_comment_count_hold"><a href="../comment-tag/index.html#comments" class="popular_posts_bars_comment_count">1,179 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="../../attributes/input-pattern/index.html" class="popular_posts_bars_link">Input Pattern: Use It To Add Basic Data Validation In HTML5</a><span class="popular_posts_bars_comment_count_hold"><a href="../../attributes/input-pattern/index.html#comments" class="popular_posts_bars_comment_count">895 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="../iframe/index.html" class="popular_posts_bars_link">Using The HTML Tag To Create Inline Frames: Here’s How</a><span class="popular_posts_bars_comment_count_hold"><a href="../iframe/index.html#comments" class="popular_posts_bars_comment_count">746 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="../button/index.html" class="popular_posts_bars_link">Creating A Button With The HTML Button Element: Here’s How</a><span class="popular_posts_bars_comment_count_hold"><a href="../button/index.html#comments" class="popular_posts_bars_comment_count">681 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>

[HTML.com](../../index.html) © 2015-2020 [Sitemap](../../sitemap/index.html) | [Privacy](../../privacy/index.html) | [Contact](../../contact/index.html)

<span id="cn-notice-text" class="cn-text-container">We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</span><span id="cn-notice-buttons" class="cn-buttons-container"><a href="#" id="cn-accept-cookie" class="cn-set-cookie cn-button bootstrap button">Ok</a></span><a href="javascript:void(0);" id="cn-close-notice" class="cn-close-icon"></a>
