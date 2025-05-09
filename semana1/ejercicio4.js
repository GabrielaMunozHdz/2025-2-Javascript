const{ask} = require('../helpers/input');

function obtenerMayor(num1,num2){
    if(num1>num2){
        return num1;
    }else if(num2>num1){
        return num2;
    }else{
        return "Los números son iguales";
    }
}

//function obtenerMayor(num1,num2){
//if (num1<num2){
    //return num2;
//}else if(num1>num2){
    //return num1;
//}else{
    //return 3;
//}


// async function main (){
//const resultado= obtenerMayor(1,2);
//if (resultado===-1){
//    console.log("Los números son iguales");
//}else{
//    console.log("El número mayor es: "  resultado);
//}