'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   console.log(this);

//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// const jonas = new Person('Jonas', 1991);
// // console.log(jonas);

// const matilda = new Person('Matilda', 2015);
// const jack = new Person('Jack', 1975);
// // console.log(matilda, jack);

// // console.log(jonas instanceof Person);
// // console.log(jonas);

// // console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();
// jack.calcAge();

// // console.log(jonas.__proto__);
// // console.log(jonas.__proto__ === Person.prototype);

// // console.log(Person.prototype.isPrototypeOf(jonas));
// // console.log(Person.prototype.isPrototypeOf(matilda));
// // console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';
// // console.log(jonas.species);
// // console.log(matilda);

// // console.log(matilda.hasOwnProperty('firstName'));
// // console.log(matilda.hasOwnProperty('species'));

// // console.log(jonas.__proto__);
// // // Object.prototype - top of prototype chain
// // console.log(jonas.__proto__.__proto__);
// // console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 5, 6, 9, 3, 5, 6, 9];
// // console.log(arr.__proto__);
// // console.log(arr.__proto__ === Array.prototype);

// // console.log(arr.__proto__.__proto__);

// // Array.prototype.unique = function () {
// //   return [...new Set(this)];
// // };
// // console.log(arr.unique());

// // const h1 = document.querySelector('h1');
// // console.dir(x => x + 1);

// // // class expression
// // const PersonCl = class {

// // }

// // // class declaraion
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);

// // jessica.calcAge();

// console.log(jessica.age);

// console.log(jessica);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// jessica.greet();

// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.birthYear = birthYear;
//     this.firstName = firstName;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);

// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`Hello, my name is ${this.firstName} and I study ${this.course}`);
// };
// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(
//       `Hello, my name is ${this.firstName} and I study ${this.course}`
//     );
//   }

//   calcAge() {
//     console.log(
//       `I am ${
//         2037 - this.birthYear
//       } years old but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       } years old`
//     );
//   }
// }

// const martha = new StudentCl('Martha', 1999, 'Mathematics');
// martha.introduce();
// martha.calcAge();

// Public fields
// Private fields
// Public methods
// Private methods

class Account {
  // Public fields (instances)
  locale = navigator.language;

  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thank you for openning an account, ${owner}`);
  }

  // Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  // Private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(150);
acc1.withdraw(120);
acc1.requestLoan(1000);
// console.log(acc1.#approveLoan(1000));

console.log(acc1.getMovements());
console.log(acc1);

// console.log(acc1.#movements);

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(5000);
console.log(acc1.getMovements());
