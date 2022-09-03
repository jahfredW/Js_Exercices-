

additionne = () => {
    var nombre = parseInt(document.querySelector("#nombre").value);
    var div = parseInt(document.querySelector("#div").value);

    document.querySelector("#result").innerText = "Somme :"  + (nombre + div);
}

/*
div.addEventListener('change', (event) => {
    let z = event.target.value;
});


nombre.addEventListener('change', (event) => {
    event.preventDefault();
    let y = event.target.value;
    let result = modulo(y, div)
    document.querySelector("#resultat")
        .innerHTML = nombre * div;
});



function modulo(number, div) {
    return number % div === 0;

}
*/
