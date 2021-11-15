<span id="top"></span>

# YAML

From Wikipedia, the free encyclopedia

<a href="#mw-head" class="mw-jump-link">Jump to navigation</a> <a href="#searchInput" class="mw-jump-link">Jump to search</a>

For the CSS framework, see [YAML (framework)](<https://en.wikipedia.org/wiki/YAML_(framework)> "YAML (framework)").

Human-readable data serialization format

YAML

<a href="https://en.wikipedia.org/wiki/File:YAML_Logo.svg" class="image"><img src="http://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/YAML_Logo.svg/250px-YAML_Logo.svg.png" alt="YAML Logo.svg" srcset="
                          //upload.wikimedia.org/wikipedia/commons/thumb/f/f8/YAML_Logo.svg/375px-YAML_Logo.svg.png 1.5x,
                          //upload.wikimedia.org/wikipedia/commons/thumb/f/f8/YAML_Logo.svg/500px-YAML_Logo.svg.png 2x
                        " width="250" height="86" /></a>

[Filename extensions](https://en.wikipedia.org/wiki/Filename_extension "Filename extension")

`.yaml`, `.yml`

[Internet media type](https://en.wikipedia.org/wiki/Media_type "Media type")

_Not registered_

Initial release

11 May 2001<span class="noprint">; 20 years ago</span><span style="display: none"> (<span class="bday dtstart published updated">2001-05-11</span>)</span>

[Latest release](https://en.wikipedia.org/wiki/Software_release_life_cycle "Software release life cycle")

1.2 (Third Edition)  
(1 October 2009<span class="noprint">; 12 years ago</span><span style="display: none"> (<span class="bday dtstart published updated">2009-10-01</span>)</span>)

Type of format

Data interchange

<span class="nowrap">[Open format](https://en.wikipedia.org/wiki/Open_format "Open format")?</span>

Yes

Website

<span class="url"><a href="https://yaml.org/" class="external text">yaml.org</a></span>

**YAML** (_see [§ History and name](#History_and_name)_) is a <a href="https://en.wikipedia.org/wiki/Human-readable" class="mw-redirect" title="Human-readable">human-readable</a> [data-serialization language](https://en.wikipedia.org/wiki/Serialization "Serialization"). It is commonly used for [configuration files](https://en.wikipedia.org/wiki/Configuration_file "Configuration file") and in applications where data is being stored or transmitted. YAML targets many of the same communications applications as <a href="https://en.wikipedia.org/wiki/Extensible_Markup_Language" class="mw-redirect" title="Extensible Markup Language">Extensible Markup Language</a> (XML) but has a minimal syntax which intentionally differs from <a href="https://en.wikipedia.org/wiki/SGML" class="mw-redirect" title="SGML">SGML</a>.<sup>[\[1\]](#cite_note-1.0-1)</sup> It uses both [Python](<https://en.wikipedia.org/wiki/Python_(programming_language)> "Python (programming language)")-style indentation to indicate nesting, and a more compact format that uses `[...]` for lists and `{...}` for maps<sup>[\[1\]](#cite_note-1.0-1)</sup> thus [JSON](https://en.wikipedia.org/wiki/JSON "JSON") files are valid YAML 1.2.<sup>[\[2\]](#cite_note-YAML_Version_1.2-2)</sup>

Custom data types are allowed, but YAML natively encodes <a href="https://en.wikipedia.org/wiki/Scalar_(computing)" class="mw-redirect" title="Scalar (computing)">scalars</a> (such as [strings](<https://en.wikipedia.org/wiki/String_(computer_science)> "String (computer science)"), [integers](<https://en.wikipedia.org/wiki/Integer_(computer_science)> "Integer (computer science)"), and <a href="https://en.wikipedia.org/wiki/Floating_point" class="mw-redirect" title="Floating point">floats</a>), <a href="https://en.wikipedia.org/wiki/List_(computing)" class="mw-redirect" title="List (computing)">lists</a>, and <a href="https://en.wikipedia.org/wiki/Associative_arrays" class="mw-redirect" title="Associative arrays">associative arrays</a> (also known as maps, dictionaries or hashes). These data types are based on the [Perl](https://en.wikipedia.org/wiki/Perl "Perl") programming language, though all commonly used high-level programming languages share very similar concepts.<sup>[\[3\]](#cite_note-3)[\[4\]](#cite_note-4)[\[5\]](#cite_note-5)</sup> The colon-centered syntax, used for expressing <a href="https://en.wikipedia.org/wiki/Attribute–value_pair" class="mw-redirect" title="Attribute–value pair">key-value pairs</a>, is inspired by <a href="https://en.wikipedia.org/wiki/Electronic_mail" class="mw-redirect" title="Electronic mail">electronic mail</a> headers as defined in

<a href="https://en.wikipedia.org/wiki/RFC_(identifier)" class="mw-redirect" title="RFC (identifier)">RFC</a> <a href="https://datatracker.ietf.org/doc/html/rfc822" class="external text">822</a>, and the [document separator](https://en.wikipedia.org/wiki/Delimiter "Delimiter") `---` is borrowed from [MIME](https://en.wikipedia.org/wiki/MIME "MIME") (<a href="https://en.wikipedia.org/wiki/RFC_(identifier)" class="mw-redirect" title="RFC (identifier)">RFC</a> <a href="https://datatracker.ietf.org/doc/html/rfc2046" class="external text">2046</a>). <a href="https://en.wikipedia.org/wiki/Escape_sequences" class="mw-redirect" title="Escape sequences">Escape sequences</a> are reused from [C](<https://en.wikipedia.org/wiki/C_(programming_language)> "C (programming language)"), and whitespace wrapping for multi-line strings is inspired by [HTML](https://en.wikipedia.org/wiki/HTML "HTML"). Lists and hashes can contain nested lists and hashes, forming a [tree structure](https://en.wikipedia.org/wiki/Tree_structure "Tree structure"); arbitrary [graphs](<https://en.wikipedia.org/wiki/Graph_(abstract_data_type)> "Graph (abstract data type)") can be represented using YAML aliases (similar to XML in [SOAP](https://en.wikipedia.org/wiki/SOAP "SOAP")).<sup>[\[1\]](#cite_note-1.0-1)</sup> YAML is intended to be read and written in streams, a feature inspired by [SAX](https://en.wikipedia.org/wiki/Simple_API_for_XML "Simple API for XML").<sup>[\[1\]](#cite_note-1.0-1)</sup>

Support for reading and writing YAML is available for many programming languages.<sup>[\[6\]](#cite_note-6)</sup> Some source-code editors such as [Emacs](https://en.wikipedia.org/wiki/Emacs "Emacs")<sup>[\[7\]](#cite_note-7)</sup> and various [integrated development environments](https://en.wikipedia.org/wiki/Integrated_development_environment "Integrated development environment")<sup>[\[8\]](#cite_note-8)[\[9\]](#cite_note-9)[\[10\]](#cite_note-10)</sup> have features that make editing YAML easier, such as folding up nested structures or automatically highlighting syntax errors.

The official recommended [filename extension](https://en.wikipedia.org/wiki/Filename_extension "Filename extension") for YAML files has been `.yaml`<sup>[\[11\]](#cite_note-11)</sup> since 2006.<sup>[\[12\]](#cite_note-12)</sup>

## Contents

<span class="toctogglespan"></span>

- [<span class="tocnumber">1</span> <span class="toctext">History and name</span>](#History_and_name)
- [<span class="tocnumber">2</span> <span class="toctext">Design</span>](#Design)
  - [<span class="tocnumber">2.1</span> <span class="toctext">Syntax</span>](#Syntax)
  - [<span class="tocnumber">2.2</span> <span class="toctext">Basic components</span>](#Basic_components)
  - [<span class="tocnumber">2.3</span> <span class="toctext">Advanced components</span>](#Advanced_components)
  - [<span class="tocnumber">2.4</span> <span class="toctext">Example</span>](#Example)
- [<span class="tocnumber">3</span> <span class="toctext">Features</span>](#Features)
  - [<span class="tocnumber">3.1</span> <span class="toctext">Indented delimiting</span>](#Indented_delimiting)
  - [<span class="tocnumber">3.2</span> <span class="toctext">Non-hierarchical data models</span>](#Non-hierarchical_data_models)
  - [<span class="tocnumber">3.3</span> <span class="toctext">Practical considerations</span>](#Practical_considerations)
  - [<span class="tocnumber">3.4</span> <span class="toctext">Security</span>](#Security)
  - [<span class="tocnumber">3.5</span> <span class="toctext">Data processing and representation</span>](#Data_processing_and_representation)
- [<span class="tocnumber">4</span> <span class="toctext">Comparison with other serialization formats</span>](#Comparison_with_other_serialization_formats)
  - [<span class="tocnumber">4.1</span> <span class="toctext">Comparison with JSON</span>](#Comparison_with_JSON)
  - [<span class="tocnumber">4.2</span> <span class="toctext">Comparison with TOML</span>](#Comparison_with_TOML)
  - [<span class="tocnumber">4.3</span> <span class="toctext">Comparison with XML</span>](#Comparison_with_XML)
- [<span class="tocnumber">5</span> <span class="toctext">Software (emitters and parsers)</span>](<#Software_(emitters_and_parsers)>)
- [<span class="tocnumber">6</span> <span class="toctext">Criticism</span>](#Criticism)
- [<span class="tocnumber">7</span> <span class="toctext">See also</span>](#See_also)
- [<span class="tocnumber">8</span> <span class="toctext">References</span>](#References)
- [<span class="tocnumber">9</span> <span class="toctext">External links</span>](#External_links)

## <span id="History_and_name" class="mw-headline">History and name</span><span class="mw-editsection"><span class="mw-editsection-bracket">\[</span>[edit](https://en.wikipedia.org/w/index.php?title=YAML&action=edit&section=1 "Edit section: History and name")<span class="mw-editsection-bracket">\]</span></span>

YAML (<span class="rt-commentedText nowrap"><span class="IPA nopopups noexcerpt">[/<span style="border-bottom: 1px dotted"><span title="/ˈ/: primary stress follows">ˈ</span><span title="/j/: 'y' in 'yes'">j</span><span title="/æ/: 'a' in 'bad'">æ</span><span title="'m' in 'my'">m</span><span title="/əl/: 'le' in 'bottle'">əl</span></span>/](https://en.wikipedia.org/wiki/Help:IPA/English "Help:IPA/English")</span></span>, rhymes with _camel_<sup>[\[2\]](#cite_note-YAML_Version_1.2-2)</sup>) was first proposed by Clark Evans in 2001,<sup>[\[13\]](#cite_note-13)</sup> who designed it together with Ingy döt Net<sup>[\[14\]](#cite_note-yaml_org_about-14)</sup> and Oren Ben-Kiki.<sup>[\[14\]](#cite_note-yaml_org_about-14)</sup> Originally YAML was said to mean _Yet Another Markup Language_,<sup>[\[15\]](#cite_note-YAML_spec_2001_08_01-15)</sup> because it was released in an era that saw a proliferation of markup languages for presentation and connectivity (HTML, XML, SGML, etc). Its initial name was intended as a [tongue-in-cheek](https://en.wikipedia.org/wiki/Tongue-in-cheek "Tongue-in-cheek") reference <sup>[\[16\]](#cite_note-YAML_name_orig_2011_08_06-16)</sup> to the technology landscape, referencing its purpose as a [markup language](https://en.wikipedia.org/wiki/Markup_language "Markup language") with the [yet another](https://en.wikipedia.org/wiki/Yet_another "Yet another") construct, but it was then repurposed as _YAML Ain't Markup Language_, a [recursive acronym](https://en.wikipedia.org/wiki/Recursive_acronym "Recursive acronym"), to distinguish its purpose as data-oriented, rather than document markup.

## <span id="Design" class="mw-headline">Design</span><span class="mw-editsection"><span class="mw-editsection-bracket">\[</span>[edit](https://en.wikipedia.org/w/index.php?title=YAML&action=edit&section=2 "Edit section: Design")<span class="mw-editsection-bracket">\]</span></span>

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><div style="width: 52px"><img src="http://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Edit-clear.svg/40px-Edit-clear.svg.png" srcset="
                          //upload.wikimedia.org/wikipedia/en/thumb/f/f2/Edit-clear.svg/60px-Edit-clear.svg.png 1.5x,
                          //upload.wikimedia.org/wikipedia/en/thumb/f/f2/Edit-clear.svg/80px-Edit-clear.svg.png 2x
                        " width="40" height="40" /></div></td><td><div class="mbox-text-span">This section <strong>is written like <a href="https://en.wikipedia.org/wiki/Wikipedia:What_Wikipedia_is_not#GUIDE" title="Wikipedia:What Wikipedia is not">a manual or guidebook</a>.</strong><span class="hide-when-compact"> Please help <a href="https://en.wikipedia.org/w/index.php?title=YAML&amp;action=edit" class="external text">rewrite this section</a> from a descriptive, <a href="https://en.wikipedia.org/wiki/Wikipedia:Neutral_point_of_view" title="Wikipedia:Neutral point of view">neutral point of view</a>, and remove advice or instruction.</span> <span class="date-container"><em>(<span class="date">August 2016</span>)</em></span><span class="hide-when-compact"> <em>(<a href="https://en.wikipedia.org/wiki/Help:Maintenance_template_removal" title="Help:Maintenance template removal">Learn how and when to remove this template message</a>)</em></span></div></td></tr></tbody></table>

### <span id="Syntax" class="mw-headline">Syntax</span><span class="mw-editsection"><span class="mw-editsection-bracket">\[</span>[edit](https://en.wikipedia.org/w/index.php?title=YAML&action=edit&section=3 "Edit section: Syntax")<span class="mw-editsection-bracket">\]</span></span>

A cheat sheet and full specification are available at the official site.<sup>[\[17\]](#cite_note-17)</sup> The following is a synopsis of the basic elements.

YAML accepts the entire Unicode character set, except for some [control characters](https://en.wikipedia.org/wiki/Control_character "Control character"), and may be encoded in any one of [UTF-8](https://en.wikipedia.org/wiki/UTF-8 "UTF-8"), [UTF-16](https://en.wikipedia.org/wiki/UTF-16 "UTF-16") or [UTF-32](https://en.wikipedia.org/wiki/UTF-32 "UTF-32"). (Though UTF-32 is not mandatory, it is required for a parser to have [JSON](https://en.wikipedia.org/wiki/JSON "JSON") compatibility.)<sup>[\[18\]](#cite_note-18)</sup>

- <a href="https://en.wikipedia.org/wiki/Whitespace_(computer_science)" class="mw-redirect" title="Whitespace (computer science)">Whitespace</a> <a href="https://en.wikipedia.org/wiki/Indent_style" class="mw-redirect" title="Indent style">indentation</a> is used for denoting structure; however, <a href="https://en.wikipedia.org/wiki/Tab_character" class="mw-redirect" title="Tab character">tab characters</a> are not allowed as part of that indentation.
- Comments begin with the [number sign](https://en.wikipedia.org/wiki/Number_sign "Number sign") (`#`), can start anywhere on a line and continue until the end of the line. Comments must be separated from other tokens by whitespace characters.<sup>[\[19\]](#cite_note-19)</sup> If \# characters appear inside of a string, then they are number sign (`#`) literals.
- List members are denoted by a leading [hyphen](https://en.wikipedia.org/wiki/Hyphen-minus "Hyphen-minus") (`-`) with one member per line.
  - A list can also be specified by enclosing text in <a href="https://en.wikipedia.org/wiki/Square_brackets" class="mw-redirect" title="Square brackets">square brackets</a> (`[...]`) with each entry separated by a <a href="https://en.wikipedia.org/wiki/Comma_(punctuation)" class="mw-redirect" title="Comma (punctuation)">comma</a>.
- An [associative array](https://en.wikipedia.org/wiki/Associative_array "Associative array") entry is represented using [colon](<https://en.wikipedia.org/wiki/Colon_(punctuation)> "Colon (punctuation)") [space](<https://en.wikipedia.org/wiki/Space_(punctuation)> "Space (punctuation)") in the form _key: value_ with one entry per line. YAML requires the colon be followed by a space so that scalar values such as `http://www.wikipedia.org` can generally be represented without needing to be enclosed in quotes.
  - A [question mark](https://en.wikipedia.org/wiki/Question_mark "Question mark") can be used in front of a key, in the form "?key: value" to allow the key to contain leading dashes, square brackets, etc., without quotes.
  - An associative array can also be specified by text enclosed in <a href="https://en.wikipedia.org/wiki/Curly_braces" class="mw-redirect" title="Curly braces">curly braces</a> (`{...}`), with keys separated from values by colon and the entries separated by commas (spaces are not required to retain compatibility with JSON).
- [Strings](<https://en.wikipedia.org/wiki/String_(computer_science)> "String (computer science)") (one type of <a href="https://en.wikipedia.org/wiki/Scalar_(computing)" class="mw-redirect" title="Scalar (computing)">scalar</a> in YAML) are ordinarily unquoted, but may be enclosed in <a href="https://en.wikipedia.org/wiki/Double_quote" class="mw-redirect" title="Double quote">double-quotes</a> (`"`), or <a href="https://en.wikipedia.org/wiki/Single_quote" class="mw-redirect" title="Single quote">single-quotes</a> (`'`).
  - Within double-quotes, special characters may be represented with [C-style](<https://en.wikipedia.org/wiki/C_(programming_language)> "C (programming language)") escape sequences starting with a [backslash](https://en.wikipedia.org/wiki/Backslash "Backslash") (`\`). According to the documentation the only octal escape supported is `\0`.
  - Within single quotes the only supported escape sequence is a doubled single quote (`''`) denoting the single quote itself as in `'don''t'`.
- Block scalars are delimited with <a href="https://en.wikipedia.org/wiki/Indent_style" class="mw-redirect" title="Indent style">indentation</a> with optional modifiers to preserve (`|`) or fold (`>`) newlines.
- Multiple documents within a single stream are separated by three <a href="https://en.wikipedia.org/wiki/Hyphens" class="mw-redirect" title="Hyphens">hyphens</a> (`---`).
  - Three [periods](https://en.wikipedia.org/wiki/Full_stop "Full stop") (`...`) optionally end a document within a stream.
- Repeated nodes are initially denoted by an [ampersand](https://en.wikipedia.org/wiki/Ampersand "Ampersand") (`&`) and thereafter referenced with an [asterisk](https://en.wikipedia.org/wiki/Asterisk "Asterisk") (`*`).
- Nodes may be labeled with a type or tag using a double [exclamation mark](https://en.wikipedia.org/wiki/Exclamation_mark "Exclamation mark") (`!!`) followed by a string, which can be expanded into a URI.
- YAML documents in a stream may be preceded by 'directives' composed of a [percent sign](https://en.wikipedia.org/wiki/Percent_sign "Percent sign") (`%`) followed by a name and space-delimited parameters. Two directives are defined in YAML 1.1:
  - The %YAML directive is used for identifying the version of YAML in a given document.
  - The %TAG directive is used as a shortcut for URI prefixes. These shortcuts may then be used in node type tags.

Two additional [sigil](<https://en.wikipedia.org/wiki/Sigil_(computer_programming)> "Sigil (computer programming)") characters are reserved in YAML for possible future specification: the [at sign](https://en.wikipedia.org/wiki/At_sign "At sign") (`@`) and <a href="https://en.wikipedia.org/wiki/Backtick" class="mw-redirect" title="Backtick">backtick</a> (`` ` ``).

### <span id="Basic_components" class="mw-headline">Basic components</span><span class="mw-editsection"><span class="mw-editsection-bracket">\[</span>[edit](https://en.wikipedia.org/w/index.php?title=YAML&action=edit&section=4 "Edit section: Basic components")<span class="mw-editsection-bracket">\]</span></span>

YAML offers an "in-line" style for denoting associative arrays and lists. Here is a sample of the components.

Conventional block format uses a hyphen+space to begin a new item in list.

    --- # Favorite movies
    - Casablanca
    - North by Northwest
    - The Man Who Wasn't There

Optional inline format is delimited by comma+space and enclosed in brackets (similar to <a href="https://en.wikipedia.org/wiki/JavaScript_Object_Notation" class="mw-redirect" title="JavaScript Object Notation">JSON</a>).<sup>[\[20\]](#cite_note-20)</sup>

    --- # Shopping list
    [milk, pumpkin pie, eggs, juice]

Keys are separated from values by a colon+space. Indented blocks, common in YAML data files, use indentation and new lines to separate the key/value pairs. Inline Blocks, common in YAML data streams, use comma+space to separate the key/value pairs between braces.

    --- # Indented Block
      name: John Smith
      age: 33
    --- # Inline Block
    {name: John Smith, age: 33}

Strings do not require quotation marks. There are two ways to write multi-line strings, one preserving newlines (using the `|` character) and one that folds the newlines (using the `>` character), both followed by a newline character.

    data: |
       There once was a tall man from Ealing
       Who got on a bus to Darjeeling
           It said on the door
           "Please don't sit on the floor"
       So he carefully sat on the ceiling

By default, the leading indentation (of the first line) and trailing whitespace are stripped, though other behavior can be explicitly specified.

    data: >
       Wrapped text
       will be folded
       into a single
       paragraph

       Blank lines denote
       paragraph breaks

Folded text converts newlines to spaces and removes leading whitespace.

    --- # The Smiths
    - {name: John Smith, age: 33}
    - name: Mary Smith
      age: 27
    - [name, age]: [Rae Smith, 4]   # sequences as keys are supported
    --- # People, by gender
    men: [John Smith, Bill Jones]
    women:
      - Mary Smith
      - Susan Williams

Objects and lists are important components in yaml and can be mixed. The first example is a list of key-value objects, all people from the Smith family. The second lists them by gender; it is a key-value object containing two lists.

### <span id="Advanced_components" class="mw-headline">Advanced components</span><span class="mw-editsection"><span class="mw-editsection-bracket">\[</span>[edit](https://en.wikipedia.org/w/index.php?title=YAML&action=edit&section=5 "Edit section: Advanced components")<span class="mw-editsection-bracket">\]</span></span>

Two features that distinguish YAML from the capabilities of other data-serialization languages are structures<sup>[\[21\]](#cite_note-yaml_structures-21)</sup> and data typing.

YAML structures enable storage of multiple documents within a single file, usage of references for repeated nodes, and usage of arbitrary nodes as keys.<sup>[\[21\]](#cite_note-yaml_structures-21)</sup>

For clarity, compactness, and avoiding data entry errors, YAML provides node anchors (using `&`) and references (using `*`). References to the anchor work for all data types (see the ship-to reference in the example below).

Below is an example of a queue in an instrument sequencer in which two steps are reused repeatedly without being fully described each time.

    --- # Sequencer protocols for Laser eye surgery
    - step:  &id001                  # defines anchor label &id001
        instrument:      Lasik 2000
        pulseEnergy:     5.4
        pulseDuration:   12
        repetition:      1000
        spotSize:        1mm

    - step: &id002
        instrument:      Lasik 2000
        pulseEnergy:     5.0
        pulseDuration:   10
        repetition:      500
        spotSize:        2mm
    - step: *id001                   # refers to the first step (with anchor &id001)
    - step: *id002                   # refers to the second step
    - step: *id002

Explicit data typing is seldom seen in the majority of YAML documents since YAML autodetects simple types. Data types can be divided into three categories: core, defined, and user-defined. Core are ones expected to exist in any parser (e.g. floats, ints, strings, lists, maps, ...). Many more advanced data types, such as binary data, are defined in the YAML specification but not supported in all implementations. Finally YAML defines a way to extend the data type definitions locally to accommodate user-defined classes, structures or primitives (e.g. quad-precision floats).

YAML autodetects the datatype of the entity, but sometimes one wants to cast the datatype explicitly. The most common situation is where a single-word string that looks like a number, boolean or tag requires disambiguation by surrounding it with quotes or using an explicit datatype tag.

    ---
    a: 123                     # an integer
    b: "123"                   # a string, disambiguated by quotes
    c: 123.0                   # a float
    d: !!float 123             # also a float via explicit data type prefixed by (!!)
    e: !!str 123               # a string, disambiguated by explicit type
    f: !!str Yes               # a string via explicit type
    g: Yes                     # a boolean True (yaml1.1), string "Yes" (yaml1.2)
    h: Yes we have No bananas  # a string, "Yes" and "No" disambiguated by context.

Not every implementation of YAML has every specification-defined data type. These built-in types use a double-exclamation sigil prefix (`!!`). Particularly interesting ones not shown here are sets, ordered maps, timestamps, and hexadecimal. Here's an example of [base64](https://en.wikipedia.org/wiki/Base64 "Base64")-encoded binary data.

    ---
    picture: !!binary |
      R0lGODdhDQAIAIAAAAAAANn
      Z2SwAAAAADQAIAAACF4SDGQ
      ar3xxbJ9p0qa7R0YxwzaFME
      1IAADs=

Many implementations of YAML can support user-defined data types for object serialization. Local data types are not universal data types but are defined in the application using the YAML parser library. Local data types use a single exclamation mark (`!`).

    ---
    myObject: !myClass { name: Joe, age: 15 }

### <span id="Example" class="mw-headline">Example</span><span class="mw-editsection"><span class="mw-editsection-bracket">\[</span>[edit](https://en.wikipedia.org/w/index.php?title=YAML&action=edit&section=6 "Edit section: Example")<span class="mw-editsection-bracket">\]</span></span>

Data-structure hierarchy is maintained by outline indentation.

    ---
    receipt:     Oz-Ware Purchase Invoice
    date:        2012-08-06
    customer:
        first_name:   Dorothy
        family_name:  Gale

    items:
        - part_no:   A4786
          descrip:   Water Bucket (Filled)
          price:     1.47
          quantity:  4

        - part_no:   E1628
          descrip:   High Heeled "Ruby" Slippers
          size:      8
          price:     133.7
          quantity:  1

    bill-to:  &id001
        street: |
                123 Tornado Alley
                Suite 16
        city:   East Centerville
        state:  KS

    ship-to:  *id001

    specialDelivery:  >
        Follow the Yellow Brick
        Road to the Emerald City.
        Pay no attention to the
        man behind the curtain.
    ...

Notice that strings do not require enclosure in quotation marks. The specific number of spaces in the indentation is unimportant as long as parallel elements have the same left justification and the hierarchically nested elements are indented further. This sample document defines an associative array with 7 top level keys: one of the keys, "items", contains a 2-element list, each element of which is itself an associative array with differing keys. Relational data and redundancy removal are displayed: the "ship-to" associative array content is copied from the "bill-to" associative array's content as indicated by the anchor (`&`) and reference (`*`) labels. Optional blank lines can be added for readability. Multiple documents can exist in a single file/stream and are separated by `---`. An optional `...` can be used at the end of a file (useful for signaling an end in streamed communications without closing the pipe).

## <span id="Features" class="mw-headline">Features</span><span class="mw-editsection"><span class="mw-editsection-bracket">\[</span>[edit](https://en.wikipedia.org/w/index.php?title=YAML&action=edit&section=7 "Edit section: Features")<span class="mw-editsection-bracket">\]</span></span>

### <span id="Indented_delimiting" class="mw-headline">Indented delimiting</span><span class="mw-editsection"><span class="mw-editsection-bracket">\[</span>[edit](https://en.wikipedia.org/w/index.php?title=YAML&action=edit&section=8 "Edit section: Indented delimiting")<span class="mw-editsection-bracket">\]</span></span>

Because YAML primarily relies on outline indentation for structure, it is especially resistant to <a href="https://en.wikipedia.org/wiki/Delimiter_collision" class="mw-redirect" title="Delimiter collision">delimiter collision</a>. YAML's insensitivity to quotation marks and braces in scalar values means one may embed XML, JSON or even YAML documents inside a YAML document by simply indenting it in a block literal (using `|` or `>`):

    ---
    example: >
            HTML goes into YAML without modification
    message: |

            <blockquote style="font: italic 1em serif">
            <p>"Three is always greater than two,
               even for large values of two"</p>
            <p>--Author Unknown</p>
            </blockquote>
    date: 2007-06-01

YAML may be placed in JSON by quoting and escaping all interior quotation marks. YAML may be placed in XML by escaping reserved characters (`<`, `>`, `&`, `'`, `"`) and converting whitespace, or by placing it in a [CDATA](https://en.wikipedia.org/wiki/CDATA "CDATA") section.

### <span id="Non-hierarchical_data_models" class="mw-headline">Non-hierarchical data models</span><span class="mw-editsection"><span class="mw-editsection-bracket">\[</span>[edit](https://en.wikipedia.org/w/index.php?title=YAML&action=edit&section=9 "Edit section: Non-hierarchical data models")<span class="mw-editsection-bracket">\]</span></span>

Unlike JSON, which can only represent data in a hierarchical model with each child node having a single parent, YAML also offers a simple relational scheme that allows repeats of identical data to be referenced from two or more points in the tree rather than entered redundantly at those points. This is similar to the facility IDREF built into XML.<sup>[\[22\]](#cite_note-22)</sup> The YAML parser then expands these references into the fully populated data structures they imply when read in, so whatever program is using the parser does not have to be aware of a relational encoding model, unlike XML processors, which do not expand references. This expansion can enhance readability while reducing data entry errors in configuration files or processing protocols where many parameters remain the same in a sequential series of records while only a few vary. An example being that "ship-to" and "bill-to" records in an invoice are nearly always the same data.

### <span id="Practical_considerations" class="mw-headline">Practical considerations</span><span class="mw-editsection"><span class="mw-editsection-bracket">\[</span>[edit](https://en.wikipedia.org/w/index.php?title=YAML&action=edit&section=10 "Edit section: Practical considerations")<span class="mw-editsection-bracket">\]</span></span>

YAML is line-oriented and thus it is often simple to convert the unstructured output of existing programs into YAML format while having them retain much of the look of the original document. Because there are no closing tags, braces, or quotation marks to balance, it is generally easy to generate well-formed YAML directly from distributed print statements within unsophisticated programs. Likewise, the whitespace delimiters facilitate quick-and-dirty filtering of YAML files using the line-oriented commands in grep, AWK, Perl, Ruby, and Python.

In particular, unlike markup languages, chunks of consecutive YAML lines tend to be well-formed YAML documents themselves. This makes it very easy to write parsers that do not have to process a document in its entirety (e.g. balancing opening and closing tags and navigating quoted and escaped characters) before they begin extracting specific records within. This property is particularly expedient when iterating in a single, stateless pass, over records in a file whose entire data structure is too large to hold in memory, or for which reconstituting the entire structure to extract one item would be prohibitively expensive.

Counterintuitively, although its indented delimiting might seem to complicate deeply nested hierarchies, YAML handles indents as small as a single space, and this may achieve better compression than markup languages. Additionally, extremely deep indentation can be avoided entirely by either: 1) reverting to "inline style" (i.e. JSON-like format) without the indentation; or 2) using relational anchors to unwind the hierarchy to a flat form that the YAML parser will transparently reconstitute into the full data structure.<sup>\[_[<span title="This claim needs references to reliable sources. (January 2012)">citation\ needed</span>](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed")_\]</sup>

### <span id="Security" class="mw-headline">Security</span><span class="mw-editsection"><span class="mw-editsection-bracket">\[</span>[edit](https://en.wikipedia.org/w/index.php?title=YAML&action=edit&section=11 "Edit section: Security")<span class="mw-editsection-bracket">\]</span></span>

YAML is purely a data-representation language and thus has no executable commands.<sup>[\[23\]](#cite_note-23)</sup> While [validation](https://en.wikipedia.org/wiki/Application_security "Application security") and [safe parsing](https://en.wikipedia.org/wiki/JavaScript#Misplaced_trust_in_the_client "JavaScript") is inherently possible in any data language, implementation is such a notorious pitfall that YAML's lack of an associated command language may be a relative security benefit.

However, YAML allows language-specific tags so that arbitrary local objects can be created by a parser that supports those tags. Any YAML parser that allows sophisticated object instantiation to be executed opens the potential for an injection attack. Perl parsers that allow loading of objects of arbitrary classes create so-called "blessed" values. Using these values may trigger unexpected behavior, e.g. if the class uses overloaded operators. This may lead to execution of arbitrary Perl code.<sup>\[_[<span title="This claim needs references to reliable sources. (January 2012)">citation\ needed</span>](https://en.wikipedia.org/wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed")_\]</sup>

The situation is similar for Python or Ruby parsers. According to the PyYAML documentation:<sup>[\[24\]](#cite_note-24)</sup>

> Note that the ability to construct an arbitrary Python object may be dangerous if you receive a YAML document from an untrusted source such as the Internet. The function `yaml.safe_load` limits this ability to simple Python objects like integers or lists. \[...\]
>
> PyYAML allows you to construct a Python object of any type. Even instances of Python classes can be constructed using the `!!python/object` tag.

### <span id="Data_processing_and_representation" class="mw-headline">Data processing and representation</span><span class="mw-editsection"><span class="mw-editsection-bracket">\[</span>[edit](https://en.wikipedia.org/w/index.php?title=YAML&action=edit&section=12 "Edit section: Data processing and representation")<span class="mw-editsection-bracket">\]</span></span>

The YAML specification identifies an _instance document_ as a "Presentation" or "character stream".<sup>[\[25\]](#cite_note-25)</sup> The primary logical structures in a YAML instance document are scalars, sequences, and mappings.<sup>[\[26\]](#cite_note-TypesRepos-26)</sup> The YAML specification also indicates some basic constraints that apply to these primary logical structures. For example, according to the specification, mapping keys do not have an order. In every case where node order is significant, a sequence must be used.<sup>[\[27\]](#cite_note-27)</sup>

Moreover, in defining conformance for YAML processors, the YAML specification defines two primary operations: _dump_ and _load_. All YAML-compliant processors must provide _at least_ one of these operations, and may optionally provide both.<sup>[\[28\]](#cite_note-28)</sup> Finally, the YAML specification defines an _information model_ or "representation graph", which must be created during processing for both _dump_ and _load_ operations, although this representation need not be made available to the user through an API.<sup>[\[29\]](#cite_note-29)</sup>

## <span id="Comparison_with_other_serialization_formats" class="mw-headline">Comparison with other serialization formats</span><span class="mw-editsection"><span class="mw-editsection-bracket">\[</span>[edit](https://en.wikipedia.org/w/index.php?title=YAML&action=edit&section=13 "Edit section: Comparison with other serialization formats")<span class="mw-editsection-bracket">\]</span></span>

### <span id="Comparison_with_JSON" class="mw-headline">Comparison with JSON</span><span class="mw-editsection"><span class="mw-editsection-bracket">\[</span>[edit](https://en.wikipedia.org/w/index.php?title=YAML&action=edit&section=14 "Edit section: Comparison with JSON")<span class="mw-editsection-bracket">\]</span></span>

<a href="https://en.wikipedia.org/wiki/JavaScript_Object_Notation" class="mw-redirect" title="JavaScript Object Notation">JSON</a> syntax is a basis of YAML version 1.2, which was promulgated with the express purpose of bringing YAML "into compliance with JSON as an official subset".<sup>[\[2\]](#cite_note-YAML_Version_1.2-2)</sup> Though prior versions of YAML were not strictly compatible,<sup>[\[30\]](#cite_note-30)</sup> the discrepancies were rarely noticeable, and most JSON documents can be parsed by some YAML parsers such as Syck.<sup>[\[31\]](#cite_note-31)</sup> This is because JSON's semantic structure is equivalent to the optional "inline-style" of writing YAML. While extended hierarchies can be written in inline-style like JSON, this is not a recommended YAML style except when it aids clarity.

YAML has many additional features lacking in JSON, including comments, extensible data types, relational anchors, strings without quotation marks, and mapping types preserving key order.

### <span id="Comparison_with_TOML" class="mw-headline">Comparison with TOML</span><span class="mw-editsection"><span class="mw-editsection-bracket">\[</span>[edit](https://en.wikipedia.org/w/index.php?title=YAML&action=edit&section=15 "Edit section: Comparison with TOML")<span class="mw-editsection-bracket">\]</span></span>

On the one hand, YAML is much more complex compared to [TOML](https://en.wikipedia.org/wiki/TOML "TOML") - the YAML specification was pointed out to have 23,449 words, while the TOML specification had only 3,339 words.<sup>[\[32\]](#cite_note-notgreat-32)</sup> On the other hand, YAML is less verbose, more [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself "Don't repeat yourself"), syntactically less noisy, and the hierarchy of a document is obvious from the indentation<sup>[\[33\]](#cite_note-what-is-wrong-with-toml-33)</sup>.

### <span id="Comparison_with_XML" class="mw-headline">Comparison with XML</span><span class="mw-editsection"><span class="mw-editsection-bracket">\[</span>[edit](https://en.wikipedia.org/w/index.php?title=YAML&action=edit&section=16 "Edit section: Comparison with XML")<span class="mw-editsection-bracket">\]</span></span>

YAML lacks the notion of tag attributes that are found in XML. Instead YAML has extensible type declarations (including class types for objects).

YAML itself does not have XML's language-defined document schema descriptors that allow, for example, a document to self-validate. However, there are several externally defined schema descriptor languages for YAML (e.g. [Doctrine](<https://en.wikipedia.org/wiki/Doctrine_(PHP)> "Doctrine (PHP)"), <a href="https://en.wikipedia.org/w/index.php?title=Kwalify&amp;action=edit&amp;redlink=1" class="new" title="Kwalify (page does not exist)">Kwalify</a> and Rx) that fulfill that role. Moreover, the semantics provided by YAML's language-defined type declarations in the YAML document itself frequently relaxes the need for a validator in simple, common situations. Additionally, <a href="https://en.wikipedia.org/w/index.php?title=YAXML&amp;action=edit&amp;redlink=1" class="new" title="YAXML (page does not exist)">YAXML</a>, which represents YAML data structures in XML, allows XML schema importers and output mechanisms like <a href="https://en.wikipedia.org/wiki/Extensible_Stylesheet_Language_Transformations" class="mw-redirect" title="Extensible Stylesheet Language Transformations">XSLT</a> to be applied to YAML.

[Comparison of data-serialization formats](https://en.wikipedia.org/wiki/Comparison_of_data-serialization_formats "Comparison of data-serialization formats") provides a more comprehensive comparison of YAML with other serialization formats.

## <span id="Software_.28emitters_and_parsers.29"></span><span id="Software_(emitters_and_parsers)" class="mw-headline">Software (emitters and parsers)</span><span class="mw-editsection"><span class="mw-editsection-bracket">\[</span>[edit](https://en.wikipedia.org/w/index.php?title=YAML&action=edit&section=17 "Edit section: Software (emitters and parsers)")<span class="mw-editsection-bracket">\]</span></span>

For fixed data structures, YAML files can simply be generated using _print_ commands that write both the data and the YAML specific decoration. To dump varying, or complex, hierarchical data, however, a dedicated YAML _emitter_ is preferable. Similarly, simple YAML files (e.g. key-value pairs) are readily parsed with regular expressions. For more complex, or varying, data structures, a formal YAML _parser_ is recommended.

YAML emitters and parsers exist for many popular languages. Most of them are written in the native language itself. Some are language bindings of the C library _libyaml_; they may run faster. There used to be another C library, called _Syck_, written and orphaned by [why the lucky stiff](https://en.wikipedia.org/wiki/Why_the_lucky_stiff "Why the lucky stiff"): it is unmaintained, there is no authoritative source bundle, and the web site has been hijacked. Hence the only recommendable C library is _libyaml_. It was originally developed by Kirill Simonov. In 2018, development was resumed by the new maintainers Ian Cordasco and <a href="https://en.wikipedia.org/w/index.php?title=Ingy_d%C3%B6t_Net&amp;action=edit&amp;redlink=1" class="new" title="Ingy döt Net (page does not exist)">Ingy döt Net</a>.<sup>[\[34\]](#cite_note-34)</sup>

C++ programmers have the choice between the C library _libyaml_ and the C++ library _libyaml-cpp_. Both have completely independent code bases and completely different <a href="https://en.wikipedia.org/wiki/Application_Programming_Interface" class="mw-redirect" title="Application Programming Interface">APIs</a>. The library _libyaml-cpp_ still has a major version number of 0, indicating that the API may change at any moment, as happened indeed after version 0.3. There is a grammar-focused implementation written in C\#, with an aim on extensions for the nested elements.<sup>[\[35\]](#cite_note-35)</sup>

Some implementations of YAML, such as Perl's YAML.pm, will load an entire file (stream) and parse it _en masse_. Other implementations like PyYaml are lazy and iterate over the next document only upon request. For very large files in which one plans to handle the documents independently, instantiating the entire file before processing may be prohibitive. Thus in YAML.pm, occasionally one must chunk a file into documents and parse those individually. YAML makes this easy, since this simply requires splitting on the document end marker, which is defined as three periods on a line by themselves. This marker is forbidden in content.<sup>[\[36\]](#cite_note-YAML_spec_document_markers-36)</sup>

## <span id="Criticism" class="mw-headline">Criticism</span><span class="mw-editsection"><span class="mw-editsection-bracket">\[</span>[edit](https://en.wikipedia.org/w/index.php?title=YAML&action=edit&section=18 "Edit section: Criticism")<span class="mw-editsection-bracket">\]</span></span>

YAML has been criticized for its <a href="https://en.wikipedia.org/wiki/Significant_whitespace" class="mw-redirect" title="Significant whitespace">significant whitespace</a>, confusing features, insecure defaults, and its complex and ambiguous specification:<sup>[\[32\]](#cite_note-notgreat-32)[\[37\]](#cite_note-37)[\[38\]](#cite_note-38)</sup>

- Configuration files can execute commands or load contents without the users realizing it.<sup>[\[32\]](#cite_note-notgreat-32)</sup>
- Editing large YAML files is difficult, as indentation errors can go unnoticed.<sup>[\[32\]](#cite_note-notgreat-32)</sup>
- Type autodetection is a source of errors. For example, unquoted `Yes` and `NO` are converted to booleans; software version numbers might be converted to floats.<sup>[\[32\]](#cite_note-notgreat-32)[\[39\]](#cite_note-Norway-39)</sup>
- Truncated files are often interpreted as valid YAML due to the absence of terminators.
- The complexity of the standard led to inconsistent implementations and making the language non-portable.<sup>[\[32\]](#cite_note-notgreat-32)[\[40\]](#cite_note-40)</sup>

The perceived flaws and complexity of YAML has led to the emergence of stricter alternatives such as <a href="https://github.com/crdoconnor/strictyaml" class="external text">StrictYAML</a> and <a href="https://en.wikipedia.org/w/index.php?title=NestedText&amp;action=edit&amp;redlink=1" class="new" title="NestedText (page does not exist)">NestedText</a>.<sup>[\[39\]](#cite_note-Norway-39)</sup>

## <span id="See_also" class="mw-headline">See also</span><span class="mw-editsection"><span class="mw-editsection-bracket">\[</span>[edit](https://en.wikipedia.org/w/index.php?title=YAML&action=edit&section=19 "Edit section: See also")<span class="mw-editsection-bracket">\]</span></span>

- [Comparison of data-serialization formats](https://en.wikipedia.org/wiki/Comparison_of_data-serialization_formats "Comparison of data-serialization formats")
- [Lightweight markup language](https://en.wikipedia.org/wiki/Lightweight_markup_language "Lightweight markup language")

## <span id="References" class="mw-headline">References</span><span class="mw-editsection"><span class="mw-editsection-bracket">\[</span>[edit](https://en.wikipedia.org/w/index.php?title=YAML&action=edit&section=20 "Edit section: References")<span class="mw-editsection-bracket">\]</span></span>

1.  <span id="cite_note-1.0-1"><span class="mw-cite-backlink">^ [<sup>**_a_**</sup>](#cite_ref-1.0_1-0) [<sup>**_b_**</sup>](#cite_ref-1.0_1-1) [<sup>**_c_**</sup>](#cite_ref-1.0_1-2) [<sup>**_d_**</sup>](#cite_ref-1.0_1-3)</span> <span class="reference-text"><a href="https://yaml.org/spec/history/2001-12-10.html" class="external text">"Yet Another Markup Language (YAML) 1.0 / Working Draft"</a>. 10 Dec 2001.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Yet+Another+Markup+Language+%28YAML%29+1.0+%2F+Working+Draft&amp;rft.date=2001-12-10&amp;rft_id=https%3A%2F%2Fyaml.org%2Fspec%2Fhistory%2F2001-12-10.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
2.  <span id="cite_note-YAML_Version_1.2-2"><span class="mw-cite-backlink">^ [<sup>**_a_**</sup>](#cite_ref-YAML_Version_1.2_2-0) [<sup>**_b_**</sup>](#cite_ref-YAML_Version_1.2_2-1) [<sup>**_c_**</sup>](#cite_ref-YAML_Version_1.2_2-2)</span> <span class="reference-text"><a href="https://yaml.org/spec/1.2/spec.html" class="external text">"YAML Ain't Markup Language (YAML) Version 1.2"</a>. _YAML.org_<span class="reference-accessdate">. Retrieved <span class="nowrap">2019-05-29</span></span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=YAML.org&amp;rft.atitle=YAML+Ain%27t+Markup+Language+%28YAML%29+Version+1.2&amp;rft_id=https%3A%2F%2Fyaml.org%2Fspec%2F1.2%2Fspec.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
3.  <span id="cite_note-3"><span class="mw-cite-backlink">**[^](#cite_ref-3)**</span> <span class="reference-text"><a href="https://docs.python.org/3/library/stdtypes.html" class="external text">"Built-in Types — Python 3.9.6 documentation"</a>. _docs.python.org_<span class="reference-accessdate">. Retrieved <span class="nowrap">2021-08-19</span></span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=docs.python.org&amp;rft.atitle=Built-in+Types+%E2%80%94+Python+3.9.6+documentation&amp;rft_id=https%3A%2F%2Fdocs.python.org%2F3%2Flibrary%2Fstdtypes.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
4.  <span id="cite_note-4"><span class="mw-cite-backlink">**[^](#cite_ref-4)**</span> <span class="reference-text"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects" class="external text">"Standard built-in objects - JavaScript | MDN"</a>. _developer.mozilla.org_<span class="reference-accessdate">. Retrieved <span class="nowrap">2021-08-19</span></span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=developer.mozilla.org&amp;rft.atitle=Standard+built-in+objects+-+JavaScript+%7C+MDN&amp;rft_id=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
5.  <span id="cite_note-5"><span class="mw-cite-backlink">**[^](#cite_ref-5)**</span> <span class="reference-text">corob-msft. <a href="https://docs.microsoft.com/en-us/cpp/cpp/fundamental-types-cpp" class="external text">"Built-in types (C++)"</a>. _docs.microsoft.com_<span class="reference-accessdate">. Retrieved <span class="nowrap">2021-08-19</span></span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=docs.microsoft.com&amp;rft.atitle=Built-in+types+%28C%2B%2B%29&amp;rft.au=corob-msft&amp;rft_id=https%3A%2F%2Fdocs.microsoft.com%2Fen-us%2Fcpp%2Fcpp%2Ffundamental-types-cpp&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
6.  <span id="cite_note-6"><span class="mw-cite-backlink">**[^](#cite_ref-6)**</span> <span class="reference-text"><a href="https://yaml.org/" class="external text">"The Official YAML Web Site"</a>. _yaml.org_.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=yaml.org&amp;rft.atitle=The+Official+YAML+Web+Site&amp;rft_id=https%3A%2F%2Fyaml.org%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
7.  <span id="cite_note-7"><span class="mw-cite-backlink">**[^](#cite_ref-7)**</span> <span class="reference-text"><a href="https://www.emacswiki.org/emacs/YamlMode" class="external text">"Yaml Mode"</a>. EmacsWiki. 2015-06-12<span class="reference-accessdate">. Retrieved <span class="nowrap">2016-12-05</span></span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Yaml+Mode&amp;rft.pub=EmacsWiki&amp;rft.date=2015-06-12&amp;rft_id=https%3A%2F%2Fwww.emacswiki.org%2Femacs%2FYamlMode&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
8.  <span id="cite_note-8"><span class="mw-cite-backlink">**[^](#cite_ref-8)**</span> <span class="reference-text">aukaost. <a href="https://packagecontrol.io/packages/Pretty%20YAML" class="external text">"Pretty YAML - Packages - Package Control"</a>. Packagecontrol.io<span class="reference-accessdate">. Retrieved <span class="nowrap">2016-12-05</span></span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Pretty+YAML+-+Packages+-+Package+Control&amp;rft.pub=Packagecontrol.io&amp;rft.au=aukaost&amp;rft_id=https%3A%2F%2Fpackagecontrol.io%2Fpackages%2FPretty%2520YAML&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
9.  <span id="cite_note-9"><span class="mw-cite-backlink">**[^](#cite_ref-9)**</span> <span class="reference-text"><a href="https://marketplace.eclipse.org/category/free-tagging/yaml" class="external text">"yaml | Eclipse Plugins, Bundles and Products - Eclipse Marketplace"</a>. Marketplace.eclipse.org<span class="reference-accessdate">. Retrieved <span class="nowrap">2016-12-05</span></span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=yaml+%26%23124%3B+Eclipse+Plugins%2C+Bundles+and+Products+-+Eclipse+Marketplace&amp;rft.pub=Marketplace.eclipse.org&amp;rft_id=https%3A%2F%2Fmarketplace.eclipse.org%2Fcategory%2Ffree-tagging%2Fyaml&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
10. <span id="cite_note-10"><span class="mw-cite-backlink">**[^](#cite_ref-10)**</span> <span class="reference-text">Ruth Kusterer. <a href="https://netbeans.org/features/ruby/index.html" class="external text">"NetBeans IDE - Ruby and Ruby on Rails Development"</a>. Netbeans.org<span class="reference-accessdate">. Retrieved <span class="nowrap">2016-12-05</span></span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=NetBeans+IDE+-+Ruby+and+Ruby+on+Rails+Development&amp;rft.pub=Netbeans.org&amp;rft.au=Ruth+Kusterer&amp;rft_id=https%3A%2F%2Fnetbeans.org%2Ffeatures%2Fruby%2Findex.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
11. <span id="cite_note-11"><span class="mw-cite-backlink">**[^](#cite_ref-11)**</span> <span class="reference-text"><a href="https://yaml.org/faq.html" class="external text">"YAML Ain't Markup Language"</a>. _yaml.org_.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=yaml.org&amp;rft.atitle=YAML+Ain%27t+Markup+Language&amp;rft_id=https%3A%2F%2Fyaml.org%2Ffaq.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
12. <span id="cite_note-12"><span class="mw-cite-backlink">**[^](#cite_ref-12)**</span> <span class="reference-text"><a href="https://web.archive.org/web/20060924190202/https://yaml.org/faq.html" class="external text">"YAML Ain't Markup Language"</a>. September 24, 2006. Archived from <a href="https://yaml.org/faq.html" class="external text">the original</a> on 2006-09-24.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=YAML+Ain%27t+Markup+Language&amp;rft.date=2006-09-24&amp;rft_id=https%3A%2F%2Fyaml.org%2Ffaq.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
13. <span id="cite_note-13"><span class="mw-cite-backlink">**[^](#cite_ref-13)**</span> <span class="reference-text">Evans, Clark (May 11, 2001). <a href="https://groups.yahoo.com/neo/groups/sml-dev/conversations/topics/4710" class="external text">"YAML Draft 0.1"</a>. Yahoo! Tech groups: sml-dev<span class="reference-accessdate">. Retrieved <span class="nowrap">2019-03-21</span></span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=YAML+Draft+0.1&amp;rft.pub=Yahoo%21+Tech+groups%3A+sml-dev&amp;rft.date=2001-05-11&amp;rft.aulast=Evans&amp;rft.aufirst=Clark&amp;rft_id=https%3A%2F%2Fgroups.yahoo.com%2Fneo%2Fgroups%2Fsml-dev%2Fconversations%2Ftopics%2F4710&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
14. <span id="cite_note-yaml_org_about-14"><span class="mw-cite-backlink">^ [<sup>**_a_**</sup>](#cite_ref-yaml_org_about_14-0) [<sup>**_b_**</sup>](#cite_ref-yaml_org_about_14-1)</span> <span class="reference-text"><a href="https://yaml.org/about.html" class="external text">"YAML Ain't Markup Language: About"</a>. _YAML.org_<span class="reference-accessdate">. Retrieved <span class="nowrap">2019-05-29</span></span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=YAML.org&amp;rft.atitle=YAML+Ain%27t+Markup+Language%3A+About&amp;rft_id=https%3A%2F%2Fyaml.org%2Fabout.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
15. <span id="cite_note-YAML_spec_2001_08_01-15"><span class="mw-cite-backlink">**[^](#cite_ref-YAML_spec_2001_08_01_15-0)**</span> <span class="reference-text"><a href="https://yaml.org/spec/history/2001-08-01.html" class="external text">"Yet Another Markup Language (YAML) 1.0"</a>. _YAML.org_<span class="reference-accessdate">. Retrieved <span class="nowrap">2019-05-29</span></span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=YAML.org&amp;rft.atitle=Yet+Another+Markup+Language+%28YAML%29+1.0&amp;rft_id=https%3A%2F%2Fyaml.org%2Fspec%2Fhistory%2F2001-08-01.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
16. <span id="cite_note-YAML_name_orig_2011_08_06-16"><span class="mw-cite-backlink">**[^](#cite_ref-YAML_name_orig_2011_08_06_16-0)**</span> <span class="reference-text"><a href="https://stackoverflow.com/questions/6968366/if-yaml-aint-markup-language-what-is-it" class="external text">"Yet Another Markup Language (YAML) 1.0"</a>. _stackoverflow.com_<span class="reference-accessdate">. Retrieved <span class="nowrap">2021-03-24</span></span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=stackoverflow.com&amp;rft.atitle=Yet+Another+Markup+Language+%28YAML%29+1.0&amp;rft_id=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F6968366%2Fif-yaml-aint-markup-language-what-is-it&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
17. <span id="cite_note-17"><span class="mw-cite-backlink">**[^](#cite_ref-17)**</span> <span class="reference-text"><a href="https://yaml.org/refcard.html" class="external text">"YAML<span class="nowrap"> </span>1.1 Reference Card"</a>. _YAML.org_<span class="reference-accessdate">. Retrieved <span class="nowrap">2019-05-29</span></span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=YAML.org&amp;rft.atitle=YAML%3Cspan+class%3D%22nowrap%22%3E+%3C%2Fspan%3E1.1+Reference+Card&amp;rft_id=https%3A%2F%2Fyaml.org%2Frefcard.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
18. <span id="cite_note-18"><span class="mw-cite-backlink">**[^](#cite_ref-18)**</span> <span class="reference-text"><a href="https://yaml.org/spec/1.2/spec.html#id2771184" class="external text">"YAML Ain't Markup Language (YAML) Version 1.2"</a>. _YAML.org_<span class="reference-accessdate">. Retrieved <span class="nowrap">2019-05-29</span></span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=YAML.org&amp;rft.atitle=YAML+Ain%27t+Markup+Language+%28YAML%29+Version+1.2&amp;rft_id=https%3A%2F%2Fyaml.org%2Fspec%2F1.2%2Fspec.html%23id2771184&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
19. <span id="cite_note-19"><span class="mw-cite-backlink">**[^](#cite_ref-19)**</span> <span class="reference-text"><a href="https://yaml.org/spec/1.2/spec.html#id2780069" class="external text">"YAML Ain't Markup Language (YAML) Version 1.2"</a>. _YAML.org_<span class="reference-accessdate">. Retrieved <span class="nowrap">2019-05-29</span></span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=YAML.org&amp;rft.atitle=YAML+Ain%27t+Markup+Language+%28YAML%29+Version+1.2&amp;rft_id=https%3A%2F%2Fyaml.org%2Fspec%2F1.2%2Fspec.html%23id2780069&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
20. <span id="cite_note-20"><span class="mw-cite-backlink">**[^](#cite_ref-20)**</span> <span class="reference-text"><a href="https://web.archive.org/web/20160917202144/http://www.jigocloud.com/en/blog/yaml-is-json" class="external text">"Cloud Based Management apps"</a>. _JigoCloud.com_. Archived from <a href="http://www.jigocloud.com/en/blog/yaml-is-json" class="external text">the original</a> on 2016-09-17<span class="reference-accessdate">. Retrieved <span class="nowrap">2016-09-28</span></span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=JigoCloud.com&amp;rft.atitle=Cloud+Based+Management+apps&amp;rft_id=http%3A%2F%2Fwww.jigocloud.com%2Fen%2Fblog%2Fyaml-is-json&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
21. <span id="cite_note-yaml_structures-21"><span class="mw-cite-backlink">^ [<sup>**_a_**</sup>](#cite_ref-yaml_structures_21-0) [<sup>**_b_**</sup>](#cite_ref-yaml_structures_21-1)</span> <span class="reference-text"><a href="https://yaml.org/spec/1.2/spec.html#id2760395" class="external text">"YAML 1.2 specification of Structures"</a>. _YAML.org_<span class="reference-accessdate">. Retrieved <span class="nowrap">2019-05-29</span></span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=YAML.org&amp;rft.atitle=YAML+1.2+specification+of+Structures&amp;rft_id=https%3A%2F%2Fyaml.org%2Fspec%2F1.2%2Fspec.html%23id2760395&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
22. <span id="cite_note-22"><span class="mw-cite-backlink">**[^](#cite_ref-22)**</span> <span class="reference-text"><a href="http://www.w3.org/TR/2000/REC-xml-20001006#idref" class="external text">"Extensible Markup Language (XML) 1.0 (Second Edition)"</a>. _W3.org_<span class="reference-accessdate">. Retrieved <span class="nowrap">27 May</span> 2015</span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=W3.org&amp;rft.atitle=Extensible+Markup+Language+%28XML%29+1.0+%28Second+Edition%29&amp;rft_id=http%3A%2F%2Fwww.w3.org%2FTR%2F2000%2FREC-xml-20001006%23idref&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
23. <span id="cite_note-23"><span class="mw-cite-backlink">**[^](#cite_ref-23)**</span> <span class="reference-text">A proposed "yield" tag would provide for simple arithmetic calculations.</span></span>
24. <span id="cite_note-24"><span class="mw-cite-backlink">**[^](#cite_ref-24)**</span> <span class="reference-text"><a href="http://pyyaml.org/wiki/PyYAMLDocumentation#LoadingYAML" class="external text">"PyYAML Documentation, Loading YAML"</a>. _Pyyaml.org_<span class="reference-accessdate">. Retrieved <span class="nowrap">2016-09-28</span></span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Pyyaml.org&amp;rft.atitle=PyYAML+Documentation%2C+Loading+YAML&amp;rft_id=http%3A%2F%2Fpyyaml.org%2Fwiki%2FPyYAMLDocumentation%23LoadingYAML&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
25. <span id="cite_note-25"><span class="mw-cite-backlink">**[^](#cite_ref-25)**</span> <span class="reference-text"><a href="https://yaml.org/spec/current.html#id2506012" class="external text">"Ain't Markup Language (YAML) Version 1.1"</a>. _YAML.org_<span class="reference-accessdate">. Retrieved <span class="nowrap">2019-05-29</span></span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=YAML.org&amp;rft.atitle=Ain%27t+Markup+Language+%28YAML%29+Version+1.1&amp;rft_id=https%3A%2F%2Fyaml.org%2Fspec%2Fcurrent.html%23id2506012&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
26. <span id="cite_note-TypesRepos-26"><span class="mw-cite-backlink">**[^](#cite_ref-TypesRepos_26-0)**</span> <span class="reference-text">Additional, optional-use, logical structures are enumerated in the YAML types repository.<a href="https://yaml.org/type/index.html" class="external text">"Language-Independent Types for YAML Version 1.1"</a>. _YAML.org_<span class="reference-accessdate">. Retrieved <span class="nowrap">2019-05-29</span></span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=YAML.org&amp;rft.atitle=Language-Independent+Types+for+YAML+Version+1.1&amp;rft_id=https%3A%2F%2Fyaml.org%2Ftype%2Findex.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span> The tagged types in the YAML types repository are optional and therefore not essential for conformant YAML processors. "The use of these tags is not mandatory."</span></span>
27. <span id="cite_note-27"><span class="mw-cite-backlink">**[^](#cite_ref-27)**</span> <span class="reference-text"><a href="https://yaml.org/spec/current.html#id2508372" class="external text">"YAML Ain't Markup Language (YAML) Version 1.1"</a>. _YAML.org_<span class="reference-accessdate">. Retrieved <span class="nowrap">2019-05-29</span></span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=YAML.org&amp;rft.atitle=YAML+Ain%27t+Markup+Language+%28YAML%29+Version+1.1&amp;rft_id=https%3A%2F%2Fyaml.org%2Fspec%2Fcurrent.html%23id2508372&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
28. <span id="cite_note-28"><span class="mw-cite-backlink">**[^](#cite_ref-28)**</span> <span class="reference-text"><a href="https://yaml.org/spec/current.html#id2504671" class="external text">"Ain't Markup Language (YAML) Version 1.1"</a>. _YAML.org_<span class="reference-accessdate">. Retrieved <span class="nowrap">2019-05-29</span></span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=YAML.org&amp;rft.atitle=Ain%27t+Markup+Language+%28YAML%29+Version+1.1&amp;rft_id=https%3A%2F%2Fyaml.org%2Fspec%2Fcurrent.html%23id2504671&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
29. <span id="cite_note-29"><span class="mw-cite-backlink">**[^](#cite_ref-29)**</span> <span class="reference-text"><a href="https://yaml.org/spec/current.html#id2504309" class="external text">"YAML Ain't Markup Language (YAML) Version 1.1"</a>. _YAML.org_<span class="reference-accessdate">. Retrieved <span class="nowrap">2019-05-29</span></span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=YAML.org&amp;rft.atitle=YAML+Ain%27t+Markup+Language+%28YAML%29+Version+1.1&amp;rft_id=https%3A%2F%2Fyaml.org%2Fspec%2Fcurrent.html%23id2504309&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
30. <span id="cite_note-30"><span class="mw-cite-backlink">**[^](#cite_ref-30)**</span> <span class="reference-text">The incompatibilities were as follows: JSON allows extended character sets like UTF-32 and had incompatible unicode character escape syntax relative to YAML; YAML required a space after separators like comma, equals, and colon while JSON does not. Some non-standard implementations of JSON extend the grammar to include Javascript's `/*...*/` comments. Handling such edge cases may require light pre-processing of the JSON before parsing as in-line YAML. See also <a href="https://metacpan.org/module/JSON::XS#JSON-and-YAML" class="external autonumber">[1]</a>.</span></span>
31. <span id="cite_note-31"><span class="mw-cite-backlink">**[^](#cite_ref-31)**</span> <span class="reference-text"><a href="http://www.jigocloud.com/en/blog/yaml-is-json" class="external text">Parsing JSON with SYCK</a>. Note that e.g. Symfony's YAML parser does not support line breaks inside \[\] or {} structures, which is a major incompatibility with JSON.</span></span>
32. <span id="cite_note-notgreat-32"><span class="mw-cite-backlink">^ [<sup>**_a_**</sup>](#cite_ref-notgreat_32-0) [<sup>**_b_**</sup>](#cite_ref-notgreat_32-1) [<sup>**_c_**</sup>](#cite_ref-notgreat_32-2) [<sup>**_d_**</sup>](#cite_ref-notgreat_32-3) [<sup>**_e_**</sup>](#cite_ref-notgreat_32-4) [<sup>**_f_**</sup>](#cite_ref-notgreat_32-5)</span> <span class="reference-text">Tournoij, Martin (4 Sep 2016). <a href="https://arp242.net/yaml-config.html" class="external text">"YAML: probably not so great after all"</a><span class="reference-accessdate">. Retrieved <span class="nowrap">16 May</span> 2019</span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=YAML%3A+probably+not+so+great+after+all&amp;rft.date=2016-09-04&amp;rft.aulast=Tournoij&amp;rft.aufirst=Martin&amp;rft_id=https%3A%2F%2Farp242.net%2Fyaml-config.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
33. <span id="cite_note-what-is-wrong-with-toml-33"><span class="mw-cite-backlink">**[^](#cite_ref-what-is-wrong-with-toml_33-0)**</span> <span class="reference-text"><a href="https://hitchdev.com/strictyaml/why-not/toml/" class="external text">What is wrong with TOML?</a></span></span>
34. <span id="cite_note-34"><span class="mw-cite-backlink">**[^](#cite_ref-34)**</span> <span class="reference-text">yaml-core@lists.sourceforge.net, mail of June 27, 2018.</span></span>
35. <span id="cite_note-35"><span class="mw-cite-backlink">**[^](#cite_ref-35)**</span> <span class="reference-text"><a href="https://github.com/DNemtsov/Lexepars.Grammars.Yaml" class="external text">"YAML Grammar for Lexepars"</a>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=YAML+Grammar+for+Lexepars&amp;rft_id=https%3A%2F%2Fgithub.com%2FDNemtsov%2FLexepars.Grammars.Yaml&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
36. <span id="cite_note-YAML_spec_document_markers-36"><span class="mw-cite-backlink">**[^](#cite_ref-YAML_spec_document_markers_36-0)**</span> <span class="reference-text"><a href="https://yaml.org/spec/1.2/spec.html#id2800401" class="external text">"YAML Ain't Markup Language (YAML) Version 1.2 # 9.1.2 Document Markers"</a>. _YAML.org_<span class="reference-accessdate">. Retrieved <span class="nowrap">2019-05-29</span></span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=YAML.org&amp;rft.atitle=YAML+Ain%27t+Markup+Language+%28YAML%29+Version+1.2+%23+9.1.2+Document+Markers&amp;rft_id=https%3A%2F%2Fyaml.org%2Fspec%2F1.2%2Fspec.html%23id2800401&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
37. <span id="cite_note-37"><span class="mw-cite-backlink">**[^](#cite_ref-37)**</span> <span class="reference-text"><a href="https://noyaml.com/" class="external text">"That's a lot of YAML"</a><span class="reference-accessdate">. Retrieved <span class="nowrap">16 May</span> 2019</span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=That%27s+a+lot+of+YAML&amp;rft_id=https%3A%2F%2Fnoyaml.com&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
38. <span id="cite_note-38"><span class="mw-cite-backlink">**[^](#cite_ref-38)**</span> <span class="reference-text"><a href="https://github.com/cblp/yaml-sucks" class="external text">"YAML sucks"</a><span class="reference-accessdate">. Retrieved <span class="nowrap">16 May</span> 2019</span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=YAML+sucks&amp;rft_id=https%3A%2F%2Fgithub.com%2Fcblp%2Fyaml-sucks&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
39. <span id="cite_note-Norway-39"><span class="mw-cite-backlink">^ [<sup>**_a_**</sup>](#cite_ref-Norway_39-0) [<sup>**_b_**</sup>](#cite_ref-Norway_39-1)</span> <span class="reference-text"><a href="https://hitchdev.com/strictyaml/why/implicit-typing-removed/" class="external text">"The Norway Problem - why StrictYAML refuses to do implicit typing and so should you"</a><span class="reference-accessdate">. Retrieved <span class="nowrap">3 June</span> 2020</span>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=The+Norway+Problem+-+why+StrictYAML+refuses+to+do+implicit+typing+and+so+should+you&amp;rft_id=https%3A%2F%2Fhitchdev.com%2Fstrictyaml%2Fwhy%2Fimplicit-typing-removed%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>
40. <span id="cite_note-40"><span class="mw-cite-backlink">**[^](#cite_ref-40)**</span> <span class="reference-text"><a href="https://matrix.yaml.io/valid.html" class="external text">"YAML Test Matrix"</a>.<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=YAML+Test+Matrix&amp;rft_id=https%3A%2F%2Fmatrix.yaml.io%2Fvalid.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AYAML"></span></span></span>

## <span id="External_links" class="mw-headline">External links</span><span class="mw-editsection"><span class="mw-editsection-bracket">\[</span>[edit](https://en.wikipedia.org/w/index.php?title=YAML&action=edit&section=21 "Edit section: External links")<span class="mw-editsection-bracket">\]</span></span>

- <span class="official-website"><span class="url"><a href="https://yaml.org/" class="external text">Official website</a></span></span>

- [v](https://en.wikipedia.org/wiki/Template:Document_markup_languages "Template:Document markup languages")
- [t](https://en.wikipedia.org/wiki/Template_talk:Document_markup_languages "Template talk:Document markup languages")
- <a href="https://en.wikipedia.org/w/index.php?title=Template:Document_markup_languages&amp;action=edit" class="external text">e</a>

[Document markup languages](https://en.wikipedia.org/wiki/Markup_language "Markup language")

<a href="https://en.wikipedia.org/wiki/Office_suite" class="mw-redirect" title="Office suite">Office suite</a>

- [Compound Document Format](https://en.wikipedia.org/wiki/Compound_Document_Format "Compound Document Format")
- [OOXML](https://en.wikipedia.org/wiki/Office_Open_XML "Office Open XML")
  - [SpreadsheetML](https://en.wikipedia.org/wiki/SpreadsheetML "SpreadsheetML")
  - <a href="https://en.wikipedia.org/wiki/PresentationML" class="mw-redirect" title="PresentationML">PresentationML</a>
  - <a href="https://en.wikipedia.org/wiki/WordprocessingML" class="mw-redirect" title="WordprocessingML">WordprocessingML</a>
- [ODF](https://en.wikipedia.org/wiki/OpenDocument "OpenDocument")
- [UOF](https://en.wikipedia.org/wiki/Uniform_Office_Format "Uniform Office Format")

Well-known

- [HTML](https://en.wikipedia.org/wiki/HTML "HTML")
- [XHTML](https://en.wikipedia.org/wiki/XHTML "XHTML")
- [MathML](https://en.wikipedia.org/wiki/MathML "MathML")
- [RTF](https://en.wikipedia.org/wiki/Rich_Text_Format "Rich Text Format")
- [TeX](https://en.wikipedia.org/wiki/TeX "TeX")
- [LaTeX](https://en.wikipedia.org/wiki/LaTeX "LaTeX")
- [Markdown](https://en.wikipedia.org/wiki/Markdown "Markdown")

Lesser-known

- [AmigaGuide](https://en.wikipedia.org/wiki/AmigaGuide "AmigaGuide")
- [AsciiDoc](https://en.wikipedia.org/wiki/AsciiDoc "AsciiDoc")
- [BBCode](https://en.wikipedia.org/wiki/BBCode "BBCode")
- [CML](https://en.wikipedia.org/wiki/Chemical_Markup_Language "Chemical Markup Language")
- <a href="https://en.wikipedia.org/wiki/C-HTML" class="mw-redirect" title="C-HTML">C-HTML</a>
- [ConTeXt](https://en.wikipedia.org/wiki/ConTeXt "ConTeXt")
- <a href="https://en.wikipedia.org/wiki/CrossMark" class="mw-redirect" title="CrossMark">CrossMark</a>
- [DITA](https://en.wikipedia.org/wiki/Darwin_Information_Typing_Architecture "Darwin Information Typing Architecture")
- [DocBook](https://en.wikipedia.org/wiki/DocBook "DocBook")
- [eLML](https://en.wikipedia.org/wiki/ELML "ELML")
- [EAD](https://en.wikipedia.org/wiki/Encoded_Archival_Description "Encoded Archival Description")
- [Enriched text](https://en.wikipedia.org/wiki/Enriched_text "Enriched text")
- [FHTML](https://en.wikipedia.org/wiki/FHTML "FHTML")
- [GML](https://en.wikipedia.org/wiki/List_of_document_markup_languages#GML_Disambiguation "List of document markup languages")
- [GuideML](https://en.wikipedia.org/wiki/GuideML "GuideML")
- [HDML](https://en.wikipedia.org/wiki/Handheld_Device_Markup_Language "Handheld Device Markup Language")
- [HyTime](https://en.wikipedia.org/wiki/HyTime "HyTime")
- [IPF](https://en.wikipedia.org/wiki/Information_Presentation_Facility "Information Presentation Facility")
- [LilyPond](https://en.wikipedia.org/wiki/LilyPond "LilyPond")
- [LinuxDoc](https://en.wikipedia.org/wiki/LinuxDoc "LinuxDoc")
- [Lout](<https://en.wikipedia.org/wiki/Lout_(software)> "Lout (software)")
- <a href="https://en.wikipedia.org/wiki/Maker_Interchange_Format" class="mw-redirect" title="Maker Interchange Format">MIF</a>
- [MAML](https://en.wikipedia.org/wiki/Microsoft_Assistance_Markup_Language "Microsoft Assistance Markup Language")
- [MEI](https://en.wikipedia.org/wiki/Music_Encoding_Initiative "Music Encoding Initiative")
- [MusicXML](https://en.wikipedia.org/wiki/MusicXML "MusicXML")
- [OMDoc](https://en.wikipedia.org/wiki/OMDoc "OMDoc")
- [OpenMath](https://en.wikipedia.org/wiki/OpenMath "OpenMath")
- [POD](https://en.wikipedia.org/wiki/Plain_Old_Documentation "Plain Old Documentation")
- [ReStructuredText](https://en.wikipedia.org/wiki/ReStructuredText "ReStructuredText")
- [RTML](https://en.wikipedia.org/wiki/RTML "RTML")
- <a href="https://en.wikipedia.org/wiki/Revisable-Form_Text" class="mw-redirect" title="Revisable-Form Text">RFT</a>
- [S1000D](https://en.wikipedia.org/wiki/S1000D "S1000D")
- [TEI](https://en.wikipedia.org/wiki/Text_Encoding_Initiative "Text Encoding Initiative")
- [Texinfo](https://en.wikipedia.org/wiki/Texinfo "Texinfo")
- [troff](https://en.wikipedia.org/wiki/Troff "Troff")
- [Wikitext](https://en.wikipedia.org/wiki/Wiki#Editing "Wiki")
- [WML](https://en.wikipedia.org/wiki/Wireless_Markup_Language "Wireless Markup Language")
- [WapTV](https://en.wikipedia.org/wiki/WapTV "WapTV")
- [XAML](https://en.wikipedia.org/wiki/Extensible_Application_Markup_Language "Extensible Application Markup Language")
- <span class="mw-selflink selflink">YAML</span>

[List of document markup languages](https://en.wikipedia.org/wiki/List_of_document_markup_languages "List of document markup languages")

- [v](https://en.wikipedia.org/wiki/Template:Data_exchange "Template:Data exchange")
- [t](https://en.wikipedia.org/wiki/Template_talk:Data_exchange "Template talk:Data exchange")
- <a href="https://en.wikipedia.org/w/index.php?title=Template:Data_exchange&amp;action=edit" class="external text">e</a>

[Data exchange](https://en.wikipedia.org/wiki/Data_exchange "Data exchange") formats

[Human readable](https://en.wikipedia.org/wiki/Human-readable_medium "Human-readable medium") formats

- <a href="https://en.wikipedia.org/wiki/Atom_(standard)" class="mw-redirect" title="Atom (standard)">Atom</a>
- [CSV](https://en.wikipedia.org/wiki/Comma-separated_values "Comma-separated values")
- [EDIFACT](https://en.wikipedia.org/wiki/EDIFACT "EDIFACT")
- [JSON](https://en.wikipedia.org/wiki/JSON "JSON")
- [Property list](https://en.wikipedia.org/wiki/Property_list "Property list")
- [RDF](https://en.wikipedia.org/wiki/Resource_Description_Framework "Resource Description Framework")
- [Rebol](https://en.wikipedia.org/wiki/Rebol "Rebol")
- [XML](https://en.wikipedia.org/wiki/XML "XML")
- <span class="mw-selflink selflink">YAML</span>

[Binary](https://en.wikipedia.org/wiki/Binary_file "Binary file") formats

- [AMF](https://en.wikipedia.org/wiki/Action_Message_Format "Action Message Format")
- <a href="https://en.wikipedia.org/wiki/Abstract_Syntax_Notation_One" class="mw-redirect" title="Abstract Syntax Notation One">ASN.1</a>
  - [SMI](https://en.wikipedia.org/wiki/Structure_of_Management_Information "Structure of Management Information")
- [Avro](https://en.wikipedia.org/wiki/Apache_Avro "Apache Avro")
- [Base64](https://en.wikipedia.org/wiki/Base64 "Base64")
- [BSON](https://en.wikipedia.org/wiki/BSON "BSON")
- [CBOR](https://en.wikipedia.org/wiki/CBOR "CBOR")
- [FlatBuffers](https://en.wikipedia.org/wiki/FlatBuffers "FlatBuffers")
- [MessagePack](https://en.wikipedia.org/wiki/MessagePack "MessagePack")
- [Property list](https://en.wikipedia.org/wiki/Property_list "Property list")
- [Protocol Buffers](https://en.wikipedia.org/wiki/Protocol_Buffers "Protocol Buffers")
- [Thrift](https://en.wikipedia.org/wiki/Apache_Thrift "Apache Thrift")
- [UAVCAN DSDL](https://en.wikipedia.org/wiki/UAVCAN "UAVCAN")
- [XDR](https://en.wikipedia.org/wiki/External_Data_Representation "External Data Representation")
- [uuencode](https://en.wikipedia.org/wiki/Uuencoding "Uuencoding")
- [yEnc](https://en.wikipedia.org/wiki/YEnc "YEnc")

<img src="http://en.wikipedia.org/wiki/Special:CentralAutoLogin/start?type=1x1" width="1" height="1" />

Retrieved from "<https://en.wikipedia.org/w/index.php?title=YAML&oldid=1053086763>"

[Categories](https://en.wikipedia.org/wiki/Help:Category "Help:Category"):

- [Computer-related introductions in 2001](https://en.wikipedia.org/wiki/Category:Computer-related_introductions_in_2001 "Category:Computer-related introductions in 2001")
- [Configuration files](https://en.wikipedia.org/wiki/Category:Configuration_files "Category:Configuration files")
- [Data serialization formats](https://en.wikipedia.org/wiki/Category:Data_serialization_formats "Category:Data serialization formats")
- [Lightweight markup languages](https://en.wikipedia.org/wiki/Category:Lightweight_markup_languages "Category:Lightweight markup languages")
- [Markup languages](https://en.wikipedia.org/wiki/Category:Markup_languages "Category:Markup languages")

Hidden categories:

- [Articles with short description](https://en.wikipedia.org/wiki/Category:Articles_with_short_description "Category:Articles with short description")
- [Short description matches Wikidata](https://en.wikipedia.org/wiki/Category:Short_description_matches_Wikidata "Category:Short description matches Wikidata")
- [Wikipedia articles with style issues from August 2016](https://en.wikipedia.org/wiki/Category:Wikipedia_articles_with_style_issues_from_August_2016 "Category:Wikipedia articles with style issues from August 2016")
- [All articles with style issues](https://en.wikipedia.org/wiki/Category:All_articles_with_style_issues "Category:All articles with style issues")
- [All articles with unsourced statements](https://en.wikipedia.org/wiki/Category:All_articles_with_unsourced_statements "Category:All articles with unsourced statements")
- [Articles with unsourced statements from January 2012](https://en.wikipedia.org/wiki/Category:Articles_with_unsourced_statements_from_January_2012 "Category:Articles with unsourced statements from January 2012")

## Navigation menu

### Personal tools

- <span id="pt-anonuserpage">Not logged in</span>
- <span id="pt-anontalk">[Talk](https://en.wikipedia.org/wiki/Special:MyTalk "Discussion about edits from this IP address [n]")</span>
- <span id="pt-anoncontribs">[Contributions](https://en.wikipedia.org/wiki/Special:MyContributions "A list of edits made from this IP address [y]")</span>
- <span id="pt-createaccount">[Create account](https://en.wikipedia.org/w/index.php?title=Special:CreateAccount&returnto=YAML "You are encouraged to create an account and log in; however, it is not mandatory")</span>
- <span id="pt-login">[Log in](https://en.wikipedia.org/w/index.php?title=Special:UserLogin&returnto=YAML "You're encouraged to log in; however, it's not mandatory. [o]")</span>

### Namespaces

- <span id="ca-nstab-main">[Article](https://en.wikipedia.org/wiki/YAML "View the content page [c]")</span>
- <span id="ca-talk">[Talk](https://en.wikipedia.org/wiki/Talk:YAML "Discuss improvements to the content page [t]")</span>

### Variants <span class="vector-menu-checkbox-expanded">expanded</span> <span class="vector-menu-checkbox-collapsed">collapsed</span>

### Views

- <span id="ca-view">[Read](https://en.wikipedia.org/wiki/YAML)</span>
- <span id="ca-edit">[Edit](https://en.wikipedia.org/w/index.php?title=YAML&action=edit "Edit this page [e]")</span>
- <span id="ca-history">[View history](https://en.wikipedia.org/w/index.php?title=YAML&action=history "Past revisions of this page [h]")</span>

### More <span class="vector-menu-checkbox-expanded">expanded</span> <span class="vector-menu-checkbox-collapsed">collapsed</span>

### Search

<a href="https://en.wikipedia.org/wiki/Main_Page" class="mw-wiki-logo" title="Visit the main page"></a>

### Navigation

- <span id="n-mainpage-description">[Main page](https://en.wikipedia.org/wiki/Main_Page "Visit the main page [z]")</span>
- <span id="n-contents">[Contents](https://en.wikipedia.org/wiki/Wikipedia:Contents "Guides to browsing Wikipedia")</span>
- <span id="n-currentevents">[Current events](https://en.wikipedia.org/wiki/Portal:Current_events "Articles related to current events")</span>
- <span id="n-randompage">[Random article](https://en.wikipedia.org/wiki/Special:Random "Visit a randomly selected article [x]")</span>
- <span id="n-aboutsite">[About Wikipedia](https://en.wikipedia.org/wiki/Wikipedia:About "Learn about Wikipedia and how it works")</span>
- <span id="n-contactpage">[Contact us](http://en.wikipedia.org/wiki/Wikipedia:Contact_us "How to contact Wikipedia")</span>
- <span id="n-sitesupport">[Donate](https://donate.wikimedia.org/wiki/Special:FundraiserRedirector?utm_source=donate&utm_medium=sidebar&utm_campaign=C13_en.wikipedia.org&uselang=en "Support us by donating to the Wikimedia Foundation")</span>

### Contribute

- <span id="n-help">[Help](https://en.wikipedia.org/wiki/Help:Contents "Guidance on how to use and edit Wikipedia")</span>
- <span id="n-introduction">[Learn to edit](https://en.wikipedia.org/wiki/Help:Introduction "Learn how to edit Wikipedia")</span>
- <span id="n-portal">[Community portal](https://en.wikipedia.org/wiki/Wikipedia:Community_portal "The hub for editors")</span>
- <span id="n-recentchanges">[Recent changes](https://en.wikipedia.org/wiki/Special:RecentChanges "A list of recent changes to Wikipedia [r]")</span>
- <span id="n-upload">[Upload file](https://en.wikipedia.org/wiki/Wikipedia:File_Upload_Wizard "Add images or other media for use on Wikipedia")</span>

### Tools

- <span id="t-whatlinkshere">[What links here](https://en.wikipedia.org/wiki/Special:WhatLinksHere/YAML "List of all English Wikipedia pages containing links to this page [j]")</span>
- <span id="t-recentchangeslinked">[Related changes](https://en.wikipedia.org/wiki/Special:RecentChangesLinked/YAML "Recent changes in pages linked from this page [k]")</span>
- <span id="t-upload">[Upload file](https://en.wikipedia.org/wiki/Wikipedia:File_Upload_Wizard "Upload files [u]")</span>
- <span id="t-specialpages">[Special pages](https://en.wikipedia.org/wiki/Special:SpecialPages "A list of all special pages [q]")</span>
- <span id="t-permalink">[Permanent link](https://en.wikipedia.org/w/index.php?title=YAML&oldid=1053086763 "Permanent link to this revision of this page")</span>
- <span id="t-info">[Page information](https://en.wikipedia.org/w/index.php?title=YAML&action=info "More information about this page")</span>
- <span id="t-cite">[Cite this page](https://en.wikipedia.org/w/index.php?title=Special:CiteThisPage&page=YAML&id=1053086763&wpFormIdentifier=titleform "Information on how to cite this page")</span>
- <span id="t-wikibase">[Wikidata item](https://www.wikidata.org/wiki/Special:EntityPage/Q281876 "Structured data on this page hosted by Wikidata [g]")</span>

### Print/export

- <span id="coll-download-as-rl">[Download as PDF](https://en.wikipedia.org/w/index.php?title=Special:DownloadAsPdf&page=YAML&action=show-download-screen "Download this page as a PDF file")</span>
- <span id="t-print">[Printable version](https://en.wikipedia.org/w/index.php?title=YAML&printable=yes "Printable version of this page [p]")</span>

### Languages

- <a href="https://cs.wikipedia.org/wiki/YAML" class="interlanguage-link-target" title="YAML – Czech"><span>Čeština</span></a>
- <a href="https://de.wikipedia.org/wiki/YAML" class="interlanguage-link-target" title="YAML – German"><span>Deutsch</span></a>
- <a href="https://es.wikipedia.org/wiki/YAML" class="interlanguage-link-target" title="YAML – Spanish"><span>Español</span></a>
- <a href="https://fa.wikipedia.org/wiki/YAML" class="interlanguage-link-target" title="YAML – Persian"><span>فارسی</span></a>
- <a href="https://fr.wikipedia.org/wiki/YAML" class="interlanguage-link-target" title="YAML – French"><span>Français</span></a>
- <a href="https://ko.wikipedia.org/wiki/YAML" class="interlanguage-link-target" title="YAML – Korean"><span>한국어</span></a>
- <a href="https://id.wikipedia.org/wiki/YAML" class="interlanguage-link-target" title="YAML – Indonesian"><span>Bahasa Indonesia</span></a>
- <a href="https://it.wikipedia.org/wiki/YAML" class="interlanguage-link-target" title="YAML – Italian"><span>Italiano</span></a>
- <a href="https://he.wikipedia.org/wiki/YAML" class="interlanguage-link-target" title="YAML – Hebrew"><span>עברית</span></a>
- <a href="https://ja.wikipedia.org/wiki/YAML" class="interlanguage-link-target" title="YAML – Japanese"><span>日本語</span></a>
- <a href="https://pl.wikipedia.org/wiki/YAML" class="interlanguage-link-target" title="YAML – Polish"><span>Polski</span></a>
- <a href="https://pt.wikipedia.org/wiki/YAML" class="interlanguage-link-target" title="YAML – Portuguese"><span>Português</span></a>
- <a href="https://ru.wikipedia.org/wiki/YAML" class="interlanguage-link-target" title="YAML – Russian"><span>Русский</span></a>
- <a href="https://sk.wikipedia.org/wiki/YAML" class="interlanguage-link-target" title="YAML – Slovak"><span>Slovenčina</span></a>
- <a href="https://fi.wikipedia.org/wiki/YAML" class="interlanguage-link-target" title="YAML – Finnish"><span>Suomi</span></a>
- <a href="https://sv.wikipedia.org/wiki/YAML" class="interlanguage-link-target" title="YAML – Swedish"><span>Svenska</span></a>
- <a href="https://uk.wikipedia.org/wiki/YAML" class="interlanguage-link-target" title="YAML – Ukrainian"><span>Українська</span></a>
- <a href="https://zh.wikipedia.org/wiki/YAML" class="interlanguage-link-target" title="YAML – Chinese"><span>中文</span></a>

<span class="wb-langlinks-edit wb-langlinks-link"><a href="https://www.wikidata.org/wiki/Special:EntityPage/Q281876#sitelinks-wikipedia" class="wbc-editpage" title="Edit interlanguage links">Edit links</a></span>

- <span id="footer-info-lastmod">This page was last edited on 1 November 2021, at 20:33<span class="anonymous-show"> (UTC)</span>.</span>
- <span id="footer-info-copyright">Text is available under the [Creative Commons Attribution-ShareAlike License](http://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License)[](http://creativecommons.org/licenses/by-sa/3.0/); additional terms may apply. By using this site, you agree to the [Terms of Use](http://foundation.wikimedia.org/wiki/Terms_of_Use) and [Privacy Policy](http://foundation.wikimedia.org/wiki/Privacy_policy). Wikipedia® is a registered trademark of the [Wikimedia Foundation, Inc.](http://www.wikimediafoundation.org/), a non-profit organization.</span>

<!-- -->

- <span id="footer-places-privacy"><a href="https://foundation.wikimedia.org/wiki/Privacy_policy" class="extiw" title="wmf:Privacy policy">Privacy policy</a></span>
- <span id="footer-places-about">[About Wikipedia](https://en.wikipedia.org/wiki/Wikipedia:About "Wikipedia:About")</span>
- <span id="footer-places-disclaimer">[Disclaimers](https://en.wikipedia.org/wiki/Wikipedia:General_disclaimer "Wikipedia:General disclaimer")</span>
- <span id="footer-places-contact">[Contact Wikipedia](http://en.wikipedia.org/wiki/Wikipedia:Contact_us)</span>
- <span id="footer-places-mobileview"><a href="http://en.m.wikipedia.org/w/index.php?title=YAML&amp;mobileaction=toggle_view_mobile" class="noprint stopMobileRedirectToggle">Mobile view</a></span>
- <span id="footer-places-developers">[Developers](https://www.mediawiki.org/wiki/Special:MyLanguage/How_to_contribute)</span>
- <span id="footer-places-statslink">[Statistics](https://stats.wikimedia.org/#/en.wikipedia.org)</span>
- <span id="footer-places-cookiestatement">[Cookie statement](https://foundation.wikimedia.org/wiki/Cookie_statement)</span>

<!-- -->

- <span id="footer-copyrightico">[<img src="https://en.wikipedia.org/static/images/footer/wikimedia-button.png" alt="Wikimedia Foundation" srcset="
                  /static/images/footer/wikimedia-button-1.5x.png 1.5x,
                  /static/images/footer/wikimedia-button-2x.png   2x
                " width="88" height="31" />](https://wikimediafoundation.org/)</span>
- <span id="footer-poweredbyico">[<img src="https://en.wikipedia.org/static/images/footer/poweredby_mediawiki_88x31.png" alt="Powered by MediaWiki" srcset="
                  /static/images/footer/poweredby_mediawiki_132x47.png 1.5x,
                  /static/images/footer/poweredby_mediawiki_176x62.png 2x
                " width="88" height="31" />](https://www.mediawiki.org/)</span>
