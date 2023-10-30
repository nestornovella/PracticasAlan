
//ciclos o iteradores

//for 
for(let i =0; i < Array.length; i++){

}


//while

    //true
let i =0

while(i < 10){
    console.log("hola")
    i++
}


const array = []

for(let i =1; i <= 100; i++){
    array.push(i)
}
// recorrer si retornar


const persona1 = {
  nombre: "Alan",
  apellido: "Ibarra",
  edad: 24,
  genero: "masculino",
};

const persona2 = {
  nombre: "Nestor",
  apellido: "Novella",
  edad: 33,
  genero: "masculino",
};

const persona3 = {
  nombre: "Carla",
  apellido: "Fernandez",
  edad: 37,
  genero: "femenino",
  amigos: [persona1, persona2]
};

const persona = [persona1, persona2, persona3]

const nombres = persona.map( p => { return {nombre:p.nombre, apellido:p.apellido}})

const filtrados = persona.filter( p => p.genero == 'femenino')

const encontrar = persona.find( p => p.nombre.includes('Carla'))

console.log(encontrar)
