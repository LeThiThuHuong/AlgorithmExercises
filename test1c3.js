var A = [1, 2, 8, 4, 6, 2, 1, 7, 8, 0, 6, 1, 1, 2, 2, 6, 6, 4];
function toObject(Arr) {
    var frequency = {};
    for (var i = 0; i < Arr.length; i++) {
        frequency[A[i]] = frequency[A[i]] ? frequency[A[i]] + 1 : 1;
    }
    return frequency;
}
// console.log(toObject(A));

function findNumber (Arr, sum) {
    var newArr = toObject(Arr);
    console.log(newArr);
    for (var i = 0; i < Arr.length; i++) {
        if (newArr[sum - Arr[i]] > 0) {
            return (newArr[sum - Arr[i]]);
        }
    }
}
console.log (findNumber(A,10));