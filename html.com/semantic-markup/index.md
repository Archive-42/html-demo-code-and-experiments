<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  What On Earth Is Semantic Markup? (And Why Should You Learn To Write It)

# What On Earth Is Semantic Markup? (And Why Should You Learn To Write It)

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

As you learn about HTML and the Web you may find that you encounter one specific word repeatedly that is often left undefined. That word is _semantic_.

You may read statements such as ““we went looking for a semantic element”” or ““We try and be as semantic as we can””, yet never get a clear picture of what the word _semantic_ means.

In this article, we’ll explore the world of semantic markup, come up with a working definition of the term, and apply the concept to the way we write HTML markup.

Contents

- [<span class="toc_number toc_depth_1">1</span> What is Semantic Markup?](#What_is_Semantic_Markup)
  - [<span class="toc_number toc_depth_2">1.1</span> Two Practices that Enable Semantic Markup](#Two_Practices_that_Enable_Semantic_Markup)
    - [<span class="toc_number toc_depth_3">1.1.1</span> Using HTML Elements Correctly](#Using_HTML_Elements_Correctly)
    - [<span class="toc_number toc_depth_3">1.1.2</span> Seperating Content and Presentation](#Seperating_Content_and_Presentation)
  - [<span class="toc_number toc_depth_2">1.2</span> Defining Semantic Markup](#Defining_Semantic_Markup)
- [<span class="toc_number toc_depth_1">2</span> Why is Semantic Markup Important?](#Why_is_Semantic_Markup_Important)
- [<span class="toc_number toc_depth_1">3</span> How Do We Write Semantic Markup?](#How_Do_We_Write_Semantic_Markup)
  - [<span class="toc_number toc_depth_2">3.1</span> Document Structure](#Document_Structure)
  - [<span class="toc_number toc_depth_2">3.2</span> Textual Meaning](#Textual_Meaning)
  - [<span class="toc_number toc_depth_2">3.3</span> Media Type](#Media_Type)
  - [<span class="toc_number toc_depth_2">3.4</span> Correlation Tags](#Correlation_Tags)
- [<span class="toc_number toc_depth_1">4</span> Closing Thoughts](#Closing_Thoughts)
- [<span class="toc_number toc_depth_1">5</span> Related Elements](#Related_Elements)

## <span id="What_is_Semantic_Markup">What is Semantic Markup?</span>

[According to Dictionary.com](http://dictionary.reference.com/browse/semantics), _semantics_ refers to the correct interpretation of the meaning of a word or sentence.

To use a word semantically is to use it in a way that is properly aligned with the meaning of the word. When we misuse a word we are not using it semantically.

Many HTML tags have semantic meaning. That is, the element itself conveys some information about the type of content contained between the opening and closing tags.

For example, when a browser encounters an `h1` heading it interprets that tag to mean that the contents of the `h1` element constitute the most important heading of the section that contains the element.

The semantic meaning of an `h1` tag is that it is used to identify the most important header of a specific web page or section.

### <span id="Two_Practices_that_Enable_Semantic_Markup">Two Practices that Enable Semantic Markup</span>

There are two different practices that must be put into place if we are going to write semantic markup.

1.  Semantic markup requires that HTML elements be used according to their intended purpose.
2.  Semantic markup requires the separation of content and presentation.

#### <span id="Using_HTML_Elements_Correctly">Using HTML Elements Correctly</span>

When writing semantic markup, we use HTML tags to tell browsers something about the contents of the element. In semantic markup, tags are no longer just a way to get content to show up on a web page in a human-readable format.

The tags themselves become a way to tell a machine (whether a browser, a computer, a smartphone, or another smart device) something about the meaning of the content.

To write semantic markup, we must use HTML tags correctly so that our markup is both human-readable and machine-readable.

#### <span id="Seperating_Content_and_Presentation">Seperating Content and Presentation</span>

In the past, it was common to use markup to define styles and to control web page layout.

Heading levels were selected not based on hierarchy but based on the styles applied by the web browser, tables were used for web page layout rather than to organize tabular data, some HTML tags (such as [`frameset`](https://html.com/tags/frameset/)) were created for the express purpose of defining web page layout, and so forth.

When we write semantic markup we can no longer select HTML elements based on visual presentation. Instead, we select HTML elements based on their semantic meaning, and then use [CSS](https://html.com/css/) to define the visual presentation of our content.

When writing semantic markup, the presentation of web page elements is kept completely separate and distinct from the markup of the content itself.

### <span id="Defining_Semantic_Markup">Defining Semantic Markup</span>

With those two practices in mind, we can define semantic markup in this way:

Semantic markup is the use of a markup language such as HTML to convey information about the meaning of each element in a document through proper selection of markup elements, and to maintain complete separation between the markup and the visual presentation of the elements contained in the document.

## <span id="Why_is_Semantic_Markup_Important">Why is Semantic Markup Important?</span>

Good CSS can make bad markup invisible to the average website visitor. However, no amount of styling will make bad markup more meaningful to a computerized visitor such as a search engine web crawler, browser translation tools, or assistive technologies such as screen readers.

[According to Bruce Lawson](https://www.smashingmagazine.com/2011/11/html5-semantics/), the semantic use of HTML elements “enhances accessibility, searchability, internationalization, and interoperability.” In other words, writing semantic markup is mandatory if you want your website to be accessible to all visitors, to achieve a high search engine ranking, to be available to visitors from around the world, and to interface effectively with other web services.

Writing semantic markup is about creating web content that is both human and computer readable. When the web can be read equally well by both humans and computers, it becomes more accessible since computers are better able to analyze its contents, index it, deliver it, and developers are better able to tie different sources of information together into new web services.

## <span id="How_Do_We_Write_Semantic_Markup">How Do We Write Semantic Markup?</span>

We write semantic markup by selecting and using HTML tags properly, and by selecting tags that convey something about the information marked by the tags.

There are elements in HTML that are semantic and elements that are non-semantic. Examples of non-semantic elements are `div` and `span`. These tags don’t tell the computer anything about the meaning of the contents of the element.

While useful, and fine to use in some cases, if a semantic tag is available and appropriate for a specific use, use it before resorting to a non-semantic tag.

Many semantic tags come from the analysis of web page markup completed by companies like Google and Opera. What these companies have found is that many websites use `id` and `class` attributes to hint at the meaning of the contents of non-semantic elements.

For example, they found lots of divs that looked like this: `<div id="nav">`, `<div id="header">`, and `<div id="footer">`. Findings like these helped the W3C identify and target new semantic tags to include in HTML5 such as: `nav`, `header`, `footer`, `article`, and `aside`. We can group the most common and important semantic elements into four categories:

- Document structure tags
- Textual meaning tags
- Media type tags
- Correlation tags

### <span id="Document_Structure">Document Structure</span>

In the past, the `div` element was the main way sections of a website were identified and grouped. However, with the release of HTML5, we have several new tags to work with that provide semantic meaning in addition to the grouping attributes offered by the `div` tag:

- [`header`](https://html.com/tags/header/): A container to be used for a web page header which typically contains the site logo, heading elements, and site navigation.
- [`footer`](https://html.com/tags/footer/): A container to be used for a web page footer which typically contains authorship, contact, and copyright information in addition to navigational links and a link back to the top of the web page.
- [`main`](https://html.com/tags/main/): A high-level element used to contain all of the content that is unique to a single web page and not repeated across multiple web pages.
- [`nav`](https://html.com/tags/nav/): An element to contain blocks of site navigation links. This element is typically placed in the page `header` and `footer`, and may also be used in an `aside` (sidebar) element as well.
- [`section`](https://html.com/tags/section/): The `section` element is used to mark off sections of a document, such as chapters or major sections of a long form post.
- [`aside`](https://html.com/tags/aside/): Use to identify content that is related to the main content on the page but not part of the primary flow of the document. For example, the `aside` element may contain a glossary definition of a term that appears in [a blog](https://blogging.com/) post or it may contain advertisements related to the contents of the page.
- [`article`](https://html.com/tags/article/): The article element is used to identify a block of content suitable for reuse and syndication in other settings, such as a blog post or technical article.

Review our [Document Tutorial](https://html.com/document/) to learn more about using these semantic tags that add structure to a web page.

### <span id="Textual_Meaning">Textual Meaning</span>

In the early days of the web it was common to see markup like this:

    <style> .italics {     font-style: italic; } </style> <p>Some paragraph content including one <span class="italics">italicized</span> word.</p>

Today we (hopefully) wouldn’t dream of doing something like that since the `span` element tells the browser and other computerized visitors absolutely nothing about the meaning or purpose of the text nested in the between the opening and closing tags. Rather than use the non-semantic `span` tag, we’d add [`em`](https://html.com/tags/em/) tags around the words that should appear in italics. By using `em` tags, visitors using screen readers or other computers accessing the content would understand that the tags were applied to add emphasis to the tagged content. The `em` element is just one example of how HTML tags add semantic meaning to textual content. Other examples include:

- [`h1`, `h2`, `h3`, `h4`, `h5`, and `h6`](https://html.com/tags/heading/): Heading element tags are used to identify text that should appear as a heading. The highest level, or most important, heading is `h1` which is followed by heading levels `h2` through `h6` in order of descending importance.
- [`strong`](https://html.com/tags/strong/): Text that is marked with `strong` tags is given added importance and is usually displayed in a **bold** typeface.
- [`mark`](https://html.com/tags/mark/): The `mark` tag is used to highlight text of specific importance in a specific context. For example, it can be used to highlight every occurrence of a search term in a search results page.
- [`cite`](https://html.com/tags/cite/): The `cite` element is used to identify the original work from which a bit of content originates.
- [`blockquote`](https://html.com/tags/blockquote/) and [`q`](https://html.com/tags/q/): The `blockquote` and `q` (quote) elements are used to identify text that is a direct quotation from another source.
- [`time`](https://html.com/tags/time/): The `time` element can be used to tell browsers, web crawlers, and other smart devices that a specific bit of content represents time on a 24-hour clock or a specific calendar date.

Our [Fonts and Web Typography Tutorial](https://html.com/fonts/) provides a great deal more detail surrounding the proper use of these tags to assign semantic meaning to textual content.

### <span id="Media_Type">Media Type</span>

HTML5 also includes three tags that identify the type of media served up between the tags. These tags serve a dual purpose. First, they signal to the browser the need to queue up a specific technical resource such as a video playback engine. Second, they assign semantic meaning to the content.

- [`audio`](https://html.com/tags/audio/): Used to add one or more sources of audio content to a document and to allow the browser to pick the best option based on the visitor’s device and browser.
- [`video`](https://html.com/tags/video/): Similar to the `audio` element but used to add video content to a markup document.
- `picture`: The picture element is used to allow a web browser to pick the best image from the available options based on the results of a media query.

You can learn more about embedding `audio` and `video` elements in our [HTML5 Media Tutorial](https://html.com/media/). In addition, our article on the use of [images](https://html.com/images/) on the web provides additional information on when to use the `picture` element and when to stick with the `img` element.

### <span id="Correlation_Tags">Correlation Tags</span>

Several HTML elements are used to signal a correlation between multiple elements. For example, the use of an ordered list ([`ol`](https://html.com/tags/ol/)) tells the browser that the items on the list are related to eachother and need to appear in a specific order. Other elements that are used to signal correlation between multiple elements include:

- [`ul`](https://html.com/tags/ul/): Unordered lists are used to signal a relationship between the items on the list and to indicate that they do not need to be understood in a specific order. Read our [Lists Tutorial](https://html.com/lists/) to learn more about how to use both ordered and unordered lists.
- [`figure`](https://html.com/tags/figure/): The `figure` element is used to group together a piece of content, such as an image, chart, graph, or text, and a caption marked off by `figcaption` tags. By nesting the caption and the content between `figure` tags a relationship between the nested elements is identified. Our [images](https://html.com/images/) page contains more information about implementing this helpful tag.
- [`address`](https://html.com/tags/address/): This attribute is used to associate contact information with the parent element that contains the `address` element. For example, when added to an `article`, the `address` element provides contact information for the article author, and when added to a web page `footer` the `address` identifies contact information for the web page owner.

## <span id="Closing_Thoughts">Closing Thoughts</span>

If you’re new to HTML take the time to learn how to use all of these different HTML tags semantically. If you aren’t sure that you’re using the right tag, take a few minutes and do some research. As we’ve seen, using the right tag is important. If you’ve been working with HTML for a while now, take the time to learn about the new HTML5 elements and how to properly use them. HTML has grown increasingly complex over the last several years, and it can be tempting to keep using `div` elements with `class` and `id` attributes, but the accessibility and interoperability promise of semantic HTML5 tags is reason enough to embrace these new semantic elements. As Internet access becomes more widespread, smart devices proliferate, and the web further integrates into the fabric of modern society, the need for markup to be semantically accurate becomes increasingly evident. No longer is web page content isolated to desktop computers and accessed with just a few web browsers. Today, the [semantic web](https://en.wikipedia.org/wiki/Semantic_Web) is growing up all around us. By ensuring that every bit of markup you touch is semantic, you play a part in enabling the ongoing growth of the increasingly interconnected web.

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/7935ca61eb56de63c80d923835a809e2?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="
                              https://secure.gravatar.com/avatar/7935ca61eb56de63c80d923835a809e2?s=200&amp;d=mm&amp;r=g 2x
                            " width="100" height="100" />

[Jon Penland](https://html.com/author/jon-penland/)

<span class="fn">Jon is a freelance writer, travel enthusiast, husband and father. He writes about web technologies such as WordPress, HTML, and CSS.</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-facebook"></span>](https://www.facebook.com/jonpenland)[<span class="saboxplugin-icon-grey saboxplugin-icon-googleplus"></span>](https://plus.google.com/+JonPenland)

<span id="tho-end-content" style="display: block; visibility: hidden"></span>

## <span id="Related_Elements">Related Elements</span>

<table><thead><tr class="header"><th>Element Name</th><th>Attributes</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="https://html.com/tags/section/" class="linked-name">section</a></td><td></td><td>The &lt;section&gt; element is a structural HTML element used to group together related elements. Each &lt;section&gt; typically includes one or more heading elements and additional elements presenting related content.</td></tr><tr class="even"><td><a href="https://html.com/tags/progress/" class="linked-name">progress</a></td><td></td><td>The &lt;progress&gt; element is used to create a progress bar to serve as a visual demonstration of progress towards the completion of task or goal. The max and value attributes are used to define how much progress (value) has been made towards task completion (max).</td></tr><tr class="odd"><td><a href="https://html.com/tags/output/" class="linked-name">output</a></td><td></td><td>The &lt;output&gt; element is used to display the result of a calculation. The &lt;output&gt; element is typically used in conjunction with a parent &lt;form&gt; and sibling &lt;input&gt; elements to perform a calculation. The actual calculation is typically completed using JavaScript.</td></tr><tr class="even"><td><a href="https://html.com/tags/menuitem/" class="linked-name">menuitem</a></td><td></td><td>The &lt;menuitem&gt; element is used to add menu items and commands to contextual pop-up menus (the menus that appear when you right-click in a web browser).</td></tr><tr class="odd"><td><a href="https://html.com/tags/main/" class="linked-name">main</a></td><td></td><td>The &lt;main&gt; element is used to denote the content of a webpage that relates to the central topic of that page or application. It should include content that is unique to that page and should not include content that is duplicated across multiple webpages, such as headers, footers, and primary navigation elements.</td></tr><tr class="even"><td><a href="https://html.com/tags/aside/" class="linked-name">aside</a></td><td></td><td>The &lt;aside&gt; element is used to identify content that is related to the primary content of the webpage, but does not constitute the primary content of the page. Author information, related links, related content, and advertisements are exampes of content that may be found in an aside element.</td></tr><tr class="odd"><td><a href="https://html.com/tags/article/" class="linked-name">article</a></td><td></td><td>The &lt;article&gt; element identifies a self-contained piece of content which could theoretically be distributed to other websites and platforms as a stand-alone unit. The &lt;article&gt; element is a good choice to contain entire blog posts, news articles, and similar content.</td></tr><tr class="even"><td><a href="https://html.com/tags/acronym/" class="linked-name deprecated">acronym</a></td><td></td><td>The &lt;acronym&gt; element and title attribute was used to associate a full-text explanation with an acronym. The &lt;acronym&gt; element has been deprecated in HTML5 and &lt;abbr&gt; should be used instead.</td></tr><tr class="odd"><td><a href="https://html.com/tags/abbr/" class="linked-name">abbr</a></td><td><a href="https://html.com/attributes/abbr-title/" class="linked-name">title</a><br />
</td><td>The &lt;abbr&gt; element is used along with a title attribute to associate a full-text explanation with an abbreviation or acronym. Website visitors do not see the text in the title attribute, but browsers, search engines, and assistive technologies do use this information.</td></tr><tr class="even"><td><a href="https://html.com/tags/menu/" class="linked-name">menu</a></td><td></td><td>The &lt;menu&gt; element defines an instance of a menu. This experimental HTML feature has very limited browser support, but may soon be an effective way to add menu items to context menus and to create interactive web application menus.</td></tr><tr class="odd"><td><a href="https://html.com/tags/strong/" class="linked-name">Proper Use Of The Strong Element In HTML (Plus Code Example)</a></td><td></td><td>The &lt;strong&gt; element is used to identify text that is of greater importance than the surrounding text. By default, all browsers render &lt;strong&gt; text in a bold typeface.</td></tr><tr class="even"><td><a href="https://html.com/tags/address/" class="linked-name">address</a></td><td></td><td>The &lt;address&gt; element identifies contact information relevant to the current site, page, document, section, or article. It should not be used to identify addresses in any other context.</td></tr><tr class="odd"><td><a href="https://html.com/tags/dfn/" class="linked-name">dfn</a></td><td></td><td>The &lt;dfn&gt; element is used to identify the defining instance of a term in an HTML document. When a term is wrapped in &lt;dfn&gt; tags, browsers and web crawlers will understand that nearby text contains a definition of the term.</td></tr><tr class="even"><td><a href="https://html.com/tags/heading/" class="linked-name">headlines</a></td><td><a href="https://html.com/attributes/h-align/" class="linked-name deprecated">align</a><br />
</td><td>The &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, and &lt;h6&gt; elements are used to create headings in descending order of importance where &lt;h1&gt; is the most important and &lt;h6&gt; the least.</td></tr><tr class="odd"><td><a href="https://html.com/tags/ins/" class="linked-name">ins</a></td><td></td><td>The &lt;ins&gt; element is used to identify text that has been inserted into a document. It is often paired with a &lt;del&gt; element which identifies deleted text replaced by the text contained in the &lt;ins&gt; element.</td></tr></tbody></table>

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
