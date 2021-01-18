var str = "Is this all there is?";
var patt = /is/g;
console.log(str.match(patt));
console.log(patt.global);

patt = /is/gi;
console.log(str.match(patt));

str = "\nIs th\nis it?";
patt = /^is/gmi;
console.log(str.match(patt));

str = "1, 100 or 1000?";
patt = /10*/g;
console.log(str.match(patt));

patt = /10?/g;
console.log(str.match(patt));

patt = /\d{3,4}/g;
console.log(str.match(patt));

str = "Give 100%!";
patt = /\W/g;
console.log(str.match(patt));

str = "Is this all there is?";
patt = /\S/g;
console.log(str.match(patt));

str = "Visit W3Schools. Hello World!";
patt = /\u0057/g;
console.log(str.match(patt));