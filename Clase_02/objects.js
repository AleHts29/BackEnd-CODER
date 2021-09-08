// getFoo no es una propiedad enumerable, por lo que como se observa, no se devuelve
var my_obj = Object.create({}, 
    {getFoot:
     {value:function(){
       return this.foo;
     }}
    });

my_obj.foo = 'bar';
console.log(Object.values(my_obj));



// Otro ejemplo 
let o = {
  v1:3,
  v2: "Hola",
  v3:5
}
console.log(Object.values(o).filter(e => !isNaN(e)).reduce((a,b)=>a+b,0))



//*************************/
// Ejemplos Object.values()
//*************************/
const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
}
console.log(Object.values(object1)); // -> ["somestring", 42, false]

var object2 = {
  foo: 'bar',
  baz: 42
}
console.log(Object.values(object2)); // -> ["bar", 42]

var object3 = {
  0: 'a',
  1: 'b',
  2: 'c',
}
console.log(Object.values(object3)); // -> ['a', 'b', 'c']

//getFoo no es una propiedad enumerable, por lo que como se observa, no se devuelve
var object4 = Object.create({}, { getFoot:{values:function(){
  return this.foo;
}}});
object4.foo = 'bar';
console.log(Object.values(object4)); // -> ["bar"]

// Parametros que no son objetos se fuerzan a que se comporten como tal
console.log(Object.values('HOLA')) // -> ["H", "O", "L", "A"]




//*************************/
// Ejemplos Object.entries()
//*************************/
const objectA = {
  a: 'somestring',
  b: 42,
  c: false,
}
console.log(Object.entries(object1)); // -> [["a", "somestring"], ["b", 42], ["c", false]]

var objectB = {
  foo: 'bar',
  baz: 42
}
console.log(Object.entries(objectB)); // -> [["foo", "bar"], ["baz", 42]]

var objectC = {
  0: 'a',
  1: 'b',
  2: 'c',
}
console.log(Object.entries(objectC)); // -> [["0", 'a'], ["1", 'b'], ["2", 'c']]

//getFoo no es una propiedad enumerable, por lo que como se observa, no se devuelve
var objectD = Object.create({}, { getFoot:{values:function(){
  return this.foo;
}}});
objectD.foo = 'bar';
console.log(Object.entries(objectD)); // -> [["foo", "bar"]]

// Parametros que no son objetos se fuerzan a que se comporten como tal
console.log(Object.entries('HOLA')) // -> [["0", "H"], ["1", "O"], ["2", "L"], ["3", "A"]]

// iterate through key-value gracefully
var objectE = {a: 3, b: 5, c: 1 };
for(var [key, value] of Object.entries(objectE)){
  console.log(key + '' + value); // -> "a 3", "b 5", "c 1"
}

// Or, using array extras
Object.entries(objectE).forEach(([key, value]) => {
  console.log(key + ' ' + value); // -> "a 3", "b 5", "c 1"
})