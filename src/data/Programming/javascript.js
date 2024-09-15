export default {
  type: "jsx",
  title: "JavaScript Cheat Sheet",
  desc: "A complete guide to JavaScript concepts, methods, and syntax from basic to advanced",
  sheets: [
    {
      category: "Variables and Data Types",
      sheet: [
        {
          snippet: "let variableName = value;",
          sheetDesc: "Variable declaration (block-scoped)",
        },
        {
          snippet: "const constantName = value;",
          sheetDesc: "Constant declaration",
        },
        {
          snippet: "var oldVariable = value;",
          sheetDesc: "Variable declaration (function-scoped)",
        },
        {
          snippet: "typeof variable",
          sheetDesc: "Check type of variable",
        },
        {
          snippet: "let str = 'Hello';",
          sheetDesc: "String",
        },
        {
          snippet: "let num = 42;",
          sheetDesc: "Number",
        },
        {
          snippet: "let bool = true;",
          sheetDesc: "Boolean",
        },
        {
          snippet: "let arr = [1, 2, 3];",
          sheetDesc: "Array",
        },
        {
          snippet: "let obj = { key: 'value' };",
          sheetDesc: "Object",
        },
        {
          snippet: "let nul = null;",
          sheetDesc: "Null",
        },
        {
          snippet: "let undef = undefined;",
          sheetDesc: "Undefined",
        },
      ],
    },
    {
      category: "Operators",
      sheet: [
        {
          snippet: "a + b",
          sheetDesc: "Addition",
        },
        {
          snippet: "a - b",
          sheetDesc: "Subtraction",
        },
        {
          snippet: "a * b",
          sheetDesc: "Multiplication",
        },
        {
          snippet: "a / b",
          sheetDesc: "Division",
        },
        {
          snippet: "a % b",
          sheetDesc: "Modulus (remainder)",
        },
        {
          snippet: "a ** b",
          sheetDesc: "Exponentiation",
        },
        {
          snippet: "a++",
          sheetDesc: "Increment",
        },
        {
          snippet: "a--",
          sheetDesc: "Decrement",
        },
        {
          snippet: "a === b",
          sheetDesc: "Strict equality",
        },
        {
          snippet: "a !== b",
          sheetDesc: "Strict inequality",
        },
        {
          snippet: "a && b",
          sheetDesc: "Logical AND",
        },
        {
          snippet: "a || b",
          sheetDesc: "Logical OR",
        },
        {
          snippet: "!a",
          sheetDesc: "Logical NOT",
        },
      ],
    },
    {
      category: "Control Flow",
      sheet: [
        {
          snippet:
            "if (condition) {\n  // code\n} else if (condition) {\n  // code\n} else {\n  // code\n}",
          sheetDesc: "If-else statement",
        },
        {
          snippet:
            "switch (expression) {\n  case value1:\n    // code\n    break;\n  case value2:\n    // code\n    break;\n  default:\n    // code\n}",
          sheetDesc: "Switch statement",
        },
        {
          snippet: "for (let i = 0; i < array.length; i++) {\n  // code\n}",
          sheetDesc: "For loop",
        },
        {
          snippet: "while (condition) {\n  // code\n}",
          sheetDesc: "While loop",
        },
        {
          snippet: "do {\n  // code\n} while (condition);",
          sheetDesc: "Do-while loop",
        },
        {
          snippet: "for (let item of iterable) {\n  // code\n}",
          sheetDesc: "For...of loop (arrays, strings)",
        },
        {
          snippet: "for (let prop in object) {\n  // code\n}",
          sheetDesc: "For...in loop (object properties)",
        },
      ],
    },
    {
      category: "Functions",
      sheet: [
        {
          snippet:
            "function functionName(param1, param2) {\n  // code\n  return result;\n}",
          sheetDesc: "Function declaration",
        },
        {
          snippet:
            "const functionName = function(param1, param2) {\n  // code\n  return result;\n};",
          sheetDesc: "Function expression",
        },
        {
          snippet:
            "const functionName = (param1, param2) => {\n  // code\n  return result;\n};",
          sheetDesc: "Arrow function",
        },
        {
          snippet:
            "function* generatorFunction() {\n  yield value1;\n  yield value2;\n}",
          sheetDesc: "Generator function",
        },
        {
          snippet:
            "function functionName(param1 = defaultValue) {\n  // code\n}",
          sheetDesc: "Default parameters",
        },
        {
          snippet: "function functionName(...args) {\n  // code\n}",
          sheetDesc: "Rest parameters",
        },
      ],
    },
    {
      category: "Arrays",
      sheet: [
        {
          snippet: "array.push(element);",
          sheetDesc: "Add element to end",
        },
        {
          snippet: "array.pop();",
          sheetDesc: "Remove last element",
        },
        {
          snippet: "array.unshift(element);",
          sheetDesc: "Add element to beginning",
        },
        {
          snippet: "array.shift();",
          sheetDesc: "Remove first element",
        },
        {
          snippet: "array.indexOf(element);",
          sheetDesc: "Find index of element",
        },
        {
          snippet: "array.slice(startIndex, endIndex);",
          sheetDesc: "Extract portion of array",
        },
        {
          snippet: "array.splice(startIndex, deleteCount, item1, item2, ...);",
          sheetDesc: "Modify array in-place",
        },
        {
          snippet: "array.map(callback);",
          sheetDesc: "Create new array with results of callback",
        },
        {
          snippet: "array.filter(callback);",
          sheetDesc: "Create new array with elements that pass test",
        },
        {
          snippet: "array.reduce(callback, initialValue);",
          sheetDesc: "Reduce array to single value",
        },
        {
          snippet: "array.forEach(callback);",
          sheetDesc: "Execute callback for each element",
        },
      ],
    },
    {
      category: "Objects",
      sheet: [
        {
          snippet: "const obj = { key1: value1, key2: value2 };",
          sheetDesc: "Object literal",
        },
        {
          snippet: "Object.keys(obj);",
          sheetDesc: "Get array of object keys",
        },
        {
          snippet: "Object.values(obj);",
          sheetDesc: "Get array of object values",
        },
        {
          snippet: "Object.entries(obj);",
          sheetDesc: "Get array of [key, value] pairs",
        },
        {
          snippet: "Object.assign(target, source1, source2);",
          sheetDesc: "Merge objects",
        },
        {
          snippet: "const { prop1, prop2 } = obj;",
          sheetDesc: "Object destructuring",
        },
        {
          snippet: "const newObj = { ...obj1, ...obj2 };",
          sheetDesc: "Spread operator (merge objects)",
        },
      ],
    },
    {
      category: "Classes",
      sheet: [
        {
          snippet:
            "class ClassName {\n  constructor(param1, param2) {\n    this.prop1 = param1;\n    this.prop2 = param2;\n  }\n\n  methodName() {\n    // code\n  }\n}",
          sheetDesc: "Class declaration",
        },
        {
          snippet:
            "class ChildClass extends ParentClass {\n  constructor(param1, param2) {\n    super(param1);\n    this.prop2 = param2;\n  }\n}",
          sheetDesc: "Class inheritance",
        },
        {
          snippet: "static methodName() {\n  // code\n}",
          sheetDesc: "Static method",
        },
      ],
    },
    {
      category: "Asynchronous JavaScript",
      sheet: [
        {
          snippet: "setTimeout(() => {\n  // code\n}, delay);",
          sheetDesc: "Set timeout",
        },
        {
          snippet: "setInterval(() => {\n  // code\n}, interval);",
          sheetDesc: "Set interval",
        },
        {
          snippet:
            "const promise = new Promise((resolve, reject) => {\n  // code\n});",
          sheetDesc: "Create Promise",
        },
        {
          snippet:
            "promise.then(result => {\n  // code\n}).catch(error => {\n  // code\n});",
          sheetDesc: "Handle Promise",
        },
        {
          snippet:
            "async function asyncFunction() {\n  try {\n    const result = await promise;\n    // code\n  } catch (error) {\n    // code\n  }\n}",
          sheetDesc: "Async/Await",
        },
      ],
    },
    {
      category: "ES6+ Features",
      sheet: [
        {
          snippet: "`String with ${variable}`",
          sheetDesc: "Template literals",
        },
        {
          snippet: "const [a, b, ...rest] = array;",
          sheetDesc: "Array destructuring",
        },
        {
          snippet: "import { function1, function2 } from 'module';",
          sheetDesc: "Named imports",
        },
        {
          snippet: "export default function() { /* code */ }",
          sheetDesc: "Default export",
        },
        {
          snippet: "const newArray = [...array1, ...array2];",
          sheetDesc: "Spread operator (arrays)",
        },
        {
          snippet: "const { prop1, prop2: alias } = object;",
          sheetDesc: "Object destructuring with alias",
        },
      ],
    },
  ],
};
