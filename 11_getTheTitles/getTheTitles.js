const getTheTitles = function(arrayOfObjects) {
    let titleArray = arrayOfObjects.map(book => book.title)
    return titleArray
};

// Do not edit below this line
module.exports = getTheTitles;
