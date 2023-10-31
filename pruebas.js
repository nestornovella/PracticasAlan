function randomId() {

    const letters = "AECDFKLIUP".split("")
    const numbers = "1234567890".split("")

    let id = ""
    let changeCharacterType = false
    for (let i = 1; i <= 4; i++) {
        for (let x = 1; x <= 4; x++) {
            if (!changeCharacterType) {
                const character = letters[Math.floor(Math.random() * (letters.length))]
                id += character
            }else{
                const character = numbers[Math.floor(Math.random() * (letters.length))]
                id += character
            }
            changeCharacterType = !changeCharacterType

        }
        id += "-"
    }
    return id.slice(0, -1)
}


console.log(randomId())

class User {
    id = 0
    nombre
    edad
    email
    constructor(name, age, email) {
        this.id++
        this.nombre = name
        this.edad = age
        this.email = email
    }

    showInfo() {
        return "nombre: " + this.nombre + "\n id: " + this.id
    }
    
}

class Vendedor extends User {
    rango
    antiguedad = 1
    constructor(name, age, email, rango, antiguedad) {
        super(name, age, email)
        this.rango = rango
        this.antiguedad = antiguedad
    }
    
}

class Client extends User {
    peliculasAlquiladas = []
    direccion
    telefono
    membrecia
    constructor(name, age, email, direccion, telefono, membrecia) {
        super(name, age, email)
        this.direccion = direccion
        this.telefono = telefono
        this.membrecia = membrecia
    }

    alquilarPelicula (pelicula) {
        if (pelicula.disponibility){
            pelicula.changeDisponibility(false)
            this.peliculasAlquiladas.push(pelicula)
            
        }
        else {
            console.error("La pelicula no está disponible")
        }
    }
    
}

class Pelicula {
    id
    title
    gender
    parentalAdivisory
    duration
    disponibility
    constructor(title, gender, parentalAdivisory, duration, disponibility) {
        this.id = randomId()
        this.title = title
        this.gender = gender
        this.parentalAdivisory = parentalAdivisory
        this.duration = duration
        this.disponibility = disponibility
    }

        changeDisponibility (boolean) {
            this.disponibility = boolean
        }

        isAviable(){
            if (this.disponibility) {
                console.log ("Esta pelicula está disponible")
            }
            
            else {
                console.log ("Esta pelicula no está disponible")
            }
        }

}






const Alan = new Client ("Alan", 22, "alanska99@gmail.com", "Valparaiso 989", 1167413544, true)
const horacio = new Vendedor("Horacio", 32, "horacioseller@gmail.com", "gerente", 2)
const jurasicPark = new Pelicula ("Jurasic Park", "Action", !false, 2.45, !false)

Alan.alquilarPelicula (jurasicPark)
jurasicPark.isAviable()
