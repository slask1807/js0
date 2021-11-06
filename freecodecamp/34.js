function cutIt(arr){
    //coding here...
    arr1=[];
    var num = Math.min(...arr.map(({ length }) => length));

    for (var i=0;i<arr.length;i++){
        arr1.push(arr[i].slice(0,num))

    }
    return arr1;
}