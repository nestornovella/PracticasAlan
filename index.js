const mirror = require("./metodosArray");


console.log(
  mirror('cocacola')
  )





// //guardar inf en memoria constantes y variables
// //var
// //const
// //asignacion

// //tipos de datos primitivos
// var numerosEnteros = 5; //numero entero
// var decimal = 1.3;
// var strings = "Alan";
// const booleanos = true; // false

// //estructuras de datos

// //operadores logicos + - < > == === !=

// var numero1 = 10;
// var numero2 = 10;

// //condiciones son if, else if, else
// if (numero1 < numero2) {
//   console.log("es menor");
// } else if (numero1 == numero2) {
//   console.log("es igual");
// } else {
//   console.log("es mayor");
// }

// // encontrar si es vocal
// //operadores logicos < > + - == === !=  && and  || or

// var letra = "z"; //definimos letra asignamos z
// var respuesta = "es una consonante"; // definimos una respuesta por defecto

// if (
//   letra === "a" ||
//   letra === "e" ||
//   letra === "i" ||
//   letra === "o" ||
//   letra === "u"
// ) {
//   respuesta = "es vocal"; // variable constante se reasigna a el STRING es vocal
// }

// // siempre se imprime lo que contiene respuesta
// // en javascript se pueden sumar valores y concatenar strings
// // javascript toma varias decisiones por nosotros

// var nombre = "alan";
// var apellido = "ibarra";

// console.log(5 * "5");

// //operadores logicos && ||

// console.log(true && true); // operador && == y

// //estructura de datos Array []
// //lista de elementos
// const personas = ["alan", "carla", "nestor"]; // Metodos
// //                  0        1         2
// const nombresYApellidos = [
//   ["alan", "ibarra"],
//   ["nestor", "novella"],
//   ["carla", "fernandez"],
// ];

// personas.push("Daniela"); //agrega un elemento al final del array
// personas.push("Carlos");
// //  asign      condicion

// for (var i = 0; i < nombresYApellidos.length; i++) {
//   console.log(
//     "hola me llamo " +
//       nombresYApellidos[i][0] +
//       " y mi apellido es " +
//       nombresYApellidos[i][1]
//   );
// }

// //estructura de datos Objetos
// //caracteristica del objeto key o llave y por un valor

// const persona1 = {
//   nombre: "Alan",
//   apellido: "Ibarra",
//   edad: 24,
//   genero: "masculino",
// };

// const persona2 = {
//   nombre: "Nestor",
//   apellido: "Novella",
//   edad: 33,
//   genero: "masculino",
// };

// const persona3 = {
//   nombre: "Carla",
//   apellido: "Fernandez",
//   edad: 37,
//   genero: "femenino",
//   amigos: [persona1, persona2]
// };

// const listaDePersonas = [
//   persona1,
//   persona2,
//   persona3,
//   { nombre: "luis", apellido: "Gonzales", edad: 37, genero: "masculino" },
// ];

// for (var i = 0; i < listaDePersonas.length; i++) {
//   console.log("-------------");
//   console.log(listaDePersonas[i].nombre + "\n" + listaDePersonas[i].apellido);
//   if(listaDePersonas[i].hasOwnProperty('amigos')){
//     console.log(listaDePersonas[i].amigos[1].nombre)
//   }
//   else{
//     console.log('no posee amigos')
//   }
//   console.log("-------------");
// }

// Funciones { importante!!! } paradigma funcional se basa FUNCIONES
//             parametros

//              1000
// function suma (valor1){
//   const resultado = valor1 + 10
//   console.log(resultado) // opcion1 => error o undefined  [opcion2 => 20]
//   return resultado
// }

// const valorDeFuncion = suma(1000) + 100 // [opcion1 => 110]   opcion2 => 50   opcion3 => error


// function crearAmigo(nombre, apellido, edad, genero){
//   var amigoCreado = {}
//   amigoCreado.name = nombre
//   amigoCreado.surname = apellido
//   amigoCreado.age = edad
//   amigoCreado.gender = genero
//   return amigoCreado
// }


// const alan = crearAmigo('Alan', 'Ibarra', 24, 'prefiero no decirlo')
// console.log(alan)

