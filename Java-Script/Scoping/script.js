'use strict';
function calcAge(birthYear) {
    const age = 2037 - birthYear;

    // console.log(firstName);
    function printAge() {
        const output = "You are " + age + " born in " + birthYear;
        console.log(output);
    }
    printAge();
    return age;
}
const firstName = 'Jonas';
calcAge(1991);
//console.log("Age is ", age);