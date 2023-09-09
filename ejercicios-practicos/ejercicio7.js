/* Crear una calculadora para productoria, donde los dos parámetros de entrada son arrays de la misma longitud
*/
const array1=[2, 1, 9, 20, -6, 3];
const array2=[7, -3, 6, 9, 12, 4];

function Productoria(array1, array2){
    if (array1.length === array2.length){        
        let productoria=1;
        for (let i = 0; i < array1.length; i++) {        
            productoria *= array1[i] * array2[i];
        }
        return productoria;
    } else {
        console.log("La longitud de los array no coincide");
    }        
}

console.log(Productoria(array1, array2));