var readline = require("readline-sync")

class Voiture {
    constructor(immatriculation, marque, annee) {
        this.immatriculation = immatriculation;
        this.marque = marque;
        this.annee = annee;
    }

    presentation() {
        return `La voiture d'immatriculation ${this.immatriculation} , de marque ${this.marque} , date de ${this.annee}.`
    }
}

let voiture = new Voiture("AB1234CD", "Toyota", "2002")

console.log(voiture.presentation())