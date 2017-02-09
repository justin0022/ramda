import R from 'ramda'

const listOfCameras = [
    ["nikon", "d7200", 1200, 24],
    ["nikon", "d700", 1800, 12],
    ["canon", "xti", 200, 12],
    ["canon", "5d", 1000, 12],
    ["panasonic", "gh4", 1200, 18],
    ["panasonic", "gf2", 500, 12],
    ["sony", "rx100", 1200, 20],
    ["sony", "rx1", 1500, 24],
    ["sony", "rx2", 1800, 2]
]

const cameraReducer = R.reduce(
    (object, line) => {
        object[line[0]] = object[line[0]] || []
        object[line[0]].push({
            model: line[1],
            price: line[2],
            megapixels: line[3]
        })
        return object
    }, {}
)

const listOfCamerasReduced = cameraReducer(listOfCameras);

console.log(JSON.stringify(listOfCamerasReduced, null, 2));