function getRev(str){
    let rev = '';
    for(let i = str.length-1; i >= 0; i --) {
        rev += str[i];
    }
    return rev;
}

const prompt = require("prompt-sync")();
let myString = prompt();

console.log(getRev(myString));


// we can also get words reverse
console.error("This is words reverse: ");
function wordsReverse(str2) {
    const words = str2.split(' ');
    const revWords = [];
    for(let i = words.length-1; i >= 0; i --) {
        revWords.push(words[i]);
    }
    return revWords.join(' ');
}

console.log(wordsReverse(myString));