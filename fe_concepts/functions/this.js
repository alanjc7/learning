console.log(this) // returns window as the default object

function strict() {
  'use strict';
  console.log(this);
};

strict() // in strcit mode global object not eligible for default binding

// Implicit Binding - left of the dot at call time

const me = {
  name: "Alan",
  age: 26,
  sayName: function() {
    console.log(this.name);
  }
};

me.sayName();

//

function sayAges(person) {
  person.sayAge = function() {
    console.log(this.age);
  };
};

const me = {
  name: "Alan",
  age: 26
};

const john = {
  name: "John",
  age: 23
};

sayAges(me);
sayAges(john);

me.sayAge();
john.sayAge();


//

const Car = function(maker, year) {
  return {
    maker: maker,
    year: year,
    make: function() {
      console.log(this.maker);
    },
    engine: {
      maker: 'Honda',
      size: '3.0',
      make: function() {
        console.log(this.maker);
      }
    }
  };
};

const redbull = Car('RedBull', 2012);
redbull.make();
redbull.engine.make();

// same again with function only defined once - in global context

const f = function() {
      console.log(this.maker);
    }

const Car = function(maker, year) {
  return {
    maker: maker,
    year: year,
    make: f,
    engine: {
      maker: 'Honda',
      size: '3.0',
      make: f
    }
  };
};

const redbull = Car('RedBull', 2012);
redbull.make();
redbull.engine.make();

// Explicit Binding -

// - function.call(object)

function foo() {
  console.log(this.bar)
};

const bar = {
  bar: 'bar'
};

const pop = {
  bar: 'pop'
};

foo.call(bar);
foo.call(pop);

// - apply - similar to call but can pass an array of parameters rather than a commas separated list

function foo(p1, p2) {
  console.log(this.bar + p1 + p2)
};

const bar = {
  bar: 'bar'
};

const pop = {
  bar: 'pop'
};

const p1 = 1
const p2 = 2

ps = [1,2]

foo.call(pop, p1, p2);
foo.apply(bar, ps);

// - bind - used to refer to this of an outside function in an inside function

const b = foo.bind(bar);
const c = foo.bind(pop);

foo(); //undefined
b(); // bar
c(); //pop

// couldnt get this working - wanted to demonstrate inner arrow function taking this from the outer scope

const my_desk = {
  things: 'confidential notepads'
}

function goHome(desk) {
  const clearDesk = () => {
    console.log("put away " + this.things);
  };
  clearDesk(this);
}

goHome(my_desk);

// working without arrow function

const my_desk = {
  things: 'confidential notepads'
}

function goHome() {
  function clearDesk() {
    console.log("put away " + this.things);
  };
  clearDesk.call(this);
}

goHome.call(my_desk);
