var readline = require("readline-sync")


factorielle = (n) =>{
    if (n > 1) {
        return n * factorielle(n- 1);
    } else {
        return 1;
    }
};

var nombre = parseInt(readline.question("nombre ?"));
var resultat = factorielle(nombre);
console.log(resultat);
/*
let total = 1;
for (let index= 1; index <= nombre; index ++) {
    total *= index;
    console.log(total)
}
*/

