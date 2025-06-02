const makeNoise = function(){
    console.log("Pling")
}

const power = function(base, exponent){
    let result = 1; 
    for(let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
}

console.log(power(2, 10))

let x = 10;
if (true) {
let y = 20;
var z = 30;
console.log(x + y + z);
}