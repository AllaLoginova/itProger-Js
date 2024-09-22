// var arr = new Array(элементы);
var arr = [5, true, "stroka", 5.7, 0, -100];
console.log(arr[0]);
arr[3] = "word";
console.log(arr)
console.log(arr.length);

// многомерные массивы

var matrix = [
    [4, 6, 8], ["stroka", 5.7], [0, -100]
];

matrix[1][0] = 90;
console.log(matrix);