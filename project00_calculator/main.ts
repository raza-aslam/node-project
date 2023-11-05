#!/usr/bin/env node
//import {sum}from "./main.js"

import { log } from "console";
import inquirer from "inquirer"

const answers: {
    num1 : number;
    num2 : number;
    operator : string;
} = await inquirer.prompt([
{
    message: "enter your number",
    type: "number",
    name: "num1",
},

{
    message: "enter your number",
    type: "number",
    name: "num2",
},

{
    message: "select operator",
    type:  "list",
    choices : ["+", "-", "/", "*"],
    name : "operator",

},

]);
console.log(answers);



const {num1, num2, operator } = answers;

if(num1 && num2 && operator){
    let result = 0;

if(operator === "+"){

        result = num1 + num2
    }

   else if(operator === "-"){

        result = num1 - num2

    }


    if(operator === "*"){

        result = num1 * num2

    }
    
    if(operator === "/"){

        result = num1 / num2

    }
    
    console.log("your result is :", result);
    
}

else{
    console.log("enter your valid numder")
}
