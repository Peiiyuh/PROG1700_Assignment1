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
    //input
    console.log("Imperial To Metric Conversion\n");
    var numTon = readlineSync.question("Enter the numebr of tons: ");
    var numSto = readlineSync.question("Enter the number of stone: ");
    var numLB = readlineSync.question("Enter the number of pounds: ");
    var numOns = readlineSync.question("Enter the number of ounces: ");
    console.log("    ")

    //process
    var talOns = numTon*35840 + numSto*224 + numLB*16 + numOns*1; //should make it as math method otherwise apear erros
    var talKilo = talOns/35.274; //ex:5/20/2/4 5208.25537
    var metTon = parseInt(talKilo/1000); //5
    var kilos = parseInt(talKilo%1000); //208
    //var grams = ((talKilo % 1)*1000).toFixed(1); another opt

    //output
    console.log("The metric weight is " + metTon + " metric tons, " + kilos + " kilos, and " + ((talKilo-parseInt(talKilo))*1000).toFixed(1) + " grams.");
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}