// let num = 10;
// console.log(num);
// type Person = {
//     name: string;
// };
function example(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
example("waiz bhai jan");
example(40);
//instance of
var dog = /** @class */ (function () {
    function dog() {
    }
    dog.prototype.bark = function () {
        console.log("wow wow wow");
    };
    return dog;
}());
var cat = /** @class */ (function () {
    function cat() {
    }
    cat.prototype.bark = function () {
        console.log("meow meow");
    };
    return cat;
}());
function animalsound(animal) {
    if (animal instanceof dog) {
        animal.bark();
    }
    else {
        animal.bark();
    }
}
var dog1 = new dog();
var cat1 = new cat();
console.log(dog1);
console.log(cat1);
animalsound(dog1);
animalsound(cat1);
