

function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('Ciao'));

reverseNumber(17);

function reverseNumber(number) {
    console.log(-number);
};

const arrayString = ['uno', 'due', 'tre', 'quarto', 'cinque', 'sei', 'sette', 'otto', 'nove', 'dieci'];
const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arrayString.forEach((element) => {
    console.log(reverseString(element));
});

arrayNumber.forEach((element) => {
    console.log(-element);
});