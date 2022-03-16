const palindromes = function (string) {

    string = string.split(" ").join("").toLowerCase().replace(/[^a-zA-Z]/g, '')
    let first_letter_index = 0;
    let last_letter_index = string.length - 1;
    for (let i = 0; i < string.length/2; i++) {
        a = string[first_letter_index]
        b = string[last_letter_index]
        if (string[first_letter_index] === string[last_letter_index]){
            first_letter_index += 1;
            last_letter_index -=1 ;
        }else {
            return false
        }        
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
