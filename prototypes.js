function Cat(name) {
    this.name = name;
}
Cat.prototype.sayHello = function () {
    console.log(`Miaow! My name is ${this.name}.`);
};

let kiki = new Cat("Kiki");
kiki.sayHello();

class Dog {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Woof! My name is ${this.name}.`);
    }
}