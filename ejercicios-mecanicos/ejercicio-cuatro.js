let a = true;
let b= false;
let c = true;
let d = false;

// Operador AND
console.log("Resultados para operador AND")
console.log("---------------------------------")
console.log(`${a} | ${b} | ${a && b}`); 
console.log(`${a} | ${c} | ${a && c}`); 
console.log(`${a} | ${d} | ${a && d}`); 
console.log(`${b} | ${c} | ${b && c}`); 
console.log(`${b} | ${d} | ${b && d}`); 
console.log(`${c} | ${d} | ${c && d}`); 
console.log("---------------------------------")

// Operador OR
console.log("Resultados para operador OR");
console.log("---------------------------------")
console.log(`${a} | ${b} | ${a || b}`); 
console.log(`${a} | ${c} | ${a || c}`); 
console.log(`${a} | ${d} | ${a || d}`); 
console.log(`${b} | ${c} | ${b || c}`); 
console.log(`${b} | ${d} | ${b || d}`); 
console.log(`${c} | ${d} | ${c || d}`);  
console.log("---------------------------------")

// Operador NOT
console.log("Resultados para operador NOT")
console.log("---------------------------------")
console.log(`${a} | ${!a}`);  
console.log(`${b} | ${!b}`); 
console.log(`${c} | ${!c}`); 
console.log(`${d} | ${!d}`); 
console.log("---------------------------------")

