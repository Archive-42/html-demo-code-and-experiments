<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

<img src="https://html.com/wp-content/uploads/html-com-logo.png" alt="HTML.com logo" class="custom-logo sp-no-webp" srcset="https://html.com/wp-content/uploads/html-com-logo.png" width="250" height="53" />

[](https://html.com/)

Learn HTML Code, Tags & CSS


class="mega-menu-link">B<span class="mega-indicator"></span></a></span>


class="mega-menu-link">B<span class="mega-indicator"></span></a></span>

HTML5 Basics For Everyone Tired Of Reading About Deprecated Code
================================================================

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

You’ve probably seen many references to HTML5, along with mentions of certain features being “Deprecated” or “New” in HTML5. This can sometimes be confusing, as you find out that the way you thought you were “supposed” to do something is now *not the right way at all*.

It can also be annoying — especially since most of these “deprecated features” still work on most browsers. Why bother learning a new way of doing something if the old way works just fine?

And, of course, it can be difficult to find the right information sometimes. Content on the internet doesn’t live forever… but almost. And the older content is, the more likely it is that you’ll [find it on a search engine](https://html.com/seo/). (All things being equal, Google and the others prefer older content. Also, older content has had more time to acquire backlinks.) This means that you will often find out-of-date tutorials when you are looking for information about HTML.

This article should clear up some of that confusion and get you on the right track with modern web development.

Contents

-   [<span class="toc_number toc_depth_2">0.1</span> What is HTML?](#What_is_HTML)

[<span class="toc_number toc_depth_1">1</span> All About Rats](#All_About_Rats)

- [HTML5 Basics For Everyone Tired Of Reading About Deprecated Code](#html5-basics-for-everyone-tired-of-reading-about-deprecated-code)
  - [<span id="What_is_HTML">What is HTML?</span>](#what-is-html)
- [<span id="All_About_Rats">All About Rats</span>](#all-about-rats)
  - [<span id="Why_Do_Rats_Make_Great_Pets">Why Do Rats Make Great Pets?</span>](#why-do-rats-make-great-pets)
    - [<span id="HTML_History_and_Development">HTML History and Development</span>](#html-history-and-development)
  - [<span id="What_is_HTML5">What is HTML5?</span>](#what-is-html5)
    - [<span id="Encouraging_Semantic_Markup">Encouraging Semantic Markup</span>](#encouraging-semantic-markup)
    - [<span id="Separating_Design_From_Content">Separating Design From Content</span>](#separating-design-from-content)
    - [<span id="Promoting_Accessibility_and_Design_Responsiveness">Promoting Accessibility and Design Responsiveness</span>](#promoting-accessibility-and-design-responsiveness)
    - [<span id="Reducing_the_Overlap_Between_HTML_CSS_and_JavaScript">Reducing the Overlap Between HTML, CSS, and JavaScript</span>](#reducing-the-overlap-between-html-css-and-javascript)
    - [<span id="Supporting_Rich_Media_Experiences_While_Eliminating_the_Need_for_Plugins_Such_as_Flash_or_Java">Supporting Rich Media Experiences While Eliminating the Need for Plugins Such as Flash or Java</span>](#supporting-rich-media-experiences-while-eliminating-the-need-for-plugins-such-as-flash-or-java)
  - [<span id="Why_Should_I_Use_HTML5">Why Should I Use HTML5?</span>](#why-should-i-use-html5)
  - [<span id="How_To_Use_HTML5">How To Use HTML5</span>](#how-to-use-html5)
    - [<span id="Avoid_Deprecated_Features">Avoid Deprecated Features</span>](#avoid-deprecated-features)
    - [<span id="Learn_to_Use_the_New_Features">Learn to Use the New Features</span>](#learn-to-use-the-new-features)
    - [<span id="Get_Comfortable_With_CSS">Get Comfortable With CSS</span>](#get-comfortable-with-css)
    - [<span id="Use_the_HTML5_ltDOCTYPEgt_Declaration">Use the HTML5 `<!DOCTYPE>` Declaration</span>](#use-the-html5-doctype-declaration)
    - [<span id="Don8217t_Close_Null_Tags">Don’t Close Null Tags</span>](#dont-close-null-tags)
    - [<span id="Validate_Your_Pages">Validate Your Pages</span>](#validate-your-pages)

<span id="What_is_HTML">What is HTML?</span>
--------------------------------------------

*(Skip ahead to [What is HTML5](#What_is_HTML5) if you are already familiar with HTML generally.)*

You probably already know that HTML, or HyperText Markup Language, is the language used for web documents. It is not a programming language, but rather a language that identifies the meaning, purpose, and structure of text within a document.

For example, consider this document:

<span id="All_About_Rats">All About Rats</span>
===============================================

<span id="Why_Do_Rats_Make_Great_Pets">Why Do Rats Make Great Pets?</span>
--------------------------------------------------------------------------

Forget what you’ve learned from horror films, rats make great pets — especially for children. And unlike the popular hamster, they almost never bite.

You can easily understand the structure of the document because it is simple, and you are an intelligent human being who has read many documents in your life. But your web browser needs to understand the document in order to present it to you in an intelligent and meaningful way. So we use HTML tags (also called “elements”) to identify the different pieces of the document.

For this simple document, we can add an `<h1>` tag to identify the main heading for the page (the title of the document), and `</h1>` to close it. Use the `<h2>` tag to identify the first headline within the content, and a `</h2>` tag to identify the block of content following it as a paragraph.

    <h1>All About Rats</h1>
    <h2>Why Do Rats Make Great Pets?</h2>
    Forget what you've learned from horror films, rats make great pets -- especially for children. And unlike the popular hamster, they almost never bite.

Now, a web browser can show you this document in a more meaningful way. This might seem trivial for a short document with one headline a single paragraph, but it can get complicated very fast. You’ve seen a lot of web pages, so you know that there are all sorts of things (not just headlines and paragraphs) that people need to represent on their web pages. Things like:

-   [Forms](https://html.com/tags/form/)
-   [Lists](https://html.com/lists/)
-   [Links to other pages](https://html.com/anchors-links/)
-   [Media](https://html.com/media/)

And that’s just for starters. You also need to be able to identify [sections of your document](https://html.com/tags/section/) and provide [metadata about the document itself](https://html.com/document/metadata/). (Metadata is information about the document, such as the title, author, relevant keywords, and relationship to other documents.)

### <span id="HTML_History_and_Development">HTML History and Development</span>

HTML has been around for a long time. Its roots go back to at least 1980, with [Tim Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee)‘s project [ENQUIRE](https://en.wikipedia.org/wiki/ENQUIRE). And actually, the concept of [hypertext](https://en.wikipedia.org/wiki/Hypertext) goes back even further than that. The concept first appeared in the early 1940s, and was named and demonstrated in the 1960s.

In 1989, Lee proposed a new hypertext system based on the ideas of ENQUIRE (and other systems, such as [Apple’s HyperCard](https://en.wikipedia.org/wiki/HyperCard)). This became the first version of what we now call HTML.

Since then, the language has been in constant development. The specification is managed by the [World Wide Web Consortium](https://www.w3.org/) (Berners-Lee is still the director, as of 2018), and the [Web Hypertext Application Technology Working Group](https://whatwg.org/). (So, if you don’t like HTML5, these are the people to blame.)

The language has evolved over all this time because web development has changed. We do things with web pages and HTML today that were never dreamt of by the early developers and implementers of the language. A web page is no longer just a document; it is likely to be a full-scale web application. And even when it is “just a document,” we want search engines and other tools to understand the content of the website. We aren’t just creating pages for human readers anymore, but for artificially-intelligent systems that collect and manipulate information.

Why did HTML have to change? Because the web has changed.

<span id="What_is_HTML5">What is HTML5?</span>
----------------------------------------------

HTML5 is the latest specification of the HTML language, and represented a major break with previous markup practices. The purpose of the profound changes to the language was to standardize the many new ways in which developers were using it, as well as to encourage a single set of best practices with regards to web development.

Most of the individual changes are a result of larger objectives in the design of the language. These objectives primarily include:

-   Encouraging semantic (meaningful) markup
-   Separating design from content
-   Promoting accessibility and design responsiveness
-   Reducing the overlap between HTML, CSS, and JavaScript
-   Supporting rich media experiences while eliminating the need for plugins such as Flash or Java

Getting a handle on HTML5 isn’t just about learning which CSS features replace old HTML features. If you want to get an intuitive sense of HTML5, it is best to understand how these objectives affected the development of the language.

### <span id="Encouraging_Semantic_Markup">Encouraging Semantic Markup</span>

Semantic markup means markup which has *meaning*, rather than markup which simply looks a certain way. For example, the `<h1>` tag implies that the content of the element is the title or headline of the entire document. That semantic meaning would be lost if we just made the text bold and large without using the appropriate tag.

HTML has always had a little bit of semantic markup available to it: [heading tags](https://html.com/tags/heading/), the [link rel attribute](https://html.com/attributes/link-rel/), and [document metadata](https://html.com/document/metadata/). But it wasn’t enough.

In previous versions of the language, common structural elements like page headers, navigation menus, and main content sections were all indicated with the same HTML element, [the `<div> tag`](https://html.com/tags/div/). In HTML, there are a host of new semantic elements intended to indicate the basic structure of a page:

-   [`<header>`](https://html.com/tags/header/)
-   [`<nav>`](https://html.com/tags/nav/)
-   [`<main>`](https://html.com/tags/main/)
-   [`<article>`](https://html.com/tags/article/)
-   [`<aside>`](https://html.com/tags/aside/)
-   [`<section>`](https://html.com/tags/section/)
-   [`<footer>`](https://html.com/tags/footer/)

New text-level (inline) elements have also been introduced, such as [`<address>`](https://html.com/tags/address/) and [`<time>`](https://html.com/tags/time/). These help search engines and other services to easily find information on a page, for display in other contexts. At the same time, existing inline elements which produce various effects like **bold**, *italic*, and <span class="underline">underline</span> have been refined or redefined to imply specific semantic meaning.

### <span id="Separating_Design_From_Content">Separating Design From Content</span>

Along with strongly encouraging semantic (meaningful) markup, the HTML5 specification strongly **discourages** non-meaningful markup — markup intended only to tell the browser how to display things. This includes things like:

-   declaring fonts and text colors
-   setting text alignment or justification
-   placing borders on tables
-   defining how text wraps around images

Most of the HTML features that allowed for these sorts of things have been completely deprecated. The few that are still officially supported come with warnings that they are usually not recommended practices.

There are primarily two reasons to prefer this separation:

-   It is easier to maintain and redesign a site if the style declarations are confined to CSS
-   Users view web content in a lot of different contexts — desktops, laptops, tablets, mobile phones, RSS readers, and many others. Styles and design decisions that make sense in one environment don’t always make sense in another. So it is much better to provide semantic information and let the content be adapted to the context.

This last point is closely tied to…

### <span id="Promoting_Accessibility_and_Design_Responsiveness">Promoting Accessibility and Design Responsiveness</span>

Not everyone interacts with the web the same way you do.

“Conventional” devices — desktops, laptops, tablets, and phones — present a wide range of screen sizes, screen aspect ratios, display resolutions, and user interaction experiences. This variety alone should be enough to encourage semantic and responsive design practices. But not everyone uses a “conventional” browser.

Blind and visually impaired persons browse the web also, and they use a variety of assistive technologies to do so. Screen readers that translate a site’s content into speech, specialized browsers that strip out styling and present highly magnified or high-contrast text, braille interpreters, and keyboard-based navigation all allow those with non-standard vision to interact with websites.

And all of these technologies are hindered by markup which tries to “hard-code” design and styling into the content of a page.

### <span id="Reducing_the_Overlap_Between_HTML_CSS_and_JavaScript">Reducing the Overlap Between HTML, CSS, and JavaScript</span>

Three languages define front-end web development — HTML, [CSS](https://html.com/css/), and [JavaScript](https://html.com/javascript/).

No one sat down at the beginning of the internet and figured what types of things belong to each language. They each evolved in parallel to each other, often overlapping in functionality and scope.

Besides the practical considerations enumerated above, there has also been a focus on defining the nature and purpose of these languages, and limiting them (or expanding them) so that they do what is in their nature to do:

-   HTML — Content
-   CSS — Design
-   JS — Interactivity

Remembering this can help one determine which language to use, especially in cases where it is possible to do something in more than one way. For example, if you want to change the color of something, your very first thought should be to use CSS. On the other hand, if you want to change the color of something **in response to a user input**, you probably want to use JavaScript.

### <span id="Supporting_Rich_Media_Experiences_While_Eliminating_the_Need_for_Plugins_Such_as_Flash_or_Java">Supporting Rich Media Experiences While Eliminating the Need for Plugins Such as Flash or Java</span>

As bandwidth and internet speed have increased, we have moved more and more toward using the internet as a media platform. HTML was originally created for (hyper-)text documents, with perhaps a few images, not rich media pages with audio and video.

When people first started adding these types of experiences to web pages, they required users to add special plugins to their browsers. These performed poorly, limited user options, and opened up security holes. They required developers to write core web page functionality in other languages like Flash or Java. The content was hidden from search engines and screen readers.

It was a mess.

Now, [HTML5 provides support for media](https://html.com/media/) with elements like [`<video>`](https://html.com/tags/video/) and [`<audio>`](https://html.com/tags/audio/), while [`<canvas>`](https://html.com/tags/canvas/) provides a defined space for JavaScript-created drawing and graphics. New form elements, along with better integration between HTML5, CSS, and JavaScript has made it possible to create full-scale web applications using the three languages that are native to the web browser, without plugins or add-ons.

<span id="Why_Should_I_Use_HTML5">Why Should I Use HTML5?</span>
----------------------------------------------------------------

The most straight-forward answer to that question is simply that it is the current, “right” version of the language.

But some people seem unconvinced by this fact. Older markup practices still work in most browsers — if you type `<img align="right" />` onto your web page, the text will flow around the image just the way you’d expect. Why not just do that? It’s easier!

There are a number of reasons to prefer HTML5, and to avoid using any of the deprecated features. Some are practical, while others are more philosophical. Some are altruistic, while others are selfish.

-   Easier to write
-   Easier to maintain
-   Easier to redesign
-   Better for Search Engine Optimization
-   Better for the blind and visually impaired
-   Better for content aggregators and feed readers
-   Better for users on mobile devices
-   Better for users on slower internet connections
-   Fewer chances of design breaks
-   Easier to add media
-   Easier to create interactive applications
-   Deprecated features will likely stop being supported at some point, breaking your page

<span id="How_To_Use_HTML5">How To Use HTML5</span>
---------------------------------------------------

You probably already know how to create HTML5 documents. The basics of the language are the same. There’s a just a few things that are good to keep in mind.

### <span id="Avoid_Deprecated_Features">Avoid Deprecated Features</span>

&lt;!– Browse [the list on this page](#Deprecated_Features_in_HTML5) to make sure that you know which HTML features are no longer supported in HTML5. If you click on the links to the individual pages, you can learn more about why each feature was deprecated and how to accomplish similar effects using modern, standard features of HTML5 and CSS. –&gt;  
Make sure that you know which HTML features are no longer supported in HTML5. If you research the deprecated tags, you can learn more about why each feature was deprecated and how to accomplish similar effects using modern, standard features of HTML5 and CSS.

You don’t have to memorize the list, though. All you really have to remember is that if you want to affect the way something **looks** on a page, you probably shouldn’t attempt to do what you want with HTML. Nearly all of the HTML features that affected style or design have been deprecated, and the few that are left are only recommended in particular cases.

### <span id="Learn_to_Use_the_New_Features">Learn to Use the New Features</span>

Sometimes, if you don’t know that something is available, you don’t know to look for it. For example, if you didn’t already know about the [`<video>`](https://html.com/tags/video/) element, you might not know just how easy it is to embed video on a web page.

&lt;!– So it’s a good idea to spend some time browsing the [New Features list](#New_Features_in_HTML5) so that you are aware of what’s available. –&gt;  
So it’s a good idea to spend some time browsing the new Features so that you are aware of what’s available.

### <span id="Get_Comfortable_With_CSS">Get Comfortable With CSS</span>

Many of the deprecated features were used to achieve design and styling effects. These are now properly the domain of CSS. If you want to be a modern web front-end developer, you’ll spend some time getting good at using CSS.

### <span id="Use_the_HTML5_ltDOCTYPEgt_Declaration">Use the HTML5 `<!DOCTYPE>` Declaration</span>

All HTML5 documents should begin with a tag that indicated the document is, in fact, supposed to be valid HTML5. That looks like:

`<!DOCTYPE html>`

This should be the very first thing in a document, before the `<html>` tag, and before any whitespace.

### <span id="Don8217t_Close_Null_Tags">Don’t Close Null Tags</span>

It’s a little minor point, but…

A “null” or “empty” element is an element that has no content. These include:

-   [`<img>`](https://html.com/tags/img/)
-   [`<br>`](https://html.com/tags/br/)
-   [`<hr>`](https://html.com/tags/hr/)

Surprised that an `<img>` element has no content? The image itself is [an attribute of the tag](https://html.com/attributes/img-src/), not the content.

In some previous versions, HTML (those based on the XML standard) required these elements to be closed with a slash.

`<!-- Self-closing null elements -->`

` ``<img src="example.jpg" /> <br /> <hr />`

This is no longer required.

`<!-- The HTML5 way -->`

` ``<img src="example.jpg"> <br> <hr>`

### <span id="Validate_Your_Pages">Validate Your Pages</span>

Finally, you should make it a habit to validate your HTML documents against the specification. This means using an automated tool to check whether the markup adheres to the standard or not.

The W3C provides an official [Markup Validation Service](https://validator.w3.org/), which allows you to quickly check your pages against the HTML5 specification (and older specs too, if you like).

&lt;!–  
Deprecated Features in HTML5

New Features in HTML5

–&gt;

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and tutorials.</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

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
