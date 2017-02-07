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



//console.log("the total number of hits are: ", countHitsFromChapters);
// console.log("the names from the chapters are: ", mapOverChaptersAndGetXFromY(getName, jsonFile));
// console.log("the hits from the chapters are: ", mapOverChaptersAndGetXFromY(getHit, jsonFile));
// console.log("the sequentials are: ", mapOverChaptersAndGetXFromY(R.map(getChildren), jsonFile));
// console.log("the verticals are: ", R.map(getChildren, mapOverChaptersAndGetXFromY(R.map(getChildren), jsonFile)));
//console.log(mapOverChaptersAndGetXFromY(R.pick(['element_order', 'hit', 'name']), jsonFile));

const mapped = mapOverChaptersAndGetXFromY(R.pick(['element_order', 'hit', 'name', 'children']), jsonFile);
const sequential = R.map(getChildren, mapped);
//console.log(sequential);
const vertical = R.map(R.map(getChildren), sequential);
//console.log(vertical);

var animals = [
    {name: 'Fluff', species: 'rabbit'},
    {name: 'Caro', species: 'dog'},
    {name: 'Hamilton', species: 'dog'},
    {name: 'Harold', species: 'fish'},
    {name: 'Ursula', species: 'cat'},
    {name: 'Jimmy', species: 'fish'},
]
//filter dogs
var dogs = R.filter(x => R.equals(x.species, 'dog'), animals);
// console.log(animals.filter(x => x.species === 'dog'));
// console.log(dogs);

//get list of animal names
var animalNames = R.map(x => x.name)(animals);
console.log(animalNames);

//get list of dog names only
var dogNames = R.pipe(
    R.filter(x => x.species === 'dog'),
    R.map(x => x.name)
)
console.log(dogNames(animals));