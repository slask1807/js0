function countGrade(scores) {
    var result = {};
    result.S = scores.filter(n => n === 100).length;
    result.A = scores.filter(n => n < 100 && n >= 90).length;
    result.B = scores.filter(n => n < 90 && n >= 80).length;
    result.C = scores.filter(n => n < 80 && n >= 60).length;
    result.D = scores.filter(n => n < 60 && n >= 0).length;
    result.X = scores.filter(n => n === -1).length;
    return result; }