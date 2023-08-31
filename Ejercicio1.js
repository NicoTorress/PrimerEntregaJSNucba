/**
 * 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
 */
const ParImpar = (numero) => {
  if (numero % 2 === 0) {
    console.log("El número ingresado es par");
  } else {
    console.log("El número ingresado es impar");
  }
};

// ------ PRUEBAS ------ //
// ParImpar(100)
// ParImpar(33)
// ParImpar(47)
// ParImpar(1005534)
ParImpar(1);



/**
 * 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
 */
const MayorMenor = (numA, numB) => {
  if (numA < numB) {
    console.log(`${numB} es mayor que ${numA}`);
  } else if (numA > numB) {
    console.log(`${numA} es mayor que ${numB}`);
  } else {
    console.log("Ambos números son iguales");
  }
};

// ------ PRUEBAS ------ //
// MayorMenor(175, 105)
// MayorMenor(40, 158)
MayorMenor(50, 50);



/**
 *  3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
 */
const multiploCinco = (numMulti) => {
  if (numMulti % 5 === 0) {
    console.log(`${numMulti} es múltiplo de 5`);
  } else {
    console.log(`${numMulti} no es múltiplo de 5`);
  }
};

// ------ PRUEBAS ------ //
// multiploCinco(122)
// multiploCinco(121)
// multiploCinco(15)
// multiploCinco(47)
multiploCinco(1035);



/**
 * 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
 */
const contador = (numeroCont) => {
  for (let i = 0; i <= numeroCont; i++) {
    console.log(i);
  }
};

// ------ PRUEBAS ------ //
// contador(7)
// contador(15)
contador(3);



/**
 * 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
 */
const repetidor = (palabraRepetida, numeroCont) => {
  for (let i = 0; i <= numeroCont; i++) {
    console.log(`${i} - ${palabraRepetida}`);
  }
};

// ------ PRUEBAS ------ //

// repetidor("Programación", 5)
// repetidor("Nicolás", 3)
repetidor("Nucba", 10);



/**
 * 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
*/
const cuentaNumeros = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

// ------ PRUEBAS ------ //
let numeros = [1, 2, 3, 4, 5, 6, 7];
cuentaNumeros(numeros);



/**
 * 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, 
 * menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
*/

const salteaNumero = (arrayNumeros) => {
  for (let i = 0; i < arrayNumeros.length; i++) {
    
    if (i == 4) {
      continue
    }else{
      console.log(arrayNumeros[i])
    }
  }
}

// ------ PRUEBAS ------ //
let diezNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10]
salteaNumero(diezNumeros)



/**
 * 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
 */
const multiplicarArray = (numsArray, multiplicador) => {

  for (let i = 0; i < numsArray.length; i++) {
    console.log(numsArray[i] * multiplicador);
  }
}

// ------ PRUEBAS ------ //
let nums = [1, 2, 3, 4, 5]
multiplicarArray(nums, 2)
