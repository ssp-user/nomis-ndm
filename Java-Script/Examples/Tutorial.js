// Source - https://www.youtube.com/watch?v=AyJq1RRaY_k
console.log("This is tutorial 43");

async function harry() {
    console.log("Inside Harry Function");
    return "Harry";
}
console.log("Before calling Harry");
let a = harry();
console.log("After calling Harry");
console.log(a);
console.log("Last line of the js file");