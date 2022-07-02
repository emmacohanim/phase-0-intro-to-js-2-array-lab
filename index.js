// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    return cats.push(name);
};
function destructivelyPrependCat(name) {
    return cats.unshift(name);
};
function destructivelyRemoveLastCat(name) {
    return cats.pop(name);
};
function destructivelyRemoveFirstCat(name) {
    return cats.shift(name);
};
function appendCat(name) {
    const newCats = [
        ...cats,
        name
    ];
   return newCats;
};
function prependCat(name) {
    const newerCats = [
        name,
        ...cats
    ];
    return newerCats;
}
function removeLastCat() {
    const removeLast = cats.slice(0, cats.length-1);
    return removeLast;
};
function removeFirstCat() {
    const removeFirst = cats.slice(1);
    return removeFirst;
}