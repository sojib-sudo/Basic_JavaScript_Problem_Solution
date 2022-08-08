function maxPoint(a, b, c) {
    if(a > b && a > c) {
        return a;
    } else if(b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

const prompt = require("prompt-sync")();
let person1 = prompt();
let x = parseInt(person1);

let person2 = prompt();
let y = parseInt(person2);

let person3 = prompt();
let z = parseInt(person3);

const winner = maxPoint(x, y, z);
if(winner === x) {
    console.log("Jim");
} else if(winner === y) {
    console.log("Dela");
} else{
    console.log("Chinku");
}

