// Callback function passed to function (defined elsewhere)
function greeting(name, callback) {
  alert('Hello ' + name);
  callback(name)
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

function foo(name, callback) {
  alert('Hi ' + name);
  callback()
}

function end() {
  alert('done')
}


processUserInput(function(name)
  { greeting(name, function(name)
    { foo(name, end) } )
  }
);



// Callback defined in function call
function makeThingsHappen(number, callback) {
  alert(`Making ${number} things happen.`);
  callback();
}

makeThingsHappen('10', function() {
  alert('Finished making things happen');
});


// Callback function passed to function
function doSomething(thing, callback) {
  alert(`Doing this: ${thing}`);
  callback();
}
function alertFinished(){
  alert('All done!');
}
doSomething('make dinner', alertFinished);
