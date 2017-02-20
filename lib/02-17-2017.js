import R from 'ramda';

// trying out the spread operator:
const arrayOfWords = ['hi', 'there', 'my', 'name', 'is']
const name = ['justin']
let intro = [...arrayOfWords, ...name];
console.log(intro);

// trying out all ramda functions

const add2 = R.add(2);
console.log('add: ', add2(1));

const mapWithIndex = R.addIndex(R.map);
const mapWithIndexArray = mapWithIndex((val, i) => i + '-' + val)(['a', 'b', 'c', 'd']);
console.log('addIndex: ', mapWithIndexArray);

const add10AtIndex1 = R.adjust(R.add(10), 1);
console.log('adjust: ', add10AtIndex1([1, 2, 3]));

const equalsString = (string) => R.equals(string);
const everyoneEqualsString = (string) => R.all(R.equals(string));
console.log('all: ', everyoneEqualsString('hello')(['hello','hello','hello','hello','hello','hello']))
console.log('all: ', everyoneEqualsString('hello')(['hello','hello','hello','hello','hello','hi']))

// skipped allPass and always (always is equivalent to const)

const applyFuncAndAppend = R.ap([R.add(2), R.multiply(3), R.subtract(5)])([1, 2, 3, 4]);
console.log(applyFuncAndAppend);

const aperture = R.aperture(3, [1,2,3,4,5,6,7,8,9,10])
console.log(aperture);

const appendToList = R.append('hi', [1,2,3,4]);
console.log(appendToList);

const array = [1,2,3,4,5];
const apply = R.apply(Math.max, array);
console.log(apply);

//ascend (and sort and prop)
const people = [
    {
        age: 12,
        name: 'Justin'
    },
    {
        age: 33,
        name: 'Joe'
    },
    {
        age: 4,
        name: 'George'
    },
    {
        age: 54,
        name: 'Edmund'
    },
    {
        age: 22,
        name: 'Justin'
    },
    {
        age: 62,
        name: 'Justin'
    },
];

const byAge = R.ascend(R.prop('age'));
const peopleByYoungest = R.sort(byAge, people);
console.log(peopleByYoungest);

