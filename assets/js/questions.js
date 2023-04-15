// list of all questions, choices, and answers
var questions = [
  {
    title:
      "What is the output of the following code snippet?\nconsole.log(1 + '2' + 3 + 4)",
    choices: ["'1234'", "'10'", "'234'", "'Invalid Expression'"],
    answer: "'1234'",
  },
  {
    title: "Which of the following is not a JavaScript reserved keyword?",
    choices: ["var", "let", "if", "use"],
    answer: "use",
  },
  {
    title:
      "What is the output of the following code snippet?\nconsole.log(2 ** 3)",
    choices: ["5", "6", "8", "None of the above"],
    answer: "8",
  },
  {
    title:
      "Which of the following is a correct way to declare a variable in JavaScript?",
    choices: ["variable x = 1;", "let y = 2;", "const z;", "var a = 'Hello';"],
    answer: "let y = 2;",
  },
  {
    title:
      "What is the output of the following code snippet?\nconsole.log(typeof null)",
    choices: ["'object'", "'null'", "'undefined'", "'boolean'"],
    answer: "'object'",
  },
  {
    title:
      "What is the output of the following code snippet?\nconsole.log(3 == '3')",
    choices: ["true", "false", "undefined", "NaN"],
    answer: "true",
  },
  {
    title:
      "What is the output of the following code snippet?\nconsole.log([1, 2, 3] + [4, 5, 6])",
    choices: ["'1,2,34,5,6'", "[1, 2, 3, 4, 5, 6]", "'1,2,3,4,5,6'", "NaN"],
    answer: "'1,2,3,4,5,6'",
  },
  {
    title: "Which of the following is not a valid JavaScript data type?",
    choices: ["Boolean", "Number", "Date", "DateTime"],
    answer: "DateTime",
  },
  {
    title:
      "What is the output of the following code snippet?\nconsole.log(typeof function() {})",
    choices: ["'object'", "'function'", "'undefined'", "'null'"],
    answer: "'function'",
  },
  {
    title:
      "Which of the following is a correct way to check if a variable is an array in JavaScript?",
    choices: [
      "Array.isArray(myArray)",
      "myArray.isArray()",
      "typeof myArray === 'array'",
      "myArray instanceof Array",
    ],
    answer: "Array.isArray(myArray)",
  },
];
