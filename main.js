#! /usr/bin/env node 
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operators to perform action",
        type: "list",
        name: "opreator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
// conditional statments //
if (answer.opreator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.opreator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.opreator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.opreator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please seleact yuor opreator");
}
