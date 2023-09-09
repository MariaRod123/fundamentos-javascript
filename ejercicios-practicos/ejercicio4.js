let anio_nacimiento = prompt("Ingrese año de nacimiento");

let anio_actual=new Date().getFullYear();

if (anio_actual - anio_nacimiento < 18 ){
    console.log("No puede ingresar al sitio")
}
else {
console.log("Es mayor de edad, puede ingresar al sitio")
}


