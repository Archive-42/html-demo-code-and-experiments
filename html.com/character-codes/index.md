<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  HTML Character Codes

# HTML Character Codes

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

HTML character references are short bits of HTML, commonly referred to as character entities or entity codes, that are used to display characters that have special meaning in HTML as well as characters that don’t appear on your keyboard.

- Characters with special meaning in HTML are called reserved characters. For example, left (&lt;) and right (&gt;) angle brackets are reserved in HTML to identify the opening and closing tags of elements.
- Characters that don’t appear on your keyboard include things like the copyright symbol (©) and the mathematical value pi (π).

If we want to use these types of characters in an HTML document and have them appear when rendered in a browser we use HTML character references.

Contents

- [<span class="toc_number toc_depth_1">1</span> A Practical Example](#A_Practical_Example)
- [<span class="toc_number toc_depth_1">2</span> Character Entity Format](#Character_Entity_Format)
- [<span class="toc_number toc_depth_1">3</span> Diacritics](#Diacritics)
- [<span class="toc_number toc_depth_1">4</span> Most Common Character Codes](#Most_Common_Character_Codes)
- [<span class="toc_number toc_depth_1">5</span> Full List of Reserved Character Codes](#Full_List_of_Reserved_Character_Codes)

## <span id="A_Practical_Example">A Practical Example</span>

Let’s say that you want to display a block of HTML in a web page and have the element tags show up on the page. You may try to do so by simply dropping `<code>` blocks around the block of HTML you want to display. However, what you will find is that even with the `<code>` tags surrounding the bit of HTML in question, it will still be processed as HTML and rendered by the browser. What we can do is replace all of the special characters with the appropriate character references to prevent the browser from processing the code.

    <!--The <code> blocks don't prevent this HTML from being rendered-->
    <code>
      <p>This is a list of items.</p>
      <ul>
        <li>List Item A</li>
        <li>List Item B</li>
        <li>List Item C</li>
      </ul>
    </code>

    <!--Replace special characters with character references-->
    <code>
      <p>This is a list of items.<&sol;p>
      <ul>
        <li>List Item A<&sol;li>
        <li>List Item B<&sol;li>
        <li>List Item C<&sol;li>
      <&sol;ul>
    </code>

Let’s see how that code renders in the browser.

` This is a list of items.`

``

- List Item A
- List Item B
- List Item C

` ```  ` <p>This is a list of items.<&sol;p> <ul> <li>List Item A<&sol;li> <li>List Item B<&sol;li> <li>List Item C<&sol;li> <&sol;ul> `

As you can see, the code blocks around the first block of code did not prevent the browser from processing the HTML. However, by replacing certain characters in the second block with HTML character references, we can display the code block as HTML markup.

## <span id="Character_Entity_Format">Character Entity Format</span>

In HTML, there are three different ways to format a character entity. You can use the character name, a Unicode value, or a number. For example, an ampersand may be displayed using any of the following entities: `&amp;`, `&`, or `&`.

In all three cases, the format looks basically the same. Each entity begins with an ampersand (&), followed by the character name, Unicode, or number reference, and ends with a semicolon. When a number is used, it must be preceded by the pound symbol (&num;), and when a Unicode value is used, it must be preceded by a pound symbol and the letter x (&num;x).

Most people use character names rather than Unicode values or numbers when adding named characters to HTML documents since they’re much easier to remember, but it’s equally acceptable to use either the Unicode or number references as well.

## <span id="Diacritics">Diacritics</span>

There is one special subtype of character entity code that merits special mention: diacritical marks. These are marks that appear directly over the preceding letter and include accent marks and tildes. Here are the three most common diacritics:

<table><thead><tr class="header"><th>Mark</th><th style="text-align: center;">Character Name</th><th style="text-align: center;">Number</th><th style="text-align: center;">Example</th></tr></thead><tbody><tr class="odd"><td>Acute</td><td style="text-align: center;"><code>&amp;DiacriticalAcute;</code></td><td style="text-align: center;"><code>́</code></td><td style="text-align: center;"><code>&amp;aacute; </code> produces á</td></tr><tr class="even"><td>Grave</td><td style="text-align: center;"><code>&amp;DiacriticalGrave;</code></td><td style="text-align: center;"><code>̂</code></td><td style="text-align: center;"><code>â</code> produces â</td></tr><tr class="odd"><td>Tilde</td><td style="text-align: center;"><code>&amp;DiacriticalTilde;</code></td><td style="text-align: center;"><code>̃</code></td><td style="text-align: center;"><code>ã</code> produces ã</td></tr></tbody></table>

Support for diacritical mark character names is limited right now, and you will see more consistent results between browsers if you stick with the number codes until more browsers add support for the character names.

## <span id="Most_Common_Character_Codes">Most Common Character Codes</span>

Here is a quick reference table with a few of the most commonly seen HTML character references:

<table><thead><tr class="header"><th>Symbol</th><th style="text-align: center;">Character Name</th><th style="text-align: center;">Number</th><th style="text-align: center;">Unicode</th><th style="text-align: center;">Example</th></tr></thead><tbody><tr class="odd"><td>Less Than</td><td style="text-align: center;"><code>&amp;lt;</code></td><td style="text-align: center;"><code>&lt;</code></td><td style="text-align: center;"><code>&lt;</code></td><td style="text-align: center;">&lt;</td></tr><tr class="even"><td>Greater Than</td><td style="text-align: center;"><code>&amp;gt;</code></td><td style="text-align: center;"><code>&gt;</code></td><td style="text-align: center;"><code>&gt;</code></td><td style="text-align: center;">&gt;</td></tr><tr class="odd"><td>Slash</td><td style="text-align: center;"><code>&amp;sol;</code></td><td style="text-align: center;"><code>/</code></td><td style="text-align: center;"><code>/</code></td><td style="text-align: center;">&amp;sol;</td></tr><tr class="even"><td>Quotation</td><td style="text-align: center;"><code>&amp;quot;</code></td><td style="text-align: center;"><code>"</code></td><td style="text-align: center;"><code>"</code></td><td style="text-align: center;">“</td></tr><tr class="odd"><td>Apostrophe</td><td style="text-align: center;"><code>&amp;apos;</code></td><td style="text-align: center;"><code>'</code></td><td style="text-align: center;"><code>'</code></td><td style="text-align: center;">‘</td></tr><tr class="even"><td>Ampersand</td><td style="text-align: center;"><code>&amp;amp;</code></td><td style="text-align: center;"><code>&amp;</code></td><td style="text-align: center;"><code>&amp;</code></td><td style="text-align: center;">&amp;</td></tr><tr class="odd"><td>Copyright</td><td style="text-align: center;"><code>&amp;copy;</code></td><td style="text-align: center;"><code>©</code></td><td style="text-align: center;"><code>©</code></td><td style="text-align: center;">©</td></tr><tr class="even"><td>Registered Trademark</td><td style="text-align: center;"><code>&amp;reg;</code></td><td style="text-align: center;"><code>®</code></td><td style="text-align: center;"><code>®</code></td><td style="text-align: center;">®</td></tr><tr class="odd"><td>Degree</td><td style="text-align: center;"><code>&amp;deg;</code></td><td style="text-align: center;"><code>°</code></td><td style="text-align: center;"><code>°</code></td><td style="text-align: center;">°</td></tr><tr class="even"><td>Left-pointing double angle</td><td style="text-align: center;"><code>&amp;laquo;</code></td><td style="text-align: center;"><code>«</code></td><td style="text-align: center;"><code>«</code></td><td style="text-align: center;">«</td></tr><tr class="odd"><td>Right-pointing double angle</td><td style="text-align: center;"><code>&amp;raquo;</code></td><td style="text-align: center;"><code>»</code></td><td style="text-align: center;"><code>»</code></td><td style="text-align: center;">»</td></tr><tr class="even"><td>Non-Breaking Space</td><td style="text-align: center;"><code>&amp;nbsp;</code></td><td style="text-align: center;"><code> </code></td><td style="text-align: center;"><code> </code></td><td style="text-align: center;"></td></tr></tbody></table>

## <span id="Full_List_of_Reserved_Character_Codes">Full List of Reserved Character Codes</span>

A complete list of all HTML character references is maintained by the [World Wide Web Consortium](https://www.w3.org/html/wg/drafts/html/master/syntax.html#named-character-references) as part of the HTML specification.

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/7935ca61eb56de63c80d923835a809e2?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/7935ca61eb56de63c80d923835a809e2?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Jon Penland](https://html.com/author/jon-penland/)

<span class="fn">Jon is a freelance writer, travel enthusiast, husband and father. He writes about web technologies such as WordPress, HTML, and CSS.</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-facebook"></span>](https://www.facebook.com/jonpenland)[<span class="saboxplugin-icon-grey saboxplugin-icon-googleplus"></span>](https://plus.google.com/+JonPenland)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

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
