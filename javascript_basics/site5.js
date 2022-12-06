let a = 100;

function func() {
    
    let b = 200;

    console.log("a : " + a); // 100
    console.log("b : " + b); // 200
    console.log("c : " + c); // Error


    if (false) {
        let c = 300;
        console.log("a : " + a);
        console.log("b : " + b);
        console.log("c : " + c);
    }
}

func();