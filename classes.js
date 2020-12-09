
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


/* class Person {
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
console.log(sakib.play()); */

// Getter

/* class Person {
    constructor(name, age) {
        this.name = name;//property
        this.age = age;
    }
    eat(){
        // method
        console.log(`${this.name} is eating`);
    }

    get setName(){
        //Getter
        // return this.name;
        return 'Foysal';

    }
}
let sakib = new Person('Sakib', 30);
console.log(sakib.setName); */

// setter

/* class Person {
    constructor(name, age) {
        this.name = name;//property
        this.age = age;
    }
    eat(){
        // method
        console.log(`${this.name} is eating`);
    }

    get setName(){
        //Getter
        // return this.name;
        return 'Foysal';

    }
    set setName(name){
        this.name = name;
    }
}
let sakib = new Person('Sakib', 30);

sakib.setName = "Sakib Khan";
console.log(sakib.name); */

//static methods

/* class Person {
    constructor(name, age) {
        this.name = name;//property
        this.age = age;
    }
    eat(){
        // method
        console.log(`${this.name} is eating`);
    }

    static isEqualAge(cricketer1, cricketer2){
        // 01.console.log('This is static method');
        return cricketer1.age === cricketer2.age;

    }
}
let sakib = new Person('Sakib', 30); 
let tamim = new Person('Tamim', 30); 

//01. Person.isEqualAge();
console.log(Person.isEqualAge(sakib, tamim)); */


//polymorphism

class Person {
    //parent class
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    play() {
        console.log(`${this.name} is playing`);
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
    // play() {
    //     console.log(`${this.name} is playing cricket`);
    // }
    play(){
        super.play();
        console.log(`${this.name} is playing cricket`);
    }
}

let sakib = new Cricketer('Sakib', 30, 'All rounder', 'Bangladesh');
// console.log(sakib.name);
console.log(sakib.play());

