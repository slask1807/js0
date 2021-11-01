function padIt(str,n){
    //coding here
    var sum="a";
    var str="*",cont=1;
    while (cont<=n){
        if (cont%2==0){
            sum=sum+str;
        }
        if (cont%2!==0){sum=str+sum;
        }
        cont++ }
    return sum;
}