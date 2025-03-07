#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "Multiplication", "Division"],
  },
]);

// conditional statement
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log("Please select valid operator")
}
