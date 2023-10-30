

const object = {
    value1:2, 
    value3:3,
    value4:{
        value1:9,
        value2:{
            value1:33,
            value2:92
        },
        value3: 1900
    },
    value5:12
}

function getValue (object, number){
    let itsFinded = false
    for (const value in object){
        if(typeof object[value] == 'object'){
            const interObject = getValue(object[value], number)
            if(interObject) itsFinded = true
        }
        else if(number === object[value]) itsFinded = true
    }
    
    return itsFinded
}

console.log(getValue(object, 1900))


class Person{
    name
    age
    surname
    constructor(name, surname, age){
        this.name = name,
        this.age = age,
        this.surname = surname
    }
    showName(){
        console.log(this.name + ' ' + this.surname)
    }
}


const carlos = new Person('carlos', 'gonzales', 32)

console.log(carlos)

class PersonVip extends Person{
    itsVIP
    amigos = []
    constructor(name, surname, age, itsVIP){
        super(name, surname, age, itsVIP)
        this.itsVIP = itsVIP
    }

    addFriend(nameFriend){
        this.amigos.push(nameFriend)
    }

    getFriends(){
        console.log(this.amigos)
    }



}

const juan = new PersonVip('juan', 'gimenez', 32, true)
juan.addFriend('pedro')
juan.addFriend('ramon')

juan.getFriends()

