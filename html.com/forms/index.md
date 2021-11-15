<a href="#site-main" class="skip-link screen-reader-text">Skip to content</a>



[](https://html.com/)

Learn HTML Code, Tags & CSS





[HTML](https://html.com/)  /  HTML Web Forms Tutorial For Coding Beginners

HTML Web Forms Tutorial For Coding Beginners
============================================

**Disclosure:** Your support helps keep the site running! We earn a referral fee for some of the services we recommend on this page. [Learn more](https://html.com/disclosure/)

Web forms are used by virtually all websites for a wide range of purposes. Users of forums and social networks use forms to add content and interact with other users. Websites that can be customized to create a personalized experience, such as customizable newsfeeds, use forms to allow users to control the content that appears on the page. And nearly every website uses forms to allow website visitors to contact the organization or person administering the website. Web forms are made possible by the integration of multiple technologies:

-   HTML to create the form fields and labels and accept user input.
-   CSS to style the presentation of the form.
-   JavaScript to validate form input and provide [Ajax](https://en.wikipedia.org/wiki/Ajax_(programming))-enabled interactions.
-   Server-side languages such as PHP to process form data.

In this guide, we’re going to cover all of the HTML elements used to create web forms. We also have other [tutorials](https://html.com/) that cover topics such as [building a form](https://html.com/forms/tutorial/), [styling and designing forms](https://html.com/forms/form-styling-design/), and ensuring [form usability and accessibility](https://html.com/forms/usability-accessibility/).

Contents

-   [<span class="toc_number toc_depth_1">1</span> Defining the Structure of a Form](#Defining_the_Structure_of_a_Form)
    -   [<span class="toc_number toc_depth_2">1.1</span> Grouping Form Fields](#Grouping_Form_Fields)
-   [<span class="toc_number toc_depth_1">2</span> The Input Element](#The_Input_Element)
    -   [<span class="toc_number toc_depth_2">2.1</span> Common &lt;input type=""&gt; Values](#Common_ltinput_typegt_Values)
    -   [<span class="toc_number toc_depth_2">2.2</span> Less Common &lt;input type=""&gt; Values](#Less_Common_ltinput_typegt_Values)
    -   [<span class="toc_number toc_depth_2">2.3</span> New &lt;input type=""&gt; Values Added by HTML5](#New_ltinput_typegt_Values_Added_by_HTML5)
    -   [<span class="toc_number toc_depth_2">2.4</span> Common Input Attributes](#Common_Input_Attributes)
    -   [<span class="toc_number toc_depth_2">2.5</span> New Attributes Added by HTML5](#New_Attributes_Added_by_HTML5)
-   [<span class="toc_number toc_depth_1">3</span> Drop-Downs, Text Areas, & Buttons](#Drop-Downs_Text_Areas_Buttons)
    -   [<span class="toc_number toc_depth_2">3.1</span> Pre-Populated Drop-Down Lists](#Pre-Populated_Drop-Down_Lists)
    -   [<span class="toc_number toc_depth_2">3.2</span> Free Form Text Areas](#Free_Form_Text_Areas)
    -   [<span class="toc_number toc_depth_2">3.3</span> Flexible Buttons](#Flexible_Buttons)
    -   [<span class="toc_number toc_depth_2">3.4</span> Form Elements Added in HTML5](#Form_Elements_Added_in_HTML5)
-   [<span class="toc_number toc_depth_1">4</span> Next Steps](#Next_Steps)
-   [<span class="toc_number toc_depth_1">5</span> Frequently Asked Questions](#Frequently_Asked_Questions)
    -   [<span class="toc_number toc_depth_2">5.1</span> How do you restrict a form field to only accept numbers?](#How_do_you_restrict_a_form_field_to_only_accept_numbers)
    -   [<span class="toc_number toc_depth_2">5.2</span> How do you restrict a form field to only accept alphanumeric characters?](#How_do_you_restrict_a_form_field_to_only_accept_alphanumeric_characters)
    -   [<span class="toc_number toc_depth_2">5.3</span> How do you make a form submit when the user presses enter?](#How_do_you_make_a_form_submit_when_the_user_presses_enter)
-   [<span class="toc_number toc_depth_1">6</span> Related Elements](#Related_Elements)
-   [<span class="toc_number toc_depth_1">7</span> Tutorials and Resources](#Tutorials_and_Resources)

<span id="Defining_the_Structure_of_a_Form">Defining the Structure of a Form</span>
-----------------------------------------------------------------------------------

Every web form must be wrapped in [`<form>`](https://html.com/tags/form/) tags. In most cases, all of the form fields will be nested between these tags. There are several attributes that may optional be used with the `form` element, including: **`accept-charset`**: This optional attribute is used to identify the character encodings acceptable to the server and code processing form input. If more than one encoding is specified, one space should be placed between each encoding. If left blank or not provided, the encoding will default to the same encoding as the document containing the form. **`action`**: This attribute is used to specify a URL where form data should be sent (for instance: http://example.com/form\_file.php). This field was required prior to HTML5 but is now optional. **`autocomplete`**: Use this attribute if you want the visitors browser to suggest form responses based on saved entries. The default value is `autocomplete="on"`. If you turn autocomplete off you must also turn it off on every field that may allow autocompletion. **`enctype`**: Used to specify how form data should be encoded. Only used if the `method` attribute mentioned below is set to `post`. There are three possible values:

-   `application/x-www-form-urlencoded`: The default value which replaces all spaces with “+” and converts all special characters to [ASCII HEX values](https://en.wikipedia.org/wiki/ASCII#ASCII_printable_code_chart).
-   `multipart/form-data`: Nothing is encoded. Input is uploaded to the server exactly as it is entered into the form.
-   `text/plain`: Spaces are converted into “+” symbols, but not other characters are encoded.

**`method`**: Dictates the HTTP method a website visitors browser should use to submit form data. If `post` is specified, form data is enclosed in the body of the HTTP request. If `get` is specified, form data is appended to the end of the URL specified in the `action` attribute with a “?” symbol, data length is limited to 300 characters, and form input is visible and can be bookmarked. **`name`**: Similar to an `id` attribute, a `name` is a unique identifier that may only be used once within an HTML document and may be used to select the form with JavaScript or another scripting language. **`novalidate`**: Used to override the default validation of form data. **`target`**: Specifies where to display the response received after submitting the form.

-   `_self` loads the response in the same frame.
-   `_blank` opens a new window or tab.
-   `_parent` is used when a form is nested in a descendant browsing context to load the response in the parent context and behaves the same as `_self` is there is no parent context.
-   `_top` is similar to `_parent` but select the top level browsing context rather than the immediate parent context.

### <span id="Grouping_Form_Fields">Grouping Form Fields</span>

The [`<fieldset>`](https://html.com/tags/fieldset/) element is used to group together related form fields. It may also be used to contain an entire form to provide a visual cue that distinguishes the form from surrounding content. The first element within a `fieldset` is usually a [`<legend>`](https://html.com/tags/legend/). The `legend` will be displayed a part of the `fieldset` border giving website visitors a clue about the purpose of a form. For example, if a contact form were nested within a web page full of otherwise unrelated content, the `fieldset` element could be used in combination with the `legend` element to isolate the contact form from the rest of the content both [semantically](https://html.com/semantic-markup/) and visually.

    <p>Paragraph content.</p> <form>   <fieldset disabled>     <legend>Contact Form</legend>     <!--These elements are discussed later in this tutorial-->     <p>Name: <input type="text" size="30"></p>     <p>Email: <input type="text" size="30"></p>     <p>Subject: <input type="text" size="30"></p>     <p>Message: <textarea>Type your message here</textarea></p>     <p><input type="submit"></p>   </fieldset> </form>  <p>Additional paragraph content</p> 

When rendered in the browser, the contact form would be clearly separated from surrounding content.

Paragraph content.

Contact Form

Name:  
Email:  
Subject:  
Message:  

Type your message here

Additional paragraph content

The `fieldset` element is optional but is commonly used to group related elements on long and complex forms, or to isolate form fields from nearby elements when a form is presented along with non-form content. HTML5 added three attributes which can be applied to `fieldset` elements:

-   `disabled`: Used to disable all of the forms in a fieldset. Note that we used this attribute in the example form above.
-   `form`: Used to associate a `fieldset` with the `id` of one or more `form` elements. Note that browser support for this attribute is very limited.
-   `name`: Associates a name with the `fieldset`.

<span id="The_Input_Element">The Input Element</span>
-----------------------------------------------------

Depending on the type of form you are creating, it’s entirely possible to have a form that only includes two types of elements: one `form` element and one or more `input` elements. The [`<input>`](https://html.com/tags/input/) element is used to create a variety of different types of input fields for form users to interact with.

### <span id="Common_ltinput_typegt_Values">Common `<input type="">` Values</span>

The `input` element is a very flexible element who appearance and behavior can change dramatically based on the `type` attribute applied to the element. The most common `type` values include: **`text`**: The default value for the `type=""` attribute. Defines a single line of text 20 characters wide. The width can be adjusted with the size attribute as you can see in the form code in our previous example. **`password`**: The password type is basically the same as the text field with the exception that characters entered into a password field are masked. **`radio`**: Radio buttons can be used to provide multiple options of which only one may be chosen. **`checkbox`**: Checkboxes are similar to radio buttons, but more than one selection can be active at a time. This means multiple values can be submitted with a set of checkboxes while a set of radio buttons will only accept one value. **`submit`**: The submit type value creates a form submission button. When clicked, the form will take the action specified in the `action` attribute associated with the `form` element. Many forms make use of just one or two `input` types, and most simple forms are built using just the types listed above. However, there are many additional types you can use to accept form data that doesn’t fit into any of the types listed above.

### <span id="Less_Common_ltinput_typegt_Values">Less Common `<input type="">` Values</span>

These `input` types are less common than those listed above but are supported by virtually all browsers and can be used to build many different types of form inputs. **`button`**: If you want to run a [`script`](https://html.com/tags/script/) when a button is clicked, the `button` input type can be used to create a button which can be associated with a variety of actions. **`hidden`**: This attribute type is usually used simultaneously with the `value` attribute, which we’ll cover momentarily, to add a pre-defined value to every form submission. For example, if you have contact forms on five different pages you could add `<input type="hidden" value="page_name">` to each form to submit the name of the page where the contact form was submitted from. **`reset`**: This type is used to create a `reset` button that will return all form fields to their default state. **`file`**: If you want to allow form users to upload and submit files, `<input type="file">` will provide that capability. **`image`**: In the past, it was common to use an image as a submit button. While this type value is still valid, it is not used very frequently in modern web form design. Instead, use [CSS](https://html.com/css/) to style the button.

### <span id="New_ltinput_typegt_Values_Added_by_HTML5">New `<input type="">` Values Added by HTML5</span>

Several additional `input` types are defined by the HTML5 specification. Many of these types have limited browser support. So if you use them, be sure to check [caniuse.com](https://caniuse.com/) for browser support and provide adequate fallback options where appropriate. **`search`**: This is the proper `type` to specify if your form provides search functionality. Unlike most of the other types of inputs added in HTML5, `type="search"` is supported by all browsers. Just remember that this feature doesn’t actually provide search functionality, it just creates a form input field designed to be used as a part of a search feature. **`color`**: When this input type is specified it will display a colored-button that launches a basic color selector tool. Set the default color value by using the `value` attribute and a hex color code like this: `<input type="color" value="#0000FF">`. **`number`**: This type produces a field for entering a number which has increment buttons on the righthand side of box. Limits can be placed on the range of acceptable entries with the `max`, `min`, and `step` attributes, but browsers that lack support for this element typically fallback to a standard text input that does not recognize these limits. **`range`**: Browser support for this element is pretty good with a few exceptions. Use this attribute to produce a slider which can be used to select a value within a specified range. For example, this code would produce a slider to select a number between 100 and 1000 in increments of 50: `<input type="range" name="range"  min="100" max="1000" step="50">`. You’ll need to pair the `range` element with another technique to provide a live preview of the selected value. Thankfully, [HTML5 Doctor](http://html5doctor.com/the-output-element/#input-range) has a simple way to do this using the `output` element. **Date and Time Types**: HTML5 added a number of input types that can be used to specify time and date values. For example, the `date` type defines a control to enter a year, month, and day. To add time to the date input, use `datetime-local`. If you want time without date information use the `time` input type. Less specific input types include the `month` and `week` options which can be used to select a week or month within a year without specifying the day or time. Browsers have been slow to add support for this type, so be sure to [check for browser support](https://caniuse.com/#feat=input-datetime) and provide fallbacks if you use this type of input. **Contact Detail Types**: Broad support is available for the three input types used to collect pertinent details like email addresses (`email`), telephone numbers (`tel`), and website URLs (`url`).

### <span id="Common_Input_Attributes">Common Input Attributes</span>

While the `type` attribute is by far the most-used and most useful `input` attribute, there are several other attributes you will need to know to build useful forms. **`name`**: The `name` assigned to an `input` element will be submitted along with the value entered into the associated field. In other words, if the value “Fred” were entered into an `input` element with this code `<input type="text" name="first_name">` the value submitted would be “first\_name=Fred”. **`value`**: The value of an input element performs a different function depending on the type of input it is applied to. When applied to the `submit`, `reset`, or `button` types the value is used as the text on the button. When applied to text fields it provides the default value associated with the field. When associated with a checkbox or radio button, the value provides the value that will be associated with that field if selected.

    <!--Will produce a button with the label "Send Now"--> <input type="submit" value="Send Now"> <!--Will produce a text field with "Google" preloaded in the field--> <!--Use when you know the value that should be submitted, not as placeholder--> <p>Who referred you to our website?:<br> <input type="text" name="Referrer" value="Google"></p> <!--If a radio button is selected the value "color=pink" or "color=red" will be submitted--> <p>Pink: <input type="radio" name="color" value="pink"></p> <p>Red: <input type="radio" name="color" value="red"></p> 

**`readonly`**: When `readonly` is applied as an attribute of an `input` element the value in the field cannot be changed. JavaScript can be used to remove the `readonly` attribute after some other action is taken, such as clicking a button or selecting a checkbox. For example, `readonly` could be applied to a `submit` input type and removed when a checkbox was selected confirming that the user accepted the website’s terms of service. **`disabled`**: We used this attribute with example form embedded earlier in this tutorial. Use this attribute to disable an entire form, fieldset, a single field. **`size`**: Use the `size` attribute with text `input` types to specify the visible width of the field without limiting the number of characters that may be entered into the field. **`maxlength`**: If you don’t want to accept more than a certain number of characters in a given field, use `maxlength` to limit those fields to a defined number of characters. **`checked`**: If you want a checkbox or radio button to be preselected when a form loads apply this attribute to that `input` element. These attributes have broad support and are used commonly with forms you encounter every day.

### <span id="New_Attributes_Added_by_HTML5">New Attributes Added by HTML5</span>

HTML5 added many new attributes which can be associated with `input` elements. Browser support for some of these elements is limited, so be sure to check for support and provide fallback options for users of unsupported browsers. **`autocomplete`**: If your form includes common fields, leaving autocomplete on will allow the visitors browser to suggest entries based on previously completed forms. **`autofocus`**: Use this attribute to identify the form field that should be in focus when the form loads. **`multiple`**: The `multiple` attribute can be used with `email` and `file` input types to allow form users to input more than one value. When used for `email` inputs, more than one email address can be submitted by separating each address from the next with a comma. When used for `file` inputs, multiple files may be selected and submitted simultaneously. **`pattern`**: There may be times when you want to specify that the value of an `input` must meet certain criteria. For example, you may want to require that a password field includes at least one uppercase letter, one lowercase letter, one number, and meets a minimum length requirement. The `pattern` attribute can be used to create expressions against which `input` values are validated. Writing these expressions, referred to as Regular Expressions or RegExp, is beyond the scope of this tutorial. You can learn about regular expressions at [Wikipedia](https://en.wikipedia.org/wiki/Regular_expression) and then write and test your expressions for free at [RegExr](https://regexr.com/). **`placeholder`**: Most forms include placeholder text which disappears as soon as you click into the field or begin typing. Use this attribute to add and define placeholder text for any inputs that accept text. **`required`**: If certain fields in a form are required, use this attribute to prevent submission of incomplete forms. **`form`**: If you ever need to place an `input` element outside of the `form` element, you can associate the displaced element by using the `form` attribute and applying a value that matches the `id` attribute applied to the form. **Modify Form Submit Button Behavior** There are five attributes that can be applied to `submit` and `image` input types to override the attributes applied to the parent `form` element. These attributes include:

-   **`formaction`**: Define a different URL from the one identified in the parent form’s `action` attribute to process a form submission. Often used when forms may be processed in more than one way to provide a variety of form submission options.
-   **`formenctype`**: Specify an encoding type that should be used for form submissions. The value used overrides the value applied to the `enctype` attribute of the parent `form` element.
-   **`formmethod`**: This attribute is used specify either the `get` or `post` method value and will override the `method` attribute applied to the parent `form`.
-   **`formnovalidate`**: If you don’t want form input to be validated when submitted you can use this attribute.
-   **`formtarget`**: Override the `target` attribute applied to the parent `form` element by applying this attribute to a `submit` or `image` input type field.

**Define the Size of `type="image"`**: If you use the `image` input type to create a form submission button, you can control the size of the image using the `height` and `width` attributes. Alternatively, you can do the same thing with CSS. Most developers and designers would recommend avoiding these attributes and controlling button appearance with [CSS](https://html.com/css/). **Set Limits and Increments for Numeric Values**: You can use the `min`, `max`, and `step` attributes to define minimum and maximum values as well as acceptable increments falling between these values for any `input` that accepts numeric values.

<span id="Drop-Downs_Text_Areas_Buttons">Drop-Downs, Text Areas, & Buttons</span>
---------------------------------------------------------------------------------

Inputs aren’t the only elements that can be used to create form fields. Other types of elements can be associated with forms to create drop-down lists or options, free-form text areas, and flexible buttons.

### <span id="Pre-Populated_Drop-Down_Lists">Pre-Populated Drop-Down Lists</span>

To create a drop-down list of pre-populated options from which a website visitor can select an option, use the `select` element to create the field, and nest multiple `option` elements to create the various options that should appear in the drop-down menu. For example, to create a drop-down menu of pretentious color options for a fictional e-commerce store, the following code could be used:

    <select name="color">   <option value="tan">Windswept Sand Dune</option>   <option value="green">Lush Forest</option>   <option value="blue">Turbulent Waters</option>   <option value="black">Deep Night</option> </select> 

Note that the `value` is what will actually be submitted with the form while the text between the opening and closing tags is what is presented to the visitor completing the form. For example, if a visitor selects “Lush Forest” the actual value submitted with the form will be `green`. Here’s how our drop-down list shows up in the browser:

Windswept Sand Dune Lush Forest Turbulent Waters Deep Night

### <span id="Free_Form_Text_Areas">Free Form Text Areas</span>

All of the text inputs we’ve seen so far, such as `<input type="text">`, only accept a single line of text. However, if you want to create a larger text area for longer text input a single line input field isn’t going to work. The `textarea` element is the correct choice for creating a large text input area capable of accepting text input that won’t render well on a single line. There are three parts to a `textarea`:

1.  The `textarea` is created by inserting opening and closing tags. Any text nested between the tags will be loaded in the text area when the form loads and will be submitted along with the form unless the visitor submitting the form deletes the text out of the `textarea`.
2.  If you want to define the size of the text area use the `rows` attribute to define the number of rows of text that should able to be displayed without resizing the text area.
3.  To set a predefined width use the `cols` attribute. The value applied will be the number of characters that will appear on a single row before wrapping to the second row.

Text area elements are resizable. However, the `rows` and `cols` attributes will define the size of the `textarea` when it is first rendered by the browser and will also set the minimum space the area may be resized to fit.

    <textarea rows="3" cols="60" placeholder="Enter Text Here"> </textarea> <br> <textarea rows="3" cols="60">   Enter Text Here </textarea> 

This code will produce two identically sized text areas that are three rows tall and can accept 60 characters per row. They will be resizable to any size larger than the default size. Note how the placeholder text was added to the first with the `placeholder` element but simply nested between the opening and closing tags in the second example. Below you can see how these two bits of code are rendered.

  

Enter Text Here

**While `textarea` size can be specified using ‘rows’ and ‘cols’, it is a better practice to use CSS to style and size text areas.** Many of the attributes that can be applied to `input` elements can also be applied to `textarea` elements. In addition, to those included in our example above, attributes that can be applied to text areas include: `autofocus`, `disabled`, `form`, `maxlength`, `name`, `readonly`, `required`, and `wrap`.

### <span id="Flexible_Buttons">Flexible Buttons</span>

There are two ways to create buttons for forms:

-   `<input type="button/submit/reset/image">`
-   `<button type="button/submit/reset/"></button>`

We’ve already talked about the `input` element and the different types that can be used to create buttons. So why is there another button? There are least two ways that `button` elements are different from their `input` cousins.

1.  Because buttons are made with an opening and closing tag, different types of content – usually text and images – can be nested between the opening and closing tags and will be rendered on the button.
2.  Buttons do not have to be associated with a `form` element. They can be used as standalone buttons to initiate scripts, as the content of an anchor element, and to perform other actions.

### <span id="Form_Elements_Added_in_HTML5">Form Elements Added in HTML5</span>

Three new `form` elements were added in HTML5: **`datalist`**: Use this element to provide a list of suggested autocompletion values for an input element. In order to use the `datalist` element, first create an `input` element with a `list` attribute. Then create a `datalist` element with an `id` attribute. The value applied to the input list attribute must match the datalist id. Values are added to the `datalist` by adding `option` elements between the opening and closing `datalist` tags. Here’s an example of how this all works:

    <p>What is your favorite web technology?</p> <input type="text" list="web_technologies" name="web_technology"> <datalist id="web_technologies">   <option value="HTML">   <option value="CSS">   <option value="JavaScript">   <option value="jQuery">   <option value="PHP">   <option value="Bootstrap"> </datalist> 

When we render that code in the browser and input element will appear. If we begin typing, autocomplete suggestions will be made based on the options included in the datalist. Note that users submitting the form aren’t limited to selecting from one of these options. They can still choose to type a value that is not an included `option` if they wish to do so.

What is your favorite web technology?

**`output`**: Use this element to display the result of a calculation or user input. Associate it with an `input` element by using the `for` attribute with a value that matches the `id` of the relevant `input` element, or associate it with a `form` by adding a `form` attribute using a value that matches the `id` of the relevant `form`. The `output` element can also be paired with the `range` element to let form users know the exact value represented by the current position of the slider of a `range` element. Using the `output` and `range` elements in this way is beyond the scope of this introductory tutorial, but if you want to use these two elements together you can learn more about this technique at the [HTML5 Doctor](http://html5doctor.com/the-output-element/#input-range).

<span id="Next_Steps">Next Steps</span>
---------------------------------------

This tutorial has provided an overview of the elements used to build forms for the web. The next step is to try out some of the knowledge you’ve gained. Other tutorials in this section will walk you through the process of [creating a reservation form](https://html.com/forms/tutorial/), [styling and designing forms](https://html.com/forms/form-styling-design/), and ensuring that your [forms meet usability and accessibility guidelines](https://html.com/forms/usability-accessibility/).

<span id="Frequently_Asked_Questions">Frequently Asked Questions</span>
-----------------------------------------------------------------------

### <span id="How_do_you_restrict_a_form_field_to_only_accept_numbers">How do you restrict a form field to only accept numbers?</span>

In the past, restricting a field to numbers only required the use of JavaScript. However, with the release of HTML5, it’s now simple to limit a field to numeric input only. Just apply the `number` value to the `type` attribute of the applicable `input` element. For example:

    <input type="number"> 

When rendered, produces a text input field that will only accept numbers.

### <span id="How_do_you_restrict_a_form_field_to_only_accept_alphanumeric_characters">How do you restrict a form field to only accept alphanumeric characters?</span>

In the past, the only way to limit field input to alphanumeric characters was to use jQuery or JavaScript and craft a custom function. However, HTML5 added the `pattern` attribute for `input` elements which can be used to restrict a form field to accept alphanumeric input only. Here’s the code that will do the trick:

    <form>   <input type="text" pattern="[a-zA-Z0-9]{5,8}" title="Type 5 to 8 alphanumeric characters">   <input type="submit"> </form> 

In this case, the `pattern` element will accept lowercase letters, uppercase letters, and numbers. The second part of the value in curly braces stipulates how many total characters may be entered into the field. Let’s see how that looks in the browser.

The way it works is that when you attempt to submit values that don’t meet the specified pattern the `title` attribute is displayed. So you should put some instructions inside the `pattern` attribute so that users can figure out what they’ve done wrong. Browser support for this relatively new attribute is really pretty good. IE 9 and earlier versions of IE don’t support it and Opera Mini also lacks support. However, all other browsers do support the attribute.

### <span id="How_do_you_make_a_form_submit_when_the_user_presses_enter">How do you make a form submit when the user presses enter?</span>

If you’ve come across a form that does not submit when you press enter, then someone has intentionally designed the form to behave that way – and they really shouldn’t have done that. [Web accessibility specs](https://html.spec.whatwg.org/multipage/forms.html#implicit-submission) are clear: design forms to allow implicit submission. What is implicit submission? Submitting a form by pressing enter. Browsers are designed to support implicit submission. Here’s how it works. Take this form for instance:

    <form>   <label for="name">Name: </label><input type="text" name="name"><br>   <label for="age">Age: <input type="text" name="age"><br>   <input type="submit"> </form> 

If you were focused on any element in that form and pressed enter, the form would be submitted. This is implicit submission and all modern browsers support this behavior. Use the `button` element in the form and you don’t even have to use the `submit` value for the `type` attribute. Hit enter while focused on any element in this form and the form will still be submitted.

    <form>   <label for="name">Name: </label><input type="text" name="name"><br>   <label for="age">Age: <input type="text" name="age"><br>   <button>Submit</button> </form> 

So how do developers break this behavior? One way to get around this behavior–and to be clear, we don’t recommend this–is to drop the `form` elements. The browser knows what to submit by grouping together everything between the `form` tags. Drop those tags and the browser doesn’t know what to submit. Another way some developers manipulate browser behavior is to use CSS to make buttons rather than proper HTML elements, like this.

    <style> .submitButton {   padding: 10px 20px;   margin-top: 10px;   background-color: #ddd;   border-radius: 5px;   display: inline-block; } .submitButton:hover {   background-color: #ccc; } .submitButton:active {   background-color: #ddd; } </style> <form>   <label for="name">Name: </label><input type="text" name="name"><br>   <label for="age">Age: <input type="text" name="age"><br>   <span class="submitButton">Submit</span> </form> 

Which, when rendered by the browser, would produce a button that looked like a button but did not do anything when enter is pressed.

.submitButton{padding: 10px 20px; margin-top: 10px; background-color: \#ddd; border-radius: 5px; display: inline-block;}.submitButton:hover{background-color: \#ccc;}.submitButton:active{background-color: \#ddd;} Name:  
Age:  
<span class="submitButton">Submit</span>

Usually, developers have good intentions when they do things like this. Typically, what they’re trying to do is tie form validation to an `onClick` JavaScript event. Form validation is a good thing, but creating a barrier to accessibility in the name of form validation is not a good thing. So, what *should* you do instead of disabling implicit submission? Leave implicit submission intact and use JavaScript to add an event listener to each field. Use the event listener to trigger form validation like this.

    document.getElementById('name').addEventListener('keypress', function(event) {   if (event.keyCode == 13) {     /* Run Form Validation JavaScript */   } }; 

That code leaves implicit submission intact, but still runs validation code when the user presses enter.

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="http://html.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif" class="lazy lazy-hidden avatar avatar-100 photo" width="100" height="100" />

<img src="https://secure.gravatar.com/avatar/7935ca61eb56de63c80d923835a809e2?s=100&amp;d=mm&amp;r=g" class="avatar avatar-100 photo" srcset="https://secure.gravatar.com/avatar/7935ca61eb56de63c80d923835a809e2?s=200&amp;d=mm&amp;r=g 2x" width="100" height="100" />

[Jon Penland](https://html.com/author/jon-penland/)

<span class="fn">Jon is a freelance writer, travel enthusiast, husband and father. He writes about web technologies such as WordPress, HTML, and CSS.</span>

[<span class="saboxplugin-icon-grey saboxplugin-icon-facebook"></span>](https://www.facebook.com/jonpenland)[<span class="saboxplugin-icon-grey saboxplugin-icon-googleplus"></span>](https://plus.google.com/+JonPenland)

<span id="tho-end-content" style="display: block; visibility: hidden;"></span>

<span id="Related_Elements">Related Elements</span>
---------------------------------------------------

<table><thead><tr class="header"><th>Element Name</th><th>Attributes</th><th>Notes</th></tr></thead><tbody><tr class="odd"><td><a href="https://html.com/tags/keygen/" class="linked-name">keygen</a></td><td></td><td>The &lt;keygen&gt; element generates a public-private key pair and sends the public key to the server with form submission. The element is expected to be deprecated and does not have broad browser support.</td></tr><tr class="even"><td><a href="https://html.com/tags/datalist/" class="linked-name">datalist</a></td><td></td><td>The &lt;datalist&gt; element is used to define autocompletion values for an associated &lt;input&gt; element. Suggested autocompletion values are added to a datalist by nesting one or more &lt;option&gt; elements between the opening and closing &lt;datalist&gt; tags.</td></tr><tr class="odd"><td><a href="https://html.com/tags/input/" class="linked-name">input</a></td><td><a href="https://html.com/attributes/input-step/" class="linked-name">step</a><br />
<a href="https://html.com/attributes/input-required/" class="linked-name">required</a><br />
<a href="https://html.com/attributes/input-readonly/" class="linked-name">readonly</a><br />
<a href="https://html.com/attributes/input-placeholder/" class="linked-name">placeholder</a><br />
<a href="https://html.com/attributes/input-pattern/" class="linked-name">pattern</a><br />
<a href="https://html.com/attributes/input-multiple/" class="linked-name">multiple</a><br />
<a href="https://html.com/attributes/input-min/" class="linked-name">min</a><br />
<a href="https://html.com/attributes/input-max/" class="linked-name">max</a><br />
<a href="https://html.com/attributes/input-list/" class="linked-name">list</a><br />
<a href="https://html.com/attributes/input-height/" class="linked-name">height</a><br />
<a href="https://html.com/attributes/input-formtarget/" class="linked-name">formtarget</a><br />
<a href="https://html.com/attributes/input-formmethod/" class="linked-name">formmethod</a><br />
<a href="https://html.com/input-formenctype/" class="linked-name">formenctype</a><br />
<a href="https://html.com/attributes/input-formaction/" class="linked-name">formaction</a><br />
<a href="https://html.com/input-form/" class="linked-name">form</a><br />
<a href="https://html.com/attributes/input-autofocus/" class="linked-name">autofocus</a><br />
<a href="https://html.com/attributes/input-accesskey/" class="linked-name">accesskey</a><br />
<a href="https://html.com/attributes/input-autocomplete/" class="linked-name">autocomplete</a><br />
<a href="https://html.com/attributes/input-border/" class="linked-name deprecated">border</a><br />
<a href="https://html.com/attributes/input-checked/" class="linked-name">checked</a><br />
<a href="https://html.com/attributes/input-disabled/" class="linked-name">disabled</a><br />
<a href="https://html.com/attributes/input-maxlength/" class="linked-name">maxlength</a><br />
<a href="https://html.com/attributes/input-language/" class="linked-name deprecated">language</a><br />
<a href="https://html.com/attributes/input-name/" class="linked-name">name</a><br />
<a href="https://html.com/attributes/input-size/" class="linked-name">size</a><br />
<a href="https://html.com/attributes/input-src/" class="linked-name">src</a><br />
<a href="https://html.com/attributes/input-type/" class="linked-name">type</a><br />
<a href="https://html.com/attributes/input-value/" class="linked-name">value</a><br />
</td><td>The &lt;input&gt; element is used to create form fields that accept user input. Form &lt;input&gt; elements can be presented many different ways, including simple text fields, buttons, checkboxes, drop-down menus, and more, by setting the type attribute of the input element to the appropriate value.</td></tr><tr class="even"><td><a href="https://html.com/tags/label/" class="linked-name">label</a></td><td><a href="https://html.com/attributes/label-for/" class="linked-name">for</a><br />
</td><td>The &lt;label&gt; element is used to associate a text label with a form &lt;input&gt; field. The label is used to tell users the value that should be entered in the associated input field.</td></tr><tr class="odd"><td><a href="https://html.com/tags/legend/" class="linked-name">legend</a></td><td><a href="https://html.com/attributes/legend-align/" class="linked-name deprecated">align</a><br />
</td><td>The &lt;legend&gt; element is used to add a caption to a group of related form &lt;input&gt; elements that have been grouped together into a &lt;fieldset&gt;.</td></tr><tr class="even"><td><a href="https://html.com/tags/select/" class="linked-name">select</a></td><td><a href="https://html.com/attributes/select-disabled/" class="linked-name">disabled</a><br />
<a href="https://html.com/attributes/select-language/" class="linked-name deprecated">language</a><br />
<a href="https://html.com/attributes/select-multiple/" class="linked-name">multiple</a><br />
<a href="https://html.com/attributes/select-name/" class="linked-name">name</a><br />
<a href="https://html.com/attributes/select-onchange/" class="linked-name">onChange</a><br />
<a href="https://html.com/attributes/select-onfocus/" class="linked-name">onFocus</a><br />
<a href="https://html.com/attributes/select-readonly/" class="linked-name deprecated">readonly</a><br />
<a href="https://html.com/attributes/select-size/" class="linked-name">size</a><br />
<a href="https://html.com/attributes/select-tabindex/" class="linked-name">tabindex</a><br />
</td><td>The &lt;select&gt; element, used along with one or more &lt;option&gt; elements, creates a drop-down list of options for a web form. The &lt;select&gt; element creates the list and each &lt;option&gt; element is displayed as an available option in the list.</td></tr><tr class="odd"><td><a href="https://html.com/tags/button/" class="linked-name">button</a></td><td><a href="https://html.com/attributes/button-accesskey/" class="linked-name">&lt;button accesskey=""&gt;</a><br />
<a href="https://html.com/attributes/button-disabled/" class="linked-name">disabled</a><br />
<a href="https://html.com/attributes/button-name/" class="linked-name">name</a><br />
<a href="https://html.com/attributes/button-type/" class="linked-name">type</a><br />
<a href="https://html.com/attributes/button-value/" class="linked-name">value</a><br />
<a href="https://html.com/attributes/button-onclick/" class="linked-name">onClick</a><br />
<a href="https://html.com/attributes/button-tabindex/" class="linked-name">tabindex</a><br />
</td><td>The &lt;button&gt; element is used to create an HTML button. Any text appearing between the opening and closing tags will appear as text on the button. No action takes place by default when a button is clicked. Actions must be added to buttons using JavaScript or by associating the button with a form.</td></tr><tr class="even"><td><a href="https://html.com/tags/fieldset/" class="linked-name">fieldset</a></td><td></td><td>The &lt;fieldset&gt; element may be optionally used to group together related fields in an HTML form.</td></tr><tr class="odd"><td><a href="https://html.com/tags/form/" class="linked-name">form</a></td><td><a href="https://html.com/attributes/form-target/" class="linked-name">&lt;form target=""&gt;</a><br />
<a href="https://html.com/attributes/form-action/" class="linked-name">action</a><br />
<a href="https://html.com/attributes/form-enctype/" class="linked-name">enctype</a><br />
<a href="https://html.com/attributes/form-method/" class="linked-name">method</a><br />
<a href="https://html.com/attributes/form-onsubmit/" class="linked-name">onSubmit</a><br />
<a href="https://html.com/attributes/form-onreset/" class="linked-name">onReset</a><br />
<a href="https://html.com/attributes/form-name/" class="linked-name deprecated">name</a><br />
</td><td>The &lt;form&gt; element is used to create an HTML form. The &lt;form&gt; element does not actually create form fields, but is used as a parent container to hold form fields such as &lt;input&gt; and &lt;textarea&gt; elements.</td></tr></tbody></table>

<span id="Tutorials_and_Resources">Tutorials and Resources</span>
-----------------------------------------------------------------

[Getting Started With Forms](https://html.com/forms/tutorial/)  
[Form Styling and Design](https://html.com/forms/form-styling-design/)  
[Designing Web Forms For Usability And Accessibility: A Complete Guide (Including Code)](https://html.com/forms/usability-accessibility/)  

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
