function trueOrFalse(val){
    if (Boolean(val) == true){
        return 'true';    
    } else {
        return 'false';
    }    
}

console.log(trueOrFalse(a>b));// "false";
console.log(trueOrFalse(a===b));// "false";
console.log(trueOrFalse(a<b));// "true";
console.log(trueOrFalse(a!==b));// "true";
console.log(trueOrFalse(b>c));// "true";
console.log(trueOrFalse(b===c));// "false";
console.log(trueOrFalse(b<c));// "false";
console.log(trueOrFalse(b!==c));// "true";
console.log(trueOrFalse(a===c));// "true";
console.log(trueOrFalse(a!==c));// "false";