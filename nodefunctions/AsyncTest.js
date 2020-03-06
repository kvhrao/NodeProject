console.clear();

console.log("Async Test");

function doHomework(Subject, callback) {
    console.log("Doing work");
    console.log("Doing work");
    doThisWork();
    doThisWork();
    console.log("Doing work");
    console.log("Doing work");
    callback();
}

function doThisWork() {
    console.log("Doing other work");
}

function print(Subject) {
    
}

function alertFinished() {
    console.log('Finished my homework');
}

doHomework('math', alertFinished);

// function asyncAddFunction(a, b, callback) {
//     callback(a+b);
// }

// asyncAddFunction(2,4,function(sum) {

// })



console.clear();

function add(x,y) {
    return x+y;
}

function addFive(x, addRef) {
    
    return addRef(x, 5);
}

let y = addFive(10, add);
console.log(y);