#!/ usr/bin/env node
import inquirer from "inquirer";
console.log("\n\twelcome to Rabiawaheed -cli Number guessing Game");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userguessedNumber",
        type: "number",
        message: "Enter your guessed number(Number limit from 1 t0 5:)",
    },
]);
if (answer.userguessedNumber === randomNumber) {
    console.log("congratulation !you guess a correct Number");
}
else {
    console.log("sorry,you guess a wrong Number");
    ``;
}
