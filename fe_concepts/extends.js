// 1. How would you make a class that `extends` another one, pre `class` syntax?
// with class syntax
class ChildClass extends ParentClass { ... }

class FileUpload extends React.component { ... }

// pre class syntax

let User = function(name) {
  this.name = name;
}

User.prototype.sayHi = function() {
  console.log("Hello, my name is " + this.name);
}

let SubUser = function(name) {
  User.call(this, name);
}

SubUser.prototype = Object.create(User.prototype);
//SubUser.prototype.constructor = SubUser;

x = new SubUser('name')
x.sayHi();

User.prototype.function = function() {
  console.log('new stuff')
};

x.function();

a = 'a'
a.prototype

String.prototype.repeat = function() {} // polyfilling

//

let user = {
  sayHi: function() {
    console.log("Hello, my username is " + this.name);
  }
}

let user1 = Object.create(user, {
  name: { value: "acarrie" },
  permission: {value: "admin"}
})

user1.sayHi();

let user2 = Object.create(user, {
  name: { value: "linnes" },
  permission: { value: "read-only" },
  permissionLevel: { value: function() {
    console.log("User: " + this.name + "\nPermission Level: " + this.permission)
  }
}})

user2.sayHi();
user2.permissionLevel();


// 2. What does `super` do, inside a class?

super([arguments]); // calls the parent constructor.

super.functionOnParent([arguments]); // when can this be done? inside a method on the child class

class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Lion extends Cat {
  speak2() {
    super.speak();
    console.log(this.name + ' roars.');
  }
}

var l = new Lion('Fuzzy');
l.speak2();

// 3. What happens when you run this code? Why?

class A {}

class B extends A {
  constructor() {
    this.foo = "bar";
    super();
  }
}

new B();

Get a reference error because this is used before super() has been called -

// Fix

class A {}

class B extends A {
  constructor() {
    super();
    this.foo = "bar";
  }
}

new B();

// 4. Why are arrow functions as class methods not always possible (e.g. webapp)? What thing makes it possible, and what else does this thing allow you to do?

babel plugin transform-class-properties

// without plugin
class ClassName {

  constructor(name) {
    this.sayName = this.sayName.bind(this)
    this.name = name
  }

  sayName() {
    console.log(this.name) // 'this' is the class instance
  }
}

let x = new ClassName('y')
x.sayName();

// with plugin
class ClassyName { // how to get this to have a name given that no argument is passed
  name = 'matt';

  sayName = () => {
    console.log(this.name) // 'this' is always the instance of the class without having to specifically bind
  }
}

foo = new ClassyName()
foo.sayName();
