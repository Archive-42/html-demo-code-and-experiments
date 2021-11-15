<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>



[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  HTML5 Textarea Attributes: Here's What You Should Know

`HTML5 Textarea Attributes: Here’s What You Should Know`
========================================================

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

What does `HTML5 Textarea Attributes: Here's What You Should Know` do?  
The &lt;textarea&gt; element is used to create a text input area of unlimited length. By default, text in a &lt;textarea&gt; is rendered in a monospace or fixed-width font, and text areas are most often used within a parent &lt;form&gt; element.

Display  
inline

Contents

-   [<span class="toc_number toc_depth_1">1</span> Code Example](#Code_Example)
-   [<span class="toc_number toc_depth_1">2</span> What is &lt;textarea&gt; Used For?](#What_is_lttextareagt_Used_For)
-   [<span class="toc_number toc_depth_1">3</span> HTML5 Textarea Attributes](#HTML5_Textarea_Attributes)
-   [<span class="toc_number toc_depth_1">4</span> Attributes in Action](#Attributes_in_Action)
-   [<span class="toc_number toc_depth_1">5</span> Attributes of HTML5 Textarea Attributes: Here's What You Should Know](#Attributes_of_HTML5_Textarea_Attributes_Heres_What_You_Should_Know)

<span id="Code_Example">Code Example</span>
-------------------------------------------

    <textarea placeholder="You can type into this textarea all day long if you'd like to, but without a submit button to click all of your hard work will just be wasted."></textarea>

<span class="underline"></span>

<span id="What_is_lttextareagt_Used_For">What is `<textarea>` Used For?</span>
------------------------------------------------------------------------------

Most HTML [forms](https://html.com/forms/) are composed of a parent [form](https://html.com/forms/) element, a handful of [input](https://html.com/tags/input/) elements (at least one of which will be of the [submit type](https://html.com/attributes/input-type/)), and one or more textareas. If you need form fields to accept email addresses, phone numbers, and other content that is easy to define, use the appropriate input type. However, when you need a field that can accept any combination and length of plain text letters, numbers, and symbols, `<textarea>` is the element you are looking for.

<span id="HTML5_Textarea_Attributes">HTML5 Textarea Attributes</span>
---------------------------------------------------------------------

HTML5 introduced a few new attributes which can be used with textarea elements. Here are some of the most important:

-   `form`: Associates the textarea with a form. Use the ID attribute of the form as the value for the textarea form attributes. This allows you to place a textarea anywhere on a webpage, even outside of the form element, and still have the contents of the textarea included when the form is submitted.
-   `maxlength` and `minlength`: Used to specify a minimum or maximum number of characters that may be entered into a textarea.
-   `placeholder`: Adds placeholder text to the textarea that disappears as soon as a user places the cursor inside of the element.
-   `required`: Requires that the textarea contain content prior to allowing form submission.
-   [`wrap`](https://html.com/attributes/textarea-wrap/): Specifies whether or not hard-returns should be added to the content submitted in a textarea.

<span id="Attributes_in_Action">Attributes in Action</span>
-----------------------------------------------------------

Here’s an example of how some of these new attributes can be used to control the behavior of a textarea.

    <p>This text area is limited to just 10 characters</p> <textarea cols="50" rows="3" maxlength="10" placeholder="Just 10 characters allowed"></textarea> <p>This text area is readonly and cannot be changed</p> <textarea cols="50" rows="3" readonly>This value can't be changed</textarea> 

If we pair those textarea elements with a simple script and button element, we get the following form:

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

<span id="Attributes_of_HTML5_Textarea_Attributes_Heres_What_You_Should_Know">Attributes of HTML5 Textarea Attributes: Here's What You Should Know</span>
---------------------------------------------------------------------------------------------------------------------------------------------------------

<table><thead><tr class="header"><th>Attribute name</th><th>Values</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="https://html.com/attributes/textarea-name/" class="linked-name">&lt;textarea name=""&gt;</a><br />
</td><td></td><td>Adds a name attribute to a &lt;textarea&gt; element and associates the name with the text added to the text area.</td></tr><tr class="even"><td><a href="https://html.com/attributes/textarea-wrap/" class="linked-name">&lt;textarea wrap=""&gt;</a><br />
</td><td></td><td>Determines whether or not submitted text wraps when a &lt;textarea&gt; is included in a form submission.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/textarea-cols/" class="linked-name">&lt;textarea cols=""&gt;</a><br />
</td><td></td><td>Specifies the visible width of a &lt;textarea&gt; element in average character widths. Defaults to 20 if not specified.</td></tr><tr class="even"><td><a href="https://html.com/attributes/textarea-disabled/" class="linked-name">&lt;textarea disabled&gt;</a><br />
</td><td></td><td>Disables the entry of text into a &lt;textarea&gt; element.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/textarea-tabindex/" class="linked-name">&lt;textarea tabindex="""&gt;</a><br />
</td><td></td><td>Sets the position of a &lt;textarea&gt; element in the tab order.</td></tr><tr class="even"><td><a href="https://html.com/attributes/textarea-onchange/" class="linked-name">Textarea Onchange: Get The HTML Code To Trigger A JavaScript Event Now</a><br />
</td><td></td><td>Adds an event listener to a &lt;textarea&gt; which executes JavaScript scripting when an onchange event occurs.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/textarea-onkeypress/" class="linked-name">&lt;textarea onKeyPress=""&gt;</a><br />
</td><td></td><td>Adds an event listener to a &lt;textarea&gt; element which executes JavaScript scripting when an onKeyPress event occurs.</td></tr></tbody></table>

Post navigation
---------------

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`What Does Td Colspan Have To Do With Tables In HTML?`](https://html.com/attributes/td-colspan/)

[`Applets`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/applets/)

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
