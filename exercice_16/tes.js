//let number = document.getElementById("#test");
//var number2 = document.querySelector("#test2");
let button = document.querySelector("button");
//let span = document.querySelector("span");


var tes = 5;

button.addEventListener('click' , () => {
    let number = document.getElementById("test").value;
    let number2 = document.getElementById("test2").value;
    let span = document.querySelector("span");
    span.textContent = parseInt(number) + parseInt(number2);

    });

add = (number) => {
    return number.value;
}