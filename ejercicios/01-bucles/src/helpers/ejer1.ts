//crear una funcion que mientras sea verdad compruebe todos los valores de un array pasado como parametro, guarde los positivos en un array llamado positivo, los negativos en negativos y calcule la suma de todos ellos y calcule la suma de los arrays


function separarNegat(numeros: number[]){
const posit:number[] = []
const negat:number[] = []
let sumaPositivos:number = 0
let sumaNegativos:number = 0
  for(const numero of numeros){
    if(numero>=0){
      posit.push(numero)
      sumaPositivos += numero
    } else {
      negat.push(numero)
      sumaNegativos += numero
    }
  };
  return {
   posit,
   negat,
   sumaPositivos,
   sumaNegativos
  }

}


const datos:number[] = [1, -10, 25, 11, 9, 5, -6, 8, -5, 9, 12, -10]

const resultado = separarNegat(datos)
console.log("El array de positivos es: ", resultado.posit);
console.log("--------------- Suma del array de positivos: ", resultado.sumaPositivos);
console.log("El array de negativos es: ", resultado.negat);
console.log("--------------- Suma del array de negativos: ", resultado.sumaNegativos);
