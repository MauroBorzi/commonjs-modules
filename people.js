const fullName = require(`./names`)
const hobbies = require(`./hobbies`)


const people = () => {
  return {
    fullName: fullName(`Mauro`, `Borzì`),
    hobbies: hobbies(`Sport`, `Cinema`, `Musica`)
  }
}

console.log(people())