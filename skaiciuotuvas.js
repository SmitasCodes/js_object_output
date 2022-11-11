let pirmasSkaicius = parseInt(prompt("Koks butu pirmas skaicius?"));
let antrasSkaicius = parseInt(prompt("Koks butu antras skaicius?"));
let operatorius = prompt("Koks butu operatorius?");

function skaiciuotuvas(pirmas,antras,operator){
    let suma;
    if (operator === '+'){
        suma= pirmas + antras;
        console.log(`Pirmo ir antro skaiciaus sudetis lygu ${suma}`)
        return suma;
    } else if(operator === '-'){
        suma= pirmas - antras;
        console.log(`Pirmo ir antro skaiciaus skirtumas lygus ${suma}`)
        return suma;
    } else if(operator === '*'){
        suma= pirmas * antras;
        console.log(`Pirmo ir antro skaiciaus sandauga lygu ${suma}`)
        return suma;
    } else if(operator === '/'){
        suma= pirmas / antras;
        console.log(`Pirmo ir antro skaiciaus dalyba lygu ${suma}`)
        return suma;
    } else {
        alert("Ivestas blogas operatorius!");
    }
}

skaiciuotuvas(pirmasSkaicius,antrasSkaicius,operatorius);