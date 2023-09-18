/*
Author: Peiyu HUang
Date: Sep 14/2023
Description: Program 1 – Weekly Loan Calculator
*/
"use strict";
var readlineSync = require("readline-sync");

// DO NOT EDIT: The main function to house our program code 
function main()
{
    //input
    //ensure the name after variable as simple as possible
    //add parseInt take string return number
    console.log("Weekly Loan Caculator\n");
    var aLoan = parseInt(readlineSync.question("Enter the amount of loan: "));
    var rRate = parseInt(readlineSync.question("Enter the interest rate (%): "));
    var nYears = parseInt(readlineSync.question("Enter the number of years: "));
    console.log('  ')

    //process
    //no need to calculate the formula, just type in what have wriiten
    let payWeek = rRate / 5200 * aLoan / (1-(1+rRate/5200)**(-52*nYears))

    //output
    //renew as ES6 Template
    console.log(`Your weekly payment will be: ${payWeek.toFixed(2)}`);


}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}