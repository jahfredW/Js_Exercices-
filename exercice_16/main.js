var numb = document.querySelector("input");
var button = document.querySelector("button");
var span = document.querySelector("span");

var number = Math.floor(Math.random() * 20);



evaluate = (numb, number) => {
    let word = "";
    if (numb) {
        if (numb < number) {
            word = " trop Petit";
        } else if (numb > number) {
            word = " trop grand";
        } else {
            word = "Gagné";
        }
    } else  {
        word = "Entrez un nombre svp";
    }
    return word;

};

button.addEventListener('click', () =>{
    span.innerHTML = evaluate(parseInt(numb.value), number);
    console.log("type de numb : ",typeof (parseInt(numb.value)));
    console.log("type de number: ",typeof (number));
    console.log("valuer de number:", number);
});
