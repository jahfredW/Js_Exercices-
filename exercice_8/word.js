longueurMot = () => {
    var sentence = ""
    let word = document.getElementById("word").value;
    if (word.length > 8) {
        sentence = "Le mot fait plus de 8 caractères";
    } else {
        sentence = `Le mot fait ${word.length} caractères`;
    }
    document.getElementById("result").textContent = sentence;
}

// formatage de string :
// `${value}`
//String.format('{0} is dead, but {1} is alive! {0} {2}', 'ASP', 'ASP.NET');
//console.log( sentence %s, string) 