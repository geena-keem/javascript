var count = 0;

while (count < 3) {
    console.log(count);
    count++;
}


var count2 = 0;

while (true) {
    console.log(count2);
    count2++;

    if (count2 === 3) break;
}


// do...while
var count3 = 0;

do {
    console.log(count3);
    count3++;
} while (count3 < 3);