function colorOf(r,g,b){
    let r1 = r.toString(16);
    console.log(r1);
    let g1 = g.toString(16);
    console.log(g1);
    let b1 = b.toString(16);
    console.log(b1);
    if (r1.length<2)
    {
        r1 = "0"+r1; }
    if (g1.length< 2)
    {
        g1 = "0"+g1;
    }
    if (b1.length<2)
    {
        b1 = "0"+b1;
    }
    return "#"+r1+g1+b1;
}