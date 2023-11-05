#!/usr/bin/env node
import inquirer from "inquirer";
let converter = {
    "PKR": {
        "PKR": 1,
        "USD": 0.0035,
        "DIR": 0.013,
    },
    "USD": {
        "PKR": 282,
        "USD": 1,
        "DIR": 3.67,
    },
    "DIR": {
        "PKR": 76.81,
        "USD": 0.27,
        "DIR": 1,
    }
};
let answer = await inquirer.prompt([
    {
        name: "form",
        type: "list",
        choices: ["PKR", "USD", "DIR"],
        message: ("select your currency:")
    },
    {
        name: "to",
        type: "list",
        choices: ["PKR", "USD", "DIR"],
        message: ("choose your exchange currency:")
    },
    {
        name: "amount",
        type: "number",
        message: "enter your amount to exchange?"
    },
]);
let { form, to, amonut } = answer;
if (form && to && amonut) {
    let result = converter[form][to] * amonut;
    console.log(`you conversion amount from ${form} to ${to} is ${amonut}`);
}
else {
    console.log("invalid amount");
}
