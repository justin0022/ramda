import R from 'ramda';

const jsonFile = require('./data_with_vertical_hits_multilevel.json');

const getChildren = R.prop('children');

const child = getChildren(jsonFile);

let object = []

const getHTML = R.pipe(
    R.map(getChildren),
    R.map(R.map(getChildren)),
    R.map(R.map(R.map(getChildren)))
)

//console.log(getHTML(child)); 

//console.log(R.map(getChildren)(child)) 

console.log(getHTML(child))


