// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// funzione per scelta pari o dispari
// function optionFunction() {
//     var selector = document.getElementById("option-user");
//     var option = selector[selector.selectedIndex].value;

//     if ( option == "pari") {
//         console.log("ciao")
//     } else {
//         console.log("puzzi")
//     }

// }

var numberPc
// funziona genera numero da 1 a 5
function randomNumberFunction(min, max) {
    numberPc = parseInt(document.getElementById("number-random").innerHTML = Math.floor(Math.random() * (max - min) + min));
}

//funzione massima
function functionGame () {
    
   // scelta numero da 1 a 5
   var selectorNumber = document.getElementById("number-user");
   var numberUser = selectorNumber[selectorNumber.selectedIndex].value;
   numberUser = parseInt(numberUser);

   //controllo se ha scelto un numero
    if (numberUser == 0) {
        alert("Non hai scelto alcun numero !")
    }
   //controllo se ha generato un numero
    if (isNaN(numberPc)) {
        alert("Non hai generato alcun numero !")
    }

   var add = numberUser + numberPc;
   console.log(add)




   var selector = document.getElementById("option-user");
   var option = selector[selector.selectedIndex].value;


   if ( option == "pari") {
       console.log("scelta utente pari");
   } else {
       console.log("scelta utente dispari")
   }




   //controllo somma pari/dispari
    addCheck = "dispari";
   if ( add % 2 == 0) {
       console.log("somma pari")
       addCheck = "pari";
   } else {
       console.log("somma dispari")
   }


   //controllo vincitore

   if ( addCheck == option ) {
       console.log("HAI VINTO")
   } else {
       console.log("hai perso")
   }
}