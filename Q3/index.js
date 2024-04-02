"use strict";
let personName = "muhammad shumail khan";
// Lowercase
console.log(personName.toLowerCase());
// Uppercase
console.log(personName.toUpperCase());
// Titlecase
console.log(toTitleCase(personName));
function toTitleCase(str) {
    return str.replace(/\b\w+/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
