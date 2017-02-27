const makeCounter = () => {
    let privateCounter = 0;
    const changeBy = val => {
        privateCounter += val;
    }

    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        value: function() {
            return privateCounter
        }
    }
}

const counter1 = makeCounter;
console.log(counter1.increment());