// Behavior:
// Iterates over the collection of elements, passing each element 
// in turn to the callback function. Returns the original, unmodified, collection.

const myEach = function(collection, callback) {
    if (typeof collection === 'object'){
        const objArray = [collection]
        return objArray
    }
    console.log(this)
}