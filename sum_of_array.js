function getSumOfArray(nums){
    let sum = 0;
    for(let i = 0; i < nums.length; i ++){
        sum = sum + nums[i];
    }
    return sum;
}

//promt input
const prompt = require ("prompt-sync")();
let arrayLength = prompt();

//Array elemnts input
let a;
let numbers = [];
for(let i = 0; i < arrayLength; i ++){
    a = prompt();
    var x = parseInt(a);
    numbers.push(x);
}
console.log("Sum of arry is: ",getSumOfArray(numbers));
