<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>



[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  [HTML Web Forms Tutorial For Coding Beginners](https://html.com/forms/)  /  [How To Use Input To Create Form Fields In HTML: Easy Tutorial](https://html.com/tags/input/) / Input Pattern: Use It To Add Basic Data Validation In HTML5

New in HTML5.

`Input Pattern: Use It To Add Basic Data Validation In HTML5`
=============================================================

In <span class="post-meta-category">[HTML Attributes](https://html.com/attributes/), [New](https://html.com/new/)</span>

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Attribute of  
[How To Use Input To Create Form Fields In HTML: Easy Tutorial](https://html.com/tags/input/)

What does `Input Pattern: Use It To Add Basic Data Validation In HTML5` do?  
Specifies a regular expression against which to validate the value of the input.

Contents

-   [<span class="toc_number toc_depth_1">1</span> Code Example](#Code_Example)
-   [<span class="toc_number toc_depth_1">2</span> Data Validation with Regular Expressions](#Data_Validation_with_Regular_Expressions)
    -   [<span class="toc_number toc_depth_2">2.1</span> Example Patterns](#Example_Patterns)
        -   [<span class="toc_number toc_depth_3">2.1.1</span> Username Patterns](#Username_Patterns)
        -   [<span class="toc_number toc_depth_3">2.1.2</span> Payment Info Patterns](#Payment_Info_Patterns)
    -   [<span class="toc_number toc_depth_2">2.2</span> A note about pattern and common validation problems](#A_note_about_pattern_and_common_validation_problems)
        -   [<span class="toc_number toc_depth_3">2.2.1</span> Also, don’t regex for email addresses](#Also_don8217t_regex_for_email_addresses)
        -   [<span class="toc_number toc_depth_3">2.2.2</span> Or dates](#Or_dates)
        -   [<span class="toc_number toc_depth_3">2.2.3</span> Or anything else you could with something else](#Or_anything_else_you_could_with_something_else)
    -   [<span class="toc_number toc_depth_2">2.3</span> Front-end validation isn’t enough](#Front-end_validation_isn8217t_enough)
-   [<span class="toc_number toc_depth_1">3</span> Browser Support for pattern](#Browser_Support_for_pattern)

<span id="Code_Example">Code Example</span>
-------------------------------------------

    <form>
     <label for="username">Username <i>(letters and numbers only, no  punctuation or special characters)</i></label><br>
     <input name="username" id="username" pattern="[A-Za-z0-9]+">
    </form>

Username *(letters and numbers only, no punctuation or special characters)*  

<span class="underline"></span>

<span id="Data_Validation_with_Regular_Expressions">Data Validation with Regular Expressions</span>
---------------------------------------------------------------------------------------------------

The `pattern` attribute of the [`<input>`](https://html.com/tags/input/) element allows you to add basic data validation without resorting to JavaScript. It works by matching the input value against a regular expression. A regular expression is a formalized string of characters that define a pattern. For example `[a-zA-Z0-9]+` is a pattern that matches against a string of any length, as long as the string contains only lowercase letters (`a-z`), uppercase letters (`A-Z`), or numerals (`0-9`).

-   **Match `[a-zA-Z0-9]+`**
    -   htmlcodetutorial
    -   Mississippi
    -   12BuckleMyShoe34
    -   8675309
-   **Do not match `[a-zA-Z0-9]+`**
    -   https://[html](https://html.com/).com
    -   Mrs. Ippi
    -   1, 2, Buckle My Shoe!
    -   (321) 867-4309

### <span id="Example_Patterns">Example Patterns</span>

#### <span id="Username_Patterns">Username Patterns</span>

    Only letters (either case), numbers, and the underscore; no more than 15 characters.  [A-Za-z0-9_]{1,15} 

    Only lowercase letters and numbers; at least 5 characters, but no limit.  [a-zd.]{5,} 

    Only letters (either case), numbers, hyphens, underscores, and periods. (Not the slash character, that is being used to escape the period.) The username must start with a letter and must be between 1 and 20 characters long (inclusive).  [a-zA-Z][a-zA-Z0-9-_.]{1,20} 

#### <span id="Payment_Info_Patterns">Payment Info Patterns</span>

    USD Price Format (1.00)  d+(.d{2})? 

    Credit Card Format - Digits only, between 13 and 16 digits long.  [0-9]{13,16} 

Also, check out this [great list of HTML form regex patterns](http://html5pattern.com/).

### <span id="A_note_about_pattern_and_common_validation_problems">A note about `pattern` and common validation problems</span>

There is an old proverb among computer programmers:

> Some people, when confronted with a problem, think “I know, I’ll use regular expressions.” Now they have two problems.

Jamie Zawinski was talking about Perl when he said that back in 1997, but it holds true in other contexts as well. The most common problem you’ll run into with using the `pattern` attribute is poorly written (or poorly tested) regular expressions. They are a little hard and non-obvious. So the biggest problem is simply bugs — a regex that doesn’t actually test for what you want it to test for. But this can be fixed pretty easily with a question on [StackExchange](https://stackexchange.com/). The more difficult problem is testing for the wrong things. Consider the Credit Card pattern shown above as an example. If you used that in an actual payment field, it would match against MasterCard and Visa, but fail on American Express. Do you want your user to be able to pay you with their AmEx card? This sort of thing happens *all the time*, especially as you start to work across cultures and national borders: every country formats addresses differently, dates are formatted differently, phone numbers, and prices. License plate numbers vary by state within the US, and drastically differ by country. VIN numbers are different for different classes and types of vehicles, and also for years of production. You may want to validate against username styles in a third party system, but the third party system may change in the future, or may have changed in the past. You need to be very mindful of what type of input restrictions you are putting on your form fields. It may be the `pattern` is too blunt an instrument for your needs. You may need [a more powerful and precise form validation tool](http://parsleyjs.org/).

#### <span id="Also_don8217t_regex_for_email_addresses">Also, don’t regex for email addresses</span>

HTML provides the `email` input type, which performs a validation check against email address patterns. It will work better than any regex you can find or come up.

#### <span id="Or_dates">Or dates</span>

You could try to build a regex that checks for a date format

    YYYY-MM-DD, only allows dates in the 20th and 21st centuries  (?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31)) 

But this can cause all sorts of problems. People like to format dates different (MM/DD/YY, DD MONTHNAME YYYY, etc.), and they probably won’t read your instructions on proper formatting the first few times they try it. Also, there is nothing to stop invalid dates like February 31, or dates too far in the future like `2099-12-31`. On top of all that, you have to parse the string into a usable date object once you get it on the server. Instead of all that, just use the `date` input. Or `datetime`.

#### <span id="Or_anything_else_you_could_with_something_else">Or anything else you could with something else</span>

Email addresses and dates are common enough that specific form input types already exist for them, so there is no need to use `pattern`. Any time you can use a specific feature of HTML, instead of resorting to building regular expressions, you should use it.

### <span id="Front-end_validation_isn8217t_enough">Front-end validation isn’t enough</span>

[HTML5](https://html.com/html5/) introduced a number of new form validation features, and `pattern` is just one of them. But you have to consider these as primarily helpful to the user, and remember that they do not provide any security against bad or malicious form inputs. It is trivially easy to bypass a front-end HTML form and simply submit faked form data directly to the server. This means that all of your form validation procedures — along with a sanitation and security check — will have to be repeated on the server, in order to avoid [anything bad happening](https://xkcd.com/327/).

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/3af4194cc38fbc6d4e68fbe7536347d5?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Adam Wood](https://html.com/author/html/)

<span class="fn">Adam is a technical writer who specializes in developer documentation and tutorials.</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-linkedin"></span>](https://www.linkedin.com/in/adammichaelwood)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

<span id="Browser_Support_for_pattern">Browser Support for pattern</span>
-------------------------------------------------------------------------

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

<span class="browser-supported">10</span>

<span class="browser-supported">43</span>

<span class="browser-supported">45</span>

<span class="browser-supported">12</span>

<span class="browser-supported">9</span>

<span class="browser-supported">34</span>

Post navigation
---------------

[<span class="nav-link-label"><span class="genericon genericon-previous"></span></span>`<input multiple>`](https://html.com/attributes/input-multiple/)

[`<input placeholder=””>`<span class="nav-link-label"><span class="genericon genericon-next"></span></span>](https://html.com/attributes/input-placeholder/)

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
