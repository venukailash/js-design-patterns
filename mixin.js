/**
 allows you to add reusable behavior to classes or objects without using traditional inheritance, 
 effectively providing a way to compose functionality. 
 It acts as a "subclass factory" or a building block of functionality, 
 merging behaviors from multiple partial classes into a new class or object. 
 This pattern allows for dynamic code sharing and the creation of composite objects 
 with a flexible "has a" relationship rather than a rigid "is a" relationship
 */

class Animal {
  constructor() {
    this.eatable = "meat";
  }
  eat() {
    console.log(`As an animal I eat - ${this.eatable}`);
  }
  sleep() {
    console.log("As an animal I sleep");
  }
}

class Dog extends Animal {
  bark() {
    console.log("As a dog I bark");
  }
}

class Whale {
  constructor() {
    this.eatable = "fish";
  }
  swim() {
    console.log("As a Whale I swim");
  }
}

const mydog = new Dog();
// Own method
mydog.bark();
// Inherited method
mydog.eat();

const myWhale = new Whale();
// Own method
myWhale.swim();

// Mixin - copies only enumerable properties
Object.assign(Whale.prototype, { eat: Animal.prototype.eat });
myWhale.eat();

const anotherWhale = new Whale();
anotherWhale.eat();
