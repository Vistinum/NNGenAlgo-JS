function randomIntFromInterval(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

var DiscreteNodeInitFunctions = [
    function() {return Math.random();},
    function() {return Math.random() * (Math.pow(10,Math.random()))},
];

var BinaryCombinatorFunctions = [
    //function(val1,val2) { return val1 || val2 },
    //function(val1,val2) { return val1 && val2 },
    //function(val1,val2) { return val1 ^ val2 },
    function(val1,val2) {return val2 ? 1 : -1;},
    function(val1,val2) {return val2 ? 1 : -1;},
];

var BinaryToBinaryConnectionFunctions = [
    function(val,coef) { return val ? 1 : -1 },
    function(val,coef) { return val ? -1 : 1 },
];

var DiscreteToBinaryConnectionFunctions = [
    function(val,coef) { return val > coef ? 1 : -1 },
    function(val,coef) { return val < coef ? 1 : -1 },
    function(val,coef) { return val == coef ? 1 : -1 }
];

var DiscreteCombinatorFunctions = [
    function(val1,val2) { return val1 * val2 },
    function(val1,val2) { return val1 / val2 },
    function(val1,val2) { return val1 + val2 },
    function(val1,val2) { return val1 - val2 },
    function(val1,val2) { return val1 & val2 },
    function(val1,val2) { return Math.pow(val1,val2) },
];

var DiscreteToDescreteConnectionFunctions = [
    function(val,coef) { return val * val },
    function(val,coef) { return val * coef },
    function(val,coef) { return val / coef },
    function(val,coef) { return coef / val },
    function(val,coef) { return val + coef },
    function(val,coef) { return val - coef },
    function(val,coef) { return coef - val },
    function(val,coef) { return val % coef },
    function(val,coef) { return coef % val },
    function(val,coef) { return Math.pow(val, coef)},
    function(val,coef) { return Math.pow(coef, val)},
    function(val,coef) { return val },
    function(val,coef) { return coef }
];