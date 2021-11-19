function startingMark(bodyHeight){
    var z = (10.67 - 9.45) / (1.83 - 1.52);
    return Math.round((10.67 + z * bodyHeight - z * 1.83) * 100) / 100;}