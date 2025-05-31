// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).

function multiplication(p1,p2){
    return p1 * p2;
}

const result = multiplication(67, 38);
console.log(`Multiplication of: `,result);

function numberGenerator(){
    return (Math.random() * 10).toFixed(2);
}

console.log("Random number generator: ", numberGenerator());

function toCelsius(f){
    return (5/9) * (f-32);
}

const temperature = toCelsius(77);
console.log("Converts from Fahrenheit to Celsius: ", temperature) 