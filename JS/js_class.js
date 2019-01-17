class Ninja {
    constructor(name, age, catch_phrase) {
        this.name = name;
        this.age = age;
        this.catch_phrase = catch_phrase;
    }

    sayName() {
        console.log("My name is, ", this.name);
    }
};

var simon = new Ninja("Simon", 24, "Gambare!");

console.log(simon.name);
console.log(simon.age);
console.log(simon.catch_phrase);
simon.sayName();

class MathFun {

    add(num1, num2) {
        return num1 + num2;
    }

    subtract(num1, num2) {
        return num1 - num2;
    }

    multiply(num1, num2) {
        return num1 * num2;
    }
    
    divide(num1, num2) {
        return num1 / num2;
    }

}

var math = new MathFun;
console.log(math.add(2435,2013));
console.log(math.subtract())

