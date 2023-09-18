/*
Author: Peiyu HUang
Date: Sep 12/2023
Description: Program 1 – Imperial to Metric Conversion
*/
"use strict";
var readlineSync = require("readline-sync");


// DO NOT EDIT: The main function to house our program code 
function main()
{
    console.log("Imperial To Metric Conversion\n");
    //input
    //add parseInt to take string return to number!!
    var numTon = parseInt(readlineSync.question("Enter the numebr of tons: "));
    var numSto = parseInt(readlineSync.question("Enter the number of stone: "));
    var numLB = parseInt(readlineSync.question("Enter the number of pounds: "));
    var numOns = parseInt(readlineSync.question("Enter the number of ounces: "));
    console.log("    ")

    //proces
    //example: 5.20.2.4 --5208.25537
    var talOns = numTon * 35840 + numSto * 224 + numLB * 16 + numOns; 
    var talKilo = talOns / 35.274; 
    var metTon = parseInt(talKilo / 1000); 
    var kilos = parseInt(talKilo % 1000); 
    // original: ((talKilo-parseInt(talKilo))*1000).toFixed(1)
    var grams = ((talKilo % 1)*1000).toFixed(1); 

    //output
    console.log(`The metric weight is ${metTon} metric tons, ${kilos} kilos, and ${grams} grams.`);
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}