// Object methods are actions that can be performed on objects.
//
// A method is a function definition stored as a property value.

const person = {
    first: 'Mike',
    last: 'Wang',
    full_name: function x() { return person.first + " " + person.last

    },
    upper_case_full_name: function y() {
        return person.full_name().toUpperCase()
    }
}
stored = person.full_name()
console.log(stored)
//output: Mike Wang

console.log(person.upper_case_full_name())
