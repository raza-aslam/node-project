#!/usr/bin/env node
import { log } from "console";
import inquirer from "inquirer";
let answer :{
    sentence : string,
} = await inquirer.prompt([{
    name :   "sentence",
    type : "input",
    message : ("enter your sentence")
}
])
let result = answer.sentence.length;
console.log( `you word count is ${result}`);
