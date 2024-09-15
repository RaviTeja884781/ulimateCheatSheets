export default {
  type: "jsx",
  title: "ES6 Key Features and Syntax",
  desc: "A quick reference for ES6 (ECMAScript 2015) features and syntax improvements.",
  sheets: [
    {
      category: "Variable Declaration",
      sheet: [
        {
          snippet: "let x = 10;",
          sheetDesc: "Declare a block-scoped variable",
        },
        {
          snippet: "const y = 20;",
          sheetDesc: "Declare a block-scoped constant",
        },
        {
          snippet: "var z = 30;",
          sheetDesc: "Declare a function-scoped variable",
        },
      ],
    },
    {
      category: "Arrow Functions",
      sheet: [
        {
          snippet: "const add = (a, b) => a + b;",
          sheetDesc: "Arrow function with implicit return",
        },
        {
          snippet: "const greet = () => 'Hello!';",
          sheetDesc: "Arrow function with no parameters",
        },
        {
          snippet: "const square = x => x * x;",
          sheetDesc: "Arrow function with one parameter",
        },
      ],
    },
    {
      category: "Template Literals",
      sheet: [
        {
          snippet: "`Hello, ${name}!`",
          sheetDesc: "String interpolation with template literals",
        },
        {
          snippet: "`This is line 1\nThis is line 2`",
          sheetDesc: "Multiline strings using template literals",
        },
      ],
    },
    {
      category: "Destructuring Assignment",
      sheet: [
        {
          snippet: "const {name, age} = person;",
          sheetDesc: "Object destructuring",
        },
        {
          snippet: "const [first, second] = array;",
          sheetDesc: "Array destructuring",
        },
        {
          snippet: "const {x = 10, y = 20} = point;",
          sheetDesc: "Destructuring with default values",
        },
      ],
    },
    {
      category: "Spread and Rest Operators",
      sheet: [
        {
          snippet: "const arr = [...arr1, ...arr2];",
          sheetDesc: "Array concatenation with spread operator",
        },
        {
          snippet: "const obj = {...obj1, key: value};",
          sheetDesc: "Object merging with spread operator",
        },
        {
          snippet:
            "function sum(...numbers) { return numbers.reduce((acc, n) => acc + n); }",
          sheetDesc: "Rest operator to gather function arguments",
        },
      ],
    },
    {
      category: "Modules",
      sheet: [
        {
          snippet: "export const name = 'John';",
          sheetDesc: "Exporting a variable",
        },
        {
          snippet: "export default function() {}",
          sheetDesc: "Exporting a default function",
        },
        {
          snippet: "import {name} from './module';",
          sheetDesc: "Importing a named export",
        },
        {
          snippet: "import myFunction from './module';",
          sheetDesc: "Importing a default export",
        },
      ],
    },
    {
      category: "Classes",
      sheet: [
        {
          snippet:
            "class Person { constructor(name) { this.name = name; } greet() { return `Hello, ${this.name}`; } }",
          sheetDesc: "Class declaration with constructor and methods",
        },
        {
          snippet:
            "class Employee extends Person { constructor(name, role) { super(name); this.role = role; } }",
          sheetDesc: "Class inheritance with `extends` and `super`",
        },
      ],
    },
    {
      category: "Promises",
      sheet: [
        {
          snippet:
            "const promise = new Promise((resolve, reject) => { resolve('Success'); });",
          sheetDesc: "Creating a new promise",
        },
        {
          snippet:
            "promise.then(result => console.log(result)).catch(error => console.error(error));",
          sheetDesc: "Handling promise resolution and rejection",
        },
      ],
    },
    {
      category: "Iterators and Generators",
      sheet: [
        {
          snippet: "for (let value of array) { console.log(value); }",
          sheetDesc: "Using `for...of` to iterate over an iterable",
        },
        {
          snippet: "function* generator() { yield 1; yield 2; yield 3; }",
          sheetDesc: "Defining a generator function",
        },
        {
          snippet: "const gen = generator(); gen.next();",
          sheetDesc: "Iterating through generator function values",
        },
      ],
    },
    {
      category: "Enhanced Object Literals",
      sheet: [
        {
          snippet: "const person = {name, age};",
          sheetDesc: "Shorthand property names",
        },
        {
          snippet: "const obj = {method() { return 'Hello'; }};",
          sheetDesc: "Shorthand method definition",
        },
        {
          snippet: "const obj = {['prop_' + i]: i};",
          sheetDesc: "Computed property names",
        },
      ],
    },
    {
      category: "Async/Await",
      sheet: [
        {
          snippet:
            "async function fetchData() { const data = await fetch('url'); }",
          sheetDesc: "Async function with await",
        },
        {
          snippet:
            "const getData = async () => { const response = await fetch(url); return response.json(); }",
          sheetDesc: "Arrow function with async/await",
        },
      ],
    },
    {
      category: "Map and Set",
      sheet: [
        {
          snippet: "const map = new Map(); map.set('key', 'value');",
          sheetDesc: "Creating a new `Map` and adding a key-value pair",
        },
        {
          snippet: "const set = new Set([1, 2, 3]);",
          sheetDesc: "Creating a new `Set` with an array of values",
        },
        {
          snippet: "map.get('key');",
          sheetDesc: "Retrieving a value from a `Map` by key",
        },
        {
          snippet: "set.has(2);",
          sheetDesc: "Checking if a `Set` contains a value",
        },
      ],
    },
  ],
};
