

//all files are modules => common js
//modules are encapsulated code share only menimum

const names = require('./4-names')//always start with ./
const sayHi = require('./5-ulils')//always start with ./
console.log(names)
const data = require('./6-alternative-flavour')
require('./7-mind-grenade')
//console.log(data)
sayHi(names.john)
//const secret = 'Secret'//available every where in the code