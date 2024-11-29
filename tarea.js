alert("un mensaje"); // 1-

document.write("Hello World"); // 2-

let a = 3; let b = 5; document.write("  Ejercicio 3: El resultado de 3 + 8 es: ", a + b  ); // 3-

let nombre = prompt("Nombre de usuario");

console.log("Hola "+ nombre ); // 4- 

let primernum = parseInt(prompt("primer numero a sumar"));

let segundonum = parseInt(prompt("segundo numero a sumar"));

document.write(" Ejercicio 5: La suma de los números da ", primernum + segundonum, " "); // 5- 


let primervalor = prompt("Primer número (mayor/menor)");
let segundovalor = prompt("Segundo número (mayor/menor)");

if(primervalor > segundovalor){
    document.write(" Ejercicio 6: El "+ primervalor + " es el número más grande ");
} else if (primervalor < segundovalor){
    document.write(" Ejercicio 6: El "+ segundovalor + " es el número más grande ");
} else {
    document.write(" Ejercicio 6: Los números son iguales ");
}// 6- 

let n1 = prompt("primer número (mayor o menor de 3)");
let n2 = prompt("segundo número (mayor o menor de 3)");
let n3 = prompt("tercer número (mayor o menor de 3)");

if(n1 > n2 && n1 > n3){
    document.write(` Ejercicio 7: El número ${n1} es mayor `);
} else if(n2 > n1 && n2 > n3){
    document.write(` Ejercicio 7: El número ${n2} es mayor `);
} else if(n3 > n1 && n3 > n1){
    document.write(` Ejercicio 7: El número ${n3} es mayor `);
} else {
    document.write(` Los números son iguales `);
}// 7- 

let esDivisible = +prompt("¿Este número es divisible por 2?")

if(esDivisible % 2 === 0){
    console.log(`El número ${esDivisible} es divisible por 2.`)
} else {
    console.log(`El número ${esDivisible} no es divisible por 2.`);
}
    // 8- 

let frase = prompt("Escribe una frase").trim(); // quito espacios en blanco ".toLowerCase" carácteres a minúsculas

let vocales = "aeiouAEIOU"

let vocalesEncontradas = ""; //inicializo un array nuevo para guardar las vocales que aparezcan 
// charAt sirve para obtener el caracter en una posicion especifica
for (let i = 0; i < frase.length; i++){
    let letravocal = frase[i];
    if (vocales.includes(letravocal)){
        vocalesEncontradas += letravocal;
    }
}

console.log(vocalesEncontradas);

    // 9-  

let esDivisiblePor = +prompt("¿Es divisible por 2, 3, 5 o 7?")

    switch(true){
        case esDivisiblePor % 2 === 0:
            console.log(`El ${esDivisiblePor} es divisible por 2.`);
            break;
        case esDivisiblePor % 3 === 0:
            console.log(`El ${esDivisiblePor} es divisible por 3.`);
            break;
        case esDivisiblePor % 5 === 0:
            console.log(`El ${esDivisiblePor} es divisible por 5.`);
            break;
        case esDivisiblePor % 7 === 0:
            console.log(`El ${esDivisiblePor} es divisible por 7.`);
            break;
        default:
            console.log(`No es divisible por ninguno`);
            break;
    }

     /*
    let = num = +(prompt('Ingrese un numero'));

    if(num % 2 === 0 || 
       num % 3 === 0 ||
       num % 5 === 0 ||
       num % 7 === 0){
    console.log('El numero ingresado es divisible');
    } else {
    console.log('No es divisible por 2, 3, 5 o 7'); 
    }

    */
    

    // 10- 

    let esDivisiblePorVarios = +prompt("¿Es divisible por alguno o varios de estos 2, 3, 5 o 7?")

    let divisor = []

    if(esDivisiblePorVarios % 2 === 0){
        divisor.push(2);
    } if(esDivisiblePorVarios % 3 === 0){
        divisor.push(3)
    } if(esDivisiblePorVarios % 5 === 0){
        divisor.push(5)
    } if(esDivisiblePorVarios % 7 === 0){
        divisor.push(7)
    } if (divisor.length > 0) {
        const divisoresTexto = divisor.map((d, i) => 
            i === divisor.length - 1 && i > 0 ? `y por ${d}` : `por ${d}`
        ).join(', ');
        console.log(`El ${esDivisiblePorVarios} es divisible ${divisoresTexto}.`);
    } else {
        console.log(`El ${esDivisiblePorVarios} no es divisible por ninguno de los números 2, 3, 5 o 7.`);
    }
       
   
    // 11- 


