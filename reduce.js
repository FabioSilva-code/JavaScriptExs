const numbers = [5, 5, 5, 5, 5, 5] // 30 // fazer soma deste array com reduce

const soma = numbers.reduce((previous, current) => { // pegamos no valor anterior e somamos o atual 
    return previous + current
}, 0) // acumulador, starting point
console.log(soma)

// reduce Oldest person
const people = [
    {
        name: "Fábio Silva",
        age: 24
    },
    {
        name: "Joaquim Pereira",
        age: 48
    },
    {
        name: "Fernando Manuel",
        age: 35
    }
] // array reduce to give the oldest

const oldestAge = people.reduce((previous, current) => {
    /* if(current.age > previous){
        return current.age
    } return previous */
    return current.age > previous ? current.age : previous
}, 0)
console.log(oldestAge)



// reduce FirstName 1st letter and LastName 1st Letter
const people1 = [
    {
        name: "Fábio Silva",
        age: 24
    },
    {
        name: "Joaquim Pereira",
        age: 48
    },
    {
        name: "Fernando Manuel",
        age: 35
    }
] // array reduce to give the oldest

const output = people.reduce((previous, current , index , array) => {
    const split = current.name.split(" ") // === [ 'Fábio', 'Silva' ][ 'Joaquim', 'Pereira' ][ 'Fernando', 'Manuel' ]
    let part = `${split[0][0]}${split[1][0]}`
    
    if(index=== array.length-1){
        part += "."
    }else{
    part += ", "
    } 
    return previous + part

}, "")
console.log(output)


const orders =[
    {id: "1", status:"pending"},
    {id: "2", status:"pending"},
    {id: "3", status:"cancelled"},
    {id: "4", status:"shipped"},
]

const result = orders.reduce((acc, order)=>{
    return {...acc , [order.status]: (acc[order.status]|| 0)+1}
}, {})

console.log(result)