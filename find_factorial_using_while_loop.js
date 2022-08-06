function fact(num){
    let n = 1;
    let result = 1;
    while(n <= num){
        result *= n;
        n++;
    }
    return result;
}

const prompt = require("prompt-sync")();
let number = prompt();
let x = parseInt(number); //Converted into int
console.log("Factorial of ", x," is ", fact(x));