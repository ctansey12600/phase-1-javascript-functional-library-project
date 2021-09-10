// Behavior:
// Iterates over the collection of elements, passing each element 
// in turn to the callback function. Returns the original, unmodified, collection.
const checkObj = (collection) => {
    if(typeof collection === 'object' && !Array.isArray(collection)){
        return Object.values(collection)
    }else {
        return collection
    }
}

// Behavior:
// Iterates over the collection of elements, passing each element in 
// turn to the callback function. Returns the original, unmodified, collection.

const myEach = (collection, callback) => {
    const value = checkObj(collection)
    for(const num of value){
        callback(num)
    }
    return collection
}

// Behavior:
// Produces a new array of values by mapping each value in collection 
// through a transformation function, callback. Returns the new array 
// without modifying the original.

const myMap = (collection, callback) => {
   const value = checkObj.call(this, collection)
   const mapArray = []
   for(const num of value){
       mapArray.push(callback(num))
   }
   return mapArray
}
// Behavior:
// Reduce iterates through a collection of values and boils it down into a single value

const myReduce = (collection, callback, acc) => {
    const value = checkObj.call(this, collection)
    let i;
    if(acc){
        i = 0
    }else {
        i = 1
        acc = value[0]
    }
    for(i; i < value.length; i++){
        acc = callback(acc, value[i], value)
    }
    
    return acc
}

const myFind = (collection, predicate) => {
    const value = checkObj.call(this, collection)
    for(const num of value){
        if(predicate(num) === true){
            return num
        }
    }
}

const myFilter = (collection, predicate) => {
    const value = checkObj.call(this, collection)
    const trueArray = []
    for(const num of value){
        if(predicate(num) === true){
            trueArray.push(num)
        }
    }
    return trueArray
}

const mySize = (collection) => {
    if(typeof collection === 'object' && !Array.isArray(collection)){
        return Object.keys(collection).length
    }else{
        return collection.length
    }
}

const myFirst = (array, n) => {
    if(n){
        return array.slice(0, n)
    }else{
        return array[0]
    }
}

const myLast = (array, n) => {
    if(n){
        return array.slice(array.length - n)
    }else{
        return array[array.length - 1]
    }
}

const myKeys = (object) => {
    return Object.keys(object)
}

const myValues = (object) => {
    return Object.values(object)
}