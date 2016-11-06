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
var arrayOfBatters = R.map(x=>x.batters, nestedJson);
var arrayOfBatter = R.map(x=>x.batter, arrayOfBatters);
var arrayOfBatterID = arrayOfBatter.map(x=>x.map(x=>x.id));








var arrayOfBatterID2 = R.map(subarray=>R.map(x=>x.id, subarray),arrayOfBatter);




console.log(JSON.stringify(arrayOfBatters));
console.log(JSON.stringify(arrayOfBatter));
console.log(JSON.stringify(arrayOfBatterID));
console.log(JSON.stringify(arrayOfBatterID2));

// [
//   [{"id":"1001","type":"Regular"},{"id":"1002","type":"Chocolate"},{"id":"1003","type":"Blueberry"},{"id":"1004","type":"Devil's Food"}]
//   [{"id":"1001","type":"Regular"}]
//   [{"id":"1001","type":"Regular"},{"id":"1002","type":"Chocolate"}]
// ]

var array = [[1,2], [3,4]];
var double = x => x*2;
var doubledArray = array.map(subarray=>subarray.map(double));
console.log(JSON.stringify(doubledArray));