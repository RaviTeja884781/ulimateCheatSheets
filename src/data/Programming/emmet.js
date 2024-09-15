export default {
  type: "jsx",
  title: "Emmet Abbreviations and Shortcuts",
  desc: "A list of commonly used Emmet abbreviations and their HTML/CSS expansions.",
  sheets: [
    {
      category: "Basic HTML Abbreviations",
      sheet: [
        {
          snippet: "html:5",
          sheetDesc: "Generates a basic HTML5 template",
        },
        {
          snippet: "div",
          sheetDesc: "Creates a <div> element",
        },
        {
          snippet: "ul>li*5",
          sheetDesc: "Creates an unordered list with 5 list items",
        },
        {
          snippet: "a[href='']",
          sheetDesc: "Creates an anchor tag with an href attribute",
        },
      ],
    },
    {
      category: "Nesting and Child Elements",
      sheet: [
        {
          snippet: "nav>ul>li*3>a",
          sheetDesc:
            "Creates a navigation with a list of 3 items, each containing a link",
        },
        {
          snippet: "div>header+main+footer",
          sheetDesc: "Creates a div with header, main, and footer as siblings",
        },
        {
          snippet: "section>h1{Title}+p{Lorem ipsum...}",
          sheetDesc:
            "Creates a section with an h1 element containing 'Title' and a paragraph containing 'Lorem ipsum...'",
        },
        {
          snippet: "form>input:text+input:submit",
          sheetDesc: "Creates a form with a text input and a submit button",
        },
      ],
    },
    {
      category: "Classes and IDs",
      sheet: [
        {
          snippet: "div.container",
          sheetDesc: "Creates a <div> element with a class 'container'",
        },
        {
          snippet: "ul#menu>li.item*3",
          sheetDesc:
            "Creates an unordered list with the ID 'menu' and 3 list items, each with a class 'item'",
        },
        {
          snippet: ".box",
          sheetDesc: "Creates a <div> element with a class 'box'",
        },
        {
          snippet: "#header",
          sheetDesc: "Creates a <div> element with an ID 'header'",
        },
      ],
    },
    {
      category: "Grouping and Multiplication",
      sheet: [
        {
          snippet: "(header>nav)+main+(footer>p)",
          sheetDesc:
            "Creates a header with a nav, followed by main, and a footer containing a paragraph",
        },
        {
          snippet: "ul>li.item$*5",
          sheetDesc:
            "Creates an unordered list with 5 items, where each item has the class 'item' and a unique number",
        },
        {
          snippet: "div>(header>h1)+section>p",
          sheetDesc:
            "Creates a div containing a header with an h1 and a section with a paragraph",
        },
      ],
    },
    {
      category: "Text and Attribute Expansion",
      sheet: [
        {
          snippet: "a{Click me}",
          sheetDesc: "Creates an anchor tag with the text 'Click me'",
        },
        {
          snippet: "button[type=button]",
          sheetDesc:
            "Creates a button element with a 'type' attribute set to 'button'",
        },
        {
          snippet: "img[src='image.jpg']",
          sheetDesc: "Creates an image tag with a source attribute",
        },
        {
          snippet: "input[placeholder='Enter your name']",
          sheetDesc: "Creates a text input with a placeholder",
        },
      ],
    },
    {
      category: "CSS Abbreviations",
      sheet: [
        {
          snippet: "m10",
          sheetDesc: "Expands to 'margin: 10px;'",
        },
        {
          snippet: "p10-20",
          sheetDesc: "Expands to 'padding: 10px 20px;'",
        },
        {
          snippet: "bd1-s#000",
          sheetDesc: "Expands to 'border: 1px solid #000;'",
        },
        {
          snippet: "w100p",
          sheetDesc: "Expands to 'width: 100%;'",
        },
      ],
    },
    {
      category: "Positioning and Flexbox",
      sheet: [
        {
          snippet: "pos:a",
          sheetDesc: "Expands to 'position: absolute;'",
        },
        {
          snippet: "pos:r",
          sheetDesc: "Expands to 'position: relative;'",
        },
        {
          snippet: "d:f",
          sheetDesc: "Expands to 'display: flex;'",
        },
        {
          snippet: "ai:c",
          sheetDesc: "Expands to 'align-items: center;'",
        },
        {
          snippet: "jc:sb",
          sheetDesc: "Expands to 'justify-content: space-between;'",
        },
      ],
    },
    {
      category: "Other Useful Shortcuts",
      sheet: [
        {
          snippet: "lorem",
          sheetDesc: "Generates a default Lorem Ipsum paragraph",
        },
        {
          snippet: "lorem10",
          sheetDesc: "Generates 10 words of Lorem Ipsum text",
        },
        {
          snippet: "span{Text}+em{Emphasized}",
          sheetDesc:
            "Creates a span with 'Text' and an em with 'Emphasized' as siblings",
        },
        {
          snippet: "link:css",
          sheetDesc: "Creates a link element for a CSS stylesheet",
        },
      ],
    },
  ],
};
