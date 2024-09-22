var date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

// --------Установка-------------
date.setHours(23);
date.setMinutes(39);
date.setMonth(9);
console.log("Время: " + date.getHours() + ':' + date.getMinutes());
// --------Свойства массивов------
var arr = [5, 7, 9, 1, 2, 9, 1];
var s = arr.reverse().join(", ");

console.log(arr.length);
console.log(arr.join(", "));
console.log(arr.sort());
console.log(s.split(", "));

// ----------Классы-------------
