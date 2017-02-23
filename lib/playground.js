const food = {
    init: function(type) {
        this.type = type
    },
    eat: function() {
        console.log('you ate the ' + this.type)  
    } 
}
const waffle = Object.create(food);
const carrot = Object.create(food);

food.eat = function() {
    console.log('you did not eat the ' + this.type)
}

// waffle.init('waffle');
// waffle.eat();

// carrot.init('carrot');
// carrot.eat();

const funct = a => b => c => d => e => a + b + c + d + e;

const a = funct(1);
const b = a(2);
const c = b(3);
const d = c(4);
const e = d(5);

console.log(e);

const addX = x => y => x + y;
const add2 = addX(2);
