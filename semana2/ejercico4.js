function resumenEstadistico(numeros) {
}

function nombresConVocal(nombres){
    const vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
    const resultado=[];

    for(let i=0; i<nombres.length; i++){
        const primerLetra = nombres[i][0].toLowerCase();
        if (vocales.includes(primerLetra)){
            resultado.push(nombres[i]);
        }
    }
}