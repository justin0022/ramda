import http from 'http';
import R from 'ramda';

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Justin\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

exports.getId = function(array) {
  return R.map(x=>x.id, array);
};
exports.getTitle = function(array) {
  return R.pluck("title", array);
}
exports.getTitleAndId = function(array) {
  return R.zip(exports.getId(array), exports.getTitle(array));
}
exports.sort = function(array) {
  return R.sort((x,y)=>{return x-y}, array);
}
exports.sortID = function(array) {
  return R.compose(exports.sort, exports.getId)(array);
}
exports.addID = function(array) {
  return R.reduce(R.add, 0, exports.getId(array));
}
exports.reversed = function(x) {
  return R.reverse(x);
}

let nestedJson = [
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
];
// var arrayOfBatters= R.map(x=>x.batters, nestedJson);
// var arrayOfBatter = R.map(x=>x.batter, arrayOfBatters);
// var arrayOfBatterID = R.map(array=>R.map(x=>x.id, array), arrayOfBatter)

// var oneStep = R.map(array=>R.map(x=>x.id, array), R.map(x=>x.batter, R.map(x=>x.batters, nestedJson)));

// var arrayOfToppingID = R.map(topping=>R.map(x=>x.id, topping), R.map(x=>x.topping, nestedJson));

// console.log("Array of Batters is : " + JSON.stringify(arrayOfBatters));
// console.log("Array of Batter is : " + JSON.stringify(arrayOfBatter));
// console.log("Array of Batter ID is : " + JSON.stringify(arrayOfBatterID));
// console.log("One Step is : " + JSON.stringify(oneStep));

//console.log("Array of Topping ID is : " + JSON.stringify(arrayOfToppingID));

// var array = [[1,2], [3,4]];
// var double = x => x*2;
// var doubledArray = array.map(subarray=>subarray.map(double));
// console.log(JSON.stringify(doubledArray));

// let categories = [
// 	{id:'animals', 'parent': null},
// 	{id:'mammals', 'parent':'animals'},
// 	{id:'cats', 'parent':'mammals'},
// 	{id:'dogs', 'parent':'mammals'},
// 	{id:'chihuahua', 'parent':'dogs'},
// 	{id:'labrador', 'parent':'dogs'},
// 	{id:'persian', 'parent':'cats'},
// 	{id:'siamese', 'parent':'cats'}
// ];

// let makeTree = (categories, parent) => {
// 	let node = {};
// 	categories
// 		.filter(c=>c.parent === parent)
// 		.forEach(c=>node[c.id] = makeTree(categories, c.id))
// 	return node;
// }

// console.log(makeTree(categories, null));
// console.log(JSON.stringify(makeTree(categories, null), null, 2));

// let filterParent = (categories, parent) => {
// 	return R.filter(x=>x.parent === parent, categories)
// }

// console.log(JSON.stringify(filterParent(categories, 'cats')));
// console.log(JSON.stringify(filterParent(categories, 'dogs')));

let fib = (n) => {
	if (n===0) {
		return 1;
	}
	return n*fib(n-1);
}
console.log(fib(20));

let memFib = R.memoize(n=>{
	return R.product(R.range(1, n+1));
});

//console.log(memFib(20));

