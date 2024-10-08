class Cat {
  constructor(name) {
    this._name = name
  }

  age = 8;

  //   get name
  get name() {
    return this._name;
  }

  //   set name
  set name(newName) {
    this._name = newName;
  }

  //   method
  greeting() {
    console.log("Hello " + this._name);
  }
}

const cat1 = new Cat("Oren");
// console.log(cat1.age);
cat1.greeting();
// console.log(cat1.name);
// cat1.name = "Meng";
// console.log(cat1.name);
