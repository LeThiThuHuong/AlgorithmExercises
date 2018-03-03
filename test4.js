var Arr = [5, 2, 3, 4, 9, 10, 5, 6, 7, 8, 9, 10, 11];
function findSubArr(Arr) {
    var start = 0;
    var startMax;
    var length = 0;
    var max = -1;
    for (var i = 0; i < Arr.length; i++) {
        if (Arr[i + 1] > Arr[i]) {
            length = length + 1;
        } else{
            if (length > max) {
                max = length;
                startMax = start;
            }
            start = i + 1;
            length = 1;
        }
       
    }
    return ({start: startMax, length: max});
}
console.log(findSubArr(Arr));