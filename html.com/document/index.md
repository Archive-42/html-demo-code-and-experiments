<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>



[](https://html.com/)

Learn HTML Code, Tags & CSS





[HTML](https://html.com/)  /  HTML Document Structure Before And After HTML5 – Here’s What Changed

HTML Document Structure Before And After HTML5 – Here’s What Changed
====================================================================

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

If you want to write semantic markup – and believe us, [you do want to write semantic markup](https://html.com/semantic-markup/) – then you need to structure HTML documents properly. The `html`, `head`, and `body` elements have been part of the HTML specification since the mid 1990s, and up until a few years ago they were the primary elements used to give structure to HTML documents. However, the situation has changed dramatically in the last few years as HTML5 has added a slew of new tags that can be used to add rich semantic meaning to the structure of an HTML document.

Contents

-   [<span class="toc_number toc_depth_1">1</span> HTML Document Structure Before HTML5](#HTML_Document_Structure_Before_HTML5)
-   [<span class="toc_number toc_depth_1">2</span> New Semantic Tags Added by HTML5](#New_Semantic_Tags_Added_by_HTML5)
    -   [<span class="toc_number toc_depth_2">2.1</span> &lt;header&gt;](#ltheadergt)
    -   [<span class="toc_number toc_depth_2">2.2</span> &lt;main&gt;](#ltmaingt)
    -   [<span class="toc_number toc_depth_2">2.3</span> &lt;nav&gt;](#ltnavgt)
    -   [<span class="toc_number toc_depth_2">2.4</span> &lt;article&gt;](#ltarticlegt)
    -   [<span class="toc_number toc_depth_2">2.5</span> &lt;section&gt;](#ltsectiongt)
    -   [<span class="toc_number toc_depth_2">2.6</span> &lt;aside&gt;](#ltasidegt)
    -   [<span class="toc_number toc_depth_2">2.7</span> &lt;address&gt;](#ltaddressgt)
    -   [<span class="toc_number toc_depth_2">2.8</span> &lt;footer&gt;](#ltfootergt)
-   [<span class="toc_number toc_depth_1">3</span> An HTML Document Template](#An_HTML_Document_Template)
-   [<span class="toc_number toc_depth_1">4</span> Related Elements](#Related_Elements)
-   [<span class="toc_number toc_depth_1">5</span> Tutorials and Resources](#Tutorials_and_Resources)

<span id="HTML_Document_Structure_Before_HTML5">HTML Document Structure Before HTML5</span>
-------------------------------------------------------------------------------------------

If you’ve been using HTML for any time at all you know that every bit of HTML needs to be wrapped in [`html`](https://html.com/tags/html/) tags. An opening `<html>` tag should appear first and a closing `</html>` tag should appear at the bottom of the document. Every other bit of HTML should appear between those two tags.

The [`head`](https://html.com/tags/head/) element is the first element to appear after the opening `html` tag. In the document `head` we place things like the page [`title`](https://html.com/tags/title/) and [`meta`](https://html.com/tags/meta/) data, we add JavaScript to our page with the [`script`](https://html.com/tags/script/) tag, and we \[`link`\] to external stylesheets and other resources.

On most webpages the `head` element is a very busy place. For this reason, [we’ve created a tutorial](https://html.com/document/metadata/) that explains the tags that typically appear in the `head` element and what these tags are used for.

All of the content that is visible on a web page is nested between opening and closing [`body`](https://html.com/tags/body/) tags. The body is the primary container of the content that makes up a web page.

Up until HTML5, that was pretty much it for basic HTML document structure. All of our code was dropped in between the `body` tags and styled with [CSS](https://html.com/css/). However, now that HTML5 has broad support among modern browsers, it’s time to implement the new HTML5 tags that will give our HTML documents a much more meaningful structure.

<span id="New_Semantic_Tags_Added_by_HTML5">New Semantic Tags Added by HTML5</span>
-----------------------------------------------------------------------------------

In this brief tutorial we’ll touch on all of the new tags added as part of HTML5 to define the structure and content of a web page. The elements we’re going to cover in this guide include:

-   [`header`](https://html.com/tags/header/)
-   [`main`](https://html.com/tags/main/)
-   [`nav`](https://html.com/tags/nav/)
-   [`article`](https://html.com/tags/article/)
-   [`section`](https://html.com/tags/section/)
-   [`aside`](https://html.com/tags/aside/)
-   [`address`](https://html.com/tags/address/)
-   [`footer`](https://html.com/tags/footer/)

Using these elements isn’t as complicated as it might appear at first glance, and most are fairly self-explanatory. We’ll make a quick pass over each new element, and then draw up an HTML template you can use these new tags to add rich semantic meaning to your markup.

### <span id="ltheadergt">`<header>`</span>

The `header` element is used to contain the content that appears at the top of every page of your website: the logo, tagline, search prompt, and possibly a navigational menu. In most cases, the `header` element is best positioned as a direct descendant of the `body` element, but it’s also ok to place it inside the `main` element if you prefer.

### <span id="ltmaingt">`<main>`</span>

Use the `main` element between `header` and `footer` elements to contain the primary content of your web page. The `main` element [cannot be a descendant](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main) of an `article`, `aside`, `header`, `footer`, or `nav` element. Instead, it should be a direct descendant of the `body` element. Think of it as the direct replacement for the `div id="main"` you’ve used in the past to wrap up your entire page contents.

It’s also ok to use more than one `main` element on a webpage. For example, if [your blog](https://blogging.com/) homepage includes your five most recent posts, it would be appropriate to wrap each post in it’s own `main` element – or you could wrap each in [`article`](#ltarticlegt) tags.

### <span id="ltnavgt">`<nav>`</span>

Navigational menus are commonly placed at the top of a web page, in a sidebar, or in the page footer. Wherever you happen to place a navigational menu, wrap it in `nav` tags. Note that you don’t need to use `nav` tags for every link, just for blocks of links that provide either sitewide navigation or navigation for a specific part of a website.

### <span id="ltarticlegt">`<article>`</span>

If your website includes blog posts, articles, or any other content that could just as well appear on another website as syndicated content, wrap that content in an `article` post. You can use an `article` element just about anywhere other than nested within an `address` element, but in most cases an `article` element will be a direct descendant of a `main` element or of a `section` element that is a direct descendant of a `main` element.

### <span id="ltsectiongt">`<section>`</span>

The `section` element is used to identify content that is a major sub-section of a larger whole. For example, if you’ve posted a long-form ebook in HTML format, it would be reasonable to wrap each chapter in a `section` element. Likewise, if you have a sidebar (semantically wrapped in `aside` tags) that contains four sections – ads, a search prompt, related posts, and a newsletter signup form – it would be ok to wrap each of these four sections in `section` tags since a written outline of the sidebar contents would include a line item for each of the four sections.

[There is some confusion](http://html5doctor.com/the-section-element/) about when to use a `section` and when to use a `div`. Here’s a good rule of thumb to help you know when to use each:

-   Use a `div` if you’re wrapping up some content purely to make it easier to style the content or to make it easier for some JavaScript to get ahold of it.
-   Use a `section` if you would list the content as an item when writing out an outline of the document.

### <span id="ltasidegt">`<aside>`</span>

If your website contains information that isn’t directly related to the main content of the page, it would be appropriate to wrap that information in `aside` tags. For example, if you write a post that includes some technical terms, and you add definitions for those terms in a sidebar, it would make sense to wrap those definitions in `aside` tags. It is also common for the entire sidebar of a blog-type website to be wrapped in `aside` tags to make it clear that the sidebar is not part of the primary content of the page.

### <span id="ltaddressgt">`<address>`</span>

The `address` element provides contact information for the nearest parent `article` or `body` element that contains it. Use the `address` element inside an `article` to provide contact information for the article’s author. Use it outside of an `article` in the `main` or `footer` elements, or as a direct descendant of the `body` element, to provide contact information for the website’s owner.

### <span id="ltfootergt">`<footer>`</span>

The `footer` appears at the bottom of a section of a document. Typically, the `footer` is a direct descendant of the `body` element, but it can also be used within a `main` element, a `section`, or an `article`. The most common use of the `footer` element is to place it at the bottom of an HTML document to contain things like a copyright notice, links to related content, `address` information about the owner of the website, and links to administrative things like privacy policies and website’s terms of service.

You may also use the `footer` element within an `article` to provide metadata about that particular article. For example, if `article` tags have been used to wrap a forum post, it would be appropriate to wrap copyright information and the date and time the post was made in a `footer` element and place it at the bottom of the `article`.

<span id="An_HTML_Document_Template">An HTML Document Template</span>
---------------------------------------------------------------------

The template below will show you how all of these elements are properly nested together. We invite you to copy it and use it as a boilerplate template for all of your HTML documents.

    <html>
      <!--Only the head and body elements are supposed to be direct descendants of the 
      html element. All others should be descendants of either the head or body-->
      <head>
        <!--The head element must be a direct descendant of the html element-->
        <!--The head element is a very busy place for most websites, so we've created
        a tutorial to walk you through the different elements and tasks accomplished
        in the head element. You can find it at the following address:
        https://html.com/document/metadata/ -->
        <title>Your Webpage Title Goes Here</title>
      </head>
      <body>
        <!--The body element contains the full visible content of the web page-->
        <header>
          <!--The header typically includes your logo, tagline, and may contain a nav 
          element-->
          <nav>
            <!--The nav element isn't used for every single link but for navigational 
            menus-->
          </nav>
        </header>
        <main>
          <!--The main element cannot be used inside of anything other than the body 
          element. It is intended to hold the main content of the page.-->
          <nav>
            <!--You can use a nav element just about anywhere-->
          </nav>
          <article>
            <!--If your web page contains a blog post or news article it makes sense 
            to wrap the whole article in article tags-->
            <aside>
              <!--The aside tag can be used within an article or outside of it. It 
              is used to mark content that is related but not central to the main 
              content of the page-->
            </aside>
            <section>
              <!--Sections are used to seperate major parts of an element, such as 
              chapters of an HTML ebook, or to cordone off the comments section 
              from the rest of the main element-->
            </section>
            <address>
              <!--An address element inside of an article element is used to provide 
              contact info for the author of the article-->
            </address>
          </article>
          <aside>
            <!--The aside element would also be used to mark a sidebar if used 
            outside of the main element-->
            <section>
              <!--Within a sidebar you could use section elements to identify the 
              different parts of the sidebar. For example, you could put adds in 
              one section, related posts in a second section, and a newsletter 
              signup form in a third section element.-->
            </section>
          </aside>
        </main>
        <footer>
          <!--The footer typically contains links to things like About Us, Privacy 
          Policy, Contact Us and so forth. It may also contain a nav, address, 
          section, or aside element.-->
          <address>
            <!--Put an address element in the footer and you're indicating that 
            the contact info within the element is for the owner of the website 
            rather than the author of the article.-->
          </address>
        </footer>
      </body>
    </html>

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/7935ca61eb56de63c80d923835a809e2?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="
                              https://secure.gravatar.com/avatar/7935ca61eb56de63c80d923835a809e2?s=200&amp;d=mm&amp;r=g 2x
                            " width="100" height="100" />

[Jon Penland](https://html.com/author/jon-penland/)

<span class="fn">Jon is a freelance writer, travel enthusiast, husband and father. He writes about web technologies such as WordPress, HTML, and CSS.</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-facebook"></span>](https://www.facebook.com/jonpenland)[<span class="saboxplugin-icon-grey saboxplugin-icon-googleplus"></span>](https://plus.google.com/+JonPenland)

<span id="tho-end-content" style="display: block; visibility: hidden"></span>

<span id="Related_Elements">Related Elements</span>
---------------------------------------------------

<table><thead><tr class="header"><th>Element Name</th><th>Attributes</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="https://html.com/tags/main/" class="linked-name">main</a></td><td></td><td>The &lt;main&gt; element is used to denote the content of a webpage that relates to the central topic of that page or application. It should include content that is unique to that page and should not include content that is duplicated across multiple webpages, such as headers, footers, and primary navigation elements.</td></tr><tr class="even"><td><a href="https://html.com/tags/header/" class="linked-name">header</a></td><td></td><td>The &lt;header&gt; element is used to identify content that precedes the primary content of the web page and often contains website branding, navigation elements, search forms, and similar content that is duplicated across all or most pages of a website.</td></tr><tr class="odd"><td><a href="https://html.com/tags/footer/" class="linked-name">footer</a></td><td></td><td>The &lt;footer&gt; element is a structural element used to identify the footer of a page, document, article, or section. A &lt;footer&gt; typically contains copyright and authorship information or navigational elements pertaining to the contents of the parent element.</td></tr><tr class="even"><td><a href="https://html.com/tags/aside/" class="linked-name">aside</a></td><td></td><td>The &lt;aside&gt; element is used to identify content that is related to the primary content of the webpage, but does not constitute the primary content of the page. Author information, related links, related content, and advertisements are exampes of content that may be found in an aside element.</td></tr><tr class="odd"><td><a href="https://html.com/tags/article/" class="linked-name">article</a></td><td></td><td>The &lt;article&gt; element identifies a self-contained piece of content which could theoretically be distributed to other websites and platforms as a stand-alone unit. The &lt;article&gt; element is a good choice to contain entire blog posts, news articles, and similar content.</td></tr><tr class="even"><td><a href="https://html.com/tags/title/" class="linked-name">title</a></td><td></td><td>The &lt;title&gt; element is a required HTML element used to assign a title to an HTML document. Page titles are not displayed in the browser window, but they are used as the page name by search engines and displayed by browsers in the title bar, on the page tab, and as the page name of bookmarked webpages.</td></tr><tr class="odd"><td><a href="https://html.com/tags/isindex/" class="linked-name deprecated">isindex</a></td><td><a href="https://html.com/attributes/isindex-action/" class="linked-name deprecated">action</a><br />
<a href="https://html.com/attributes/isindex-prompt/" class="linked-name deprecated">prompt</a><br />
</td><td>The &lt;isindex&gt; element was used to create a single line search prompt for querying the contents of the document. Implementation of the element was inconsistent and the functionality duplicated by the &lt;form&gt; and &lt;input&gt; elements. As a result, &lt;isindex&gt; was deprecated in HTML 4.01.</td></tr><tr class="even"><td><a href="https://html.com/tags/meta/" class="linked-name">meta</a></td><td><a href="https://html.com/attributes/meta-content/" class="linked-name">content</a><br />
<a href="https://html.com/attributes/meta-http-equiv/" class="linked-name">http-equiv</a><br />
<a href="https://html.com/attributes/meta-name/" class="linked-name">&lt;meta name=""&gt;</a><br />
</td><td>The &lt;meta&gt; element is used to add machine-readable information to an HTML document. Information added with the &lt;meta&gt; tag is not displayed to website visitors but is provided for use by browsers and web crawlers.</td></tr><tr class="odd"><td><a href="https://html.com/tags/comment-tag/" class="linked-name">html comment</a></td><td></td><td>This element is used to add a comment to an HTML document. An HTML comment begins with &lt;code&gt;&lt;!––&lt;/code&gt; and the comment closes with &lt;code&gt;––&gt;&lt;/code&gt;. HTML comments are visible to anyone that views the page source code, but are not rendered when the HTML document is rendered by a browser.</td></tr><tr class="even"><td><a href="https://html.com/tags/doctype/" class="linked-name">DOCTYPE</a></td><td></td><td>The &lt;!DOCTYPE html&gt; declaration is used to inform a website visitor's browser that the document being rendered is an HTML document. While not actually an HTML element itself, every HTML document should being with a DOCTYPE declaration to be compliant with HTML standards.</td></tr><tr class="odd"><td><a href="https://html.com/tags/base/" class="linked-name">base</a></td><td><a href="https://html.com/attributes/base-target/" class="linked-name">target</a><br />
<a href="https://html.com/attributes/base-href/" class="linked-name">href</a><br />
</td><td>The &lt;base&gt; element is used to identify a base URL upon which to build all relative URLs that appear on a webpage. In addition, if the &lt;base&gt; element has a target attribute, the target attribute will be used as the default attribute for all hyperlinks appearing in the document.</td></tr><tr class="even"><td><a href="https://html.com/tags/body/" class="linked-name">body</a></td><td><a href="https://html.com/attributes/body-background/" class="linked-name deprecated">background</a><br />
<a href="https://html.com/attributes/body-bgcolor/" class="linked-name deprecated">bgcolor</a><br />
<a href="https://html.com/attributes/body-bgproperties/" class="linked-name deprecated">bgproperties</a><br />
<a href="https://html.com/attributes/body-stylesrc/" class="linked-name deprecated">stylesrc</a><br />
<a href="https://html.com/attributes/body-text/" class="linked-name deprecated">text</a><br />
<a href="https://html.com/attributes/body-scroll/" class="linked-name deprecated">scroll</a><br />
<a href="https://html.com/attributes/body-topmargin/" class="linked-name deprecated">topmargin</a><br />
<a href="https://html.com/attributes/body-onunload/" class="linked-name">onUnload</a><br />
<a href="https://html.com/attributes/body-onload/" class="linked-name">onLoad</a><br />
<a href="https://html.com/attributes/body-onfocus/" class="linked-name">onFocus</a><br />
</td><td>The &lt;body&gt; element contains the entire content of a webpage. It must be the second element inside of the parent &lt;html&gt; element, following only the &lt;head&gt; element.</td></tr><tr class="odd"><td><a href="https://html.com/tags/html/" class="linked-name">html</a></td><td></td><td>The &lt;html&gt; element is used as a container for all of the HTML of an entire document.</td></tr><tr class="even"><td><a href="https://html.com/tags/head/" class="linked-name">head</a></td><td></td><td>The &lt;head&gt; element contains information about an HTML document that is used by browsers and web crawlers but is not displayed to website visitors.</td></tr><tr class="odd"><td><a href="https://html.com/tags/div/" class="linked-name">div</a></td><td><a href="https://html.com/attributes/div-align/" class="linked-name deprecated">align</a><br />
</td><td>The &lt;div&gt; element defines an arbitrary block of content which can be placed and styled as a single unit.</td></tr></tbody></table>

<span id="Tutorials_and_Resources">Tutorials and Resources</span>
-----------------------------------------------------------------

[What Is Metadata In HTML Documents?: Head Elements Explained](https://html.com/document/metadata/)  

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
