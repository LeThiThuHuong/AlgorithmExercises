var A = [-9,1,2,-20,3,4,-5];
function sumFromLeftToRight(A) {
    var sumLeft = 0;
    var positionLeft;
    var sumLeftArr = [];
    for (var i = 0; i < A.length - 1; i++) {
        sumLeft = sumLeft + A[i];
        positionLeft = i;
        sumLeftArr.push({sumLeft: sumLeft, positionLeft: positionLeft});
    }
    return sumLeftArr;
}
console.log(sumFromLeftToRight(A));

function sumLeftMax(A) {
    var Arr = sumFromLeftToRight(A);
    var max = Arr[0].sumLeft;
    for (var i = 0; i < Arr.length; i++) {
        if (max < Arr[i].sumLeft) {
            max = Arr[i].sumLeft;
            positionLeft = Arr[i].positionLeft;
        }
    }
    return {max: max, positionLeft: positionLeft};
}
console.log(sumLeftMax(A));



function sumFromRightToLeft(A) {
    var positonRight;
    var sumRight = 0;
    var sumRightArr = [];
    for (var j = A.length - 1; j > 0; j--) {
        sumRight = sumRight + A[j];
        positonRight = j;
        sumRightArr.push({ sumRight: sumRight, positonRight: positonRight });
    }
    return sumRightArr;
}
console.log(sumFromRightToLeft(A));

function sumRightMax(A) {
    var Arr = sumFromRightToLeft(A);
    var max = Arr[0].sumRight;
    for (var i = 0; i < Arr.length; i++) {
        if (max < Arr[i].sumRight) {
            max = Arr[i].sumRight;
            positionRight = Arr[i].positonRight;
        }
    }
    return {max: max, positionRight: positionRight} ;
}
console.log(sumRightMax(A));


var sumLeftMax = sumLeftMax (A);
var sumRightMax = sumRightMax (A);
var position;
var sum = 0;
var subArrObtainMaxSum = [];
if (sumLeftMax.max > sumRightMax.max) {
    position = sumLeftMax.positionLeft;
} else {
    position = sumRightMax.positionRight;
}
for (var i = position; i < A.length; i++) {
    sum = sum + A[i];
    subArrObtainMaxSum.push({sum: sum, position: i});
}
console.log(subArrObtainMaxSum);
