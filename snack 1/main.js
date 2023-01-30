//OTTIENI NUMERO CASUALE IN UN RANGE SPECIFICATO
//CHIEDI A UTENTE VALORE MINIMO E MASSIMO IN CUI GENERARE IL NUMERO

const minValueRange = prompt("Qual'è il valore minimo?");
console.log(minValueRange);

const maxValueRange = prompt("Qual'è il valore massimo?");
console.log(maxValueRange);



const randomNumber = Math.random();
console.log(randomNumber);

while (i < minValueRange && i > maxValueRange) {
    const numbergenerate = randomNumber[i];
    console.log(numbergenerate);
    i++;
}


//while (i < minValueRange || i > maxValueRange) {
   // const randomNumber = Math.floor(Math.random() * i)[i];
    //console.log = randomNumber;
    //i++;
//}

