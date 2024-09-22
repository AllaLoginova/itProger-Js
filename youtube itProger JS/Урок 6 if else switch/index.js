var number = 15;

if(number == 5) {
    console.log('if');
} else if(number < 10) {
    console.log('else if 1')
} else if(number == 7) {
    console.log('else if 2')
} else {
    console.log("else");
}

var isHasHous = true;

if(number == 15 || !isHasHous) {
    console.log('ok')
} else if(number == 15 && isHasHous == true) {
    console.log('not');
}

var stroka = "word223";
switch(stroka) {
    case "4": 
        console.log("Переменная со значением 4");
        break;
    case "45": 
        console.log("Переменная со значением 45");
        break;
    case "word":
        console.log("Переменная со значением word");
        break;
    default:
        console.log('default ' + stroka);
        break;

}
