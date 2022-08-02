//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(arr, query) {
    console.log(query)
    return arr.filter(function(el) {
      return el.toUpperCase().indexOf(query.toUpperCase()) !== -1
    })
  }

  function fuzzyMatch(arr, query) {
    return arr.filter(function(el) {
        console.log('string',query.toLowerCase())
      return el.toLowerCase().indexOf(query.toLowerCase()) === 0
     // 'y' == -1
    })
    console.log('2',query.toLowerCase()) 
  }
function matchName(drivers, name){
  return drivers.filter (function(el){
    console.log(el)
    if (name === el.name){
    return el
}}) 
   }
