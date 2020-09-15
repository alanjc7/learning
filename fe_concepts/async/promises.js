new Promise(function(resolve, reject) {
  // wait for something to happen
  setTimeout(function() { resolve(10); }, 3000);
  console.log('a')
})
//.then(function(result) {
//  console.log(result);
//});


// Chaining
new Promise(function(resolve, reject) {
  setTimeout(function() { resolve(10); }, 3000);
})
.then(function(num) { console.log('first then: ', num); return [num, num * 2]; })
.then(function(num) { console.log('second then: ', num); return num[1] * 2; })
.then(function(num) { console.log('third then: ', num);});


// catch
new Promise(function(resolve, reject) {
  setTimeout(function() { resolve('!'); }, 1000);
})
.then(function(e) { console.log('done', e); return e})
.catch(function(e) { console.log('catch: ', e); })
.then(function(e) { console.log('done2', e); });

// catch - for error logging
new Promise(function(resolve, reject) {
  setTimeout(function() { reject(Error('could not resolve')); }, 3000);
})
.then(function(e) { console.log('done', e); })
.catch(function(e) { console.log('', e); });


// Promise.all - waiting for all promises to resolve before next action
var req1 = new Promise(function(resolve, reject) {
  setTimeout(function() { resolve('First!'); }, 4000);
});
var req2 = new Promise(function(resolve, reject) {
  setTimeout(function() { resolve('Second!'); }, 3000);
});
Promise.all([req1, req2]).then(function(results) {
  console.log('Then: ', results);
}).catch(function(err) {
  console.log('Catch: ', err);
});

// Promise.all with a catch - if one fails all fail
var req1 = new Promise(function(resolve, reject) {
  setTimeout(function() { resolve('First!'); }, 4000);
});
var req2 = new Promise(function(resolve, reject) {
  setTimeout(function() { reject('Second!'); }, 3000);
});
Promise.all([req1, req2]).then(function(results) {
  console.log('Then: ', results);
}).catch(function(err) {
  console.log('Catch: ', err);
});


// Promise.race - triggers as soon as any promise passed has resolved
var req1 = new Promise(function(resolve, reject) {
  setTimeout(function() { resolve('First!'); }, 8000);
});
var req2 = new Promise(function(resolve, reject) {
  setTimeout(function() { resolve('Second!'); }, 3000);
});
Promise.race([req1, req2]).then(function(one) {
  console.log('Then: ', one);
}).catch(function(one, two) {
  console.log('Catch: ', one);
});
