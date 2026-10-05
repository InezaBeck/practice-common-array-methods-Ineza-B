let drinks = ["tea", "juice", "coffee"];
let pastry = ["croissant", "beignet", "cinnamon roll"];

console.log("Number of drinks:", drinks.length);
console.log("Number of pastries:", pastry.length);

console.log("Combination 1:", pastry[0], "with", drinks[2]);
console.log("Combination 2:", pastry[1], "with", drinks[1]);
console.log("Combination 3:", pastry[2], "with", drinks[0]);

let drinkIndex = 1;
let pastryIndex = 1;
console.log("Selected order:", pastry[pastryIndex], "with", drinks[drinkIndex]);

console.log("All drinks:");
for (let i = 0; i < drinks.length; i++) {
    console.log(drinks[i]);
}

drinks[drinks.length] = "flat white";
console.log("Updated number of drinks:", drinks.length);