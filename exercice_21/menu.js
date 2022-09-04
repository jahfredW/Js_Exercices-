var menu =  class Menu {
    constructor() {
        this.instructions = "";
        this.choix = ""
        this.init();
    }

    init() {
        var texte = "";
        texte += "1/ ajouter un chiffre au tableau \n";
        texte += "2/ afficher le tableau \n";
        texte += "0/ quitter";
        this.instructions = texte;

        this.choix = "Quel est votre choix?";
    }
};

module.exports = menu;
