//  Funcion que le pase como parametro un numero en grados celsius y lo transorma a grados kelvin

//V1 (Casi nunca usaremos nada tan verboso)
function celsiusToKelvin(celsius){
  let kelvin = celsius + 273.15
  return kelvin
}

//V2 (Donde priorizamos el menor número de lineas)
function celsiusToKelvin(celsius){
  return celsius + 273.15
}

//V3 (Modo pro usando arrow function)
const celToKel = (celsius) => {
  return celsius + 273.15
}

//V4 (Modo papu)
const cTok = ( c ) => c + 273.15


// Funcion que le pase como parámetro dos y que los ordene
function ordenar(num1, num2){
  if(num1<num2){
    return [num1, num2]
  } else {
    return [num2, num1]
  }
}
console.log(ordenar(5,2))



// Funcion que pase de celsius a kelvin pero comprobando que celsius es un número, que la temperatura no puede estar por debajo del 0 absoluto (-273) y el resultado me lo das con solo 2 cifras decimales
function celToKel(c){
  if(!isNaN(c)){
    if(c>=-273){
      return Math.trunc((c+273.15) * 100) / 100;
    } else {
      return "Está por debajo del 0 absoluto"
    }
  } else {
    return "No es un número"
  }
}

// isNan buscamos que significa
// Es una funcion que comprueba si algo es un número o si se puede convertir en uno y responde en forma de boolean
// isNaN(5)       // false, 5 sí es un número
// isNaN("hola")  // true, "hola" no se puede convertir a número
// isNaN("123")   // false, ojo: "123" SÍ se puede convertir a número (123)

// como truncamos un numero a dos cifras decimales
