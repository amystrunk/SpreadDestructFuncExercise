// 1a
const jPDinos = [
    `Velociraptors`,
    `Tyrannosaurus Rex`,
    `Dilophosaurus`
];

// 1b
function seeDinos(r, ...d){
    console.log(r);
    console.log(d);
};
seeDinos(...jPDinos);
console.log(`=1=`.repeat(15));

// 2a
const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
};

// 2b
seeCharacters = ({ellieSattler}) => {
    console.log(ellieSattler);
};
seeCharacters(jPCharacters);
console.log(`=2=`.repeat(15));

// Bonus
// 3a
const jurrasicParkMovies = [
    {
        one: "Jurassic Park", 
        two: "The Lost World: Jurassic Park", 
        three: "Jurassic Park III"
    },
    {
        four: "Jurassic World", 
        five: "Jurassic World: Fallen Kingdom", 
        six: "Jurassic World: Dominion"
    }
];

// 3b
function seeJPMovies([{one, two, three}, {four, five, six}]) {
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
}
seeJPMovies(jurrasicParkMovies);