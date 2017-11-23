import http from 'http'
import assert from 'assert'
import R from 'ramda'

import functions from '../lib/oldRamda.js'

let string = 'abcdefg'

var oneObject = [{
  'id': 70111470,
  'title': 'Die Hard',
  'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
  'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
  'rating': [4.0],
  'bookmark': []
}]

let nestedJson = [
  {
    'id': '0001',
    'type': 'donut',
    'name': 'Cake',
    'ppu': 0.55,
    'batters':
    {
      'batter':
      [
						{ 'id': '1001', 'type': 'Regular' },
						{ 'id': '1002', 'type': 'Chocolate' },
						{ 'id': '1003', 'type': 'Blueberry' },
						{ 'id': '1004', 'type': "Devil's Food" }
      ]
    },
    'topping':
    [
				{ 'id': '5001', 'type': 'None' },
				{ 'id': '5002', 'type': 'Glazed' },
				{ 'id': '5005', 'type': 'Sugar' },
				{ 'id': '5007', 'type': 'Powdered Sugar' },
				{ 'id': '5006', 'type': 'Chocolate with Sprinkles' },
				{ 'id': '5003', 'type': 'Chocolate' },
				{ 'id': '5004', 'type': 'Maple' }
    ]
  },
  {
    'id': '0002',
    'type': 'donut',
    'name': 'Raised',
    'ppu': 0.55,
    'batters':
    {
      'batter':
      [
						{ 'id': '1001', 'type': 'Regular' }
      ]
    },
    'topping':
    [
				{ 'id': '5001', 'type': 'None' },
				{ 'id': '5002', 'type': 'Glazed' },
				{ 'id': '5005', 'type': 'Sugar' },
				{ 'id': '5003', 'type': 'Chocolate' },
				{ 'id': '5004', 'type': 'Maple' }
    ]
  },
  {
    'id': '0003',
    'type': 'donut',
    'name': 'Old Fashioned',
    'ppu': 0.55,
    'batters':
    {
      'batter':
      [
						{ 'id': '1001', 'type': 'Regular' },
						{ 'id': '1002', 'type': 'Chocolate' }
      ]
    },
    'topping':
    [
				{ 'id': '5001', 'type': 'None' },
				{ 'id': '5002', 'type': 'Glazed' },
				{ 'id': '5003', 'type': 'Chocolate' },
				{ 'id': '5004', 'type': 'Maple' }
    ]
  }
]

var newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': []
  },
  {
    'id': 654356453,
    'title': 'Bad Boys',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id: 432534, time: 65876586 }]
  },
  {
    'id': 65432445,
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': []
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id: 432534, time: 65876586 }]
  }
]

describe('Get Id', () => {
  it('gets the IDs from an array of objects', done => {
    var id = functions.getId(oneObject)
    var multipleID = functions.getId(newReleases)
    assert.equal(id, 70111470)
    assert.deepEqual(multipleID, [70111470, 654356453, 65432445, 675465])
    done()
  })
})

describe('Get Title', () => {
  it('gets the Title from an array of objects', done => {
    var title = functions.getTitle(oneObject)
    var multipleTitle = functions.getTitle(newReleases)
    assert.equal(title, 'Die Hard')
    assert.deepEqual(multipleTitle, ['Die Hard', 'Bad Boys', 'The Chamber', 'Fracture'])
    done()
  })
})

describe('Get Title and ID', () => {
  it('gets the title and ID from array of objects', done => {
    var titleAndId = functions.getTitleAndId(oneObject)
    assert.deepEqual(titleAndId, [[70111470, 'Die Hard']])
    done()
  })
})

describe('Get sorted ID', () => {
  it('first gets the ID, then sorts ID by increasing order', done => {
    var sortedID = functions.sortID(newReleases)
    assert.deepEqual(sortedID, [675465, 65432445, 70111470, 654356453])
    done()
  })
})

describe('Get sum of ID', () => {
  it('gets the IDs and returns the sum', done => {
    var summedID = functions.addID(newReleases)
    assert.equal(summedID, 790575833)
    done()
  })
})

describe('Reverses input', () => {
  it('reverses a given input', done => {
    var x = functions.reversed(string)
    assert.equal(x, 'gfedcba')
    done()
  })
})
