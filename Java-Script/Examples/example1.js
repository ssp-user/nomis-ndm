function runThis(otherFn) {
    console.log("Running...");
    otherFn();
}

runThis(function () {  // Format 1 - This is called call back function
    console.log("Function 1...");
});

runThis(() => { // Format 2 - This is called call back function
    console.log("Function 2...");
});

