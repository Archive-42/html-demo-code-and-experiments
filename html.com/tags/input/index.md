<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [HTML Web Forms Tutorial For Coding Beginners](https://html.com/forms/) / How To Use Input To Create Form Fields In HTML: Easy Tutorial

# `How To Use Input To Create Form Fields In HTML: Easy Tutorial`

In <span class="post-meta-category">[HTML Tags](https://html.com/tags/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Element of  
[HTML Web Forms Tutorial For Coding Beginners](https://html.com/forms/)

What does `How To Use Input To Create Form Fields In HTML: Easy Tutorial` do?  
The &lt;input&gt; element is used to create form fields that accept user input. Form &lt;input&gt; elements can be presented many different ways, including simple text fields, buttons, checkboxes, drop-down menus, and more, by setting the type attribute of the input element to the appropriate value.

Display  
inline

Null element  
This element must not contain any content, and does not need a closing tag.

Contents

- [<span class="toc_number toc_depth_1">1</span> Code Example](#Code_Example)
- [<span class="toc_number toc_depth_1">2</span> The most basic form field](#The_most_basic_form_field)
- [<span class="toc_number toc_depth_1">3</span> Browser Support for input](#Browser_Support_for_input)
- [<span class="toc_number toc_depth_1">4</span> Attributes of input](#Attributes_of_input)

## <span id="Code_Example">Code Example</span>

    <input>

<span class="underline"></span>

## <span id="The_most_basic_form_field">The most basic form field</span>

The `<input>` element is the fundamental form element for gathering user info through forms. The vast majority of form fields are the `<input>` element, and there are only a handful of form field types — `<select>`, for example — that are actually a different element. From range sliders to date selectorsto [submit buttons](https://html.com/input-type-submit/), the `<input>` element covers a lot of different cases.

Because of that, it also has a huge number of attributes and potential values. Many of them are only applicable to certain [types of inputs](https://html.com/attributes/input-type/). There are a handful that are universally important, though:

- The [`type` attribute](https://html.com/attributes/input-type/) determines the type, or style, of the element. This is the most important attribute, as it determines everything else about how the `<input>` element behaves.
- The [`name`](https://html.com/attributes/input-name/) is used in conjunction with the `value` attribute to send user data to the server.
- Setting the [`value` attribute](https://html.com/attributes/input-value/) in your HTML document allows you to pre-specify the content of the input field, or its default value
- Both `readonly` and `disable` stop the user from editing the value of the input, but [there are some important difference to know about](https://html.com/attributes/input-readonly/).
- Including the [`required`](https://html.com/attributes/input-required/) stops the form from accepting submission if the field has no value.

See the lists below for more details about `<input>` options.

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and [tutorials](https://html.com/).</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

## <span id="Browser_Support_for_input">Browser Support for input</span>

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

## <span id="Attributes_of_input">Attributes of input</span>

<table><thead><tr class="header"><th>Attribute name</th><th>Values</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="https://html.com/attributes/input-step/" class="linked-name">step</a><br />
</td><td></td><td>Specifies the interval between valid values in a number-based input.</td></tr><tr class="even"><td><a href="https://html.com/attributes/input-required/" class="linked-name">required</a><br />
</td><td></td><td>Specifies that the input field is required; disallows form submission and alerts the user if the required field is empty.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/input-readonly/" class="linked-name">readonly</a><br />
</td><td></td><td>Disallows the user from editing the value of the input.</td></tr><tr class="even"><td><a href="https://html.com/attributes/input-placeholder/" class="linked-name">placeholder</a><br />
</td><td></td><td>Specifies placeholder text in a text-based input.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/input-pattern/" class="linked-name">pattern</a><br />
</td><td></td><td>Specifies a regular expression against which to validate the value of the input.</td></tr><tr class="even"><td><a href="https://html.com/attributes/input-multiple/" class="linked-name">multiple</a><br />
</td><td></td><td>Allows the user to enter multiple values into a file upload or email input.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/input-min/" class="linked-name">min</a><br />
</td><td></td><td>Specifies a minimum value for number and date input fields.</td></tr><tr class="even"><td><a href="https://html.com/attributes/input-max/" class="linked-name">max</a><br />
</td><td></td><td>Specifies a maximum value for number and date input fields.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/input-list/" class="linked-name">list</a><br />
</td><td></td><td>Specifies the id of a &lt;datalist&gt; element which provides a list of autocomplete suggestions for the input field.</td></tr><tr class="even"><td><a href="https://html.com/attributes/input-height/" class="linked-name">height</a><br />
</td><td></td><td>Specifies the height of an image input.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/input-formtarget/" class="linked-name">formtarget</a><br />
</td><td></td><td>Specifies the browsing context in which to open the response from the server after form submission. For use only on input types of "submit" or "image".</td></tr><tr class="even"><td><a href="https://html.com/attributes/input-formmethod/" class="linked-name">formmethod</a><br />
</td><td></td><td>Specifies the HTTP method (GET or POST) to be used when the form data is submitted to the server. Only for use on input types of "submit" or "image".</td></tr><tr class="odd"><td><a href="https://html.com/input-formenctype/" class="linked-name">formenctype</a><br />
</td><td></td><td>Specifies how form data should be submitted to the server. Only for use on input types "submit" and "image".</td></tr><tr class="even"><td><a href="https://html.com/attributes/input-formaction/" class="linked-name">formaction</a><br />
</td><td></td><td>Specifies the URL for form submission. Can only be used for type="submit" and type="image".</td></tr><tr class="odd"><td><a href="https://html.com/input-form/" class="linked-name">form</a><br />
</td><td></td><td>Specifies a form to which the input field belongs.</td></tr><tr class="even"><td><a href="https://html.com/attributes/input-autofocus/" class="linked-name">autofocus</a><br />
</td><td></td><td>Specifies that the input field should be in focus immediately upon page load.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/input-accesskey/" class="linked-name">accesskey</a><br />
</td><td></td><td>Defines a keyboard shortcut for the element.</td></tr><tr class="even"><td><a href="https://html.com/attributes/input-autocomplete/" class="linked-name">autocomplete</a><br />
</td><td></td><td>Specifies whether the browser should attempt to automatically complete the input based on user inputs to similar fields.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/input-border/" class="linked-name deprecated">border</a><br />
</td><td></td><td>Was used to specify a border on an input. Deprecated. Use CSS instead.</td></tr><tr class="even"><td><a href="https://html.com/attributes/input-checked/" class="linked-name">checked</a><br />
</td><td></td><td>Specifies whether a checkbox or radio button form input should be checked by default.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/input-disabled/" class="linked-name">disabled</a><br />
</td><td></td><td>Disables the input field.</td></tr><tr class="even"><td><a href="https://html.com/attributes/input-maxlength/" class="linked-name">maxlength</a><br />
</td><td></td><td>Specifies the maximum number of characters that can be entered in a text-type input.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/input-language/" class="linked-name deprecated">language</a><br />
</td><td></td><td>Was used to indicate the scripting language used for events triggered by the input.</td></tr><tr class="even"><td><a href="https://html.com/attributes/input-name/" class="linked-name">name</a><br />
</td><td></td><td>Specifies the name of an input element. The name and value of each input element are included in the HTTP request when the form is submitted.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/input-size/" class="linked-name">size</a><br />
</td><td></td><td>Specifies the width of the input in characters.</td></tr><tr class="even"><td><a href="https://html.com/attributes/input-src/" class="linked-name">src</a><br />
</td><td></td><td>Defines the source URL for an image input.</td></tr><tr class="odd"><td><a href="https://html.com/attributes/input-type/" class="linked-name">type</a><br />
</td><td><a href="https://html.com/input-type-button/" class="value exact linked-name">button</a><br />
<a href="https://html.com/input-type-checkbox/" class="value exact linked-name">checkbox</a><br />
<a href="https://html.com/input-type-file/" class="value exact linked-name">file</a><br />
<a href="https://html.com/input-type-hidden/" class="value exact linked-name">hidden</a><br />
<a href="https://html.com/input-type-image/" class="value free linked-name">image</a><br />
<a href="https://html.com/input-type-password/" class="value free linked-name">password</a><br />
<a href="https://html.com/input-type-radio/" class="value exact linked-name">radio</a><br />
<a href="https://html.com/input-type-reset/" class="value exact linked-name">reset</a><br />
<a href="https://html.com/input-type-submit/" class="value exact linked-name">submit</a><br />
<a href="https://html.com/input-type-text/" class="value exact linked-name">text</a><br />
</td><td>Defines the input type.</td></tr><tr class="even"><td><a href="https://html.com/attributes/input-value/" class="linked-name">value</a><br />
</td><td></td><td>Defines an initial value or default selection for an input field.</td></tr></tbody></table>

## Post navigation

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`How To Use In HTML`](https://html.com/attributes/img-src/)

[`<td nowrap>`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/attributes/td-nowrap/)

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
