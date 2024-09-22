function info() {
    console.log("Привет");
    console.log("!");
}

info();

function info2(word) {
    console.log(word + "!");
}

info2("Hello");

function summa(a, b) {
    var res = a + b;
    console.log(res);
    info2(res);
}

summa(2, 5);

function summa_arr(arr) {
    var sum = 0;

    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
    return sum;
}

var array = [6, 8, 1, 5];
var array_2 = [1, 2, 3, 4, 5];
var array_3 = [10, 20, 30, 40, 50];
summa_arr(array);
summa_arr(array_2);
summa_arr(array_3);

var res = summa_arr(array);
res *= 2;
console.log("Результат: " + res);

// глобальные и локальные переменные
var num = 10; // глобальная

function info() {
    var num = 5; // локальная -> перепреоделение глобальной
    console.log(num); // 5 локальная
}

info();
console.log(num); // 10 видна только глобальная

