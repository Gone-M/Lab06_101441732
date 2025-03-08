/* Exercise #1 - TypeScript First Start */
// hello-world.ts
var greet = function (firstName, lastName) {
    return "Hello, ".concat(firstName, " ").concat(lastName, "!");
};
console.log(greet("John", "Doe"));
/* Command to create and compile TypeScript file */
// Run in terminal:
// mkdir exercise-1 && cd exercise-1
// tsc --init
// tsc hello-world.ts
// node hello-world.js
