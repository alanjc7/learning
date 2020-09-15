async function foo() {
  console.log('calling');
  var result = await resolveAfter2Seconds();
  console.log(result);
}

foo();
