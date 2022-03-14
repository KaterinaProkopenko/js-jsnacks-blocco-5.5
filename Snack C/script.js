/* [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */

const arrayOne = ['a', 'b', 'c'];
const arrayTwo = [1, 2, 3];

function array(firstArray, secondArray) {
    const arrayThree = [];
    for (let i = 0; i < 3; i++) {
        arrayThree.push(firstArray[i], secondArray[i]);
    };
    return arrayThree;
};

console.log(arrayOne, arrayTwo);
console.log(array(arrayOne, arrayTwo));