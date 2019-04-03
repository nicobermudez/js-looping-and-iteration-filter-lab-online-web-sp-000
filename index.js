// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (name){
    return name.toLowerCase() === string.toLowerCase()
  })
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(name){
    return name.toLowerCase().startsWith(string.toLowerCase())
  })
}

function matchName
