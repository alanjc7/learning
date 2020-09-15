class User {

  constructor(name) {
    this.sayHi = this.sayHi.bind(this)
    this.name = name;
  }

  // function definitions inside classes dont need function keyword
  sayHi() {
    console.log(this.name);
  }

}

let user = new User("Alan");
let x = user.sayHi
x();

// function user(name) {
//   this.name = name
// }

// user("abc")


// inheritance
class SubUser extends User {
  constructor(name) {
    super(name)
  }
}

let sub = new SubUser('Bob')
console.log(sub.name)

sub.sayHi();

// overwriting superclass methods with a subclass method of the same name

class SubUserOvr extends User {
  constructor(name) {
    super(name)
  }

  sayHi() {
    console.log('Hi, my name is ' + this.name)
  }
}

let ovr = new SubUserOvr('Jim')
//console.log(ovr.name)
ovr.sayHi();

// closure

function showName(first, last) {
  let domain = "@onfido.com";
  // this inner function has access to the outer function's variables, including the parameter
  function makeEmail() {
    return first.toLowerCase() + "." + last.toLowerCase() + domain;
  }
  return makeEmail();
}

showName("Big", "Kev");
