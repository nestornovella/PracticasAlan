
function esPar(numero){
    /*  crea una funcion que reciba un numero y retorne 
    "es par" si el numero ingresado lo es sino que devuelva 
    "es inpar" */

}


function esMultiploDeDosYCinco(numero){
    /* crea una funcion que reciba un numero y devuelva true
    si es multiplo de dos y de 5 caso contrario retornar false */
    
}


function mirror (palabra){
    /*  crea una funcion que reciba una palabra
    y retorne la palabra invertida ejemplo:
    "Hola mundo"  => "odnum aloH"
    */
 }


 function arrayToObject(array){
     /*recibe un array con un nombre en la posicion 0
     password en posicion 1, email en posicion 2
     y debe retornar un objeto con las propiedades (name, password, email)
     y sus valores*/
    }
    
    
    function cuentaCifras(number){
        //  recibe un numero entero y
        //  debe devolver la cantidad de cifras que tiene
        //ejemplo: 4932 => retorna 4
    }
    
    
    function elMasGrandeYelMasPequeno(){
        // recibe un array de numeros y debe retornar un objeto 
        //con las propiedades min y max y el valor mas grande y
        // mas pequeno, ejemplo:
        // [3, 1, 5, 9] => retorna { min:1, max:9 }
    }
    
    
    function numeroAestrella(number){
        //recibe un numero y debe retornar
        //string de estrellas
        //ej 9 => "*********"
    }
    
    
    function aLenguageInclusivo(palabra){
        //recibe palabra y devuelve la misma en lenguage inclusivo
        //ej "todos" => "todes" ,  "bienvenidos" => "bienvenides"
    }
    
    
    function Potenciado (numero, exponente){
        //recibe un numero y un exponente y debe retornar el
        //resultado ejemplo 2, 2 => 4
    }
    
    function toCamelCase (frase){
        //recibe una frase y debe retornar un camecase
        //ejemplo "hola mundo" => "holaMundo"
    }
    
    function filtraLosPares(array){
        //recibe array de numeros y devuelve nuevo array con los 
        //numeros pares ejemplo: [1, 8, 9, 4] => [8, 4]
    }
    
    
    module.exports={
        esPar,
        esMultiploDeDosYCinco,
        mirror,
        arrayToObject,
        cuentaCifras,
        elMasGrandeYelMasPequeno,
        numeroAestrella,
        aLenguageInclusivo,
        Potenciado,
        toCamelCase,
        filtraLosPares
    
    }