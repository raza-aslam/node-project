import inquirer from "inquirer";
let todo = [];
let loop = true;
async function gettodos() {
    let answer = await inquirer.prompt([
        {
            name: "raza",
            type: "input",
            message: "enter your todo list"
        },
    ]);
    let { raza } = answer;
    todo.push(raza);
}
startloop();
async function startloop() {
    do {
        await gettodos();
        var again = await inquirer.prompt([
            {
                name: "zaryab",
                type: "list",
                choices: ["yes", "no"],
                message: ("Do you like add more")
            },
        ]);
    } while (again.zaryab === "yes");
    console.log("Your to-do list:");
    todo.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo}`);
    });
}
