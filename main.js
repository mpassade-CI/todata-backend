/********************
 * HELPER FUNCTIONS *
 ********************/
const getTodoName = function(obj) {
  return obj.text
}
const getPriority = function(obj) {
  return obj.priority
}
const getNamePriority = function(obj){
  let p = ''
  obj.priority === 1 ? p = 'Low' : p = 'High'
  return obj.text + ' - ' + p
}
const isComplete = function(obj) {
  return obj.complete
}
const notComplete = function(obj) {
  return !obj.complete
}
const isHighPriority = function(obj) {
  return obj.priority === 2
}
const isLowPriority = function(obj) {
  return obj.priority === 1
}

/***********************
 * ITERATION FUNCTIONS *
 ***********************/
const names = function(arr) {
  return arr.map(getTodoName)
}
const priorities = function(arr) {
  return arr.map(getPriority)
}
const namesAndPriorities = function(arr) {
  return arr.map(getNamePriority)
}
const justNotComplete = function(arr) {
  return arr.filter(notComplete)
}
const justComplete = function(arr) {
  return arr.filter(isComplete)
}
const priority2Only = function(arr) {
  return arr.filter(isHighPriority)
}
const priority1Only = function(arr) {
  return arr.filter(isLowPriority)
}


module.exports = {
  getTodoName,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  priorities,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
}
