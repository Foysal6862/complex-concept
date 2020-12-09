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

var printPlayerNameFunction = function(obj) {
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
