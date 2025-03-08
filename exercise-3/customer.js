/* Exercise #3 - Access Modifiers and Constructors */
// customer.ts with private properties
var CustomerPrivate = /** @class */ (function () {
    function CustomerPrivate(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    CustomerPrivate.prototype.greeter = function () {
        console.log("Hello, ".concat(this.firstName, " ").concat(this.lastName, "!"));
    };
    return CustomerPrivate;
}());
var customerPrivate = new CustomerPrivate("Alice", "Smith");
customerPrivate.greeter();
