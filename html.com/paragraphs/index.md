<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>

[](https://html.com/)

Learn HTML Code, Tags & CSS

# Playing With HTML Paragraphs: Let’s Show You Different Formatting Examples

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Contents

- [Playing With HTML Paragraphs: Let’s Show You Different Formatting Examples](#playing-with-html-paragraphs-lets-show-you-different-formatting-examples)
  - [<span id="Lines_and_Paragraphs">Lines and Paragraphs</span>](#lines-and-paragraphs)
  - [<span id="The_ltDIVgt_Element">The `<DIV>` Element</span>](#the-div-element)
    - [<span id="The_ALIGN_Attribute">The `ALIGN` Attribute</span>](#the-align-attribute)
  - [<span id="The_Paragraph_Element">The Paragraph Element</span>](#the-paragraph-element)
    - [<span id="The_ALIGN_Attribute-2">The `ALIGN` Attribute</span>](#the-align-attribute-1)
    - [<span id="The_CLEAR_Attribute">The `CLEAR` Attribute</span>](#the-clear-attribute)
    - [<span id="Is_the_P_Endtag_Required">Is the P Endtag Required?</span>](#is-the-p-endtag-required)
  - [<span id="Text_Alignment">Text Alignment</span>](#text-alignment)
  - [<span id="Justification">Justification</span>](#justification)
  - [<span id="Indenting">Indenting</span>](#indenting)
    - [<span id="Indenting_a_Paragraph">Indenting a Paragraph</span>](#indenting-a-paragraph)
    - [<span id="Indenting_a_Section_of_a_Page">Indenting a Section of a Page</span>](#indenting-a-section-of-a-page)
    - [<span id="Indenting_the_Whole_Page">Indenting the Whole Page</span>](#indenting-the-whole-page)
    - [<span id="Indenting_the_First_Line_of_Each_Paragraph">Indenting the First Line of Each Paragraph</span>](#indenting-the-first-line-of-each-paragraph)
  - [<span id="The_ltBRgt_Element">The `<BR>` Element</span>](#the-br-element)
    - [<span id="The_CLEAR_Attribute-2">The `CLEAR` Attribute</span>](#the-clear-attribute-1)
  - [<span id="The_CENTER_Element">The `CENTER` Element</span>](#the-center-element)
  - [<span id="The_ltHRgt_Element">The `<HR>` Element</span>](#the-hr-element)
    - [<span id="The_NOSHADE_Attribute">The `NOSHADE` Attribute</span>](#the-noshade-attribute)
    - [<span id="The_SIZE_Attribute">The `SIZE` Attribute</span>](#the-size-attribute)
    - [<span id="The_WIDTH_Attribute">The `WIDTH` Attribute</span>](#the-width-attribute)
    - [<span id="The_ALIGN_Attribute-3">The `ALIGN` Attribute</span>](#the-align-attribute-2)
  - [<span id="The_ltPREgt_Element">The `<PRE>` Element</span>](#the-pre-element)
  - [<span id="The_8220_Element">The “ Element</span>](#the--element)
  - [<span id="The_8220_Element-2">The “ Element</span>](#the--element-1)

## <span id="Lines_and_Paragraphs">Lines and Paragraphs</span>

This section describes HTML associated with lines and paragraphs. We begin with the basic `<DIV>` and `<P>` tags.

<span class="useWarnHead">Please note: This tutorial includes deprecated tags and attributes.</span>  
This tutorial is provided for historical value. Some of the tags and attributes presented in this tutorial have been deprecated and should not be used. Browser support for deprecated elements and attributes may be limited and using them may produce unexpected results.

For a detailed look at modern [html](https://html.com/) refer to our tutorials on [semantic markup](https://html.com/semantic-markup/), [HTML document structure](https://html.com/document/), and [fonts and web typography](https://html.com/fonts/).

## <span id="The_ltDIVgt_Element">The `<DIV>` Element</span>

`<DIV>`, a block-level element, simply defines a block of content in the page. Beyond defining a block, `<DIV>` itself doesn’t do anything. For example, the following code creates a `<DIV>` element with two paragraphs inside of it. Notice that you can put `<P>` elements inside a `<DIV>`.

    This is stuff before the <NOBR><CODE><DIV ...></CODE></NOBR>.
    <DIV> This is stuff inside the <NOBR><CODE><DIV ...></CODE></NOBR>.
    <P> This is more stuff inside the <NOBR><CODE><DIV ...></CODE></NOBR>.</P></DIV>
    This is stuff after the <NOBR><CODE><DIV ...></CODE></NOBR>.

Which gives us:

This is stuff before the `<DIV ...>`.

This is stuff inside the `<DIV ...>`.This is more stuff inside the `<DIV ...>`.

This is stuff after the `<DIV ...>`.

### <span id="The_ALIGN_Attribute">The `ALIGN` Attribute</span>

`ALIGN` sets the alignment of the contents of the `<DIV>` element. All four values, `LEFT`, `CENTER`, `RIGHT`, and `JUSTIFY`, are all well supported. `LEFT` is the default value.  
This code shows the default:

    <DIV>
    This would be a great time for a cup of coffee, don't you think?
    How about that! Let's drink coffee all day!
    </DIV>

Which gives us:

This would be a great time for a cup of coffee, don’t you think? How about that! Let’s drink coffee all day!

## <span id="The_Paragraph_Element">The Paragraph Element</span>

`<P>` indicates the start of a new paragraph. This is usually rendered with two carriage returns, producing a single blank line in between the two paragraphs:

    This is the first paragraph. <P> And this is the second paragraph.

Which produces this:

This is the first paragraph.And this is the second paragraph.

### <span id="The_ALIGN_Attribute-2">The `ALIGN` Attribute</span>

`ALIGN` indicates the alignment of the paragraph.

    <P ALIGN=LEFT>This is aligned left. This is the default.</P>
    <P ALIGN=CENTER>This is aligned center.</P>
    <P ALIGN=RIGHT>This is aligned right.</P>

Which produces this:

This is aligned left. This is the default.

This is aligned center.

This is aligned right.

### <span id="The_CLEAR_Attribute">The `CLEAR` Attribute</span>

`CLEAR` is recognized by some browsers and works very much like `<BR>`. However, it is not standard HTML and is still widely unsupported, so use `<BR>` instead.

### <span id="Is_the_P_Endtag_Required">Is the P Endtag Required?</span>

The W3C says of `</P>`: “The end tag is optional as it can always be inferred by the parser.” This means that a new `<P>` implies the end of the previous `<P>` (and any alignment set by the previous `<P>`).

Any other block level element, such as `<HR>` or `<BLOCKQUOTE>` should also end the paragraph. However, it doesn’t always work out that way. Some browsers, for example, will right-align the text even after a table. In the following example, MSIE renders the “after the table” part as right aligned, while Netscape renders it as left aligned:

    <P STYLE="text-align:right">
    before the table

    <TABLE BORDER>
      <TR><TH>Dawn</TH><TD>1-2028</TD></TR>
      <TR><TH>Mary K</TH><TD>1-4952</TD></TR>
    </TABLE>

    after the table

<table><tbody><tr class="odd"><td><img src="https://html.com/wp-content/uploads/alignment-msie.gif" alt="screeshot of how internet explorer handles alignment before and after a table" class="sp-no-webp" srcset="/wp-content/uploads/alignment-msie.gif" /></td><td><img src="https://html.com/wp-content/uploads/alignment-netscape.gif" alt="screeshot of how netscape handles alignment before and after a table" class="sp-no-webp" srcset="/wp-content/uploads/alignment-netscape.gif" /></td></tr><tr class="even"><td>MSIE’s rendering</td><td>Netscape’s rendering</td></tr></tbody></table>

If you set the alignment or other style property for a paragraph element it’s best to use `</P>`. If you never use set any styles then you can generally ignore `</P>`.

See [W3C’s specs for paragraphs](https://www.w3.org/TR/REC-html32.html) for more information on this topic.

## <span id="Text_Alignment">Text Alignment</span>

You can set the alignment of any HTML element using the `text-align` style rule. `text-align` can be used to set the alignment for a paragraph, a section of the document, or even the whole document. `text-align` can be used to set alignment to left, right, center, or justified.

For example, suppose we want to center a paragraph. First, we’ll create a styles class called `centeralign` by putting the following code into the “ section of the document:

    <style>
    .centeralign {
      text-align: center;
    }
    </style>

Now we can set any paragraph to centeralign class like this:

    <p class="centeralign">Get Centered</p>

Which gives us this:

.centeralign{text-align: center;}

Get Centered

We can apply the same class to a `<DIV>` element to center a section of the page:

    <div class="centeralign">
    This is a center aligned bunch of text

    <P>It stays center aligned because it is within
    a DIV which has a center aligned style.

    <P>Each element within the center aligned DIV
    inherits the center aligned style.

    </div>

Which gives us:

This is a center aligned bunch of textIt stays center aligned because it is within a DIV which has a center aligned style.

Each element within the center aligned DIV inherits the center aligned style.

## <span id="Justification">Justification</span>

By default, most browsers render text with a jagged right edge.

If you want all text rendered like in a book with an even right edge you can use a single style rule. To set all text to justified copy the following code into the “ section of your document.

    <style>
    body {
      text-align: justify;
    }
    </style>

The problem with justification is that many browsers get confused about where the last line of text is (which shouldn’t be justified). For example, MSIE 4.x is confused when a block of text is immediately followed by a table. Notice in this image that the last line of text stretches the words “one of our agents” across a full line:

<img src="https://html.com/wp-content/uploads/justifybad.gif" alt="example of poorly formatted justified text" class="sp-no-webp" srcset="/wp-content/uploads/justifybad.gif" />

To remedy this situation surround all blocks of text with `<P>` and `</P>`:

    <P>The special runs through August 16th, at which time we are required
    by federal law to revert to the old rates. Call one of our agents:</P>

    <TABLE BORDER>
    <TR> <TD>Hunter</TD>  <TD>1-2039</TD>
    <TR> <TD>Garland</TD> <TD>1-3593</TD>
    </TABLE>

Now our errant MSIE renders things more sanely:

<img src="https://html.com/wp-content/uploads/justifygood.gif" alt="example of properly formatted justified text" class="sp-no-webp" srcset="/wp-content/uploads/justifygood.gif" />

## <span id="Indenting">Indenting</span>

There are several ways to indent paragraphs and entire sections of your web page. The next few sections describe the four main techniques for indentation:

- Indenting a Paragraph
- Indenting a Section of the Page
- Indenting the Whole Page
- Indenting the First Line of Each Paragraph

Before we begin, however, it’s worth saying a few words about `<BLOCKQUOTE>`. There’s a popular misconception that `<BLOCKQUOTE>` should be used to indent sections of the page. This belief comes from the fact that most visual web browsers render quoted text as indented. Remember, however, that HTML is not a formatting language and gives unpredictable results when you attempt to use it as one. Use `<BLOCKQUOTE>` if you have a quoted block of text, otherwise use the techniques described in the next few paragraphs.

### <span id="Indenting_a_Paragraph">Indenting a Paragraph</span>

You can indent a single paragraph using styles. For example, suppose we want to indent a paragraph 50 points. First, we create a class called indented with the following style rules. Put this code in the “ section of your document.

    <style>
    .indented {
      padding-left: 50pt;
      padding-right: 50pt;
    }
    </style>

Now we set the class of the paragraph to indented by adding a CLASS attribute to the `<P>` tag:

    <p class="indented">You don't know about me without you have read a book by the name of <em>The Adventures of Tom Sawyer</em>;
     but that ain't no matter. That book was made by Mr. Mark Twain, and he told the truth, mainly. There was
     things which he stretched, but mainly he told the truth. That is nothing. I never seen anybody but lied one
     time or another, without it was Aunt Polly, or the widow, or maybe Mary. Aunt Polly -- Tom's Aunt Polly, she
     is -- and Mary, and the Widow Douglas is all told about in that book, which is mostly a true book, with some
     stretchers, as I said before. - Opening to <em>Huck Finn</em></p>

Which gives us this indented paragraph:

.indented{padding-left: 50pt; padding-right: 50pt;}

You don’t know about me without you have read a book by the name of _The Adventures of Tom Sawyer_; but that ain’t no matter. That book was made by Mr. Mark Twain, and he told the truth, mainly. There was things which he stretched, but mainly he told the truth. That is nothing. I never seen anybody but lied one time or another, without it was Aunt Polly, or the widow, or maybe Mary. Aunt Polly — Tom’s Aunt Polly, she is — and Mary, and the Widow Douglas is all told about in that book, which is mostly a true book, with some stretchers, as I said before. – Opening to _Huck Finn_

### <span id="Indenting_a_Section_of_a_Page">Indenting a Section of a Page</span>

To indent more than one paragraph we’ll use the same style as we set in the previous example. Put this code in the “ section of your page:

    <style>
    .indented {
      padding-left: 50pt;
      padding-right: 50pt;
    }
    </style>

Then we’ll use the indented class in a `<DIV>` element:

    <div class="indented">
      <h2>Household Hazardous Waste</h2>
      <p>These items can be brought to the recycling center for redistribution. This is much better than throwing them out.</p>
      <ul>
        <li>Household cleaners</li>
        <li>Computers and computer accessories</li>
        <li>Clothes</li>
      </ul>
    </div>

Which gives us an indented section like this:

<span style="font-size:1.5em;font-weight:bold">Household Hazardous Waste</span>  
These items can be brought to the recycling center for redistribution. This is much better than throwing them out.

- Household cleaners
- Computers and computer accessories
- Clothes

### <span id="Indenting_the_Whole_Page">Indenting the Whole Page</span>

If you want the entire page indented, set a style rule which sets right and left padding for the “ element. For example, this style sets the right and left padding to 100 pixels:

    <style>
    body {
      padding-left: 100px;
      padding-right: 100px;
    }
    </style>

<img src="https://html.com/wp-content/uploads/blue.edge_.gif" alt="image of a blue edge" class="alignleft size-full wp-image-3915 sp-no-webp" srcset="https://html.com/wp-content/uploads/blue.edge_.gif" width="56" height="128" />This technique is popular when used in combination with a background image. For example, suppose we want this image to run down the left side of the page.

This image is 56 pixels wide, so let’s set the padding to 60. The following style sets the background image, sets the repeat to repeat-y (only repeat vertically down the left side of the page) and sets the left padding to 60 (we won’t set the right padding).

    <style>
    body {
      background-image:url("blue.edge.gif");
      background-repeat:repeat-y;
      padding-left:60px;
    }
    </style>

Here’s how that might look:

.background-indent{background-image:url(“/wp-content/uploads/blue.edge\_.gif”); background-repeat:repeat-y; padding-left:60px; width:100%; overflow: auto;} <span style="font-size:1.5em;font-weight:bold">Household Hazardous Waste</span> These items can be brought to the recycling center for redistribution. This is much better than throwing them out.

- Household cleaners
- Computers and computer accessories
- Clothes

### <span id="Indenting_the_First_Line_of_Each_Paragraph">Indenting the First Line of Each Paragraph</span>

To indent the first line of each paragraph set a style rule using text-indent. For example, the following code indents the first line of each paragraph 30 points. Copy this code into the “ section of your page:

    <style>
      p {
        text-indent: 30pt;
      }
    </style>

This code indents the first line of each `<P>` element, but you’ll probably run into an annoying problem. If you’re like most designers you probably don’t put a P before the first paragraph or between a header like `<H1>` and the text that follows it. Unfortunately, that’s exactly what you’ll need to do if you want the paragraph indented. The text in these situations is part of something called “anonymous blocks” and cannot be referred to directly. To indent it you must put the text in a `<P>` element.

So, for example, the following code does not have a `<P>` between the header and the text, so the text is not indented:

    <H1>My Story</H1>
    This paragraph is not indented.

Which gives us:

<span style="font-size:1.5em;font-weight:bold">My Story</span>  
This paragraph is not indented.

This code does have a `<P>` between the header and the text, so the text is indented:

    <H1>My Story</H1>
    <P>This paragraph is indented.

.indented-p{text-indent: 30pt;}<span style="font-size:1.5em;font-weight:bold">My Story</span>

This paragraph is indented.

## <span id="The_ltBRgt_Element">The `<BR>` Element</span>

`<BR>` inserts a single carriage return. Whereas `<P>` indicates the start of a new paragraph, `<BR>` only implies a carriage return within the same paragraph. `<BR>` is usually rendered with a single carriage return.

For example, this code:

    There once was a man from Nantucket<BR>
    Who kept all his dough in a bucket<BR>
    His daughter name Nan<BR>
    Ran away with a man<BR>
    And as for the bucket, Nantucket

Which produces this:

There once was a man from Nantucket  
Who kept all his dough in a bucket  
His daughter name Nan  
Ran away with a man  
And as for the bucket, Nantucket

Because `<BR>` does not start a new paragraph, all the current paragraph attributes stay the same:

    <P ALIGN=CENTER>
    There once was a man from Nantucket<BR>
    Who kept all his dough in a bucket<BR>
    His daughter name Nan<BR>
    Ran away with a man<BR>
    And as for the bucket, Nantucket

Which produces this:

There once was a man from Nantucket  
Who kept all his dough in a bucket  
His daughter name Nan  
Ran away with a man  
And as for the bucket, Nantucket

### <span id="The_CLEAR_Attribute-2">The `CLEAR` Attribute</span>

`CLEAR` says that in addition to inserting a line break, if there is a picture or other object to the right or left, go past that too. For example, this code says that the picture should be aligned on the left side of the page. Then there is some text, then `LEFT`. The text following that is past the picture:

    <IMG SRC="../pumpkin.gif" HEIGHT=100 WIDTH=100 ALT="picture of a pumpkin" ALIGN=LEFT>
    Come on down to the Halloween party!
    You'll have a great ol' time.
    <BR CLEAR=LEFT>8:00pm to midnight.
    Wear a costume or come as your own scary self!

Which produces this:

<img src="https://html.com/wp-content/uploads/pumpkin.gif" alt="picture of a pumpkin" class="sp-no-webp" srcset="https://html.com/wp-content/uploads/pumpkin.gif" width="100" height="100" />

Come on down to the Halloween party!You’ll have a great ol’ time.  
8:00pm to midnight. Wear a costume or come as your own scary self!

`BOTH` is the same as `ALL`, but is not supported on as many browsers, so use `ALL` instead.

## <span id="The_CENTER_Element">The `CENTER` Element</span>

Usage Recommendation: Use `<DIV>` instead.

`indicates a section that is centered.` is exactly equivalent to `<DIV ALIGN="CENTER">`. “ is being phased out. Use `<DIV ALIGN="CENTER">` instead.

    <CENTER>Hi There! Let's talk about stuff!</CENTER>

Which gives us:

Hi There! Let’s talk about stuff!

Which is the same as:

    <DIV ALIGN=CENTER>Hi There! Let's talk about stuff!</DIV>

Which gives us:

Hi There! Let’s talk about stuff!

## <span id="The_ltHRgt_Element">The `<HR>` Element</span>

`<HR>` draws a horizontal line (a “horizontal rule”) across the page. That’s it. For such a simple concept, horizontal rules are surprisingly popular. Let’s start with the basics. `<HR>` has no end tag and requires no attributes:

    <P>Some text up here
    <HR>
    <P>Some text down here

Which creates this rule:

Some text up here

---

Some text down here

`<HR>` is usually indicates a division in the page. Stuff before the rule is in a different “section” from the stuff after. For that reason many designers consider `<HR>` a logical tag, not a layout tag.

### <span id="The_NOSHADE_Attribute">The `NOSHADE` Attribute</span>

`NOSHADE` indicates that the rule should be presented as flat instead of three dimensional. Compare this regular horizontal rule:

---

With a `NOSHADE` rule:

    <HR NOSHADE>

Which gives us:

---

`NOSHADE` is often used in conjunction with `SIZE`:

    <HR NOSHADE SIZE=10>

Produces this rule:

---

`NOSHADE` is popular because browsers usually don’t render three-dimensional rules very well. Indeed, in many circumstances the rule is presented in the same color as the background, rendering it almost invisible.

### <span id="The_SIZE_Attribute">The `SIZE` Attribute</span>

`SIZE` indicates the height of the rule. (I guess calling it “HEIGHT” would have just been too easy.) For horizontal width see `WIDTH`. Compare some of these sizes:

    <HR>
    <HR SIZE=1>
    <HR SIZE=5>
    <HR SIZE=20>

Which gives us these rules:

---

---

---

---

Browsers will generally not render an `<HR>` any bigger than 100.

### <span id="The_WIDTH_Attribute">The `WIDTH` Attribute</span>

`WIDTH` sets the horizontal width of the rule. You can express the size in pixels or as a percentage.

These `<HR>`‘s are set with pixel widths:

    <HR WIDTH="50">
    <HR WIDTH="100">
    <HR WIDTH="300">

Which gives us these rules:

---

---

---

`WIDTH` is usually expressed as a percentage. If you use a percentage width, be sure to enclose the value in quotes.

    <HR WIDTH="25%">
    <HR WIDTH="50%">
    <HR WIDTH="100%">

Produces these rules:

---

---

---

The default is 100%. By default the rule is centered. To set a different alignment use `ALIGN`.

Percentage widths use the percentage of the available width, not the full width of the page. For example, if the rule is in a table then the width is a percentage of the width of the table cell.

    <TABLE BORDER>
      <TR>
        <TD>Hey, whatever dude! <HR WIDTH="50%"> A stitch in time saves nine</TD>
      </TR>
    </TABLE>

Which produces this table:

<table><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td>Hey, whatever dude!<hr /><p>A stitch in time saves nine</p></td></tr></tbody></table>

### <span id="The_ALIGN_Attribute-3">The `ALIGN` Attribute</span>

`ALIGN` sets the alignment of the rule. ALIGN is only useful if you also use `WIDTH`.

    <HR WIDTH="40%" ALIGN=LEFT>
    <HR WIDTH="40%" ALIGN=CENTER>
    <HR WIDTH="40%" ALIGN=RIGHT>

Give us this:

---

---

---

## <span id="The_ltPREgt_Element">The `<PRE>` Element</span>

`<PRE>` is one the handiest tags in the HTML toolbox. `<PRE>` marks the text as “preformatted” — all the spaces and carriage returns are rendered exactly as you type them.

    <PRE>
                    title           extension
    Raha            Producer        8765
    Kathy           Accountant      8924
    Scarlett        Security Guard      8273
    </PRE>

Which produces this:

`<PRE>` text is rendered in a fixed width font, meaning that all characters and spaces are the same width. Fixed width makes it easy to lay out the text just the way you want it, so `<PRE>` is great for creating “quick and dirty” tables like the one above.

`<PRE>` does NOT cause the browser to ignore tags. You can still create links and other goodies:

    <PRE>
            title       extension
    <A HREF="">Raha</A>         Producer    8765
    <A HREF="">Kathy</A>        Accountant  8924
    <A HREF="">Scarlett</A>     Security Guard  8273
    </PRE>

Produces this:

When you start adding markup, it gets harder to see how the text turns out (spacing your tags out evenly like the table above helps). `<PRE>` is often used to quote large blocks of text that you don’t want to “HTMLize”, but a “ could mess up the text. For a table larger than a few lines, it is usually easier in the long run to use table code.

## <span id="The_8220_Element">The “ Element</span>

“ prevents a carriage return from occurring. For example, the following code produces a nonsense poem of one long line:

    <NOBR>
    Twisting and turning, spinning and shouting, hissing and roaring,
    fearing and jeering, stomping and yelling, running and jumping,
    peeling and dicing, cooking and weighing, costing and pricing,
    eating and drinking, all in a day's work.
    </NOBR>

Which produces this:

Twisting and turning, spinning and shouting, hissing and roaring, fearing and jeering, stomping and yelling, running and jumping, peeling and dicing, cooking and weighing, costing and pricing, eating and drinking, all in a day’s work.

`is most useful for making the page layout more attractive by disallowing breaks inside logical groups of symbols and words. The poem quoted above breaks in appropriate places if each phrase is surrounded by`:

    <NOBR>Twisting and turning,</NOBR>
    <NOBR>spinning and shouting,</NOBR>
    <NOBR>hissing and roaring,</NOBR>
    <NOBR>fearing and jeering,</NOBR>
    <NOBR>stomping and yelling,</NOBR>
    <NOBR>running and jumping,</NOBR>
    <NOBR>peeling and dicing,</NOBR>
    <NOBR>cooking and weighing,</NOBR>
    <NOBR>costing and pricing,</NOBR>
    <NOBR>eating and drinking,</NOBR>
    <NOBR>all in a day's work.</NOBR>

Which produces this:

Twisting and turning,  
spinning and shouting,  
hissing and roaring,  
fearing and jeering,  
stomping and yelling,  
running and jumping,  
peeling and dicing,  
cooking and weighing,  
costing and pricing,  
eating and drinking,  
all in a day’s work.

## <span id="The_8220_Element-2">The “ Element</span>

`is for the situation where you have used` to prevent line breaks in a section of text, and then you want to say “but you can break HERE if you want”. “ does not force a line break, it merely allows one:

    <NOBR>Maybe it's because every time I get to the last line I feel like I have so much left to say that I have to try to <WBR> push and fit and cram as many words I can think of as I possibly can</NOBR>

Produces:

Maybe it’s because every time I get to the last line I feel like I have so much left to say that I have to try to push and fit and cram as many words I can think of as I possibly can

Having invented `, Netscape now seems to have abandoned it. It's better to stick to grouping non-breakable sets of words within`, like this:

    <NOBR>Maybe it's because every time I get to the last line I feel like I have so much left to say that I have to try to</NOBR>
    <NOBR>push and fit and cram as many words I can think of as I possibly can</NOBR>

Which gives us this paragraph:

Maybe it’s because every time I get to the last line I feel like I have so much left to say that I have to try to  
push and fit and cram as many words I can think of as I possibly can

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

- <a href="https://html.com/attributes/a-target/" class="popular_posts_bars_link">How To Use The &lt;a&gt; To Make Links &amp; Open Them Where You Want!</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/attributes/a-target/#comments" class="popular_posts_bars_comment_count">2,738 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="https://html.com/tags/comment-tag/" class="popular_posts_bars_link">The HTML Comment Tag: Here’s How To Use It In Your Code</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/comment-tag/#comments" class="popular_posts_bars_comment_count">1,179 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="https://html.com/attributes/input-pattern/" class="popular_posts_bars_link">Input Pattern: Use It To Add Basic Data Validation In HTML5</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/attributes/input-pattern/#comments" class="popular_posts_bars_comment_count">895 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="https://html.com/tags/iframe/" class="popular_posts_bars_link">Using The HTML Tag To Create Inline Frames: Here’s How</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/iframe/#comments" class="popular_posts_bars_comment_count">746 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>
- <a href="https://html.com/tags/button/" class="popular_posts_bars_link">Creating A Button With The HTML Button Element: Here’s How</a><span class="popular_posts_bars_comment_count_hold"><a href="https://html.com/tags/button/#comments" class="popular_posts_bars_comment_count">681 views</a><span class="popular_posts_bars_comment_count_triangle"></span></span>

[HTML.com](https://html.com/) © 2015-2020 [Sitemap](https://html.com/sitemap/) | [Privacy](https://html.com/privacy/) | [Contact](https://html.com/contact/)

<span id="cn-notice-text" class="cn-text-container">We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</span><span id="cn-notice-buttons" class="cn-buttons-container"><a href="#" id="cn-accept-cookie" class="cn-set-cookie cn-button bootstrap button">Ok</a></span><a href="javascript:void(0);" id="cn-close-notice" class="cn-close-icon"></a>
