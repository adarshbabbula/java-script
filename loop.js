var i;
for (i=1; i<10; i++) {
    console.log(i);
}

var numbers = [0, 2, 3, 4, 5, 6];
for (i in numbers) {
    console.log(numbers[i]);
}

i=0;
while(i<20) {
    console.log(i);
    i++;
}

i=0;
do {
    console.log(i);
    i++;
}while(i<20);