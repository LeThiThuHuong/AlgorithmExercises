function searchNumberInArrWithKnownSum (arr, knownSum) {
    let sum;
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length - 1; j++) {
            sum =  arr[i] + arr[j];
            if (sum === knownSum) {
                return {value1: arr[i], value2: arr[j]};
                break;
            }
        }
    }
}
let a = [1,2,8,6,4,7];
console.log ( searchNumberInArrWithKnownSum (a, 10));