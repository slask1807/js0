function mirrorImage(arr){
    //codnng here...
    for (var n=0; n<arr.length-1;n++){
        if (arr[n].toString().split('').reverse().join('')==arr[n+1].toString())
            return [arr[n],arr[n+1]]
    }
    return [-1,-1]}