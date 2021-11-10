function topSecret(str){
    var chars=str.split("");
    for(i=0;i<chars.length;i++){
        var tmp=chars[i].charCodeAt();
        if(tmp>67&&tmp<91||tmp>99&&tmp<123) tmp-=3;
        else{ if(tmp<68&&tmp>64||tmp<100&&tmp>96) tmp+=23;}
        chars[i]=String.fromCharCode(tmp); }
    return chars.join(""); } //

answer1="3796"; //question2: Super agent's name is...
answer2="VLwrtK"; //question3: He stole the treasure is...
answer3="Smelly socks";
