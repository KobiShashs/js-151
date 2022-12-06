// Printing with "" , '' , ``
console.log("Hello World");
console.log('Hello World');
var num = 123;
console.log(`Hello World : ${num}`);

// JS is dynamically typed
var name = "Moshe";
console.log(name, typeof (name));
name = 17;
console.log(name, typeof (name));

// Pure Function - Same output all the time

function greet(name) {
    return `Hello ${name}`;
}

// first-class function (inline)
var a = greet("ilan");
console.log(a);

var b = function sayHello() {
    console.log("kokoriko");
}

b();

console.log(typeof (b));

// high order function

//"Moshe" -> "MOSHE" -> "M*O*S*H*E"

function createName() {
    return "Moshe";
}

function upper(name) {
    return name.toUpperCase();
}

function happy(name) {
    var str = '';
    str += name[0];
    for (var i = 1; i < name.length; i++) {
        str += "*";
        str += name[i];
    }

    console.log(str);
}


happy(upper(createName()));