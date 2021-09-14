let Tittle = "Cuantas Letras estaran Repetidas en esta oracion";

function Ocurrencias(Tittle, Letter){
    return Tittle.split(Letter).length -1;
}

console.log(Ocurrencias(Tittle, "e"))