//OTTIENI NUMERO CASUALE IN UN RANGE SPECIFICATO
//CHIEDI A UTENTE VALORE MINIMO E MASSIMO IN CUI GENERARE IL NUMERO

const minValueRange = prompt("Qual'è il valore minimo?");
console.log(minValueRange);

const maxValueRange = prompt("Qual'è il valore massimo?");
console.log(maxValueRange);


let i = 0;
const randomNumber = (Math.random());
console.log(randomNumber);

while (randomNumber > minValueRange && randomNumber < maxValueRange) {
    //const randomNumber = (Math.random())[i];
    //console.log(randomNumber);
    const numbergenerate = randomNumber;
    console.log(numbergenerate);
    i++;
}


