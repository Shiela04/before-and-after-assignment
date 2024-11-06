let number = 456.456;
console.group("before:", number);

let preciseNumber = number.toPrecision(5);
console.log("after:", preciseNumber);
