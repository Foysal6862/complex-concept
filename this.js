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

 var Person = function(name, age) {
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
 sakib.father.printName();//salam ali