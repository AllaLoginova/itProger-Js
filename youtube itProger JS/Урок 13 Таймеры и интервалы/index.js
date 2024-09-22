// var id = setInterval(my_func, 1000);

// var counter = 0;
// function my_func() {
//     counter++;
//     console.log("Counter: " + counter);

//     if(counter == 3)
//         clearInterval(id);
// }

// setInterval(function() {
//     counter++;
//     console.log("Прошло сек: " + counter);
// }, 1000);

// ----------------таймер-----------------------

setTimeout(function() {
    console.log("Timer is working!");
}, 1000);

setTimeout(my_func, 2000);
function my_func() {
    console.log('Сработал таймер');
}