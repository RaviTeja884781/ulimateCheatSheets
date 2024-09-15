export default {
  type: "css",
  title: "CSS Cheat Sheet",
  desc: "A complete guide to CSS properties, selectors, and concepts from basic to advanced",
  sheets: [
    {
      category: "Selectors",
      sheet: [
        {
          snippet: "element { }",
          sheetDesc: "Element Selector",
        },
        {
          snippet: ".class { }",
          sheetDesc: "Class Selector",
        },
        {
          snippet: "#id { }",
          sheetDesc: "ID Selector",
        },
        {
          snippet: "* { }",
          sheetDesc: "Universal Selector",
        },
        {
          snippet: "[attribute] { }",
          sheetDesc: "Attribute Selector",
        },
        {
          snippet: "selector1, selector2 { }",
          sheetDesc: "Grouping Selector",
        },
        {
          snippet: "selector1 selector2 { }",
          sheetDesc: "Descendant Selector",
        },
        {
          snippet: "selector1 > selector2 { }",
          sheetDesc: "Child Selector",
        },
        {
          snippet: "selector1 + selector2 { }",
          sheetDesc: "Adjacent Sibling Selector",
        },
        {
          snippet: "selector1 ~ selector2 { }",
          sheetDesc: "General Sibling Selector",
        },
        {
          snippet: ":hover { }",
          sheetDesc: "Hover Pseudo-class",
        },
        {
          snippet: ":nth-child(n) { }",
          sheetDesc: "Nth Child Pseudo-class",
        },
        {
          snippet: "::before { }",
          sheetDesc: "Before Pseudo-element",
        },
        {
          snippet: "::after { }",
          sheetDesc: "After Pseudo-element",
        },
      ],
    },
    {
      category: "Box Model",
      sheet: [
        {
          snippet: "width: 100px;",
          sheetDesc: "Width",
        },
        {
          snippet: "height: 100px;",
          sheetDesc: "Height",
        },
        {
          snippet: "padding: 10px;",
          sheetDesc: "Padding (all sides)",
        },
        {
          snippet: "padding: 10px 20px 30px 40px;",
          sheetDesc: "Padding (top, right, bottom, left)",
        },
        {
          snippet: "margin: 10px;",
          sheetDesc: "Margin (all sides)",
        },
        {
          snippet: "margin: 10px 20px 30px 40px;",
          sheetDesc: "Margin (top, right, bottom, left)",
        },
        {
          snippet: "border: 1px solid black;",
          sheetDesc: "Border (width, style, color)",
        },
        {
          snippet: "box-sizing: border-box;",
          sheetDesc: "Box Sizing",
        },
      ],
    },
    {
      category: "Typography",
      sheet: [
        {
          snippet: "font-family: Arial, sans-serif;",
          sheetDesc: "Font Family",
        },
        {
          snippet: "font-size: 16px;",
          sheetDesc: "Font Size",
        },
        {
          snippet: "font-weight: bold;",
          sheetDesc: "Font Weight",
        },
        {
          snippet: "font-style: italic;",
          sheetDesc: "Font Style",
        },
        {
          snippet: "text-align: center;",
          sheetDesc: "Text Alignment",
        },
        {
          snippet: "line-height: 1.5;",
          sheetDesc: "Line Height",
        },
        {
          snippet: "letter-spacing: 2px;",
          sheetDesc: "Letter Spacing",
        },
        {
          snippet: "text-decoration: underline;",
          sheetDesc: "Text Decoration",
        },
        {
          snippet: "text-transform: uppercase;",
          sheetDesc: "Text Transform",
        },
      ],
    },
    {
      category: "Colors and Backgrounds",
      sheet: [
        {
          snippet: "color: #ff0000;",
          sheetDesc: "Text Color",
        },
        {
          snippet: "background-color: #f0f0f0;",
          sheetDesc: "Background Color",
        },
        {
          snippet: "background-image: url('image.jpg');",
          sheetDesc: "Background Image",
        },
        {
          snippet: "background-repeat: no-repeat;",
          sheetDesc: "Background Repeat",
        },
        {
          snippet: "background-position: center;",
          sheetDesc: "Background Position",
        },
        {
          snippet: "background-size: cover;",
          sheetDesc: "Background Size",
        },
        {
          snippet: "opacity: 0.5;",
          sheetDesc: "Opacity",
        },
      ],
    },
    {
      category: "Layout",
      sheet: [
        {
          snippet: "display: flex;",
          sheetDesc: "Flexbox Container",
        },
        {
          snippet: "flex-direction: row;",
          sheetDesc: "Flex Direction",
        },
        {
          snippet: "justify-content: center;",
          sheetDesc: "Justify Content",
        },
        {
          snippet: "align-items: center;",
          sheetDesc: "Align Items",
        },
        {
          snippet: "flex: 1;",
          sheetDesc: "Flex Item Growth",
        },
        {
          snippet: "display: grid;",
          sheetDesc: "Grid Container",
        },
        {
          snippet: "grid-template-columns: 1fr 1fr 1fr;",
          sheetDesc: "Grid Template Columns",
        },
        {
          snippet: "grid-gap: 10px;",
          sheetDesc: "Grid Gap",
        },
        {
          snippet: "position: relative;",
          sheetDesc: "Relative Positioning",
        },
        {
          snippet: "position: absolute;",
          sheetDesc: "Absolute Positioning",
        },
        {
          snippet: "float: left;",
          sheetDesc: "Float",
        },
        {
          snippet: "clear: both;",
          sheetDesc: "Clear Float",
        },
      ],
    },
    {
      category: "Transitions and Animations",
      sheet: [
        {
          snippet: "transition: all 0.3s ease;",
          sheetDesc: "Transition",
        },
        {
          snippet: "transform: rotate(45deg);",
          sheetDesc: "Transform (Rotate)",
        },
        {
          snippet: "transform: scale(1.5);",
          sheetDesc: "Transform (Scale)",
        },
        {
          snippet: "transform: translate(10px, 20px);",
          sheetDesc: "Transform (Translate)",
        },
        {
          snippet:
            "@keyframes slidein { from { margin-left: 100%; } to { margin-left: 0%; } }",
          sheetDesc: "Keyframes Animation",
        },
        {
          snippet: "animation: slidein 3s ease-in-out;",
          sheetDesc: "Animation",
        },
      ],
    },
    {
      category: "Responsive Design",
      sheet: [
        {
          snippet: "@media screen and (max-width: 600px) { }",
          sheetDesc: "Media Query",
        },
        {
          snippet: "max-width: 100%;",
          sheetDesc: "Max Width",
        },
        {
          snippet: "min-height: 100vh;",
          sheetDesc: "Min Height (Viewport Height)",
        },
        {
          snippet: "font-size: 16px;",
          sheetDesc: "Font Size (px)",
        },
        {
          snippet: "font-size: 1rem;",
          sheetDesc: "Font Size (rem)",
        },
        {
          snippet: "font-size: 1em;",
          sheetDesc: "Font Size (em)",
        },
        {
          snippet: "width: 50%;",
          sheetDesc: "Percentage Width",
        },
      ],
    },
    {
      category: "Advanced",
      sheet: [
        {
          snippet: "var(--main-color);",
          sheetDesc: "CSS Variable Usage",
        },
        {
          snippet: ":root { --main-color: #ff0000; }",
          sheetDesc: "CSS Variable Declaration",
        },
        {
          snippet: "filter: blur(5px);",
          sheetDesc: "Filter (Blur)",
        },
        {
          snippet: "mix-blend-mode: multiply;",
          sheetDesc: "Mix Blend Mode",
        },
        {
          snippet: "clip-path: polygon(50% 0%, 0% 100%, 100% 100%);",
          sheetDesc: "Clip Path",
        },
        {
          snippet: "object-fit: cover;",
          sheetDesc: "Object Fit",
        },
        {
          snippet: "writing-mode: vertical-rl;",
          sheetDesc: "Writing Mode",
        },
        {
          snippet: "pointer-events: none;",
          sheetDesc: "Pointer Events",
        },
      ],
    },
  ],
};
