function firstToLast(str,c){
    //coding here..
    //return u;
    var firstindex = str.indexOf(c);
    var lastindex = str.lastIndexOf(c);
    if (firstindex===-1)
        return -1;
    else
        return (lastindex-firstindex);
}