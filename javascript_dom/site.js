const name = 'Messi';
let numOfGoals = 750;

const div = document.getElementById("root");

const h1 = document.createElement("h1");
h1.innerHTML = "World Cup 2022";

const plusBtn = document.createElement("button");
plusBtn.onclick = function plus() {
     numOfGoals++;
    // const span = document.getElementById("goals");
    // span.innerHTML = numOfGoals;
    span.innerHTML = numOfGoals;

}
plusBtn.innerHTML = "+"

const p = document.createElement("p");
p.innerHTML = name;

const span = document.createElement("span");
span.setAttribute("id","goals")
span.innerHTML = numOfGoals;

const minusBtn = document.createElement("button");
minusBtn.onclick = function minus() {
   // const span = document.getElementById("goals");
    numOfGoals--;
    span.innerHTML = numOfGoals; 
}
minusBtn.innerHTML = "-"

div.appendChild(h1);
div.appendChild(p);
div.appendChild(plusBtn);
div.appendChild(span);
div.appendChild(minusBtn);


// function minus() {
    
// }

// function plus() {
    
// }