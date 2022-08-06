function getOddSum(nums) {
    let sum = 0;
    for(let i = 0; i < nums.length; i ++){
        if(nums[i] % 2 !== 0) {
            sum += nums[i];
        }
    }
    return sum;
}

//Prompt input
const prompt = require("prompt-sync")();

//Length of array
let arrayL = prompt();
let numbers = [];

for(let i = 0; i < arrayL; i ++){
    const a = prompt();
    const x = parseInt(a);
    numbers.push(x);
}
console.log("Sum of odd numbers from array is: ",getOddSum(numbers));