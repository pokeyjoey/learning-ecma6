// Javascript has function scope.
// - any variable defined in a function is visible everywhere within the function.
// - any parameter or variable defined in a function, is not visible outside the function.
var foo = function() {
    var a = 3;
    var b = 5;
    console.log('top of function foo');
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log('');

    var bar = function() {
        var b = 7;
        var c = 11;

        // at this point a = 3, b = 7, c = 11
        console.log('top of inner function bar');
        console.log('a = ' + a);
        console.log('b = ' + b);
        console.log('c = ' + c);
        console.log('');
        a += b + c;

        // at this point a = 21, b = 7, c = 11
        console.log('bar : after a += b + c');
        console.log('a = ' + a);
        console.log('b = ' + b);
        console.log('c = ' + c);
        console.log('');
    };

    // at this point a = 3, b = 5, and c = undefined
    console.log('after bar declared');
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log('');
    bar();

    // at this point a = 21, b = 5, and c = undefined
    console.log('after bar execution');
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log('');
};

foo();
