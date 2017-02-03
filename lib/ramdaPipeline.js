import R from 'ramda';

const jsonFile = require('./data_with_vertical_hits_multilevel.json');


//get properties by key
const getName = R.prop("name")
const getChildren = R.prop("children")
const getHit = R.prop("hit")
const getCategory = R.prop("category")

//map over and get X 
const mapOverChaptersAndGetXFromY= (x,y) => R.map(x, getChildren(y));
const countHitsFromChapters = R.reduce(R.add, 0, R.map(x => R.defaultTo(0, x), mapOverChaptersAndGetXFromY(getHit, jsonFile)));



// console.log("the total number of hits are: ", countHitsFromChapters);
// console.log("the names from the chapters are: ", mapOverChaptersAndGetXFromY(getName, jsonFile));
// console.log("the hits from the chapters are: ", mapOverChaptersAndGetXFromY(getHit, jsonFile));
// console.log("the sequentials are: ", mapOverChaptersAndGetXFromY(R.map(getChildren), jsonFile));
// console.log("the verticals are: ", R.map(getChildren, mapOverChaptersAndGetXFromY(R.map(getChildren), jsonFile)));

//console.log(mapOverChaptersAndGetXFromY(R.pick(['element_order', 'hit', 'name', 'children']), jsonFile));
const mapped = mapOverChaptersAndGetXFromY(R.pick(['element_order', 'hit', 'name', 'children']), jsonFile);
const sequential = R.map(getChildren ,mapped);
const vertical = R.map(getChildren, sequential);console.log(vertical);