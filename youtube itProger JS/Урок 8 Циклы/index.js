for(var i = 1; i <= 10; i++) {
    console.log(i);
}

for(var i = 100; i > 5; i /= 2) {
    console.log(i);
}

var arr = [1, 2, 3, 4, 5, 0, 5.99, -197];
for(var i = 0; i < arr.length; i++) {
    arr[i] *= 2
    console.log("Элемент " + (i + 1) + ': ' + arr[i]);

}

for(var i = 10; i <= 20; i += 2) {
    if(i > 15) {
        break;
    }
    console.log(i);
}

for(var i = 10; i <= 20; i++) {
    if(i % 2 == 0) {
        continue;
    }
    console.log(i);
}

var j = 0;
while(j < 10) {
    console.log(j);
    j++;
    
}

var j = 1000;
while(j >= 100) {
    console.log(j);
    j -= 100;
}

var isHasCar = true;
while(isHasCar) {
    // бесконечный цикл
}

var x = 100;
do {
    console.log(x); // выведется 1 раз
} while(x < 50);

var y = 0;
do {
    console.log(y);
    y++;
} while(y < 10);