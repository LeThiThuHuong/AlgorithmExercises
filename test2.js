var Arr = [3, -1, -2, 3, 4, 5, 6, 8, 2];
var start;
var end;
var sum;
for (var i = 0; i < Arr.length; i++) {
    sum = Arr[i];
    for (var j = i + 1; j < Arr.length; j++) {
        sum = sum + Arr[j];
        if (sum === 0) {
            start = i;
            end = j;
            break;
        }
    }
}
console.log (start, end);