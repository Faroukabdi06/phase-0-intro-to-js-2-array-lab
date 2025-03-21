// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

// beforeEach(function () {
//     cats.length = 0;

//     cats.push('Milo', 'Otis', 'Garfield');
//   });

function destructivelyAppendCat(name){
    return cats.push(`${name}`);
}
// console.log(destructivelyAppendCat("Ralph"));

function destructivelyPrependCat(name){
    return cats.unshift(`${name}`)
}
// console.log(destructivelyPrependCat("Bob"));

function destructivelyRemoveLastCat(name){
    return cats.pop(`${name}`)
}
// console.log(destructivelyRemoveLastCat("Ralph"));

function destructivelyRemoveFirstCat(name){
    return cats.shift(`${name}`)
}
// console.log(destructivelyRemoveFirstCat("Bob"));

function appendCat(){
    let catCool;
    return catCool = [...cats, "Broom"]
}

function prependCat(){
    let prepCat;
    return prepCat = ["Arnold", ...cats]
}

function removeLastCat(){
    let remCat = cats.slice();
    remCat.pop();
    return remCat
}
//   console.log(removeLastCat())

function removeFirstCat(){
    let firstCat =cats.slice();
    firstCat.shift();
    return firstCat;
}
// console.log(removeFirstCat())