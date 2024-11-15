const removeFromArray = function(arr, ...Args) {
    for (let index = 0; index < arr.length; index++) {
        for (const arg of Args) {
            if (arr[index] === arg) {
                arr.splice(index, 1);
                index--;
            }
        }
    }
    return arr;
};

removeFromArray([1,2,3,4],3,2);
// Do not edit below this line
module.exports = removeFromArray;
