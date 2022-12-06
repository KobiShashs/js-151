class Cat {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(`My name is : ${this.name} , I'm ${this.age} years old`);
    }

    static makeSound() {
        console.log("Meow....");
    }

}

var c1 = new Cat(123, 'Mitzi', 30);
c1.display();
Cat.makeSound();

console.log(c1);
c1.food = "Mice";

console.log(c1);

console.log(c1.food);
console.log(c1["food"]);