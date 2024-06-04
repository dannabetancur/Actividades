// const sumarCuadrados =(arrayNumeros) =>{
//     return(
//         console.log(arrayNumeros)
//     )
// }
// console.log("Hola")
function sumarCuadros(arrayNumeros) {
    let sum;
    for (let i = 0; i < arrayNumeros.length; i++) {
        let cadenaNumero = arrayNumeros[i].toString();
        if (i === arrayNumeros.length - 1) { 
            sum = "=".repeat(cadenaNumero.length);

        } else {
            sum = "-".repeat(cadenaNumero.length);
        }
        console.log(`+ ${sum} + \n| ${arrayNumeros[i]} | \n+ ${sum} +`);
    }
}

const arrayNumeros = [1, 23, 45367, 3267, 12354, 23139554];
sumarCuadros(arrayNumeros);
