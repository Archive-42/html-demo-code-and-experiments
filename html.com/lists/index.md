<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

[](https://html.com/)

Learn HTML Code, Tags & CSS

[HTML](https://html.com/)  /  Lists Bring Order To Web Pages: Here’s The HTML Code To Create Them

# Lists Bring Order To Web Pages: Here’s The HTML Code To Create Them

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Lists are used all the time on the web. Articles, website navigation menus, and product features on e-commerce websites all make frequent use of lists – even when you can’t tell that a list is being used just by looking at the web page.

There are three types of lists you can use, and this quick guide will show you how to use each.

Contents

- [<span class="toc_number toc_depth_1">1</span> Unordered Lists](#Unordered_Lists)
- [<span class="toc_number toc_depth_1">2</span> Ordered Lists](#Ordered_Lists)
  - [<span class="toc_number toc_depth_2">2.1</span> Changing Numbering](#Changing_Numbering)
    - [<span class="toc_number toc_depth_3">2.1.1</span> Creating a Countdown List](#Creating_a_Countdown_List)
    - [<span class="toc_number toc_depth_3">2.1.2</span> Starting a List on a Specific Number](#Starting_a_List_on_a_Specific_Number)
    - [<span class="toc_number toc_depth_3">2.1.3</span> Changing the Numbering Style](#Changing_the_Numbering_Style)
- [<span class="toc_number toc_depth_1">3</span> Description Lists](#Description_Lists)
- [<span class="toc_number toc_depth_1">4</span> Nested Lists](#Nested_Lists)
- [<span class="toc_number toc_depth_1">5</span> Using Lists for Menus](#Using_Lists_for_Menus)
- [<span class="toc_number toc_depth_1">6</span> Styling Lists](#Styling_Lists)
- [<span class="toc_number toc_depth_1">7</span> Closing Thoughts](#Closing_Thoughts)
- [<span class="toc_number toc_depth_1">8</span> Related Elements](#Related_Elements)

## <span id="Unordered_Lists">Unordered Lists</span>

An unordered list is a list in which the order of the list items does not matter. Unordered lists should be used when rearranging the order of the list items would not create confusion or change the meaning of the information on the list.

The [`ul`](https://html.com/tags/ul/) element opens and closes an unordered list. The items on the list are contained between list item, [`li`](https://html.com/tags/li/), tags. A simple unordered list containing three items could be created with the following HTML.

    <ul>
        <li>Item A</li>
        <li>Item B</li>
        <li>Item C</li>
    </ul>

Unless CSS rules are created to change the appearance of the list, the default presentation of an unordered list is to add a disc-style bullet point on the left-hand side of each list item and to indent the entire list.

Here’s how our short unordered list renders in a browser:

- Item A
- Item B
- Item C

## <span id="Ordered_Lists">Ordered Lists</span>

Ordered lists are used for lists of items for which the order of the items does matter. The syntax for an ordered list is exactly the same as for an unordered list. However, to create an ordered list, the [`ol`](https://html.com/tags/ol/) tag is used rather than the `ul` tag. By making this one change, we can convert the unordered list in our previous example into an ordered list.

We’re also going to change the text of the list items to make it clear that these are items that need to appear in a specific sequential order.

    <ol>
        <li>Step 1</li>
        <li>Step 2</li>
        <li>Step 3</li>
    </ol>

As you can see below, rather than a bulleted list, we now have a numbered list.

1.  Step 1
2.  Step 2
3.  Step 3

### <span id="Changing_Numbering">Changing Numbering</span>

There are times when you want to control the numbering of ordered lists. For example, your list may be broken up by a paragraph that appears mid-list to expand on a certain concept, or you may create a countdown list that begins at a high number and counts down. Lastly, maybe you’d rather use roman numerals. HTML and CSS make it easy to control the numbering of ordered lists.

#### <span id="Creating_a_Countdown_List">Creating a Countdown List</span>

To reverse the number of a list, simply add the `reversed` attributed to the opening `ol` tag.

    <ol reversed>
        <li>Item 3</li>
        <li>Item 2</li>
        <li>Item 1</li>
    </ol>

When rendered in most browsers the numbering of this list will appear reversed.

1.  Item 3
2.  Item 2
3.  Item 1

Note that Microsoft browsers do not support the `reversed` attribute. If you use this attribute, bear in mind that visitors using Internet Explorer or Edge will see standard numbering.

#### <span id="Starting_a_List_on_a_Specific_Number">Starting a List on a Specific Number</span>

The `start` attribute is used to specify the number on which an ordered list starts. For example, imagine you have a list of 5 items, and after the second and fourth items you want to add a sentence or two with additional details. You could use the following HTML to do this without restarting the list numbering after each paragraph.

    <ol>
        <li>Step 1</li>
        <li>Step 2</li>
    </ol>
    <p>A few short sentences about Item 2 that we don't want to appear appended to the list item. A second sentence of additional details</p>
    <ol start="3">
        <li>Step 3</li>
        <li>Step 4</li>
    </ol>
    <p>Notice that we used the <code>start</code> attribute on the <code>ol</code> tag to restart the numbering at "3" following the break in the list above. We'll use the same technique to properly number Step 5 below.</p>
    <ol start="5">
        <li>Step 5</li>
    </ol>

Here’s how that list renders in the browser:

1.  Step 1
2.  Step 2

A few short sentences about Item 2 that we don’t want to appear appended to the list item. A second sentence of additional details

1.  Step 3
2.  Step 4

Notice that we used the `start` attribute on the `ol` tag to restart the numbering at “3” following the break in the list above. We’ll use the same technique to properly number Step 5 below.

1.  Step 5

#### <span id="Changing_the_Numbering_Style">Changing the Numbering Style</span>

You can use CSS to change the marker style of an ordered list. In addition to standard numbering (referred to as `decimal` in CSS), you can also use:

- `upper-roman` for uppercaseroman numerals
- `lower-roman` for lowercase roman numerals
- `decimal-leading-zero` to add a “0” placeholder before single-digit list items

We cover the `list-style-type` CSS property used to implement these numbering styles [below](#Styling_Lists).

## <span id="Description_Lists">Description Lists</span>

Description lists are created with the [`dl`](https://html.com/tags/dl/) tag. Used far less frequently than their ordered and unordered peers, description lists are used to contain name-value groups. Each name-value group consists of one name, or term, placed between [`dt`](https://html.com/tags/dt/) tags, followed by one or more values with each value, or description, placed between [`dd`](https://html.com/tags/dd/) tags.

For example, if we wanted to use a description list to explain the relationship between members of a family, we might use the following code:

    <dl>
        <dt>Parents</dt>
        <dd>Jamie</dd>
        <dd>Charlie</dd>
        <dt>Children</dt>
        <dd>Landry</dd>
        <dd>Oakley</dd>
        <dd>Skyler</dd>
        <dt>Pets</dt>
        <dd>Cat</dd>
        <dd>Dog</dd>
        <dd>Gerbil</dd>
    </dl>

When that list is rendered, it will be displayed in such a way that the relationships between the terms (`dt`) and values (`dd`) are clear.

Parents  
Jamie

Charlie

Children  
Landry

Oakley

Skyler

Pets  
Cat

Dog

Gerbil

## <span id="Nested_Lists">Nested Lists</span>

A nested list is a list within a list. If you’ve ever created a bulleted outline in a word processing document you probably used a variety of indentations and bullet point types to denote items that were subpoints of another item in the outline. This is the effect we’re going for when we create nested lists.

To create a nested list, simply add a new list within a parent list like this:

    <ul>
        <li>Item A</li>
        <li>Item B
            <ul>
                <li>Subitem B.1</li>
                <li>Subitem B.2</li>
            </ul></li>
        <li>Item C</li>
    </ul>

When that list is loaded in the browser, the nested list will be indented further than the parent list, and a different type of item marker will be displayed.

- Item A
- Item B
  - Subitem B.1
  - Subitem B.2
- Item C

Nested lists aren’t just used to organize the visual representation of information. Screen readers and other assistive technologies rely on the nested structure of complex lists to make sense of the hierarchy and logic of data within the list.

You could use assign classes to list items and use CSS to create the same visual effect as a nested list. However, if you did that, the hierarchical and logical structure of the list would be lost to website visitors using assistive technologies. In other words, don’t use CSS to create nested lists visually, use HTML to create them.

## <span id="Using_Lists_for_Menus">Using Lists for Menus</span>

One of the most common uses of lists is to create website navigation menus. Unordered lists are usually the list-of-choice for this purpose. With just a few lines of [CSS](https://html.com/css/) we can convert an unordered list into an attractive horizontal navigation menu.

    <style>
        #nav {
            background: lightgray;
            overflow: auto;
            }
        #nav li {
            float: left;
            list-style-type: none;
            padding: 10px;
            }
    </style>
    <ul id="nav">
        <li><a href="#Using_Lists_for_Menus">Home</a></li>
        <li><a href="#Using_Lists_for_Menus">About Us</a></li>
        <li><a href="#Using_Lists_for_Menus">Contact Us</a></li>
    </ul>

If we load that code in the browser, you’ll notice that each menu item changes when you hover over it.

- [Home](#Using_Lists_for_Menus)
- [About Us](#Using_Lists_for_Menus)
- [Contact Us](#Using_Lists_for_Menus)

A lot more can be done with lists, CSS, and JavaScript to create interactive drop-down menus, and our [menu tutorial](https://html.com/anchors-links/menus/) will teach you how to create beautiful, modern, interactive, and well-organized menus.

## <span id="Styling_Lists">Styling Lists</span>

List typography is usually best styled to match the [typography](https://html.com/fonts/) of the website’s paragraph text. List-specific styling can be accomplished with CSS.

There are three list properties that can be styled with CSS:

- `list-style-type`: Defines the marker type that preceeds each list item. Common values include `disc` (the default unordered list style type), `decimal` (the default ordered list style type), circle, square, lower- or upper-roman, and lower- or upper-latin, although [several additional styles](https://www.w3.org/wiki/CSS/Properties/list-style-type) may also be used.
- `list-style-position`: Determines whether the list item marker should be placed `inside` the content box, or `outside` of the content box in the item’s left-hand padding area.
- `list-style-image`: An image can also be used as the item marker. This property is used to specify the image file to be used.

Each of these three properties can be applied seperately by using the individual property names or simultaneously with the `list-style` shorthand property. The `list-style` property syntax includes the list style type, position, and image values in that order. For example, if we wanted to select the square marker, position it inside the content box, and also specify an image file, our CSS would look something like this:

    selector_for_the_target_list {
        list-style: square inside url("box_image.png");
    }

Since we’ve specified both a list marker and an image, the image will be used unless it is unavailable, in which case the square marker will be displayed.

## <span id="Closing_Thoughts">Closing Thoughts</span>

Lists are one of the most diverse and effective tools in a web designers toolbox. They provide logical, hierarchical structure to data, and can be used in a variety of ways. Understanding the full breadth of what is possible with lists in HTML makes this powerful HTML element even more useful.

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

<table><thead><tr class="header"><th>Element Name</th><th>Attributes</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="https://html.com/tags/optgroup/" class="linked-name">optgroup</a></td><td></td><td>The &lt;optgroup&gt; element is used to group together related &lt;option&gt; elements within a parent &lt;select&gt; drop-down list.</td></tr><tr class="even"><td><a href="https://html.com/tags/nav/" class="linked-name">nav</a></td><td><a href="https://html.com/attributes/multicol-gutter/" class="linked-name deprecated">gutter</a><br />
</td><td>The &lt;nav&gt; element identifies a group of navigation links. Links in a &lt;nav&gt; element may point to other webpages or to different sections of the same webpage.</td></tr><tr class="odd"><td><a href="https://html.com/tags/ul/" class="linked-name">&lt;ul&gt; HTML Tag</a></td><td><a href="https://html.com/attributes/ul-type/" class="linked-name deprecated">&lt;ul type=""&gt;</a><br />
</td><td>The &lt;ul&gt; element is used to define an unordered list of items. Use an unordered list to contain &lt;li&gt; elements that do not need to be presented in numerical order and can be rearranged without changing the meaning of the list.</td></tr><tr class="even"><td><a href="https://html.com/tags/li/" class="linked-name">li</a></td><td><a href="https://html.com/attributes/li-value/" class="linked-name">value</a><br />
<a href="https://html.com/attributes/li-type/" class="linked-name deprecated">type</a><br />
</td><td>The &lt;li&gt; element defines a list item that is part of an ordered and unordered list of items.</td></tr><tr class="odd"><td><a href="https://html.com/tags/listing/" class="linked-name deprecated">listing</a></td><td></td><td>The &lt;listing&gt; element was intended as a way to render HTML code on a page. It was never properly supported, and is now deprecated. Using &lt;listing&gt; will almost certainly result in unexpected results. Instead, use &lt;code&gt;, or place the content in a &lt;div&gt; with the appropriate CSS styling.</td></tr><tr class="even"><td><a href="https://html.com/tags/ol/" class="linked-name">ol</a></td><td><a href="https://html.com/attributes/ol-type/" class="linked-name">type</a><br />
<a href="https://html.com/attributes/ol-start/" class="linked-name deprecated">start</a><br />
</td><td>The &lt;ol&gt; element is used to create an ordered list. An ordered list is created by nesting one or more &lt;li&gt; elements between the opening and closing &lt;ol&gt; tags.</td></tr><tr class="odd"><td><a href="https://html.com/tags/option/" class="linked-name">option</a></td><td><a href="https://html.com/attributes/option-value/" class="linked-name">value</a><br />
<a href="https://html.com/attributes/option-selected/" class="linked-name">selected</a><br />
</td><td>The &lt;option&gt; element is used in conjunction with the &lt;select&gt; element to create a drop-down menu in a web form. Each &lt;option&gt; element is displayed as an available option in the resulting drop-down menu.</td></tr><tr class="even"><td><a href="https://html.com/tags/dd/" class="linked-name">dd</a></td><td></td><td>The &lt;dd&gt; element is used to pair a definition description with a sibling definition term enclosed in &lt;dt&gt; tags within a parent definition list.</td></tr><tr class="odd"><td><a href="https://html.com/tags/dir/" class="linked-name deprecated">dir</a></td><td></td><td>The &lt;dir&gt; element, deprecated beginning in HTML 4.01, was used to create a list of file names or the contents of a directory. An unordered list, created with the &lt;ul&gt; element, is the appropriate modern replacement for the &lt;dir&gt; element.</td></tr><tr class="even"><td><a href="https://html.com/tags/dl/" class="linked-name">dl</a></td><td><a href="https://html.com/attributes/dl-compact/" class="linked-name deprecated">compact</a><br />
</td><td>The &lt;dl&gt; element defines a description list.</td></tr><tr class="odd"><td><a href="https://html.com/tags/dt/" class="linked-name">dt</a></td><td></td><td>The &lt;dt&gt; element defines a term in a description list.</td></tr></tbody></table>

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
