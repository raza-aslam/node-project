import inquirer from "inquirer"
type quiz = {
question1 : string;
question2: string;
question3 : string;
question4 : string;
question5 : string;
}
async function quiz2() {
    let quiz : {
        question1: string,
        question2:string,
        question3:string,
        question4 : string,
        question5 : string,

    }
     = await inquirer.prompt([
        {
            name: "question1",
            type:"input",
            message: "Q:1# How many state in pakistan?"
        },
        {
            name: "question2",
            type:"input",
            message: "Q:2# Which is the city of Pakistan?"
        },
        {
            name: "question3",
            type:"input",
            message: "Q:3# which city is called city of lights in pakistan?"
        },      
        {
            name: "question4",
            type:"input",
             message: "Q:4# How many days are there in a week?"
        },      
        {
            name: "question5",
            type:"input",
            message: "Q:5# How many days are there in a year?"
        },
    ])
    let {question1,question2,question3,question4,question5} = quiz
    console.log(`Q:1# How many state in pakistan?:${question1}`);
    console.log(`Q:2# Which is the city of Pakistan?${question2}`);
    console.log(`Q:3# which city is called city of lights in pakistan?:${question3}`);
    console.log(`Q:4# How many days are there in a week?:${question4}`);
    console.log(`Q:5# How many days are there in a year?:${question5}`);
}
quiz2()