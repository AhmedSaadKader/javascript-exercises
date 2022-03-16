const fibonacci = function(num) {
    if (num < 0){
        return "OOPS"
    }
    let myArray = [1, 1];
    for (let i = 2; i < num; i++) {
        myArray[i] = myArray[i-1] + myArray[i-2];
    }
    return myArray[myArray.length-1]
};

// Do not edit below this line
module.exports = fibonacci;
