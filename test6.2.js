var A = [2,3, 493,74,58,3,2];

function createLeftSumArr(A) {
    var sumLeft = 0;
    var positionLeft;
    var object1 = [];
    for (var i = 0; i < A.length; i++) {
        sumLeft = sumLeft + A[i];
        positionLeft = i;
        object1.push({sumLeft: sumLeft, positionLeft: positionLeft});
    }
    return object1;
}

function createRightSumArr(A) {
    var positonRight;
    var sumRight = 0;
    var object2 = [];
    for (var j = A.length - 1; j > -1; j--) {
        sumRight = sumRight + A[j];
        positonRight = j;
        object2.push({sumRight: sumRight, positonRight: positonRight});
    }
    return object2;
}

var object1 = createLeftSumArr(A);
var object2 = createRightSumArr(A);
var object;
console.log(object1, 
    object2);

for (var i = 0; i < object1.length; i++) {
    if (object1[i].sumLeft === object2[i].sumRight) {
        object = {sumLeft: object1[i].sumLeft, positionLeft: object1[i].positionLeft, sumRight: object2[i].sumRight, positonRight: object2[i].positonRight};
        break;
    } else {
        object = {result: 'khong co vi tri thoa man'};
    }
}

console.log(object);