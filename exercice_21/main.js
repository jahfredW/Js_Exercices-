var readline = require("readline-sync")
var interface = require("./interface_tab")
var menu = require("./menu")


/*
class InterfaceTab {
    constructor() {
        this.tab = [];
        this.init();
        this.menu = new Menu();
    }

    init() {

        this.tab = [3, 5, 10, 12];
    }

    run_app() {
        console.log(this.menu.instructions);
        var choix = parseInt(readline.question(this.menu.choix));
        
        switch (choix) {
            case 1 :
                this.add_number();
                break;
            case 2 :
                this.show_tab();
                break;
            case 0 :
                return 0;
                
        }
    }

    add_number() {
        let number = parseInt(readline.question("quel chiffre voulez_vous ajouter ?"));
        this.tab.push(number);
        this.tab.sort(compare);
        this.show_tab();
        this.run_app();
    }

    show_tab() {
        console.log(this.tab);
        this.run_app();
    }

    static compare(x, y) {
        return x - y;
    }

};

*/





    
i = new interface();
i.run_app();

