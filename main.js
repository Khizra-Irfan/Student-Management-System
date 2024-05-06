#! /usr/bin/env node
import inquirer from "inquirer";
const random_number = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let detailOfstudents = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: "Enter student name: ",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please Enter a non-empty value.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "Select the courses to enroll",
        choices: ["HTML", "CSS", "Javascript", "MS Excel", "Python"],
    },
]);
const tutionFee = {
    "HTML": 2000,
    "CSS": 3000,
    "Javascript": 4000,
    "MS Excel": 2500,
    "Python": 6000,
};
console.log(`\nTution Fees: ${tutionFee[detailOfstudents.courses]}\n`);
console.log(`Balance: ${myBalance}\n`);
const paymentMethod = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select your payment method",
        choices: ["Jazz Cash", "Easy Paisa", "Bank Transfer"],
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer money: ",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value";
        },
    },
]);
console.log(`\nYou selected payment method ${paymentMethod.payment}`);
const tutionFees = tutionFee[detailOfstudents.courses];
const paymentType = parseFloat(paymentMethod.amount); //parsefloat() is used to convert string into a number like it changes payment method into an amount.
if (tutionFees === paymentType) {
    console.log(`Congratulation! You have successfully enrolled in ${detailOfstudents.courses}.\n`);
}
else {
    console.log("Invalid amount due to course.\n");
}
;
let answer = await inquirer.prompt([
    {
        name: "selection",
        type: "list",
        message: "What would you like to do next?",
        choices: ["View Status", "Exit"],
    },
]);
if (answer.selection === "View Status") {
    console.log("\n*****Your Status*****");
    console.log(`Student Name: ${detailOfstudents.student}`);
    console.log(`Student ID: ${random_number}`);
    console.log(`Course: ${detailOfstudents.courses}`);
    console.log(`Tution Fees: ${paymentType}`);
    console.log(`Balance: ${myBalance += paymentType}`);
}
