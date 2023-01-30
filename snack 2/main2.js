//CREA UN ARRAY VUOTO
//CHIEDI ALL'UTENTE I NUMERI DA INSERIRE NELL'ARRAY FINO A QUANDO LA SOMMA DI ESSI E' MINORE DI 50

arrayVuoto = [

]

let i = 0
let somma;

while (i < 50) {
    arrayVuoto = prompt("Che numero devo aggiungere?");
    console.log = arrayVuoto;
    somma = somma + arrayVuoto[i];
    console.log(somma);
    i++;
}



