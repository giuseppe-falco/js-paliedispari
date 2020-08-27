// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

 var word = prompt("Inserisci una parola");
 document.getElementById("word-user").innerHTML += word;
 var str = word;

 console.log(str);
 
str = checkPalindrom(str);
console.log(str);

 function checkPalindrom (str) {
    return str == str.split('').reverse().join('');
  }

 if ( str === true) {
     console.log("ok")
     document.getElementById("check-palindrome").innerHTML = "La parola è palindroma"
 } else {
     console.log("not ok")
     document.getElementById("check-palindrome").innerHTML = "La parola non è palindroma"
 }
