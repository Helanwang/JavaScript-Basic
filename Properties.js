const person = {
    name: "Helen",
    id: 123,
    school: 'Foothill College'

}

delete person.id;
delete person['name'];
// these two ways are the same


console.log(person);
//output:{ name: 'Helen', school: 'Foothill College' }
// it doesn't have id anymore

//nested objects:

const person2 ={
    name: 'mike',
    age: 32,
    cars: {
        car1: 'lambo',
        car2: 'bmw',
        car3: 'benz'
    }
}

console.log(person2)
console.log(person2.cars.car1) //output: lambo
console.log(person2['cars']['car2']) //output: bmw
//access the objects within the object.