function fibo(num){
    const f = [0, 1];
    for(let i = 2; i <= num; i ++) {
        f[i] = f[i-1] + f[i-2];
    }

    return f;
}

const prompt = require("prompt-sync")();
let number = prompt();

console.log(fibo(number));