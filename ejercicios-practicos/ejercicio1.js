
const edades = [10, 20, 30, 21];

// almaceno la suma de los números en la variable suma
let suma = 0;

// calculo la suma de los números del array 
for (let i = 0; i < edades.length; i++) {
  suma += edades[i];
}

// calculo el promedio dividiendo la suma por la cantidad de números que tiene el array y guardo en la variable promedio
let promedio = suma / edades.length;

window.alert("Promedio de edades: " + promedio.toFixed(1)); //método toFixed() me permite mostrar la cantidad de decimales despues de la coma 