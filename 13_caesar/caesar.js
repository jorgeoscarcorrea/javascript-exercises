const caesar = function (code, shift){
    let str = "";
    for (let i = 0; i < code.length; i++){
        let uniCode = code[i].charCodeAt();
        if (code[i] === "," || code[i] === " " || code[i] === "!"){
            str += code[i]
        }
        else if(shift>25 || shift< -25){
            if (shift % 25 === 0){
                str += String.fromCharCode(uniCode - (shift / 25))
            }
            else if (shift % 25 > 0){
                str += String.fromCharCode(uniCode - (1 + (shift % 25)))
            }
            else{
                str += String.fromCharCode(uniCode + (1 + (shift % 25)))
            }
            }
      
         else if (uniCode + shift < 65) {
           str += String.fromCharCode(((uniCode + shift)  - 64) + 90)
        }
        else if (uniCode + shift > 90 && uniCode + shift < 96 ){
            str += String.fromCharCode(((uniCode + shift)  - 91) + 65)
        }
        else {
        str += String.fromCharCode(uniCode + shift) 
        }
    }
    return str
}

// Do not edit below this line
module.exports = caesar;
