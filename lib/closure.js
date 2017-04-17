// module pattern, acts like an api where the public part is inside the return statement, and the private part is above it
const makeCounter = () => {
    let privateCounter = 0;
    const changeBy = val => privateCounter += val;
    
    return {
        increment(){
            changeBy(1);
        },
        decrement() {
            changeBy(-1);
        },
        incrementBy(val) {
            changeBy(val);
        },
        decrementBy(val) {
            changeBy(-val);
        },
        value(){
            return privateCounter
        }
    }
}

const counter1 = makeCounter();
counter1.increment();
console.log('the value of counter1 is: ', counter1.value());

// creating two different counters, not a reference to the same counter. 
const counter2 = makeCounter();
console.log('the value of counter2 is: ', counter2.value());
counter1.incrementBy(10);
console.log("value should equal 11 ", counter1.value());

// creating two different counters, not a reference to the same counter. 
const counter2 = makeCounter();
//console.log(counter2.value());



const counterObject = {
    counter: 0,
    changeBy: function(val) {
        this.counter += val;
    },
    increment: function() {
        this.changeBy(1);
    },
    decrement: function() {
        this.changeBy(-1);
    },
    value: function() {
        return this.counter;
    }
}

counterObject.increment();
counterObject.increment();
counterObject.increment();
console.log(counterObject.value());
counterObject.decrement();
counterObject.decrement();
console.log(counterObject.value());

// this is referencing the same object, whereas using object.create creates a new object, instead of just referencing like above
const count1 = counterObject;
const count2 = counterObject;

count1.increment();
console.log("the value of count1 is ", count1.value());
console.log("the value of count2 is ", count2.value());

// creating new objects
const createCount1 = Object.create(counterObject);
const createCount2 = Object.create(counterObject);
createCount1.increment();
console.log("the value of createCount1 is ", createCount1.value());
console.log("the value of createCount2 is ", createCount2.value());


//reference to same object
// count1.increment();
// console.log("the value of count1 is ", count1.value());
// console.log("the value of count2 is ", count2.value());

// console.log("the value of counterObject is", counterObject.counter);

const createCount1 = Object.create(counterObject);
const createCount2 = Object.create(counterObject);

createCount1.changeBy(2);

counterObject.counter = 12;

console.log("the value of createCount1 is ", createCount1.value());
console.log("the value of createCount2 is ", createCount2.value());
console.log("the value of counterObject is ", counterObject.counter);

