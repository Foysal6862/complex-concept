
//prototype

/* 
function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Cricketer (name, age, type, country) {
    Person.call(this);
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
}

Person.prototype = {
    eat: function () {
        console.log(`${this.name} is eating`);
    },
};

Cricketer.prototype = Object.create(Person.prototype);
Cricketer.prototype.constructor = Cricketer;
Cricketer.prototype.play = function (){
    console.log(`${this.name} is playing`);
}

const sakib = new Cricketer("Sakib", 30, "All rounder", "Bangaldesh");
console.log(sakib.play()); */

// class


class Person {
    //parent class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
}

class Cricketer extends Person{
    //sub class
    constructor(name, age, type, country) {

        super(name, age);

        this.name = name;
        this.age =age;
        this.type = type;
        this.country = country;
    }
    play() {
        console.log(`${this.name} is playing`);
    }
}

let sakib = new Cricketer('Sakib', 30, 'All rounder', 'Bangladesh');
// console.log(sakib.name);
console.log(sakib.play());


/* function Person(name, age) {
    this.name = name;
    this.age = age;
}
function Cricketer(name, age, type, country) {
    Person.call(this);
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
}

Person.prototype = {
    eat: function() {
        console.log(`${this.name} is eating.`);
    }
};
Cricketer.prototype = Object.create(Person.prototype);
Cricketer.prototype.Constructor = Cricketer;

let sakib = new Cricketer("sakib", 36, "all rounder", "Bangladesh");
console.log(sakib.eat());
 */


