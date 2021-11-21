 var arr=[1,2,3,4,5,6,100,999,1,1]
// arr.sort((a,b)=>{
//     //if (a%2==b%2) return a-b;
//     if (a>b) return 1;
//     if (a<b) return -1;
//     if (a=b)
//     return 1;
// })
// console.log(arr.reverse())

function sortIt(arr){ var res = Array.from(arr);
    res.sort((a,b) => { var n = arr.filter(x => x === a).length;
        var m = arr.filter(y => y === b).length;
        if (n === m) {return b - a}
        else {return n - m} });
    return res; }

 console.log(sortIt(arr))