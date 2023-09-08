
const edades = [10, 20, 30, 21];

//Este array vacío va a almacenar las edades mayores a 10
let edades_mayores_a10 = [];

//Encuentro los números mayores de 10 y los agrego al nuevo array utlizando el método push()
for (let i = 0; i < edades.length; i++) {
  if (edades[i] > 10) {
    edades_mayores_a10.push(edades[i]);
  }
}

//Si el arreglo nuevo no está vacío sumo los todos los valores que hay dentro 
if (edades_mayores_a10.length > 0) {
  let suma = 0;
  for (let j = 0; j <edades_mayores_a10.length; j++) {
    suma += edades_mayores_a10[j];
  }
// Calculo el promedio de los números que hay dentro del array nuevo
  let promedio = suma / edades_mayores_a10.length;
  
  window.alert("El promedio de edades es: " + promedio.toFixed(1));
} else {
  window.alert("No hay valores en el array");
}
