var tableau = ['chattts','tabl', 'radiateure', 'carton'];
var lettre = document.getElementById('input');
var bouton = document.getElementById('bouton');
var savelettre = savelettre = 0;

var rand = tableau[Math.floor(Math.random()*tableau.length)];
console.log(rand);


bouton.addEventListener("click", function () {

var spanGet = document.getElementsByTagName('span');
    var lettreEnter = lettre.value;
    var trouve = false;

    for (let i = 0; i < rand.length; i++) {
        var echec = 10;
        if (rand[i] === lettreEnter) {
            alert('Lettre trouvée');
            trouve = true;
            spanGet[i].innerHTML = lettreEnter;

            var enregistre = enregistre+= 1;
            console.log(i);
            savelettre = savelettre + 1
        }

        if (savelettre === rand.length)
        {
            for (let i = 0; i < rand.length; i++){
                spanGet[i].innerHTML = "";
            }
            victoire();
            spannage();
            console.log(rand);
        }
    }

    function victoire() {
        rand = tableau[Math.floor(Math.random()*tableau.length)];
        var savelettre = savelettre = 0;
        var echec = 6;
        return tableau;
    }

    if (trouve === false){
        alert('Lettre non trouvée');
        var echec = echec-1;
        console.log(echec)
    }

if (echec === 0){
    alert('perdu');
    victoire();
    spannage();
    console.log(rand)
}

});





function spannage() {
    var mot = document.getElementById('alea');
    mot.innerHTML="";
    for (i = 0; i < rand.length; i++) {
        var element = document.createElement("span");
        mot.appendChild(element);
    }
}

spannage();




