/*
Author: Peiyu Huang
Date: 
Description: 
*/
"use strict";
var readlineSync = require("readline-sync");

// DO NOT EDIT: The main function to house our program code 
function main()
{
  
    //input
    console.log("Hipster’s Local Vinyl Records - Customer Order Details");
    var custoName = readlineSync.question("Enter customer's name: ");
    var distance = readlineSync.question("Enter the distance in Kilometers for delivery: ");
    var cost = readlineSync.question("Enter the cost of cost of records purchased: ");

    //process
    var deliverCost = distance *15;
    var purchaseCost = cost *1.14; //plus tax
    var total = deliverCost + purchaseCost;

    //output
    console.log("Purchase summary for " + custoName);
    console.log("Delivery Cost:" + " $ " + deliverCost);
    console.log("Purchase Cost:" + " $ " + purchaseCost);
    console.log("Total Cost   :" + " $ " + total);

}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}