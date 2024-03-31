// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
let word = "Sammy"
function findMatching(drivers, word ) {
    return drivers.filter(
        drivers => drivers.toLowerCase() === word.toLowerCase()
    )
}
console.log(findMatching(drivers, word))




let test = "A"
function fuzzyMatch(drivers, test) {
    return drivers.filter(
        drivers => drivers.toLowerCase() .indexOf(test.toLowerCase()) === 0
    )
}
console.log(fuzzyMatch(drivers, test))





const drivers2 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  let nameSearch = "Annette"
  function matchName(drivers2, nameSearch) {
    return drivers2.filter(drivers2 => drivers2.name === nameSearch)
  }
  console.log(matchName(drivers2, nameSearch))
