function grabDoll(dolls){
    var bag=[];
    //coding here
    for (let i=0; i<dolls.length; i++){
        if (dolls[i]=="Barbie doll")
            bag.push(dolls[i]);

        if (dolls[i]=="Hello Kitty")
            bag.push(dolls[i]);


        else continue;

        if (bag.length==3) break;

    }

    return bag;
}