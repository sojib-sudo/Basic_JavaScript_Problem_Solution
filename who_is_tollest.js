function getMax(nums) {
    for(let i = 1; i < nums.length; i ++) {
        if(nums[0] < nums[i]) {
            nums[0] = nums[i];
        }
    }

    return nums[0];
}


const prompt = require("prompt-sync")();
let arrayLength = prompt();
let a;
let numbers = [];
for(let i = 0; i < arrayLength; i ++) {
    a = prompt();
    var x = parseInt(a);
    numbers.push(x);
}

// Calling dunction
let tollest = getMax(numbers);
console.log(tollest);