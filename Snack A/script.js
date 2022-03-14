const zucchine = [
    {
        varietà: "Zucchino nero",
        peso: "150g",
        lunghezza: "15cm"
    },
    {
        varietà: "Zucchino romanesco",
        peso: "30g",
        lunghezza: "7cm"
    },
    {
        varietà: "Zucchino ortolano di Faenza",
        peso: "200g",
        lunghezza: "13cm"
    },
    {
        varietà: "Zucchina lunga fiorentina",
        peso: "170g",
        lunghezza: "15cm"
    },
    {
        varietà: "Zucchino siciliano",
        peso: "400g",
        lunghezza: "50cm"
    },
    {
        varietà: "Zucchina striata di Napoli",
        peso: "140g",
        lunghezza: "10cm"
    },
    {
        varietà: "Zucchina bianca triestina",
        peso: "320g",
        lunghezza: "16cm"
    },
    {
        varietà: "Zucchina rigata pugliese",
        peso: "220g",
        lunghezza: "17cm"
    },
    {
        varietà: "Zucchino tondo di Piacenza",
        peso: "450g",
        lunghezza: "14cm"
    },
    {
        varietà: "Zucchino tondo di Nizza",
        peso: "400g",
        lunghezza: "9cm"
    }
];

let pesoTotale = 0;

let pesoZucchineGrandi = 0;
const zucchineGrandi = [];

let pesoZucchinePiccole = 0;
const zucchinePiccole = [];

zucchine.forEach((element) => {
    pesoTotale += parseInt(element.peso);
    if (parseInt(element.lunghezza) >= 15) {
        zucchineGrandi.push(element);
        pesoZucchineGrandi += parseInt(element.peso);
    } else {
        zucchinePiccole.push(element);
        pesoZucchinePiccole += parseInt(element.peso);
    };
});

console.log(pesoTotale, zucchineGrandi, zucchinePiccole, pesoZucchineGrandi, pesoZucchinePiccole);
