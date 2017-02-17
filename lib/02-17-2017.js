import R from 'ramda';
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

