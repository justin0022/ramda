import http from 'http';
import assert from 'assert';

import functions from '../lib/index.js';

var oneObject = [{
    "id": 70111470,
    "title": "Die Hard",
    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [4.0],
    "bookmark": []
}];

var newReleases = [
  {
    "id": 70111470,
    "title": "Die Hard",
    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [4.0],
    "bookmark": []
  },
  {
    "id": 654356453,
    "title": "Bad Boys",
    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [5.0],
    "bookmark": [{ id: 432534, time: 65876586 }]
  },
  {
    "id": 65432445,
    "title": "The Chamber",
    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [4.0],
    "bookmark": []
  },
  {
    "id": 675465,
    "title": "Fracture",
    "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [5.0],
    "bookmark": [{ id: 432534, time: 65876586 }]
  }
];

describe('Example Node Server', () => {
  it('should return 200', done => {
    http.get('http://127.0.0.1:1337', res => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});

describe('Get Id', () => {
  it('gets the IDs from an array of objects', done => {
    var id = functions.getId(oneObject);
    var multipleID = functions.getId(newReleases);
    assert.equal(id, 70111470);
    assert.deepEqual(multipleID, [70111470, 654356453, 65432445, 675465]);
    done();
  });
});

describe('Get Title', () => {
  it('gets the Title from an array of objects', done => {
    var title = functions.getTitle(oneObject);
    var multipleTitle = functions.getTitle(newReleases);
    assert.equal(title, "Die Hard");
    assert.deepEqual(multipleTitle, ["Die Hard", "Bad Boys", "The Chamber", "Fracture"]);
    done();
  });
});

describe('Get Title and ID', () => {
  it('gets the title and ID from array of objects', done => {
    var titleAndId = functions.getTitleAndId(oneObject);
    assert.deepEqual(titleAndId, [[70111470, "Die Hard"]]);
    done();
  });
});