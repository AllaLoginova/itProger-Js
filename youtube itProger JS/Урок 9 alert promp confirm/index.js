alert("Hello!");
confirm("Вы дома?");

var data = confirm("Вы дома?");
if(data) {
    alert("Вы молодец");
}

age = prompt("Cколько вам лет", 20);
console.log(age);

var person= null;
if(confirm("Вы уверены?")) {
    person = prompt("Введите ваше имя");
    alert("Привет, " + person);
} else {
    alert("вы нажали 'отмена'");
}