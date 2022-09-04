class Classe {

    constructor(nom, age, notes) {
        this.nom = nom;
        this.age = age;
        this.notes = notes;
        this.increase();
    }

    static nbre = [] ;

    afficherEleve() {
        let txt = "";
        txt += `Nom : ${this.nom} \n`;
        txt += `Age : ${this.age} \n`;
        console.log(txt)
    }

    increase() {
        Classe.nbre.push([this.nom, this.age, this.notes])
    }

    calculMoyenneEleve() {
        let total = 0;
        /*
        for (let item of this.notes) {
           total += item ;
        }*/
        // callback sans les {} : pas besoin du return
        if (this.notes.length > 0) {
            const somme = this.notes.reduce((p, c) =>
                p + c
            );
            let moyenne = somme / this.notes.length;
            console.log(`Moyenne de ${this.nom} : %d `, moyenne);
        } else {
            console.log("Aucune note quand à présent");
        }
    }

    static nbreEleves() {
        console.log("nombre d'eleves : %d",this.nbre.length);
        console.log("Détail : ", this.nbre);
    }

    static calculMoyenneClasse() {
        var total = 0;
        let moyennes = [];
        for (let eleve of Classe.nbre) {
            if (eleve[2].length > 0) {
                const somme = eleve[2].reduce((p, c) =>
                    p + c
                );
                let moyenne = somme / eleve[2].length;
                moyennes.push(moyenne);
        }

        }
        for (let moyenne of moyennes) {
                    total += moyenne
                }

        let result = total / moyennes.length;
        if (result) {
            console.log("moyenne de la classe : %f", result);
        } else {
            console.log("aucune note pour l'instant");
        }
    }
}


var lukeSkylwalker = new Classe("Luke", 18, [5]);
var tobbyElfeDeMaison  = new Classe("Tobby", 18, [7]);
var HarryPotter  = new Classe("Harry", 18, []);


Classe.calculMoyenneClasse();
Classe.nbreEleves();
tobbyElfeDeMaison.afficherEleve();
tobbyElfeDeMaison.calculMoyenneEleve();