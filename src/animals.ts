/**
 * @author Conner
 * @since 23/05/21
 * @version 1.0.0
 */

// Interfaces
interface AnimalInterface {
  [ key: string ]: AnimalInformation
}

// TODO: Support for POSTing data!
// TODO: Support for headers!
// TODO: Support for more parsing methods!
interface AnimalInformation {
  method: string,
  url: string,
  key: string
}

const animals: AnimalInterface = {
  cat: {
    method: "GET",
    url: "https://api.thecatapi.com/v1/images/search",
    key: "url"
  },
  dog: {
    method: "GET",
    url: "https://api.thedogapi.com/v1/images/search",
    key: "url"
  },
  duck: {
    method: "GET",
    url: "https://random-d.uk/api/v2/random",
    key: "url"
  }
}

export default animals;