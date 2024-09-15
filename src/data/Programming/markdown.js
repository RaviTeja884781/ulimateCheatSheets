export default {
  type: "jsx",
  title: "Markdown Syntax Cheat Sheet",
  desc: "A quick reference for Markdown syntax to create formatted text, links, lists, code blocks, and more.",
  sheets: [
    {
      category: "Headings",
      sheet: [
        {
          snippet: "# Heading 1",
          sheetDesc: "Heading level 1",
        },
        {
          snippet: "## Heading 2",
          sheetDesc: "Heading level 2",
        },
        {
          snippet: "### Heading 3",
          sheetDesc: "Heading level 3",
        },
        {
          snippet: "#### Heading 4",
          sheetDesc: "Heading level 4",
        },
        {
          snippet: "##### Heading 5",
          sheetDesc: "Heading level 5",
        },
        {
          snippet: "###### Heading 6",
          sheetDesc: "Heading level 6",
        },
      ],
    },
    {
      category: "Text Formatting",
      sheet: [
        {
          snippet: "*italic* or _italic_",
          sheetDesc: "Italic text",
        },
        {
          snippet: "**bold** or __bold__",
          sheetDesc: "Bold text",
        },
        {
          snippet: "***italic and bold*** or ___italic and bold___",
          sheetDesc: "Italic and bold text",
        },
        {
          snippet: "~~strikethrough~~",
          sheetDesc: "Strikethrough text",
        },
      ],
    },
    {
      category: "Lists",
      sheet: [
        {
          snippet: "- Item 1\n- Item 2\n- Item 3",
          sheetDesc: "Unordered list",
        },
        {
          snippet: "1. First item\n2. Second item\n3. Third item",
          sheetDesc: "Ordered list",
        },
        {
          snippet: "- Item 1\n  - Subitem 1\n  - Subitem 2",
          sheetDesc: "Nested list",
        },
      ],
    },
    {
      category: "Links",
      sheet: [
        {
          snippet: "[Link text](https://example.com)",
          sheetDesc: "Inline link",
        },
        {
          snippet: "[Link text][1]\n\n[1]: https://example.com",
          sheetDesc: "Reference-style link",
        },
      ],
    },
    {
      category: "Images",
      sheet: [
        {
          snippet: "![Alt text](https://example.com/image.jpg)",
          sheetDesc: "Inline image",
        },
        {
          snippet: "![Alt text][1]\n\n[1]: https://example.com/image.jpg",
          sheetDesc: "Reference-style image",
        },
      ],
    },
    {
      category: "Blockquotes",
      sheet: [
        {
          snippet: "> This is a blockquote.",
          sheetDesc: "Basic blockquote",
        },
        {
          snippet: "> Blockquote\n> with multiple lines.",
          sheetDesc: "Multiline blockquote",
        },
        {
          snippet: "> Nested blockquote\n>> Second level",
          sheetDesc: "Nested blockquote",
        },
      ],
    },
    {
      category: "Code",
      sheet: [
        {
          snippet: "`inline code`",
          sheetDesc: "Inline code",
        },
        {
          snippet: "```\nCode block\n```",
          sheetDesc: "Fenced code block",
        },
        {
          snippet: "```\nlanguage\nCode block with syntax highlighting\n```",
          sheetDesc: "Code block with language-specific syntax highlighting",
        },
      ],
    },
    {
      category: "Horizontal Rules",
      sheet: [
        {
          snippet: "---",
          sheetDesc: "Horizontal rule using dashes",
        },
        {
          snippet: "***",
          sheetDesc: "Horizontal rule using asterisks",
        },
        {
          snippet: "___",
          sheetDesc: "Horizontal rule using underscores",
        },
      ],
    },
    {
      category: "Tables",
      sheet: [
        {
          snippet:
            "| Header 1 | Header 2 |\n|----------|----------|\n| Row 1 Col 1 | Row 1 Col 2 |\n| Row 2 Col 1 | Row 2 Col 2 |",
          sheetDesc: "Basic table",
        },
        {
          snippet:
            "| Left-Aligned | Center-Aligned | Right-Aligned |\n|:-------------|:--------------:|--------------:|\n| Left Text    | Center Text     | Right Text    |",
          sheetDesc: "Table with alignment",
        },
      ],
    },
    {
      category: "Task Lists",
      sheet: [
        {
          snippet: "- [ ] Task 1\n- [x] Task 2\n- [ ] Task 3",
          sheetDesc: "Task list with checkboxes",
        },
      ],
    },
    {
      category: "Escaping Characters",
      sheet: [
        {
          snippet: "\\*Escape asterisks\\*",
          sheetDesc: "Escape special characters",
        },
        {
          snippet: "\\# Escape heading symbol",
          sheetDesc: "Escape heading symbol",
        },
      ],
    },
  ],
};
