// before
let number = 456.456789;
console.group("before:", number);

// used built-in method toPrecision(total number of digits) to control the n umber of digits to show
let preciseNumber = number.toPrecision(5);
console.log("after:", preciseNumber);
