import R from 'ramda';

let jsonFile = require('./data_with_vertical_hits_multilevel.json');

let name = R.prop("name", jsonFile);

console.log(name);