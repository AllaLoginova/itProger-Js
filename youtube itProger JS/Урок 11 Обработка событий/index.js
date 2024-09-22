function onClickButtun() {
    alert("Вы нажали на меня");
}

var counter = 0;

function onClickButtun2(el) {
    counter++;
    el.innerHTML = "Вы нажали на кнопку: " + counter;
    el.style.background = "red";
    el.style.color = "blue";

    el.style.cssText = "border-radius: 5px; border: 0; font-size: 20px";

    console.log(el.name);
    console.log(el.onclick);
    console.log(el.id);
}

function onInput(el) {
    if(el.value == "Hello") {
        alert("И тебе привет!");
    }
    console.log(el.value);
}