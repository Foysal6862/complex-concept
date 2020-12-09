// 01. Implicit binding

var sakib = {
    name: "sakib",
    age: 30,
    printPlayerName: function() {
        console.log(this.name);
    }
}
sakib.printPlayerName();