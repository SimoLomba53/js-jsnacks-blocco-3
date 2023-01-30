//FAI INSERIRE UN NUMERO CHE CHIAMEREMO N ALL'UTENTE
//GENERA N ARRAY
//OGNI ARRAY E' FORMATO DA NUMERI CASUALI DA 1 A 100
//STAMPALO OGNI VOLTA CHE NE CREI UNO
debugger;

const numberN = prompt("Inserisci il tuo numero N");


Narray = [
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100)
]



while (Narray > numberN) {
    totalarray = parseInt(Narray * numberN);
    console.log(totalarray);
}









