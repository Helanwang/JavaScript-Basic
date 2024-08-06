/* Variables defined with const cannot be Redeclared

Variables defined with const cannot be Reassigned

Variables defined with const have Block Scope */

const PI = 3.14526;
console.log(PI)

const PI: 3.14
console.log(PI)
// got an error: SyntaxError: Identifier 'PI' has already been declared

// const can't be re define. but:
// Change the elements of constant array
// Change the properties of constant object
// is acceptable

const car = ['bmw', 'mazda', 'benz']
car[0] = 'audi'
car.push('benz')
console.log(car)

// Output: [ 'audi', 'mazda', 'benz', 'benz' ]
