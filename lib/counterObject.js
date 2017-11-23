const counterObject = {
  counter: 0,
  changeBy: function (val) {
    this.counter += val
  },
  increment: function () {
    this.changeBy(1)
  },
  decrement: function () {
    this.changeBy(-1)
  },
  value: function () {
    return this.counter
  }
}

const createCount1 = Object.create(counterObject)
const createCount2 = Object.create(counterObject)

createCount1.changeBy(2)

counterObject.counter = 12

console.log('the value of createCount1 is ', createCount1.value()) // outputs 2, expected
console.log('the value of createCount2 is ', createCount2.value()) // outputs 12, WHAT????? oh makes sense now, because createCount2 doesn't have a counter value set, so it looks up its parent's counter value
console.log('the value of counterObject is ', counterObject.counter) // outputs 12, expected
console.log('the value of counterObject is ', counterObject.value()) // outputs 12, expected
