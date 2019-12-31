function User(name, familyName) {
  this.name = name;
  this.familyName = familyName;
}

User.prototype.getName = function () {
  return `${this.name} ${this.familyName}`;
};

User.prototype.sayHello = function () {
  console.log(`say hello ${this.getName()}`)
};

//------------------------------------------Old syntax

function CompanyUser(name, familyName, department, position) {

  User.call(this, name, familyName);
  this.department = department;
  this.position = position;
}

CompanyUser.prototype = Object.create(User.prototype);
CompanyUser.prototype.constructor = CompanyUser;

CompanyUser.prototype.getName = function () {
  return User.prototype.getName.call(this)
    + ` ${this.position} from ${this.department}`;
};

//----------------------------------------------------------

const vasia = new User('Vasia', 'Petrov');
const vasia_1 = new CompanyUser("vasia_1", "Ivanov", "SRPO", "engineer");

vasia.sayHello();
vasia_1.sayHello();

// console.log(vasia);
// console.log(vasia_1);


console.log("=============================================")


class Person {
  constructor(name, familyName) {
    this.name = name;
    this.familyName = familyName;
  }

  getName() {
    return `${this.name} ${this.familyName}`;
  }

  sayHello() {
    console.log(`say hello ${this.getName()}`)
  }

}

//------------------------------New syntax

class CompanyPerson extends Person {
  constructor(name, familyName, department, position) {
    super(name, familyName);

    this.department = department;
    this.position = position;
  }


  getName() {
    return super.getName() + ` ${this.position} from ${this.department}`;
  }

}

//----------------------------
const peter = new Person("peter", "Ivanov");
const peter_1 = new CompanyPerson("peter_1", "Ivanov_1", "SRPO", "engineer");

peter.sayHello();
peter_1.sayHello();