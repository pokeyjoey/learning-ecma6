// Javascript has function scope.
// - every scope has a this object that represents the calling object for the function
var person = {
    name: "John Carter",
    sayName: function() {
        console.log("person.sayName");
        console.log("my name is " + this.name);
    }
};

person.sayName();

function sayNameForAll() {
    console.log(this.constructor.name +".sayNameForAll");
    console.log(this.name);
}

var person1 = {
    name: "Greg",
    sayName: sayNameForAll
}

var person2 = {
    name: "Marsha",
    sayName: sayNameForAll
}

// this refers to the calling object, person1, so name = Greg
person1.sayName();

// this refers to person2, so name = Marsha
person2.sayName();

// name is now defined in the global scope
var name = "Michael";

// since name is defined in the global scope, and this is now global, in essence defined on the Window object, name is now Michael
sayNameForAll();


