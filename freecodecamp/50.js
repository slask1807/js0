function removeOdd(arr){
    //remove odd number of arr
    for (var i=arr.length;i>=0;i--)
        if (arr[i]%2) arr.splice(i,1)
    return arr;
}
console.log(removeOdd([1,2,3,4,5]))   //output: [ 2, 4 ]
console.log(removeOdd([1,3,5,7,9]))   //output: []