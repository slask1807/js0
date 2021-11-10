var ser = function fiveLine(s){
    var s=s.trim();
    //coding here...
    let arr=[s];
    var n=s;
    for (var i=0;i<4;i++){
        arr.push (s=s+n);

    }
    return arr.join("\n");
    //return (`${n}${"\n"}${s}`)
}

console.log(ser("a"));