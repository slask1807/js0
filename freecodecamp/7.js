// expressionMatter (2,1,2);
// function expressionMatter(a, b, c) {
//     let Res1=return a*(b+c);
//     let Res2=return a*b*c;
//     Let Res3 = return a+b*c;
//     const array = [Res1,Res2,Res3];
//     return Math.max.apply(null,array);



    function arrayMax(array) {
        let Res1= a*(b+c);
        let Res2= a*b*c;
        let Res3= a+b*c;
        let Res4= (a+b)*c;
        return array.reduce(function(Res1,Res2,Res3,Res4) {
            return Math.max(Res1,Res2,Res3,Res4);
        });
    }