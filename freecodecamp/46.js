function amIWilson(p) {
    // check if prime is Wilson
    s=1;
    for(var i=1;i<(p-1);i++){
        s=i*s;
    }

    var res= (s + 1) / (p * p);
    if (res%2==0)
        return true;
    else return false;
}