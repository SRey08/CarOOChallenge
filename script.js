class Vehicle {
    constructor(a, b, c) {
    this.make = a;
	this.model = b;
	this.year = c;
    }

    honk(){
        return "Beep.";
    }

    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);


class Car extends Vehicle{
    constructor (make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    
    }

}

let myFirstCar = new Car("Toyota", "Corolla", 2005);