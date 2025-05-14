// Ejercicio: Pedir al usuario su fecha de nacimiento
//
// Instrucciones:
// 1. Mostrar en pantalla los días equivalentes a la edad actual del usuario
// 2. Mostrar en pantalla los meses equivalentes a la edad actual del usuario
// 3. Mostrar los años que tiene el usuario.

const { ask } = require('../helpers/input');

function diffDays(actualDate, birthDate) {
    const diff=actualDate-birthDate;
    const edadEnDias=diff/(1000*60*60*24);
    return Math.floor(edadEnDias);  
    
    return edadEnDias;
}

async function main(){
    const actualDate = new Date();
    const birthDateDay = await ask('¿Cuál es tu dia de nacimiento?');
    const birthDateMonth = await ask('¿Cuál es tu mes de nacimiento?');
    const birthDateYear = await ask('¿Cuál es tu año de nacimiento?');

    const birthDate = new Date (`${birthDateYear}-${birthDateMonth}-${birthDateDay}`);


    
    console.log(`Tienes ${edadEnDias} días, ${edadEnMeses} meses y ${edadEnAños} años.`);

}


async function main() {


}

main();