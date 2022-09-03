var readline = require("readline-sync")

var tab = [2,6,10,3,8,7,20];
var total = 0;
/*
for(let index = 0; index < tab.length; index ++) {
    if (tab[index] % 2 === 0 ) {
        total += tab[index]
        console.log('itération : ' + index + " : " + total);
    } else {
        console.log('itération : ' + index + " : non paire");
    }
}
*/
class Calcul {
    constructor(tab) {
        this.tab = tab;
    }

    addition() {
        var total = 0;
        for(let index = 0; index < this.tab.length; index ++) {
            if (this.tab[index] % 2 === 0 ) {
                total += this.tab[index]
                console.log('itération : ' + index + " : " + total);
            } else {
                console.log('itération : ' + index + " : non paire");
            }
        }
        console.log("Le total est de : %d", total)
    }

}

var calcul = new Calcul(tab);
calcul.addition();
