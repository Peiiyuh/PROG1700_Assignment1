/*
Author: Peiyu Huang
Date: Sep 11/2023
Description: Program 1 – Hipster's Local Vinyl Records
*/
"use strict";
var readlineSync = require("readline-sync");

// DO NOT EDIT: The main function to house our program code 
function main()
{
  
    //input
    console.log("Hipster’s Local Vinyl Records - Customer Order Details\n"); //add new line
    var custoName = readlineSync.question("Enter customer's name: ");
    var distance = readlineSync.question("Enter the distance in Kilometers for delivery: ");
    var cost = readlineSync.question("Enter the cost of cost of records purchased: ");

    //process
    var deliverCost = distance *15;
    var purchaseCost = cost *1.14; //plus tax
    var total = deliverCost + purchaseCost;
    console.log("   "); //add new empty line

    //output
    console.log("Purchase summary for " + custoName);
    console.log("Delivery Cost:" + " $ " + deliverCost.toFixed(2));
    console.log("Purchase Cost:" + " $ " + purchaseCost.toFixed(2));
    console.log("Total Cost   :" + " $ " + total.toFixed(2));
    //add [.toFixed(#)] after #

}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}