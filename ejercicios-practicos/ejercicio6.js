
const array1=[0, 1, 9, 20, -6, 3, 5.2];
const array2=[7, -3, 6, 9, 12, 4, 0.5];

function Sumatoria(array1, array2){
    if (array1.length === array2.length){
        let sumatoria=0;

        for (let i = 0; i < array1.length; i++) {
            sumatoria += array1[i] + array2[i];
            
        }
        return sumatoria;
    } else {
        console.log("La longitud de los array no coincide");
    }        
}

console.log(Sumatoria(array1, array2));
