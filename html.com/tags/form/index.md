<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [HTML Web Forms Tutorial For Coding Beginners](https://html.com/forms/) / HTML Form Code For Beginners (And When To Use It)

# `HTML Form Code For Beginners (And When To Use It)`

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[HTML Web Forms Tutorial For Coding Beginners](https://html.com/forms/)

What does `HTML Form Code For Beginners (And When To Use It)` do?  
The &lt;form&gt; element is used to create an HTML form. The &lt;form&gt; element does not actually create form fields, but is used as a parent container to hold form fields such as &lt;input&gt; and &lt;textarea&gt; elements.

Display  
block

Usage  
semantic | structural

Contents

- [<span class="toc_number toc_depth_1">1</span> Code Example](#Code_Example)
- [<span class="toc_number toc_depth_1">2</span> HTML Forms](#HTML_Forms)
  - [<span class="toc_number toc_depth_2">2.1</span> How standard HTML forms work](#How_standard_HTML_forms_work)
  - [<span class="toc_number toc_depth_2">2.2</span> Web applications and forms without &lt;form&gt;](#Web_applications_and_forms_without_ltformgt)
- [<span class="toc_number toc_depth_1">3</span> Learning more about forms](#Learning_more_about_forms)
- [<span class="toc_number toc_depth_1">4</span> Browser Support for form](#Browser_Support_for_form)
- [<span class="toc_number toc_depth_1">5</span> Attributes of form](#Attributes_of_form)

## <span id="Code_Example">Code Example</span>

    <form action="" method="GET">
     <label for="name">Name</label>
     <input name="name" id="name">
     <input type="submit">
    </form>

Name

<span class="underline"></span>

## <span id="HTML_Forms">HTML Forms</span>

Whether you want to create a simple email signup, a moderately complex checkout and payment page, or a richly interactive web application, you will be using the HTML form elements, the most important of which is `<form>`.

### <span id="How_standard_HTML_forms_work">How standard HTML forms work</span>

HTML forms were invented and mostly standardized before the advent of asynchronous Javascript and complex web applications. Today, we use form inputs, buttons, and other interaction mechanisms in lots of different ways; but underlying that is a system based on the HTTP request-response paradigm.

When you load a page, you are making an HTTP request (a `GET` request, usually). This request is sent by your browser to the server, and the server responds with (usually) the web page you are looking for. This interaction is one of the most fundamental concepts of the internet. And it is how HTML forms are designed to work.

Each input inside a `<form>` element (and this includes [`<input>`](https://html.com/tags/input/) elements as well as [`<select>`](https://html.com/tags/select/) and others) has a `name` attribute, and also a value. The value is determined in different ways. For [text-based inputs](https://html.com/input-type-text/), the value is whatever has been typed into the field. For [radio-buttons](https://html.com/input-type-radio/), the value is the selected option. The user can adjust the value, but (usually) not the name. This creates a set of name-value pairs in which the values are determined by user input.

When a form is submitted, the name-value pairs from all the fields inside the `<form>` element are included in an HTTP. The request is made to a URL defined in the form’s [`action`](https://html.com/attributes/form-action/) attribute, and the type of request (`GET` or `POST`) is defined in the form’s [`method`](https://html.com/attributes/form-method/) attribute. This means that all the user-provided data is sent to the server all at once when the form is submitted, and the server can do whatever it wants with that data.

When the server receives the form submission, it is like any other HTTP request. It does whatever it needs to do with the included data and issues a response back to the browser. Remember how a page load is a response? Same thing here. In a typical form submission, the response is a new page which the browser loads. Typically the new page replaces the current one, but this can be overridden with the [`target`](https://html.com/attributes/form-target/) attribute.

The vast majority of online forms work this way, and it is why you get sent to a “Thank You” page when you fill out an email subscription form.

### <span id="Web_applications_and_forms_without_ltformgt">Web applications and forms without `<form>`</span>

Modern interactive web applications use [Javascript](https://html.com/javascript/) to run _asynchronous HTTP requests_, or “behind the scenes” calls to the server which do not reload the page. They aren’t relying on the HTML `<form>` element’s built-in behavior, because they aren’t bundling up a bunch of user data and sending it all at once.

For this reason, many (though not all) HTML+JS web apps don’t use the `<form>` element at all, or they just use it as a kind of container for various types of fields and input elements. In this case, you won’t see the `method` and `action` attributes being used.

## <span id="Learning_more_about_forms">Learning more about forms</span>

There are a lot of form-related elements — different kinds of buttons, inputs, selectors for various types, feedback mechanisms… all sorts of things. there are also a lot of complications when it comes to styling forms, making them work on different size screens, and making them accessible for people with disabilities. In short: forms are _complicated_, maybe the most complicated aspect of HTML.

See our [main forms index page for links to all of our form-related tutorials and documentation](https://html.com/tags/form/).

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

## <span id="Browser_Support_for_form">Browser Support for form</span>

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

## <span id="Attributes_of_form">Attributes of form</span>

<table><thead><tr class="header"><th>Attribute name</th><th>Values</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="https://html.com/attributes/form-target/" class="linked-name">&lt;form target=""&gt;</a><br />
</td><td></td><td>Specifies the browser context in which the form's response should be displayed.</td></tr><tr class="even"><td><a href="https://html.com/attributes/form-action/" class="linked-name">action</a><br />
</td><td></td><td>Specifies a URL to which the form's data is sent when submitted.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/form-enctype/" class="linked-name">enctype</a><br />
</td><td></td><td>The enctype attribute lets you specify an encoding type for your form.</td></tr><tr class="even"><td><a href="https://html.com/attributes/form-method/" class="linked-name">method</a><br />
</td><td></td><td>Tells the browser how to send form data to a web server.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/form-onsubmit/" class="linked-name">onSubmit</a><br />
</td><td></td><td>Runs a script when the Submit button is clicked.</td></tr><tr class="even"><td><a href="https://html.com/attributes/form-onreset/" class="linked-name">onReset</a><br />
</td><td></td><td>Runs a script when the Reset button is clicked.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/form-name/" class="linked-name deprecated">name</a><br />
</td><td></td><td>The `name` attribute is deprecated when used with the `form` element. Use `id` instead.</td></tr></tbody></table>

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
