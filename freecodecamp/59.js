function tailAndHead(arr) {
    return arr.slice(1).map((x, i) => arr[i] % 10 + parseInt(x.toString().slice(0, 1))).reduce((a, b) => a * b); }