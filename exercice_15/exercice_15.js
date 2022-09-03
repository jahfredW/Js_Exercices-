    $("button").on("click", function () {
       $("div").html(pileOuFace());
    });

    pileOuFace = () => {
        let x = Math.floor(Math.random() * 2);
        return (x >= 1) ? "face" : "pile";
    }


    /*
    const button = document.querySelector("button");
    const div = document.querySelector("div");

    button.addEventListener('click', ()=>{div.innerHTML = pileOuFace();
    });
*/