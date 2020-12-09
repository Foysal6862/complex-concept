/* function Person(name, age) {
    // let person = Object.create(Person.prototype);
    this.name = name;
    this.age = age;

    // return person;
};
    Person.prototype = {
        eat () {
            console.log(`Person is eating`);
        },
    
        sleep () {
            console.log(`Person is sleeping`);
        },
        play () {
            console.log(`Person is playing`);
        },
    };


const sakib =new Person('sakib', 35);
sakib.play();
const tamim =new Person('tamim', 36);
 */

class Person {
    Constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat () {
        console.log(`Person is eating`);
    }

    sleep () {
        console.log(`Person is sleeping`);
    }
    play () {
        console.log(`Person is playing`);
    }
}
const sakib =new Person('sakib', 35);
sakib.play();
const tamim =new Person('tamim', 36);
