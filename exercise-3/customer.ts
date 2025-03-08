/* Exercise #3 - Access Modifiers and Constructors */

// customer.ts with private properties
class CustomerPrivate {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeter(): void {
        console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    }
}

let customerPrivate = new CustomerPrivate("Alice", "Smith");
customerPrivate.greeter();