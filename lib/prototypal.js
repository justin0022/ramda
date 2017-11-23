const person = {
  name: 'default',
  age: 20,
  changeName (name) {
    this.name = name
  },
  changeAge (age) {
    this.age = age
  }
}

const justin = Object.create(person)
justin.changeName('Justin')
justin.changeAge(23)

const hannah = Object.create(person)

person.changeAge(35)

console.log(JSON.stringify(justin))
console.log(JSON.stringify(hannah.age))
console.log(JSON.stringify(person))
