<h1 align="center">
	<img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Deno.svg" width="150px"><br>
    Animals - a fully modular API wrapper. 🐢
</h1>
<p align="center">
	Animals is an API wrapper that can make customizable HTTP requests to the URL specified making it fully modular!
</p>

<p align="center">
	<a href="https://deno.land" target="_blank">
    	<img src="https://img.shields.io/badge/Version-1.1.0-7DCDE3?style=for-the-badge" alt="Version">
     </a>
	<a href="https://deno.land" target="_blank">
    	<img src="https://img.shields.io/badge/Deno-1.10.0+-7DCDE3?style=for-the-badge" alt="Node">
     </a>
     <a href="https://github.com/connuh/dank/blob/master/LICENSE" target="_blank">
    	<img src="https://img.shields.io/badge/License-WTFPL-7DCDE3?style=for-the-badge" alt="License">
     </a>
</p>

## Integrating ✨

If you would like to integrating `animals` into your project, you have to import it.
```ts
import Animals from "https://deno.land/x/animals/mod.ts";
```

After you import the file, you can call functions like this:
```ts
Animals.getAnimals(); // [ ]
Animals.get(); // <string>
```

## Documentation 📖

Functions:
```ts
getAnimals();
registerAnimal();
get();
request();
```

Usage:
```ts
/**
 * Animals.getAnimals() returns an Array containing every `name` of the animals
 * available for you to call `get()` on.
 */
Animals.getAnimals();
```
```ts
/**
 * Animal.registerAnimal() returns a Boolean if the animal was succesfully registered.
 *
 * Takes in 4 parameters `name, method, url, key` (all 4 must be set)
 * This registers an animal for you to call `get()` on later
 */
Animals.registerAnimal(name, method, url, key);
```
```ts
/**
 * Animal.get(); returns a String if the animal was succesfully requsted.
 *
 * Takes in a singular `name` parameter, if not set, it will be randomised
 * for a list of valid options for `name`, call `getAnimals();`
 *
 * Throws an error if you provide an invalid name
 */
Animals.get();
```
```ts
/**
 * Don't use this.
 */
Animal.request();
```

If you would like more use case, please see `example.ts`

---

### Contributions 🎉
###### All contributions are accepted, simply open an Issue / Pull request.
