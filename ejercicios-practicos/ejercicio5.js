/* Crear funciones para una calculadora básica entre dos números: suma, resta, multiplicación y división*/

let valor1= prompt("Ingrese un número");
valor1 = parseFloat(valor1);
let valor2= prompt("Ingrese otro número");
valor2=parseFloat(valor2);

function Suma( sumando1, sumando2){
     let suma = sumando1 + sumando2;
     return suma;

}

function Resta(minuendo, sustraendo){
    let resta =  minuendo - sustraendo;
    return resta;
}

function Multiplicacion(factor1, factor2){
    let producto= factor1 * factor2;
    return producto;
}

function Division(dividendo, divisor){
    
    if (divisor != 0){
       let division = dividendo/divisor;
       return division;
    }else{
    return ("Error: no existe la división entre 0")
    }
}

console.log("Suma:", Suma(valor1, valor2));
console.log("Resta:", Resta(valor1, valor2));
console.log("Producto:", Multiplicacion(valor1, valor2));
console.log( "División:", Division(valor1, valor2));
