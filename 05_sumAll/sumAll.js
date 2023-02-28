function sumAll(x, y) {
    if (x < 0 || y < 0 || Number.isInteger(x) === false || Number.isInteger(y) === false) { 
        return "ERROR"
     } 
     else { 
        let arr = [];
        if (x > y) {
            while(y < x+1){
                arr.push(y++);
         }
     }
     else if (x < y){
         while(x < y+1){
                arr.push(x++);
         }
      }
         let sum = 0
         for (let i = 0; i < arr.length; i ++) {
             sum += arr[i];
            
            }
            return sum 
    }
}

// Do not edit below this line
module.exports = sumAll;
