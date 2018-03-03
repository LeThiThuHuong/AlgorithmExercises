var Arr = [2, 1, 1, 1, 2, 1, 2, 2, 1, 2, 1];
var constg;
var Arr1 = [];
var Arr2 = [];
for (var i = 0; i < Arr.length; i++) {
    if (Arr[i] === 1) {
         Arr1.push(Arr[i]);
    } else {
        Arr2.push(Arr[i]);
    }
}

console.log(Arr1.concat(Arr2));

