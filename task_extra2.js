function ipToInt(val) {
    var d = val%256;
    for (var i = 3; i > 0; i--) 
    { 
        val = Math.floor(val/256);
        d = val%256 + '.' + d;
    }
    return d;
}

console.log(ipToInt(2149583361));
console.log(ipToInt(32));
console.log(ipToInt(0));