const addX = x => {
    return y => x + y;
}

const add2 = addX(2);
//console.log(add2(3));

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

waffle.init('waffle');
waffle.eat();

carrot.init('carrot');
carrot.eat();