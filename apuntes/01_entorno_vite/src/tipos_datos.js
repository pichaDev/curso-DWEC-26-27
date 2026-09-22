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




// Funcion que pase de celsius a kelvin pero comprobando que celsius es un número, 
// que la temperatura no puede estar por debajo del 0 absoluto (-273) y el resultado me lo das con solo 2 cifras decimales
// isNan buscamos que significa
// como truncamos un numero a dos cifras decimales
