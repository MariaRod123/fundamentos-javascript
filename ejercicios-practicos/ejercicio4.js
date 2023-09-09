let anio_nacimiento = prompt("Ingrese año de nacimiento");

let anio_actual=new Date().getFullYear();

if (anio_nacimiento === ""){
    console.log("Debe ingresar el año de nacimiento");
}
else if(anio_nacimiento <= 1900){
    console.log("Año inválido")
}
else if(anio_nacimiento > anio_actual){
    console.log("El año ingresado no es correcto")
}
else if(1900 < anio_nacimiento < anio_actual){
    if (anio_actual - anio_nacimiento <18){
        window.alert("No puede ingresar al sitio")

    }
    else{
        window.alert("Es mayor de edad, puede ingresar al sitio")

    }
}

