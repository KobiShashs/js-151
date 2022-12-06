var a = 100;

function func() {
    
    var b = 200;

    console.log("a : " + a); //100 Closure
    console.log("b : " + b); //200
    console.log("c : " + c); //undefined Hoisting


    if (false) {
        var c = 300;
        console.log("a : " + a);
        console.log("b : " + b);
        console.log("c : " + c);
    }
}

func();