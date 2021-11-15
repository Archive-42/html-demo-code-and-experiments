<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>



[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [Learn How Fonts And Web Typography Work In HTML: A Beginner's Guide](https://html.com/fonts/) / HTML Headings: The Complete Guide To Adding Headlines For Document Structure

`HTML Headings: The Complete Guide To Adding Headlines For Document Structure`
==============================================================================

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[Learn How Fonts And Web Typography Work In HTML: A Beginner's Guide](https://html.com/fonts/)

What does `HTML Headings: The Complete Guide To Adding Headlines For Document Structure` do?  
The &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, and &lt;h6&gt; elements are used to create headings in descending order of importance where &lt;h1&gt; is the most important and &lt;h6&gt; the least.

Display  
block

Usage  
semantic | textual

Contents

-   [<span class="toc_number toc_depth_1">1</span> Code Example](#Code_Example)
-   [<span class="toc_number toc_depth_1">2</span> Section Title](#Section_Title)
    -   [<span class="toc_number toc_depth_2">2.1</span> Subsection Title](#Subsection_Title)
    -   [<span class="toc_number toc_depth_2">2.2</span> Subsection Title](#Subsection_Title-2)
-   [<span class="toc_number toc_depth_1">3</span> Content Headings](#Content_Headings)
    -   [<span class="toc_number toc_depth_2">3.1</span> Headline Tags and SEO](#Headline_Tags_and_SEO)
    -   [<span class="toc_number toc_depth_2">3.2</span> More organized writing](#More_organized_writing)
        -   [<span class="toc_number toc_depth_3">3.2.1</span> Headline tags create a content hierarchy](#Headline_tags_create_a_content_hierarchy)
    -   [<span class="toc_number toc_depth_2">3.3</span> Headlines are good for users](#Headlines_are_good_for_users)
        -   [<span class="toc_number toc_depth_3">3.3.1</span> And don’t forget linking](#And_don8217t_forget_linking)
-   [<span class="toc_number toc_depth_1">4</span> Using headline tags to structure your content](#Using_headline_tags_to_structure_your_content)
    -   [<span class="toc_number toc_depth_2">4.1</span> &lt;h1&gt; and &lt;h2&gt; elements](#lth1gt_and_lth2gt_elements)
    -   [<span class="toc_number toc_depth_2">4.2</span> Widgets and other “non-content”](#Widgets_and_other_8220non-content8221)
-   [<span class="toc_number toc_depth_1">5</span> Browser Support for headlines](#Browser_Support_for_headlines)
-   [<span class="toc_number toc_depth_1">6</span> Attributes of headlines](#Attributes_of_headlines)

<span id="Code_Example">Code Example</span>
-------------------------------------------

    <h2>Section Title</h2>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at egestas leo, at consequat lorem. Etiam at ligula et nisl maximus commodo.
    <h3>Subsection Title</h3>
    Aliquam elit arcu, iaculis vitae hendrerit sed, rutrum quis magna. Suspendisse iaculis sit amet enim quis interdum. Quisque fringilla et mauris at sollicitudin. Aenean dictum volutpat elit id varius. Fusce nec pellentesque arcu, ac dictum ex.
    <h3>Subsection Title</h3>
    Sed sagittis ipsum eu purus condimentum accumsan. Pellentesque volutpat porttitor est, sit amet tincidunt risus vehicula porttitor. Morbi condimentum dapibus fringilla.

<span id="Section_Title">Section Title</span>
---------------------------------------------

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at egestas leo, at consequat lorem. Etiam at ligula et nisl maximus commodo.

### <span id="Subsection_Title">Subsection Title</span>

Aliquam elit arcu, iaculis vitae hendrerit sed, rutrum quis magna. Suspendisse iaculis sit amet enim quis interdum. Quisque fringilla et mauris at sollicitudin. Aenean dictum volutpat elit id varius. Fusce nec pellentesque arcu, ac dictum ex.

### <span id="Subsection_Title-2">Subsection Title</span>

Sed sagittis ipsum eu purus condimentum accumsan. Pellentesque volutpat porttitor est, sit amet tincidunt risus vehicula porttitor. Morbi condimentum dapibus fringilla.

<span class="underline"></span>

<span id="Content_Headings">Content Headings</span>
---------------------------------------------------

The six heading tags are an important part of HTML content writing. Besides the somewhat obvious need they fill (people sometimes want to put headlines on top of things), the headline tags also have [SEO](https://html.com/seo/) value, help you to be a more organized writer, and make pages more user-friendly.

### <span id="Headline_Tags_and_SEO">Headline Tags and SEO</span>

There are two things that a search engine is trying to figure out about your page:

-   What is it about?
-   How good is it?

Generally, links to a page are used as a measure of quality (how good it is) and on-page analysis is used to figure out what the page is about. (There’s some overlap here of course: Google makes some judgments about the quality of a page by looking at the page, and also tries to figure out what the page is about by looking at [what other pages say when they link to it](https://html.com/anchors-links/#Never_Say_Click_Here).) One of the (many) things that Google and other search engines look at determine the content of a page is the words that appear inside heading tags. That’s why, if you are trying to rank for particular words or phrases, it’s a really idea to include those words and phrases into your headline tags.

### <span id="More_organized_writing">More organized writing</span>

When people write without using headline tags (say, when writing by hand or in visual editor like MS Word), they often just write in long, unbroken streams of text which go on too long. Or, worse yet, they might add visual headlines (with **bold**, ALL CAPS, larger text, or <span class="underline">something</span> *else*. This is very common, as people instinctively know they should break up text into smaller chunks. The problem with that is that it isn’t then clear how the different sections related to each other. Is the section headed with 15pt font supposed to be a subsection of the part headlines with 14pt bold font? Often, even the writer doesn’t know because they didn’t really think about it.

#### <span id="Headline_tags_create_a_content_hierarchy">Headline tags create a content hierarchy</span>

On a page with a single piece of content (which should be most pages), the main title for that content should be an `<h1>` tag. Major sections within that content should be headlined with `<h2>`. Subsections within those sections should be headed with `<h3>`, and so on. It should be possible to extract an outline from your headline tags. (In fact, we do this — look at the Contents widget at the top of the page.) This structure makes writing more organized, which (at least 99% of the time) also makes writing better.

**Protip:** Many of us who write online actually map out the headlines first and then fill-in the sections. It’s just old-fashioned outlining, but it sure can make writing go a lot faster and the end result is usually a lot more coherent than if you just started at the top and hoped to get someplace before you finished.

### <span id="Headlines_are_good_for_users">Headlines are good for users</span>

Here’s a dirty little secret about online content: readers skim. Almost no one reads every word of an online article. And there’s very little you can do about it. You certainly can’t stop it. But you can make it so that skimmers will have something to latch onto as their eyes move down the page. Headlines, if they are well-distributed and relevant to their content, give skimmers a bunch of little ways back into the text of the article. They also break up the article into seemingly-digestible bite-sized pieces, so that an antsy skimmer isn’t made anxious by a long solumn of uninterrupted text.

#### <span id="And_don8217t_forget_linking">And don’t forget linking</span>

As of [HTML5](https://html.com/html5/), you can link to any element on a page by appending a hash-sign (`#`) and the `id` of the element. (In the past, you could only link to [anchor](https://html.com/tags/a/) elements.) By adding an `id` to every headline on your page, you can allow people to link to any place in your document. (Again, see how the Content links at the top of the page work.) These in-document links can be tremendously helpful, especially if you provide reference content of any sort, or if your articles are particularly long.

<span id="Using_headline_tags_to_structure_your_content">Using headline tags to structure your content</span>
-------------------------------------------------------------------------------------------------------------

Generally speaking, there are two types of content pages: single content pages (which present a single piece of content) and index pages (which list a bunch of content). Index pages include the main blog page of a site, category and tag archives, author pages that list all the articles written by the author, and so on. Then there is also content (sidebars, widgets, footers) which is appears on nearly every page and which isn’t really “content.” How you use headline tags in these situations can have an impact on SEO and usability.

### <span id="lth1gt_and_lth2gt_elements">`<h1>` and `<h2>` elements</span>

On single content pages throughout your site, the title of that particular piece of content should almost always be in the `<h1>` tag near the top of the [`<body>`](https://html.com/tags/body/). Then, as mentioned above, your sections within the article can use `<h2>` tags.

    <main><article>  <h1>All About Headlines</h1>  .  .  .  <h2>Headlines and SEO</h2>  .  .  .  <h2>Headlines and Structure</h2>  .   .   .  </article></main> 

On an index page, it usually makes sense to put either the site title in an `<h1>` tag, or to put the index name there: the category name, the author name, or whatever it is that defines that page. Then the titles of all the individual pieces that are listed there should have an `<h2>` element for their titles.

    <main>  <h1>Posts about HTML</h1>   <article>   <h2>About Headlines</h2>   . . .  </article>   <article>   <h2>Links</h2>   . . .   </article>   <article>   <h2>Frames</h2>   . . .   </article> </main> 

In the past it has been common to use an `<h2>` tag for the site title when it appears on single-content pages.

    <header>  <h2>HTML Code Tutorials</h2>  <nav><!-- menu --></nav>  </header> <main> <h1>Actual Title of This Page</h1? . . . </main> 

Opinions are mixed on this, but the trend is less and less of it. More people are simply placing the title (and, more likely, a logo [img](https://html.com/tags/img/)) in the header and saving the headline tags for specific on-page content. Part of your own consideration for whether to do this will likely have to do with how important is your own site’s title in relationship to your SEP goals.

### <span id="Widgets_and_other_8220non-content8221">Widgets and other “non-content”</span>

It has also been common until recently to use `<h3>` or `<h4>` elements for widget titles in sidebars. Many Content Management Systems simply do this automatically, so it might not matter to you. But it is something you might want to think about if you are designing your entire page’s markup from scratch. Do you want your headline elements to suggest that the real meaning of your page is “Login” or “Sign up For The Mailing List”? (Of course, this is partially avoided by placing your sidebar in an [`<aside>`](https://html.com/tags/aside/) element.)

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

<span id="Browser_Support_for_headlines">Browser Support for headlines</span>
-----------------------------------------------------------------------------

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

<span id="Attributes_of_headlines">Attributes of headlines</span>
-----------------------------------------------------------------

<table><thead><tr class="header"><th>Attribute name</th><th>Values</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="https://html.com/attributes/h-align/" class="linked-name deprecated">align</a><br />
</td><td></td><td>Was used to specify text alignment (justification) on headline elements. Deprecated in HTML5. Use CSS instead.</td></tr></tbody></table>

Post navigation
---------------

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`The Student’s Guide To Citation Styles: Here’s When (And How) To Cite`](https://html.com/resources/citation-guide/)

[`HTML Img Alt Tags For SEO Best Practice – Search Engines Love Them`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/attributes/img-alt/)

Search HTML.com

<span class="screen-reader-text">Search for:</span>

Most Popular

-   <a href="https://html.com/attributes/a-target/" class="popular_posts_bars_link">How To Use The &lt;a&gt; To Make Links &amp; Open Them Where You Want!</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/attributes/a-target/#comments" class="popular_posts_bars_comment_count">2,742 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="https://html.com/tags/comment-tag/" class="popular_posts_bars_link">The HTML Comment Tag: Here’s How To Use It In Your Code</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/comment-tag/#comments" class="popular_posts_bars_comment_count">1,182 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="https://html.com/attributes/input-pattern/" class="popular_posts_bars_link">Input Pattern: Use It To Add Basic Data Validation In HTML5</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/attributes/input-pattern/#comments" class="popular_posts_bars_comment_count">905 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="https://html.com/tags/iframe/" class="popular_posts_bars_link">Using The HTML Tag To Create Inline Frames: Here’s How</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/iframe/#comments" class="popular_posts_bars_comment_count">748 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
-   <a href="https://html.com/tags/img/" class="popular_posts_bars_link">HTML Tags Guide To Adding Images To Your Web Documents</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/img/#comments" class="popular_posts_bars_comment_count">686 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>

[HTML.com](https://html.com/) © 2015-2020 [Sitemap](https://html.com/sitemap/) | [Privacy](https://html.com/privacy/) | [Contact](https://html.com/contact/)

<span id="cn-notice-text" class="cn-text-container">We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</span><span id="cn-notice-buttons" class="cn-buttons-container"><a href="#" id="cn-accept-cookie" class="cn-set-cookie cn-button bootstrap button">Ok</a></span><a href="javascript:void(0);" id="cn-close-notice" class="cn-close-icon"></a>
