const palindromes = function (string) {
    let noPunc = string.replace(/[^\w\s\']|_/g, "");
    let str = noPunc.replace(/\s/g,'')
    let reverseStr = str.split("").reverse().join("");
    let solution = str.toLowerCase() === reverseStr.toLowerCase()
    console.log(str)
    console.log(reverseStr)
    return solution;
    };
// Do not edit below this line
module.exports = palindromes;
