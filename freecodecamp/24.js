function findOdd(A) {
    var count;
    var odd = 0;
    for (let i=1; i<A.lenght; i++){
        count= A[i];
        for (let j=1;j<A.length; j++){
            if (A[j]==count){
                odd++;
            }}
        if (odd%2!==0){
            return count;
        }}