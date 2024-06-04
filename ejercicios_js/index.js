// <!-- 1. Contraseña válida -->

let contrasenaValida= (input)=>{
    return input== '2Fj(jjbFsuj' || input == 'eoZiugBf&g9' ? true : false
 }

console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValida("hi")) // false

// 2. Calcular impuestos
let calcularImpuestos= (edad, ingresos)=>{
    return edad >= 18 && ingresos >= 1000 ? ingresos* 0.4 : 0
 }
 console.log(calcularImpuestos(18, 1000)) // 400
 console.log(calcularImpuestos(40, 10000)) // 4000
 console.log(calcularImpuestos(17, 5000)) // 0
 console.log(calcularImpuestos(30, 500)) // 0

//  3. IMC (ïndice de masa corporal)

let bmi= (peso, altura)=>{
    total= peso / altura**2
    return total < 18.5 ? 'Bajo de peso' : total >=18.5 && total <= 24.9 ? 'Normal'
    : total >=25 && total <= 29.9 ? 'Sobrepeso' : 'Obeso';
 }
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"

// 4. Imprimir un arreglo
const imprimirArreglo= (arreglo)=>{
    arreglo.forEach(elemento => {
        console.log(elemento);
      });
 }
 
console.log(imprimirArreglo([1, "Hola", 2, "Mundo"]));
// 1
// Hola
// 2
// Mundo

// 5. Número de Likes



let likes = (numero) => (
    numero >= 1000000 ? Math.round(numero / 1000000) + 'M' :
    numero >= 1000 ? Math.round(numero / 1000) + 'K' :
    numero.toString()
);

// Código de prueba
console.log(likes(983));      // Output: "983"
console.log(likes(1900));     // Output: "1K"
console.log(likes(54000));    // Output: "54K"
console.log(likes(120800));   // Output: "120K"
console.log(likes(25222444)); // Output: "25M"

//6 Fizzbuzz
let fizzbuzz = (number) => (number % 3 === 0 && number % 5 === 0) ? "fizzbuzz" : (number % 3 === 0) 
? "fizz" : (number % 5 === 0) ? "buzz" : number;
// código de prueba
console.log(fizzbuzz(6)); // "fizz"
console.log(fizzbuzz(20)); // "buzz"
console.log(fizzbuzz(30)); // "fizzbuzz"
console.log(fizzbuzz(8)); // 8

//7 Contar numeros
let contarRango = (menor, mayor) => {
    let contador = 0;
    for (let i = menor; i < mayor; i++) {
        contador++;
    }
    return contador - 1;
};

console.log(contarRango(1, 9)); // 7
console.log(contarRango(1332, 8743)); // 7410
console.log(contarRango(5, 6)); // 0

// 8 Sumar numeros
let sumarRango = (menor, mayor) => {
    if (menor === mayor) {
        return 0;
    }
    return (mayor * (mayor + 1)) / 2 - ((menor - 1) * menor) / 2;
};

console.log(sumarRango(0, 10)); // 55
console.log(sumarRango(12, 14)); // 39
console.log(sumarRango(5, 5)); // 0

//9 Número de aes (letra "a")
const numeroDeAes = (palabra) => palabra.split("a").length - 1;

console.log(numeroDeAes("letra")); // 1
// código de prueba
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0

//10. Número de caracteres
 function numeroDeCaracteres(cadena, letra){
    var contador = 0;
    for (let i = 0; i < cadena.length; i++) {

         if (cadena[i] === letra) {
             contador++;
         }
         
     }
     return (`${cadena},${contador}`)
 }
 console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4

//16. Capitalizar palabra
let capitalizar=(cadena)=>{
    return cadena.charAt(0).toUpperCase()+ cadena.slice(1);
}
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // "


//17. Capitalizar cada palabra
let capitalizarPalabra=(texto)=>{
    if(texto.length===0){
        return []
    }else{
    let palabras=texto.split(" ")
    for(let i=0;i<palabras.length;i++){
       palabras[i]=palabras[i][0].toUpperCase() + palabras[i].slice(1)
       
    }
    return palabras
    
    }

  
}
// código de prueba
console.log("17")
console.log(capitalizarPalabra("hola mundo")) // "Hola Mundo"
console.log(capitalizarPalabra("make it real")) // "Make It Real"
console.log(capitalizarPalabra("")) // ""

//18. Encontrar el número máximo
let max=(lista)=>{
    let mayor=0;
    for(i=0;i<lista.length;i++){
        if(lista[i]>mayor){
            mayor=lista[i]
        }
    }
    return mayor;
}
console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9

//19. Encontrar el número mínimo
let min=(lista)=>{
    let menor=Math.min(...lista);
    for(i=0;i<lista.length;i++){
        if(lista[i]<menor){
            menor=lista[i]
        }
    }
    return menor;
}
// código de prueba
console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2

//20. Generar contraseña

let password=(contraseña)=>{
    const diccionario = {
        'a': '4',
        'e': '3',
        'i': '1',
        'o': '0',
    };
    return contraseña.split('').map(letra=>diccionario[letra]|| letra).join('');
}
    console.log(password("hola")) // "h0l4"
    console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
    console.log(password("")) // ""

