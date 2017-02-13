import R from 'ramda';

const stringFunctor = (value, fn) => {
    let chars = value.split("");
    return R.map(char => String.fromCharCode(fn(char.charCodeAt(0))), chars).join("");
}
const addOne = value => value + 1;
const minusOne = value => value - 1;

// console.log(stringFunctor("ABC", addOne));
// console.log(stringFunctor("XYZ", minusOne));