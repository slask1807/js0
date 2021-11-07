function firstToLast(str,c){
    //coding here..
    str1 = [...str];
    var s=0;
    for (var i=0;i<str1.length;i++){
        if (str1[i]==c)
            s++

    }
    if (s>1)
        return s;
    if(s==1) return 0;
    else return -1;

}