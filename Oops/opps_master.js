let car ={
    make:"Toyota",
    model:"Camry",
    year:2020,

    start: function() {
        return `${this.make} car got started in ${this.year}`;
    },
};
console.log(car.start());

function Person(name,age){
    this.name=name
    this.age=age
}

let john = new Person("John Doe",20);
console.log(john.name);


function Animal(type){
    this.type=type
}

Animal.prototype.speak= function(){
    return `${this.type} makes a sound`
}

Array.prototype.rushi=function(){
    return `custom method ${this}`
}

let myArray=[1,2,3];
console.log(myArray.rushi());

let myNewArray = [1,2,3,4,5,6];
console.log(myNewArray.rushi());


class Vehicle {
    constructor(make,model){
        this.make=make
        this.model=model

    }

    start(){
        return `${this.model} ia a car from ${this.make}`;
    }
}

class Car extends Vehicle {
    drive(){
        return `${this.make} : this is a inheritance example`;
    }
}

let myCar= new Car("Toyota","Corolla")
console.log(myCar.start());
console.log(myCar.drive());

let vehOne= new Vehicle("Toyota","Corolla");
console.log(vehOne.make);

// Encapsulation

class BankAccount{
    #balance = 0;


    deposit(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        return `${this.#balance}`;
    }
}

let account = new BankAccount()

console.log(account.deposit(100000));
console.log(account.deposit(5000));
console.log(account.getBalance());

//  Abstraction

class CoffeMachine{
    start(){
        //call DB
        //Filter vlaue

        return `Starting the machine...`;

    }

    brewCoffee(){
        // complx calculation

        return `Brewing Coffee`;
    }
}

let myMachine = new CoffeMachine();
console.log(myMachine.start());
console.log(myMachine.brewCoffee());


