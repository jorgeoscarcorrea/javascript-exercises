function repeatString(str , num) {
    if(num < 0){
        return "ERROR"
    }
    else {
    let result = ""
    for (let i = 0; i < num; i +=1 ){
        result += str;

    }
    return result;
}
}



// Do not edit below this line
module.exports = repeatString;
