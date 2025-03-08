// main.ts
import { CustomerModule } from "./customer";

let customerModule = new CustomerModule("Bob", "Brown", 30);
customerModule.greeter();
customerModule.getAge();
