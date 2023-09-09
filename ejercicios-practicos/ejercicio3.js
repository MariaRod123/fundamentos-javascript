/* Un aeropuerto permite viajar al exterior a pasajeros que cumplan las siguientes condiciones:
-Pasaporte al día
- Test PCR negativo
- Pasaje de aerolínea */

let pasaporte_vigente= prompt ("¿Tiene pasaporte vigente?: 1-Si  2-No");

let test_pcr_negativo=prompt ("¿tiene test pcr negativo?: 1-Si  2-No");

let pasaje=prompt("¿tiene pasaje de la aerolinea?: 1-Si  2-No");

if (pasaporte_vigente==="1" && test_pcr_negativo==="1" && pasaje==="1"){        
    console.log("Puede viajar")
}
else if(pasaporte_vigente==="2" || test_pcr_negativo==="2" || pasaje==="2" ){
    console.log("Lo siento no puede viajar, no cumple con todos los requisitos");

}

else if( pasaporte_vigente ==="" || test_pcr_negativo==="" || pasaje ===""){
    console.error("Debe ingresar alguna opcion");
}
else if(pasaporte_vigente!= "1" && pasaporte_vigente!="2 "|| test_pcr_negativo!="1" && test_pcr_negativo!="2" || pasaje!="1" && pasaje!="2"){
    console.error("La opcion ingresada es incorrecta");

}



