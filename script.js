class Vehicle {
    constructor(a, b, c) {
    this.make = a;
	this.model = b;
	this.year = c;
    }

    honk(){
        return "Beep.";
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
