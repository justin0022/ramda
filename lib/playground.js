const addX = x => {
    return y => x + y;
}

const add2 = addX(2);

console.log(add2(3));