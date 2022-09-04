var sportif1 = {
    nom : "toto",
    age : 25,
    poids : 80,
    taille : 180,

    affichage : function () {
        for (var [key, val] of Object.entries(sportif1)) {
            console.log(key, val);
        }
    },

    getforce : () => {
        console.log(((sportif1.taille * sportif1.poids) / sportif1.age));
}

};

/*
let list = {eb: 'blue', et: 'green'}

const keyValue = (input) => Object.entries(input).forEach(([key,value]) => {
  console.log(key,value)
})

keyvalue =  function(input) {
    Object.entries(input).forEach(([k,v])
}*/

sportif1.affichage();
sportif1.getforce();