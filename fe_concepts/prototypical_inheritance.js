let f = function () {
   this.a = 1;
   this.b = 2;
}
let obj = new f();

//add properties in f function's prototype
 f.prototype.b = 3;
 f.prototype.c = 4;


console.log(obj.a); // 1
// look for property in obj - it exists

console.log(obj.b); // 2
// look for property in obj - it exists so it is returned (not the prototype.b, as we dont get that far up the chain (called property shadowing)

console.log(obj.c); // 4
// property doesnt exist in obj so look up the chain - prototype does have a property c so it is returned

console.log(obj.d); // undefined
// neither object nor prototype have property d
// the prototype does not have a further prototype so no property found, return undefined
