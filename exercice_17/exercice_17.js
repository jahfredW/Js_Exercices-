var readline = require("readline-sync")
let ok = false
/*
do {
    let chiffre = parseInt(readline.question("Entrez le chiffre 3 \n"));
    if (chiffre === 3) {
        ok = true;
    }
}while (!ok)


console.log("ok");
*/

while (!ok) {
    let chiffre = parseInt(readline.question("Entrez le chiffre 3 \n"));
    if (chiffre === 3) {
        ok = true;
    } else {
        console.log("mauvais chiffre...")
    }
}

console.log("ok");