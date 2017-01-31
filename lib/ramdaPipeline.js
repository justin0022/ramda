import R from 'ramda';

const jsonFile = require('./data_with_vertical_hits_multilevel.json');


//get properties by key
const getName = R.prop("name")
const getChildren = R.prop("children")
const getHit = R.prop("hit")
const getCategory = R.prop("category")

//map over
const mapOverChaptersAndGetHits = R.map(getHit);
const mapOverChaptersAndGetNames = x => R.map(getName, getChildren(x));

console.log(mapOverChaptersAndGetNames(jsonFile));

// console.log(mapOverChaptersAndGetHits(getChildren(jsonFile)));
// console.log(mapOverChildrenAndGetSomething(getChildren)(jsonFile));


