// Declare the myGlobal variable below this line


function fun1() {

    oopsGlobal = 5;
    // Assign 5 to oopsGlobal Here
}
const myGlobal = 10;
// Only change code above this line

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}