"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModule = void 0;
// customer.ts as a module
var CustomerModule = /** @class */ (function () {
    function CustomerModule(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = age;
    }
    CustomerModule.prototype.greeter = function () {
        console.log("Hello, ".concat(this.firstName, " ").concat(this.lastName, "!"));
    };
    CustomerModule.prototype.getAge = function () {
        console.log("Age: ".concat(this._age));
    };
    return CustomerModule;
}());
exports.CustomerModule = CustomerModule;
