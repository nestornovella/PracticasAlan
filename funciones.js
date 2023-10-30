// verificar edad
//                 true
function verifyAge(age) {
  if (typeof age != "number") {
    return "invalid Params";
  }
  if (age < 1 || age > 99) {
    return "invalid Age";
  }

  if (age < 18) {
    return false;
  } else {
    return true;
  }
}
// callbacks
function datosPersonales(nombre, apellido) {
  return nombre + " " + apellido;
}

function saludar(nombre, apellido) {
  const nombreCompleto = datosPersonales(nombre, apellido);
  const mensaje = "hola " + nombreCompleto + " como estas?";
  console.log(mensaje);
}

// statement switch 
  function coloresPrimarios(color) {
  const response = "el color es primario y es el " + color;

  switch (color) {
    case "red" || "rojo":
      return response;
    case "blue" || "azul":
      return response;

    case "yellow" || "amarillo":
      return response;
    default:
      return `el color que ingresaste no es primario [${color}]`;
  }
}

module.exports = {
  verifyAge,
  coloresPrimarios
}



