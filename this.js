// 01. Implicit binding

//example:01
/* var sakib = {
    name: "sakib",
    age: 30,
    printPlayerName: function() {
        console.log(this.name);
    }
}
sakib.printPlayerName(); */

//example:02

/* var printPlayerNameFunction = function(obj) {
    obj.printPlayerName = function() {
        console.log(this.name);
        console.log(this.age);
    };
};

var sakib = {
    name :'Sakib',
    age : 39,
};
var tamim = {
    name :'Tamim',
    age : 37,
};

printPlayerNameFunction(sakib);
printPlayerNameFunction(tamim);
sakib.printPlayerName();
tamim.printPlayerName();
 */

 //example:03

 /* var Person = function(name, age) {
     return {
         name : name,
         age : age,
         printName : function() {
             console.log(this.name);
         },
         father: {
             name : 'Salam ali',
             age : 60,
             printName : function() {
                 console.log(this.name);
             }

         }
     }
 };

 var sakib = Person('Sakib', 39);
 sakib.printName();// sakib
 sakib.father.printName();//salam ali */



//  explicit binding

/* var printName = function() {
    console.log(this.name);
};
var sakib = {
    name : 'Sakib',
    age : 39,
};

printName.call(sakib); */


/* var printName = function(v1, v2, v3) {
    console.log(`${this.name} is ${v1}, ${v2} & ${v3}`);
};
var sakib = {
    name : 'Sakib',
    age : 39,
};
var v1 = 'Handsome';
var v2 = 'All-rounder';
var v3 = 'Best Player';
var v = [v1, v2, v3];

printName.apply(sakib, v);
 */

var printName = function(v1, v2, v3) {
    console.log(`${this.name} is ${v1}, ${v2} & ${v3}`);
};
var sakib = {
    name : 'Sakib',
    age : 39,
};
var v1 = 'Handsome';
var v2 = 'All-rounder';
var v3 = 'Best Player';
var v = [v1, v2, v3];

var newFunc = printName.bind(sakib, v1, v2, v3);
newFunc();