
function findOdd(A) {
    var count = 0;
    var odd;
    for(var i =0; i<A.length; i++){
        odd=A[i];
        for(var j = 0; j<A.length; j++){
            if(odd == A[j]){
                count++;
            }
        }
        if(count % 2!== 0 ){
            return odd;
        }
    }
}

