var readline = require("readline-sync")



calcul10 = () => {
    var total = 0;
    for (let index = 1; index <= 10; index++) {
        total += index;
        console.log(total);
    }
    console.log("Le resultat des 10 premiers chiffres est : %d", total)
};

calcul10();