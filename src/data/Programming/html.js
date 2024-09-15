export default {
  type:"html",
  title: "HTML Cheat Sheet",
  desc: "A detailed guide to HTML elements from basic to advanced",
  sheets: [
    {
      category: "Document Structure",
      sheet: [
        {
          snippet: "<!DOCTYPE html>",
          sheetDesc: "HTML5 doctype declaration",
        },
        {
          snippet: '<html lang="en">\n  <!-- content here -->\n</html>',
          sheetDesc: "HTML root element",
        },
        {
          snippet: "<head>\n  <!-- metadata here -->\n</head>",
          sheetDesc: "Container for metadata",
        },
        {
          snippet: "<body>\n  <!-- page content here -->\n</body>",
          sheetDesc: "Container for visible content",
        },
      ],
    },
    {
      category: "Metadata",
      sheet: [
        {
          snippet: "<title>Page Title</title>",
          sheetDesc: "Page title",
        },
        {
          snippet: '<meta charset="UTF-8">',
          sheetDesc: "Character encoding",
        },
        {
          snippet:
            '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
          sheetDesc: "Responsive viewport",
        },
        {
          snippet: '<meta name="description" content="Page description">',
          sheetDesc: "Page description",
        },
        {
          snippet: '<link rel="stylesheet" href="styles.css">',
          sheetDesc: "External CSS",
        },
        {
          snippet: '<script src="script.js"></script>',
          sheetDesc: "External JavaScript",
        },
        {
          snippet: '<base href="https://www.example.com/">',
          sheetDesc: "Base URL for all relative URLs",
        },
        {
          snippet: '<meta http-equiv="refresh" content="30">',
          sheetDesc: "Auto-refresh page",
        },
      ],
    },
    {
      category: "Text Content",
      sheet: [
        {
          snippet: "<h1>Heading 1</h1> to <h6>Heading 6</h6>",
          sheetDesc: "Headings",
        },
        {
          snippet: "<p>Paragraph content</p>",
          sheetDesc: "Paragraph",
        },
        {
          snippet: "<br>",
          sheetDesc: "Line break",
        },
        {
          snippet: "<hr>",
          sheetDesc: "Horizontal rule",
        },
        {
          snippet: "<strong>Bold text</strong>",
          sheetDesc: "Strong importance",
        },
        {
          snippet: "<em>Italicized text</em>",
          sheetDesc: "Emphasized text",
        },
        {
          snippet: "<small>Smaller text</small>",
          sheetDesc: "Smaller text",
        },
        {
          snippet: "<mark>Highlighted text</mark>",
          sheetDesc: "Marked/highlighted text",
        },
        {
          snippet: "<del>Deleted text</del>",
          sheetDesc: "Deleted text",
        },
        {
          snippet: "<ins>Inserted text</ins>",
          sheetDesc: "Inserted text",
        },
        {
          snippet: "<sub>Subscript</sub>",
          sheetDesc: "Subscript text",
        },
        {
          snippet: "<sup>Superscript</sup>",
          sheetDesc: "Superscript text",
        },
      ],
    },
    {
      category: "Text Formatting",
      sheet: [
        {
          snippet: '<abbr title="World Health Organization">WHO</abbr>',
          sheetDesc: "Abbreviation",
        },
        {
          snippet: '<bdo dir="rtl">This text will go right to left</bdo>',
          sheetDesc: "Bi-Directional Override",
        },
        {
          snippet: "The Scream by Edward Munch. Painted in 1893.",
          sheetDesc: "Citation",
        },
        {
          snippet:
            "The <dfn>HTML</dfn> is the standard markup language for creating web pages.",
          sheetDesc: "Definition term",
        },
        {
          snippet: "<kbd>Ctrl</kbd> + <kbd>C</kbd>",
          sheetDesc: "Keyboard input",
        },
        {
          snippet:
            "<pre>\nThis text\n  is formatted\n    as it's written\n      in the HTML file.\n</pre>",
          sheetDesc: "Preformatted text",
        },
        {
          snippet: "<q>To be or not to be</q> is from Shakespeare's Hamlet.",
          sheetDesc: "Short quotation",
        },
        {
          snippet: "<ruby>\n  漢 <rp>(</rp><rt>かん</rt><rp>)</rp>\n</ruby>",
          sheetDesc: "Ruby annotations",
        },
        {
          snippet: "<s>My car is blue.</s> My car is green.",
          sheetDesc: "Strikethrough text",
        },
        {
          snippet: "<samp>Error: 404 Page Not Found</samp>",
          sheetDesc: "Sample output",
        },
        {
          snippet: "<u>This text is underlined</u>",
          sheetDesc: "Underlined text",
        },
        {
          snippet: "<var>x</var> = <var>y</var> + 2",
          sheetDesc:
            "Variable in a mathematical expression or programming context",
        },
        {
          snippet: "<wbr>",
          sheetDesc: "Word break opportunity",
        },
      ],
    },
    {
      category: "Media",
      sheet: [
        {
          snippet:
            '<picture>\n  <source media="(min-width:650px)" srcset="img_pink_flowers.jpg">\n  <source media="(min-width:465px)" srcset="img_white_flower.jpg">\n  <img src="img_orange_flowers.jpg" alt="Flowers">\n</picture>',
          sheetDesc: "Responsive image container",
        },
        {
          snippet: '<source src="movie.mp4" type="video/mp4">',
          sheetDesc: "Media resource for video or audio",
        },
        {
          snippet:
            '<track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">',
          sheetDesc: "Text track for media elements",
        },
      ],
    },
    {
      category: "Lists",
      sheet: [
        {
          snippet: "<ul>\n  <li>Unordered item</li>\n</ul>",
          sheetDesc: "Unordered list",
        },
        {
          snippet: "<ol>\n  <li>Ordered item</li>\n</ol>",
          sheetDesc: "Ordered list",
        },
        {
          snippet: "<dl>\n  <dt>Term</dt>\n  <dd>Definition</dd>\n</dl>",
          sheetDesc: "Description list",
        },
      ],
    },
    {
      category: "Links and Media",
      sheet: [
        {
          snippet: '<a href="https://example.com">Link text</a>',
          sheetDesc: "Hyperlink",
        },
        {
          snippet: '<img src="image.jpg" alt="Description">',
          sheetDesc: "Image",
        },
        {
          snippet: '<audio src="audio.mp3" controls></audio>',
          sheetDesc: "Audio",
        },
        {
          snippet: '<video src="video.mp4" controls></video>',
          sheetDesc: "Video",
        },
        {
          snippet:
            '<figure>\n  <img src="image.jpg" alt="Description">\n  <figcaption>Caption text</figcaption>\n</figure>',
          sheetDesc: "Figure with caption",
        },
      ],
    },
    {
      category: "Tables",
      sheet: [
        {
          snippet:
            "<table>\n  <tr>\n    <th>Header 1</th>\n    <th>Header 2</th>\n  </tr>\n  <tr>\n    <td>Row 1, Cell 1</td>\n    <td>Row 1, Cell 2</td>\n  </tr>\n</table>",
          sheetDesc: "Basic table structure",
        },
        {
          snippet: "<thead>\n  <tr>\n    <th>Header 1</th>\n  </tr>\n</thead>",
          sheetDesc: "Table header",
        },
        {
          snippet: "<tbody>\n  <tr>\n    <td>Body 1</td>\n  </tr>\n</tbody>",
          sheetDesc: "Table body",
        },
        {
          snippet: "<tfoot>\n  <tr>\n    <td>Footer 1</td>\n  </tr>\n</tfoot>",
          sheetDesc: "Table footer",
        },
        {
          snippet:
            '<colgroup>\n  <col span="2" style="background-color:red">\n  <col style="background-color:yellow">\n</colgroup>',
          sheetDesc: "Column group in table",
        },
        {
          snippet: "<caption>Table Caption</caption>",
          sheetDesc: "Table caption",
        },
      ],
    },
    {
      category: "Forms",
      sheet: [
        {
          snippet:
            '<form action="/submit" method="post">\n  <!-- form elements here -->\n</form>',
          sheetDesc: "Form",
        },
        {
          snippet: '<input type="text" name="username">',
          sheetDesc: "Text input",
        },
        {
          snippet: '<input type="password" name="password">',
          sheetDesc: "Password input",
        },
        {
          snippet: '<input type="radio" name="choice" value="option1">',
          sheetDesc: "Radio button",
        },
        {
          snippet: '<input type="checkbox" name="option" value="check1">',
          sheetDesc: "Checkbox",
        },
        {
          snippet: '<textarea name="message" rows="4" cols="50"></textarea>',
          sheetDesc: "Text area",
        },
        {
          snippet:
            '<select name="cars">\n  <option value="volvo">Volvo</option>\n  <option value="saab">Saab</option>\n</select>',
          sheetDesc: "Dropdown list",
        },
        {
          snippet: '<button type="submit">Submit</button>',
          sheetDesc: "Submit button",
        },
        {
          snippet: '<label for="username">Username:</label>',
          sheetDesc: "Label for input",
        },
        {
          snippet: '<input type="color" name="favcolor" value="#ff0000">',
          sheetDesc: "Color picker input",
        },
        {
          snippet: '<input type="date" name="birthday">',
          sheetDesc: "Date input",
        },
        {
          snippet: '<input type="time" name="appt">',
          sheetDesc: "Time input",
        },
        {
          snippet: '<input type="range" name="volume" min="0" max="100">',
          sheetDesc: "Range slider",
        },
        {
          snippet: '<input type="file" name="fileupload" accept="image/*">',
          sheetDesc: "File upload input",
        },
        {
          snippet:
            '<datalist id="browsers">\n  <option value="Chrome">\n  <option value="Firefox">\n</datalist>',
          sheetDesc: "Datalist for input suggestions",
        },
        {
          snippet: '<output name="result"></output>',
          sheetDesc: "Output of a calculation",
        },
      ],
    },
    {
      category: "Semantic Elements",
      sheet: [
        {
          snippet: "<header>\n  <!-- header content -->\n</header>",
          sheetDesc: "Header of a section or page",
        },
        {
          snippet: "<nav>\n  <!-- navigation menu -->\n</nav>",
          sheetDesc: "Navigation links",
        },
        {
          snippet: "<main>\n  <!-- main content -->\n</main>",
          sheetDesc: "Main content of the page",
        },
        {
          snippet:
            "<article>\n  <!-- independent, self-contained content -->\n</article>",
          sheetDesc: "Independent, self-contained content",
        },
        {
          snippet:
            "<section>\n  <!-- thematic grouping of content -->\n</section>",
          sheetDesc: "Thematic grouping of content",
        },
        {
          snippet: "<aside>\n  <!-- sidebar content -->\n</aside>",
          sheetDesc: "Sidebar content",
        },
        {
          snippet: "<footer>\n  <!-- footer content -->\n</footer>",
          sheetDesc: "Footer of a section or page",
        },
      ],
    },
    {
      category: "Embedded Content",
      sheet: [
        {
          snippet:
            '<embed src="file.pdf" type="application/pdf" width="600" height="400">',
          sheetDesc: "Embed external content",
        },
        {
          snippet:
            '<object data="file.pdf" type="application/pdf" width="600" height="400"></object>',
          sheetDesc: "Embed object",
        },
        {
          snippet: '<param name="autoplay" value="true">',
          sheetDesc: "Parameter for object",
        },
      ],
    },
    {
      category: "Interactive Elements",
      sheet: [
        {
          snippet:
            "<dialog open>\n  <p>Dialog content</p>\n  <button>Close</button>\n</dialog>",
          sheetDesc: "Dialog box",
        },
        {
          snippet:
            "<menu>\n  <li><button>Copy</button></li>\n  <li><button>Cut</button></li>\n</menu>",
          sheetDesc: "Menu list",
        },
      ],
    },
    {
      category: "Scripting",
      sheet: [
        {
          snippet:
            "<noscript>Your browser does not support JavaScript!</noscript>",
          sheetDesc: "Content for non-JS-enabled browsers",
        },
        {
          snippet:
            '<script type="module">\n  // ES6 module code here\n</script>',
          sheetDesc: "JavaScript module",
        },
      ],
    },
    {
      category: "Advanced Elements",
      sheet: [
        {
          snippet: '<canvas id="myCanvas" width="200" height="100"></canvas>',
          sheetDesc: "Canvas for graphics",
        },
        {
          snippet:
            '<svg width="100" height="100">\n  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />\n</svg>',
          sheetDesc: "SVG for vector graphics",
        },
        {
          snippet:
            '<iframe src="https://example.com" title="Example iframe"></iframe>',
          sheetDesc: "Inline frame",
        },
        {
          snippet: '<progress value="70" max="100">70%</progress>',
          sheetDesc: "Progress bar",
        },
        {
          snippet:
            "<details>\n  <summary>Click to expand</summary>\n  <p>Hidden content here</p>\n</details>",
          sheetDesc: "Expandable details",
        },
      ],
    },
  ],
};
