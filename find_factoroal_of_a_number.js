function factorial(n){
    if(n === 0) {
        console.log("The factorial of 0 is 1");
    } else if(n < 0) {
        console.log("Sorry, factorial does not exist for negative numbers");
    } else{
        let fact = 1;
        for(let i = 1; i <= n; i ++){
            fact = fact * i;
        }
        console.log("The factorial if ",n," is ", fact);
    }
}

//Prompt input
const prompt = require("prompt-sync")();
let num = prompt();
let x = parseInt(num);

//Function calling
factorial(x);