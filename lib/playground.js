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

const addX = x => y => x + y;
const add2 = addX(2);

const dog = {
    sound: 'woof',
    bark: function() {
        console.log(this.sound);
    }
}

dog.bark();
const dogBark = dog.bark.bind(dog);
dogBark();

carrot.init('carrot');
carrot.eat();

food.eat = function() {
    console.log('you did not eat the ' + this.type)
}
const donut = {...food};
donut.init('donut');
donut.eat();



