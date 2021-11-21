function isolateIt(arr){
    //coding here...
    return arr.map(x=>x.slice(0,x.length/2)+'|'+x.slice(-x.length/2))
    //return arr.slice(-2,1)
}