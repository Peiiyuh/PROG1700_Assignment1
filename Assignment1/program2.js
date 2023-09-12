/*
Author: Peiyu HUang
Date: 
Description: 
*/
"use strict";
var readlineSync = require("readline-sync");

// DO NOT EDIT: The main function to house our program code 
function main()
{
    //input
    console.log("Weekly Loan Caculator\n");
    var amouLoan = readlineSync.question("Enter the amount of loan: ");
    var inteRate = readlineSync.question("Enter the interest rate (%): ");
    var numyears = readlineSync.question("Enter the number of years: ");
    console.log('  ')

    //process


    //output
    console.log("Your weekly payment will be: ");


}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}