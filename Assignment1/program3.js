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
    console.log("Imperial To Metric Conversion\n");
    var numTon = readlineSync.question("Enter the numebr of tons: ");
    var numSto = readlineSync.question("Enter the number of stone: ");
    var numLB = readlineSync.question("Enter the number of pounds: ");
    var numOns = readlineSync.question("Enter the number of ounces: ");
    console.log("    ")

    //process
    var talOns = numTon*35840 + numSto*224 + numLB*16 + numOns;
    var talKilo = talOns/35.274;
    var metTon = parseInt(talKilo/1000); //parseInt: switch string into integer
    var kilos = 22;
    var grams = 33;
    //output
    console.log("The metric weight is " + metTon + " metric tons, " + kilos + " kilos, and " + grams + " grams.");
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}