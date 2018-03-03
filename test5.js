function duplicate (Arr) {
    var object = {};
    for (var i = 0; i < Arr.length; i++) {
        if (object[Arr[i]]) {
            console.log (object[Arr[i]]);
            object[Arr[i]] = object[Arr[i]] + 1;
        } else {
            object[Arr[i]] = 1;
        }
    }
return object;
}
var Arr = [1, 2, 3, 2, 4, 3, 1, 2, 5, 6, 7, 1, 2, 8, 7, 4];
console.log(duplicate(Arr));

