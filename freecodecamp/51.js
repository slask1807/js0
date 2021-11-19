function threeInOne(arr){
    arr9=arr.splice(0,3)
    arr2=arr.splice(0,3)
    arr3=arr.splice(0,3)
    function arrSum(arr){
        var s=0
        for (var i=0; i<arr.length;i++)
            s=arr[i]+s;
        var v=s
        return (s)}
    // arr3=arr.splice()
    if ((arrSum(arr2) || arrSum(arr3))==0)
        return ([arrSum(arr9)])
    if (arrSum(arr2)==0)
        return ([arrSum(arr9),arrSum(arr3)])
    if (arrSum(arr3)==0)
        return ([arrSum(arr9),arrSum(arr2)])
    else
        return ([arrSum(arr9),arrSum(arr2),arrSum(arr3)]) 