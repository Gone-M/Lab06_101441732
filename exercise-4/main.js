"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
var customer_1 = require("./customer");
var customerModule = new customer_1.CustomerModule("Bob", "Brown", 30);
customerModule.greeter();
customerModule.getAge();
