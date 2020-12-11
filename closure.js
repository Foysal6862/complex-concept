/* var num1 = 2;

var sum = function() {
    var num2 = 3;
    return function() {
        return num1 + num2;
    }
};

var func = sum();
console.dir(func); */

/* function bankAccount(initialBalance){
    var balance = initialBalance;
    return function() {
        return balance;
    }
}
var account = bankAccount(100000);
// console.log(account());
console.dir(account); */



/* (function () {
    var num1 = 2;
    var num2 = 3;

var sum = function() {
    return num1 + num2;
};
console.log(sum());
console.dir(sum);

num1 = 6;
num2 = 7;

console.log(sum());
console.dir(sum);

})(); */

/* (function () {
    let num1 = 2;
    let num2 = 3;

let sum = function() {
    return num1 + num2;
};
console.log(sum());
console.dir(sum);

})(); */


/* function stopWatch() {
    let startTime = Date.now();

    function getDelay() {
        console.log(Date.now() - startTime);
    }
    return getDelay;
}
let timer = stopWatch();

for (let i = 0; i < 100000; i++){
    let a = Math.random() * 10000;
}

timer();
console.dir(timer); */

/* var a;
function async(){
    a= 20;
    var myFunc = () => {
        console.log(a);
    }
    setTimeout(myFunc, 3000);    

    console.dir(myFunc);
}
async();
a= 40; */

/* function apiFunction(url){

    fetch(url).then((res) => {
        console.log(res);
    });
}
apiFunction('https://jsonplaceholder.typicode.com/todos/1') */

for (let i = 0; i < 3; i++) {
    const myFunc = () => {
        console.log(i);
    };
    console.log(i);
    console.dir(myFunc);
    setTimeout(myFunc, 3000);
    
}