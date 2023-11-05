#!/usr/bin/env node
import inquirer from "inquirer";
let score = 0;
async function startLoop() {
    let again;
    do {
        await guessNumber();
        again = await inquirer.prompt([
            {
                name: "restart",
                type: "list",
                choices: ["yes", "no"],
                message: "Do you want to continue: "
            }
        ]);
    } while (again.restart === "yes");
}
startLoop();
async function guessNumber() {
    let guessNum = Math.floor(Math.random() * 10);
    let tip;
    if (guessNum % 2 == 0) {
        tip = "Number is even";
    }
    else {
        tip = "number is odd";
    }
    const answer = await inquirer.prompt([
        {
            name: "userguess",
            type: "number",
            message: `guess a number between 1 to 10 (${tip})`,
        }
    ]);
    console.log(`Your Guess ${answer.userguess} and system generater ${guessNum} `);
    if (answer.userguess === guessNum) {
        score++;
        console.log(`congratulation your answer is correct.your score is ${score}. better luck nexttime.`);
    }
}
