// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6
let outcome = 0

for (let i = 0; i < grades.length; i++) {
    if( grades[i] >= 8) {
        outcome = outcome + 1
    }
}

console.log(outcome)


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.


let cumlaudeOutcome = 0;
function cumlaude (array){
    for (let i = 0; i < array.length; i++) {
        if( array[i] >= 8) {
            cumlaudeOutcome = cumlaudeOutcome + 1
        }
    }
    return cumlaudeOutcome
}
const outcome2 = cumlaude([8, 9, 4, 6, 10])
console.log(outcome2)

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?

//alles bij elkaar opgeteld en dan door elkaar gedeeld

// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?

//alle cijfers bij elkaar gedeeld door the length

// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

let averageMark = 0
for (let i = 0; i < grades.length; i++) {
    if ([i] < grades.length -1 ) {
        averageMark = averageMark + grades[i]
    } else {
        averageMark = averageMark + grades[i]
        averageMark =  averageMark / grades.length
    }

}

console.log(averageMark)




// ---- Verwachte uitkomst: 6.642857142857143


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

let averageMark2 = 0;
function averageGrade (averageCalculate){
    for (let i = 0; i < averageCalculate.length; i++) {
        if ([i] < averageCalculate.length -1 ) {
            averageMark2 = averageMark2 + averageCalculate[i]
        } else {
            averageMark2 = averageMark2 + averageCalculate[i]
            averageMark2 =  averageMark2 / averageCalculate.length
        }
    }
    return averageMark2
}

const outcome3 = averageGrade(grades)
console.log(outcome3)

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

const decimals = outcome3.toFixed(2)
console.log(decimals)

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

let highestMark = 0

for (let i = 0; i < grades.length; i++) {
    if (grades[i] > 9 ) {
        highestMark = 10
    } else if (grades.length > 8){
        highestMark = 9
    } else if (grades.length > 7){
        highestMark = 8
    } else if (grades.length > 6 ){
        highestMark = 7
    } else if (grades.length > 5){
        highestMark = 6
    } else if (grades.length > 4){
        highestMark = 5
    } else if (grades.length > 3){
        highestMark = 4
    } else if (grades.length > 2){
        highestMark = 3
    } else if (grades.length > 1){
        highestMark = 2
    }else {
        highestMark = 1
    }
}

console.log(highestMark)

// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

let highestMark2 = 0

function highestGrade (input){
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 9 ) {
            highestMark2 = 10
        } else if (input.length > 8){
            highestMark2 = 9
        } else if (input.length > 7){
            highestMark2 = 8
        } else if (input.length > 6 ){
            highestMark2 = 7
        } else if (input.length > 5){
            highestMark2 = 6
        } else if (input.length > 4){
            highestMark2 = 5
        } else if (input.length > 3){
            highestMark2 = 4
        } else if (input.length > 2){
            highestMark2 = 3
        } else if (input.length > 1){
            highestMark2 = 2
        }else {
            highestMark2 = 1
        }
    }
}

const inputHighestGrades = highestGrade([8, 9, 4, 6, 10])
console.log(highestMark2)
// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
