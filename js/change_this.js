// Javascript has function scope.
// - every scope has a this object that represents the calling object for the function
// - functions are also objects in javascript

function sayNameForAll(label) {
    console.log(label +".sayNameForAll");
    console.log(label + ":" + this.name);
}

var person1 = {
    name: "Greg"
}

var person2 = {
    name: "Marsha"
}

// name is now defined in the global scope
var name = "Michael";

// call() allows me to call a specific function with a specific this
// - first parameter - what should this be equal too
// - all subsequent parameters are the function parameters
console.log("call Method example");
sayNameForAll.call(this, "global");
sayNameForAll.call(person1, "person1");
sayNameForAll.call(person2, "person2");

// apply() 
// - works exactly like call, except the second parameter is an array of data
// - use call if you just have individual parameters
// - use apply if you have an array of parameters
sayNameForAll.apply(this, ["global"]);
sayNameForAll.apply(person1, ["person1"]);
sayNameForAll.apply(person2, ["person2"]);

// bind()
// - first argument to bind is the this value for the new function
// - all other arguments represent named parameters that should be permanently set in the new function
// - can still pass any parameters that are not permanently set later

// create a function just for person1
var sayNameForPerson1 = sayNameForAll.bind(person1);
sayNameForPerson1("person1");

// create a function just for person2
var sayNameForPerson2 = sayNameForAll.bind(person2, "person2");
sayNameForPerson2();

// attaching a method to an object doesnt change this
person2.sayName = sayNameForAll;
person2.sayName("person2");
