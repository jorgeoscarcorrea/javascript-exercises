function removeFromArray (arr, ...args) {
    let arrayLength = args.length;
    for (let i = 0; i < arrayLength; i++) {
        let x = args[i]
    const index = arr.findIndex((element) => element === x)
    if (index !== -1) {
        arr.splice(index, 1)
    }
    }
    return arr
}
//Do not edit below this line
module.exports = removeFromArray;