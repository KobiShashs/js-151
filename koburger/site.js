const price = 2.99;
const root = document.getElementById("root");

const ban1 = document.createElement("div");
ban1.className = "ban";
root.appendChild(ban1);

const ban2 = document.createElement("div");
ban2.className = "ban";
root.appendChild(ban2);

const hr = document.createElement("hr");
root.appendChild(hr);

const p = document.createElement("p");
p.innerHTML = "cost is : " + price;
root.appendChild(p);