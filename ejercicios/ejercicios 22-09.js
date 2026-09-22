//Ejercicio 1: Suma de Array

const arr1Ejer1 = [1,2,3];
const arr2Ejer1 = [4,5,6];

function sumaArrays(arr1, arr2) {
  const result = [];
  arr1.forEach(function(number, i){
    result.push(arr2[i]+number);
  });
  return result;
}
console.log("Ejer 1");
console.log(sumaArrays(arr1Ejer1, arr2Ejer1));

//Ejercicio 2: Dublicados

const arrEjer2 = [1,2,2,3,4,5,5,5,6];

function eliminarDuplicados(arr) {
  return Array.from(new Set(arr))
}
console.log("Ejer 2");
console.log(eliminarDuplicados(arrEjer2))

//Ejercicio 3: Filtrar Pares

const arrEjer3 = [1,2,3,4,5,6,7,8,9,10];

function filtrarPares(arr)  {
  const result = [];
  arr.forEach(function(number){
  if(number%2==0){
      result.push(number);
    };
  });
  return result;
}
console.log("Ejer 3");
console.log(filtrarPares(arrEjer3))

//Ejercicio 4: Unión de arrays

const arr1Ejer4 = [1,2,3,4,5]
const arr2Ejer4 = [6,7,8,9,10]
const arr3Ejer4 = [11,12,13,14,15]

function unirArrays(...arrays){
  const result = [];
  return result.concat(...arrays);
}
console.log("Ejer 4");
console.log(unirArrays(arr1Ejer4,arr2Ejer4,arr3Ejer4))

//Ejercicio 5: Conteo de Palabras

function contarPalabras(texto){
  const textoPartido = texto.split(" ");
  const contador = {};
  textoPartido.forEach(function(palabra){
    if(palabra in contador){
      contador[palabra]++;
    }else{
      contador[palabra] = 1;
    }
  });
  return contador;
}
console.log("Ejer 5");
console.log(contarPalabras("Hola mundo"))

//Ejercicio 6: Ordenar Números

const arrEjer6 = [2,4,1,3,8,5]

function ordenarNumeros(arr){
  const result = [];
  let menor = arr[0];
  arr.forEach(function(numero){
    if(numero < menor){
      menor = numero;
    }else{
      result.push(numero)
      };
    });
    return result;
  }
console.log("Ejer 6");
console.log(ordenarNumeros(arrEjer6))
