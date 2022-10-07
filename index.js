// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const drivers = [
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


const findMatching = (arr, string) => arr.filter(driver => driver.toLowerCase() === string.toLowerCase())

const fuzzyMatch = (arr, string) => arr.filter(begLetter => begLetter[0] === string[0])

const matchName = (arr, string) => arr.filter(propertyName => propertyName.name === string)

