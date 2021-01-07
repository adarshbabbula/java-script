// Normal Funtions:
function multiply1(no1, no2) {
    return no1 * no2;
}
console.log(multiply1(2, 5));

function hello1(value) {
    return "Hello " + value;
}
console.log(hello1("Normal Function"));
// Arrow Functions:
multiply2 = (no1, no2) => no1 * no2; 
console.log(multiply2(4,6));

hello = (value) => "Hello " + value;
console.log(hello("Arrow Function"));