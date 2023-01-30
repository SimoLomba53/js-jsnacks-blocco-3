//OTTIENI NUMERO CASUALE IN UN RANGE SPECIFICATO
//CHIEDI A UTENTE VALORE MINIMO E MASSIMO IN CUI GENERARE IL NUMERO

const minValueRange = prompt("Qual'è il valore minimo?");
console.log(minValueRange);

const maxValueRange = prompt("Qual'è il valore massimo?");
console.log(maxValueRange);



let randomNumber = 20;

while (randomNumber < minValueRange && randomNumber > maxValueRange) {
    randomNumber = (Math.random());



}


console.log(randomNumber);

