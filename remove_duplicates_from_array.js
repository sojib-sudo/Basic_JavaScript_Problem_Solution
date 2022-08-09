function getUniqe(names) {
    const uniqe = [];
    for(let i = 0; i < names.length; i ++) {
        const name = names[i];
        if(uniqe.includes(name) === false){
            uniqe.push(name);
        }
    }

    return uniqe;
}

// console input
const prompt = require("prompt-sync")();
let array_length = prompt();
let array_elements = [];
for(let i = 0; i < array_length; i ++) {
    let x = prompt();
    array_elements.push(x);   
}

console.log(getUniqe(array_elements));