"use strict";
const msg = 'hello world';
class PizzaMaker {
    static create(event) {
        return { name: event.name, toppings: event.toppings };
    }
}
