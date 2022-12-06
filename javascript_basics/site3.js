var a = 0;

if (a) {
    console.log("True");
} else {
    console.log("False");
}

var b = "";
if (b) {
    console.log("True");
} else {
    console.log("False");
}

var c = null;
if (c) {
    console.log("True");
} else {
    console.log("False");
}

var d; //undefined
if (d) {
    console.log("True");
} else {
    console.log("False");
}

// Abstract Comparison
console.log(a == b); //number - string
console.log(a == c); //number - null
// Strict Comparison
console.log(a === b); //number - string
console.log(a === c); //number - null