person = { firstName: "Adarsh", lastName: "Babbula", age: "20"};
console.log(person.firstName);
class personClass {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getDetails() {
        return "FirstName: "+ this.firstName + "LastName: " + this.lastName + "Age: " + this.age;
    }
}
let personObj = new personClass("Adarsh", "Babbula", 20);
console.log(personObj.getDetails());

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    carName() {
      return 'CarName: ' + this.carname;
    }
}
  
class Model extends Car {
    constructor(brand, model) {
      super(brand);
      this.model = model;
    }
    carNameWithModel() {
      return this.carName() + ' Model:' + this.model;
    }
}
const modelObj = new Model("Hundai","Creta");
console.log(modelObj.carNameWithModel());