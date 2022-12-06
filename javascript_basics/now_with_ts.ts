let aa = 100;

function func2() {
    
    let bb = 200;

    console.log("a : " + aa); // 100
    console.log("b : " + bb); // 200
    console.log("c : " + aa); // Error


    if (false) {
        let cc = 300;
        console.log("a : " + aa);
        console.log("b : " + bb);
        console.log("c : " + cc);
    }
}

func2();