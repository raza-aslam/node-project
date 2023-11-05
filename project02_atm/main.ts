#!/usr/bin/env node

import inquirer from "inquirer";

interface anstype{
userid : string,
userpin : number,
accountype : string,
transtype: string,
amount : number,
};

type user = {
userid : string,
userpin : number,
};
let users : user[] = [
    {
    userid : "raza",
    userpin : 1234,
    },
    {
        userid : "uzair",
        userpin : 12345,
    },
    {
        
        userid : "aslam",
        userpin : 123456,
    },

] ;
let balance : number = Math.floor((Math.random()*100000));
let answer1: anstype;
let answer2: anstype;

startloop ();

async function startloop() {
    await getuserid();
    do{
        await gettransaction();
        var again = await inquirer.prompt([
            {
                name : "restart",
                type : "list",
                choices : ["yes","no"],
                message:("do you want to continue"), 
            }
        ]);
    }
while (again.restart == 'yes');
}
async function getuserid() {
    answer1 = await inquirer.prompt([
        {
            name : "userid",
            type : "input",
            message : ("pleaser enter your userid"),
        },
        {
            name : "userpin",
            type : "input",
            message : ("pleaser enter your userid"),
        }
    ]);
await checkuserid(answer1.userid, answer1.userpin);
}
async function checkuserid(userid : string, userpin : number) {
    let condition = false;
    for (let i=0; i <users.length; i++ ){
       if (userid === users[i].userid && userpin === users[i].userpin){
         condition = true;
        break;
    }
}
if(!condition){
console.log(`invalid user id or pin. try again.`);
await getuserid();
}
}
async function gettransaction() {
    answer2 = await inquirer.prompt([
        {
            name : "accounttype",
            type : "list",
            choices : ["current","saving"],
            message: ("please select account type") 
        },
        {
            name : "transtype",
            type : "list",
            choices : ["fast cash","withdraw"],
            message: ("please select account type") 
        },
        {
            name : "amount",
            type : "list",
            choices : ["5000","10000","25000","30000","35000"],
            message: `please select account type(Current balance is ${balance}) `,
            when(answer2){
                    return answer2.transtype == "fast cash"
                }
            
        },
             {
            name : "amount",
            type : "number",
            message: `please enter your amount(Current balance is ${balance}) `,
            when(answer2){
                    return answer2.transtype == "withdraw";
                }
            
        },
    ]);
    if(answer1.userid && answer1.userpin){
        if(answer2.amount<=balance){
            balance -= answer2.amount;
            console.log(`your current balance is: ${balance}`);
        }
        else{
            console.log(`insufficent balance${balance}`);
            
        }
    }
    
}
