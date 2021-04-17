//Deel 1
const age = 25;
//Deel 2
const isFemale = true;
//Deel 3
const driverStatus = "bob";
//Deel 2 (volgende opdracht)
const nameCustomer = "sarah";
//Deel 3 (volgende opdracht)
const totalAmount = 100;

/* //Testdata:
//Deel 1
const age = 17;
//Deel 2
const isFemale = false;
//Deel 3
const driverStatus = "no bob"; 
//Deel 2 (volgende opdracht)
const nameCustomer = "Karel";
//Deel 3 (volgende opdracht)
const totalAmount = 99;*/

if (age >= 18) {
    console.log("Come inside, Please!");
} else {
    console.log("Sorry, you are too young to come inside!");
}

if (isFemale) {
    console.log("Free ticket, because it's Ladies Night!");
} else {
    console.log("Hello Sir, you can buy a ticket over there!");
}

if (driverStatus ==="bob") {
    console.log("Have a good night alcohol free, BOB!");
} else {
    console.log("Enjoy your drinks, but do not drive, when going home!");
}

//Deel 1 (volgende opdracht)
if (age >= 18 && age <= 25) {
    console.log("50% discount on your beers!");
} else {
    console.log("Sorry no 50% discount for you, but for your friends between 18-25 yrs. Let them buy you the beers tonight! ;-)");
}

//Deel 2 (volgende opdracht)
if (nameCustomer === "sarah" || nameCustomer === "bram" || nameCustomer === "abraham") {
    console.log("1 free beer, because of your name!");
} else {
    console.log("No free beer, because of your name!");
}

//Deel 3 (volgende opdracht)
if (totalAmount >= 25 && totalAmount <= 49) {
    console.log("Free portion of bitterballs!");
} else {
    console.log("No free portion of bitterballs!");
}
if (totalAmount >= 50 && totalAmount <= 99) {
    console.log("Free portion of Nachos!");
} else {
    console.log("No free portion of Nachos!");
}
if (totalAmount >= 100) {
    console.log("Free bottle of Champaign!");
} else {
    console.log("No free bottle of Champaign!");
}
