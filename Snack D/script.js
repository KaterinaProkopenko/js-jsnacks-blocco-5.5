const arrayString = ['cow', 'mouse', 'door'];
const firstNumber = randomInt(0, arrayString.length - 1);
const secondNumber = randomInt(0, firstNumber - 1);

function arraySplitter(array, numOne, numTwo){
    if(numOne >= array.length || numTwo >= array.length){
        return false;
    } else {
        const newArray = [];
        for(let i = numTwo; i <= numOne; i++){
            newArray.push(array[i]);
        };
        return newArray;
    };
};

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(arrayString);
console.log(firstNumber, secondNumber);
console.table(arraySplitter(arrayString, firstNumber, secondNumber));
