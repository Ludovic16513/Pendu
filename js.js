var tableau = ['chiotte','SaddamUssein', 'JeanLouis', 'bordel', 'michelle', 'godsabre', 'javascript', 'pomplar', 'fumier'];
var lettre = document.getElementById('input');
var bouton = document.getElementById('bouton');
var savelettre = savelettre = 0;
var defaite = document.getElementById('defaite2');
var motus = document.getElementById('mot');
var echec = 5;
console.log(echec)
var rand = tableau[Math.floor(Math.random()*tableau.length)];
console.log(rand);

var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var a4 = document.getElementById('a4');

a1.style.display = 'none';
a2.style.display = 'none';
a3.style.display = 'none';
a4.style.display = 'none';




bouton.addEventListener("click", function () {

var spanGet = document.getElementsByTagName('span');
    var lettreEnter = lettre.value;
    var trouve = false;

    for (let i = 0; i < rand.length; i++) {



        if (rand[i] === lettreEnter) {
            alert('Lettre trouvée');
            trouve = true;
            spanGet[i].innerHTML = lettreEnter;

            var enregistre = enregistre+= 1;
            console.log(i);
            savelettre = savelettre + 1
        }
        defaite.innerHTML = 'Tentative Restante ' + echec;
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
        savelettre = savelettre = 0;
        echec = 5;
        return tableau;
    }

    if (trouve === false){
        alert('Lettre non trouvée');
        echec = echec-1;
        console.log(echec);
        defaite.innerHTML = 'Tentative Restante ' + echec;
    }

if (echec === 0){
    alert('perdu');
    victoire();
    spannage();
    a1.style.display = 'none';
    a2.style.display = 'none';
    a3.style.display = 'none';
    a4.style.display = 'none';
}

if (echec === 4){
    a1.style.display = 'block';
}

else if (echec === 3){
    a1.style.display = 'none';
    a2.style.display = 'block';
}

else if (echec === 2){
    a1.style.display = 'none';
    a2.style.display = 'none';
    a3.style.display = 'block';
}

else if (echec === 1){
    a1.style.display = 'none';
    a2.style.display = 'none';
    a3.style.display = 'none';
    a4.style.display = 'block';
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




