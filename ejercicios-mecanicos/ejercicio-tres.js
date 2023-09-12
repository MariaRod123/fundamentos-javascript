/* Define 4 variables con nombres distintos luego copare 1 a 1 entre ellos 
utlizando los siguientes operadores aritméticos:
-mayor
-menor
-mayor o igual
-menor o igual
-igual
-equivalente
-diferente
-distinto
*/ 

const num1 = -56;
const num2 = 20;
const num3 = -100 ;
const num4 = 115;


// Mayor
function Mayor(valor1, valor2){
    if (valor1>valor2){
        return (`${valor1} es mayor que ${valor2}`);
    }else{
        return(`${valor1} NO es mayor que ${valor2}`);
    }
}
console.log("-----Mayor--------")
console.log(Mayor(num1, num2)); 
console.log(Mayor(num1, num3)); 
console.log(Mayor(num1, num4)); 
console.log(Mayor(num2, num3)); 
console.log(Mayor(num2, num4)); 
console.log(Mayor(num3, num4)); 

// Menor
function Menor(valor1, valor2){
    if (valor1<valor2){
        return (`${valor1} es menor que ${valor2}`);
    }else{
        return(`${valor1} NO es menor que ${valor2}`);
    }
}

console.log("------Menor--------")
console.log(Menor(num1, num2)); 
console.log(Menor(num1, num3)); 
console.log(Menor(num1, num4)); 
console.log(Menor(num2, num3)); 
console.log(Menor(num2, num4)); 
console.log(Menor(num3, num4)); 



// Mayor o igual
function MayorIgual(valor1, valor2){
    if (valor1>=valor2){
        return (`${valor1} es mayor o igual que ${valor2}`);
    }else{
        return(`${valor1} NO es mayor ni igual que ${valor2}`);
    }
}

console.log("------Mayor o Igual--------")
console.log(MayorIgual(num1, num2)); 
console.log(MayorIgual(num1, num3)); 
console.log(MayorIgual(num1, num4)); 
console.log(MayorIgual(num2, num3)); 
console.log(MayorIgual(num2, num4)); 
console.log(MayorIgual(num3, num4)); 



// Menor o igual
function MenorIgual(valor1, valor2){
    if (valor1<=valor2){
        return (`${valor1} es menor o igual que ${valor2}`);
    }else{
        return(`${valor1} NO es menor ni igual que ${valor2}`);
    }
}

console.log("------Menor o Igual--------")
console.log(MenorIgual(num1, num2)); 
console.log(MenorIgual(num1, num3)); 
console.log(MenorIgual(num1, num4)); 
console.log(MenorIgual(num2, num3)); 
console.log(MenorIgual(num2, num4)); 
console.log(MenorIgual(num3, num4)); 


// Igual (==)
function Igual(valor1, valor2){
    if (valor1==valor2){
        return (`${valor1} es igual a ${valor2}`);
    }else{
        return(`${valor1} NO es igual a ${valor2}`);
    }
}

console.log("------Igual--------")
console.log(Igual(num1, num2)); 
console.log(Igual(num1, num3)); 
console.log(Igual(num1, num4)); 
console.log(Igual(num2, num3)); 
console.log(Igual(num2, num4)); 
console.log(Igual(num3, num4)); 


// Equivalentes (===)
function Equivalente(valor1, valor2){
    if (valor1===valor2){
        return (`${valor1} es equivalente a ${valor2}`);
    }else{
        return(`${valor1} NO es equivalente a ${valor2}`);
    }
}

console.log("------Equivalentes--------")
console.log(Equivalente(num1, num2)); 
console.log(Equivalente(num1, num3)); 
console.log(Equivalente(num1, num4)); 
console.log(Equivalente(num2, num3)); 
console.log(Equivalente(num2, num4)); 
console.log(Equivalente(num3, num4)); 

// Diferente (!=)
function Diferente(valor1, valor2){
    if (valor1!=valor2){
        return (`${valor1} es diferente a ${valor2}`);
    }else{
        return(`${valor1} NO es diferente a ${valor2}`);
    }
}

console.log("------Diferentes--------")
console.log(Diferente(num1, num2)); 
console.log(Diferente(num1, num3)); 
console.log(Diferente(num1, num4)); 
console.log(Diferente(num2, num3)); 
console.log(Diferente(num2, num4)); 
console.log(Diferente(num3, num4)); 

// Distintos (!==)

function Distinto(valor1, valor2){
    if (valor1!==valor2){
        return (`${valor1} es distinto a ${valor2}`);
    }else{
        return(`${valor1} NO es distinto a ${valor2}`);
    }
}

console.log("------Distintos--------")
console.log(Distinto(num1, num2)); 
console.log(Distinto(num1, num3)); 
console.log(Distinto(num1, num4)); 
console.log(Distinto(num2, num3)); 
console.log(Distinto(num2, num4)); 
console.log(Distinto(num3, num4)); 




 



