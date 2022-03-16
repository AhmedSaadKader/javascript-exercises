const sumAll = function(num_first, num_second) {
    let num_large, num_small;

    if (num_first < 0 || num_second < 0){
        return "ERROR"
    } else if (typeof(num_first) !== "number" || typeof(num_second) !== 'number' ){
        return "ERROR"
    }

    if (num_second > num_first){
        num_large = num_second
        num_small = num_first
    } else if ( num_first > num_second) {
        num_large = num_first
        num_small = num_second
    } else {
        return num_first + num_second
    }

    let difference = num_large - num_small;
    let sum = num_large;
    for (let i = 1; i <= difference; i++) {
        let intermediate_num = num_large - i;
        sum += intermediate_num;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
