var A = [2,3, 493,74,58,3,2];
var sumLeft = 0;
var sumRight = 0;
var position;
for (var i = 0; i < A.length; i++) {
    sumLeft = sumLeft + A[i];
    sumRight = sumRight + A[A.length - 1 - i];
    if (sumLeft === sumRight) {
        positionLeft = i;
        positionRight = A.length - 1 - i;
        // break;
    } else {
        positionLeft = 'khong co vi tri thoa man';
        positionRight = 'khong co vi tri thoa man';
    }
}
console.log (positionLeft, positionRight);