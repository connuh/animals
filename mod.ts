/**
 * @author Conner
 * @since 23/05/21
 * @version 1.0.0
 */

// Variables
import animals from "./src/animals.ts";

// Types
type Animal = {
  method: string,
  url: string,
  key: string
}

// Animals Class
export default class Animals {
  static getAnimals(): string[] {
    return Object.keys(animals);
  }

  static registerAnimal(name: string, method: string, url: string, key: string): boolean {
    if(animals[name]) return false;

    animals[name] = {
      method,
      url,
      key
    }

    return true;
  }

  static async get(type?: string): Promise<string> {
    const types: string[] = this.getAnimals();

    if(!type) type = types[Math.floor(Math.random() * types.length)];
    if(types.indexOf(type.toLowerCase()) === -1) throw `Invalid type! (Types -> ${types.join(", ")})`;

    return await this.request(animals[type])
  }

  static async request(animal: Animal): Promise<string> {
    const { method, url, key }: Animal = animal;

    try {
      const body: string = await(await fetch(url, { method })).text();

      return body.split(`"${key}":"`)[1].split("\"")[0];
    } catch {
      throw "Unable to parse response!";
    }
  }
}