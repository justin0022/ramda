import R from 'ramda';

let jsonFile = require('./data_with_vertical_hits_multilevel.json');


//get properties by key
let getName = R.prop("name")
let getChapters = R.prop("children")
let getHit = R.prop("hit")


let chapters = getChapters(jsonFile)
let mapChapters = R.map(x=>x.hit);

// let pipeline = R.pipe(
//     getChapters,
// )
//console.log(pipeline(jsonFile));

// console.log(name);
//console.log(chapters);
console.log(mapChapters(chapters));