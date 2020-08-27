// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//richiesta parola
 var word = prompt("Inserisci una parola");
//stampa parola
 document.getElementById("word-user").innerHTML += word;

//dichiarazione e assegnazione funzione
 var str = word;
 console.log(str);
 str = checkPalindrom(str);
 console.log(str);
 
 //funzione converti e inverti parola 
 function checkPalindrom (str) {
    return str == str.split('').reverse().join('');
  }

  //controllo parola palindorma
 if ( str === true) {
     console.log("ok")
     document.getElementById("check-palindrome").innerHTML = "La parola è palindroma"
 } else {
     console.log("not ok")
     document.getElementById("check-palindrome").innerHTML = "La parola non è palindroma"
 }
