Array.prototype.filter = function (func) {
    const num = [];
    for (var i = 0; i < this.length; i++) {
        if (func(this[i])){
            num.push(this[i]);
        }}
    return num }