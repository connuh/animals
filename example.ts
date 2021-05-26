/**
 * @author Conner
 * @since 23/05/21
 * @version 1.0.0
 */

// Imports
import Animals from "./mod.ts";

// Fetch the list of currently available animals!
console.log(Animals.getAnimals()); //> [ "cat", "dog", "duck" ]

// Fetch a random animal from `Animal.getAnimals()`!
console.log(await Animals.get()) //> https://<url>

// Fetch a random image of a duck!
console.log(await Animals.get("duck")); //> https://random-d.uk/api/<file>

// Register a new animal that has already been registered (returns false)
console.log(Animals.registerAnimal("duck", "GET", "https://random-d.uk/api/v2/random", "url")); //> false

// Register an animal that hasn't been registered (for our sake, this wont be an animal)
console.log(Animals.registerAnimal("platypus", "GET", "https://example.com", "invalid")); //> true

// Re-fetech the list of currently available animals!
console.log(Animals.getAnimals()); //> [ "cat", "dog", "duck", "platypus" ]

// Fetch a random image of a platypus!
console.log(await Animals.get("platypus")); // Throws an Error due to it not being able to parse response
