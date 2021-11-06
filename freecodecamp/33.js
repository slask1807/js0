
function howManySmaller(arr,n){
    //coding here.
    sum=0;
    for (i=0;i<arr.length;i++){
        if (arr[i].toFixed(2) < n)
            sum++;
    }
    return sum;
}
