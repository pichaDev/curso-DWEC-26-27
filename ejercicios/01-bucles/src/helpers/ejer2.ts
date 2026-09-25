//crear una funcion que se le pase por parametro y lo encripte
//añadir una funcion inversa que una cadena de texto encriptada la desencripte
//buscar alguna libreria que permita generar cadenas encriptadas de forma segura
//
//@autor: Daniel RC.
//Investigación: Crypto, bcrypt-ts
//

import CryptoTS from 'crypto-ts';

const clave:string = "Soy un crack"

function encriptar(texto:string):string {
  const encryptedMessage:string = CryptoTS.AES.encrypt(texto, clave).toString();
  return encryptedMessage
}

function desencriptar(texto:string):string {
  const deCryptedMessage = CryptoTS.AES.decrypt(texto, clave);
  const original:string = deCryptedMessage.toString(CryptoTS.enc.Utf8)
  return original
}

function ejecutarEjercicio2(): void{
  const mensaje:string = "Hola mundo"
  //encriptamos
  const mensajeEncriptado:string = encriptar(mensaje)
  const mensajeDesencriptado:string = desencriptar(mensajeEncriptado)
  console.log("Mensaje original: ", mensaje)
  console.log("Mensaje Encriptado: ", mensajeEncriptado)
  console.log("Mensaje Desencriptado: ", mensajeDesencriptado)
}
ejecutarEjercicio2()
