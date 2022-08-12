function getFact(i) {
    if(i === 1) {
        return 1;
    }

    return i * getFact(i-1);
}

const prompt = require("prompt-sync")();
let num = prompt();

console.log(getFact(num));

