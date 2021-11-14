function shuffleIt(arr,...a){
    for (let i=0;i<a.length;i++){
        let [c,b]= a[i];
        [arr[c], arr[b]]=[arr[b], arr[c]];
    }
    return arr;
    //coding here...

}