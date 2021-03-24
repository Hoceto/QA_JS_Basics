function digitalRoot(num){
    return num - 9*Math.floor((num-1)/9);
}

console.log(digitalRoot(16));
console.log(digitalRoot(942));
console.log(digitalRoot(132189));
console.log(digitalRoot(493193));