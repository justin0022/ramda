import R from 'ramda';

const jsonFile = require('./data_with_vertical_hits_multilevel.json');

const getChildren = R.prop('children');

const child = getChildren(jsonFile);

const getHTML = R.pipe(
    R.map(getChildren),
    R.map(R.map(getChildren)),
    R.map(R.map(R.map(getChildren))),
    R.flatten()
)

//console.log(getHTML(child));


