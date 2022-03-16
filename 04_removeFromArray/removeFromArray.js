const removeFromArray = function(myArray, ...args) {
    args.forEach(element=>{
        for (let i = 0; i < myArray.length; i++) {
            if (element === myArray[i]){
                myArray.splice(i, 1)
                console.log(myArray);
            }
        }
    })
    console.log(myArray)
    return myArray
};

// Do not edit below this line
module.exports = removeFromArray;
