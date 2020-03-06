function first() {
    setTimeout(PrintFirst,1000);
}
function second() {
    console.log(`Second  @ ${Date()}`);
}
function PrintFirst() {
    console.log(`First   @ ${Date()}`);
}

console.clear();
    console.log(`Current @ ${Date()}`);
first();
second();

// JavaScript is a non blocking it will not wait for a response from first() before moving on to second()