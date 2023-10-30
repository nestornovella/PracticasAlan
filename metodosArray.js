var personas = ["alan", "mica", "nestor"];

function arrayAMayuscula(array) {
  const newArray = [];
  for (var i = 0; i < array.length; i++) {
    const nombreEnMayuscula = array[i][0].toUpperCase() + array[i].slice(1); // strings
    newArray.push(nombreEnMayuscula);
  }
  return newArray;
}

function mirror(palabra) {
  return palabra.split("").reverse().join("");
}

function push(arreglo, elemento) {
  arreglo[arreglo.length] = elemento;
  return arreglo;
}

function cuentaLaLetraEnLAFrase(frase, letra) {
  var counter = 0;
  const fraseAArray = frase.split("");
  var espacios = 0

  for (var i = 0; i < fraseAArray.length; i++) {
    if (fraseAArray[i].toLowerCase() === letra.toLowerCase()) {
      counter++;
    }
    if (fraseAArray[i] === " ") {
        espacios++
    }
  }

  return {
    letraIngresada: letra,
    cantidadDeCoincidencias: counter,
    totalLetras: fraseAArray.length - espacios,
  };
}

function shift(arreglo) {
  personas = arreglo.slice(1);
  return arreglo;
}

const frase = "carabana banana , catana romana";

console.log(cuentaLaLetraEnLAFrase(frase, "A"));

module.exports = mirror;
