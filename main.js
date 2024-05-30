#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.greenBright("\n <<<<<<<<<<<<<<<<<<< QUIZ APP <<<<<<<<<<<<<<<<<<<<<<"));
const quiz = await inquirer.prompt([
    {
        type: "list",
        name: "question_1",
        message: "Q1: Who developed and designed TypeScript?",
        choices: ["Amazon", "Oracle", "Microsoft", "TypeScript"]
    },
    {
        type: "list",
        name: "question_2",
        message: "Q2: Which of the following characters is commonly allowed in variable names in TypeScript?",
        choices: ["$", "@", "#", "&"]
    },
    {
        type: "list",
        name: "question_3",
        message: "Q3: What is the purpose of the inquirer module in TypeScript application?",
        choices: ["to handle HTTP requests", "tO create interactive command-line interfaces", "to manage database connections"]
    },
    {
        type: "list",
        name: "question_4",
        message: " Q4: What is the output of the following JavaScript?",
        choices: ["undefined", "null", "object", "string"]
    },
    { type: "list",
        name: "question_5",
        message: " Q5: What happen if you try to divide a number by zero in TypeScript?",
        choices: ["the result is zero", "the result is infinity", "the result is nan"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "Microsoft":
        console.log(chalk.bold.magentaBright("1. correct!"));
        ++score;
        break;
    default:
        console.log(chalk.bold.redBright("1.Incorrect!"));
}
switch (quiz.question_2) {
    case "$":
        console.log(chalk.bold.magentaBright("2. correct!"));
        ++score;
        break;
    default:
        console.log(chalk.bold.redBright("2.Incorrect!"));
}
switch (quiz.question_3) {
    case "tO create interactive command-line interfaces":
        console.log(chalk.bold.magentaBright("3. correct!"));
        ++score;
        break;
    default:
        console.log(chalk.bold.redBright("3.Incorrect!"));
}
switch (quiz.question_4) {
    case "object":
        console.log(chalk.bold.magentaBright("4. correct!"));
        ++score;
        break;
    default:
        console.log(chalk.bold.redBright("4.Incorrect!"));
}
switch (quiz.question_5) {
    case "the result is infinity":
        console.log(chalk.bold.magentaBright("5. correct!"));
        ++score;
        break;
    default:
        console.log(chalk.bold.redBright("5.Incorrect!"));
}
console.log(chalk.bold.bgBlueBright(`score: ${score}`));
console.log(chalk.bold.yellowBright("\n======================= QUIZ COMPLETE ===============================\n"));
