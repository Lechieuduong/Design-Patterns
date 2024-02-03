// create service car

class Car {
    constructor({ name = 'Ford Ranger 2023', doors = 4, price = '10 vnd', customerInfo = {}}){
        this.name = name,
        this.doors = doors,
        this.price = price,
        this.customerInfo = customerInfo
    }
}

class ServiceLogistics {
    transportClass = Car
    getTransport = (customerInfo) => {
        return new this.transportClass(customerInfo)
    }
}

// order for customer by car
const carService = new ServiceLogistics()
console.log('CarService', carService.getTransport({ customerInfo: { name: 'Dawn', cargoVolume: '100 kg'}}));

// Triển khai simple factory theo cách của factory method
// Cách 1

class Truck {
    constructor({ name = 'Container 2023', doors = 4, price = '10 vnd', customerInfo = {}}){
        this.name = name;
        this.price = price;
        this.doors = doors;
        this.customerInfo = customerInfo
    }
}

carService.transportClass = Truck
// console.log('TruckService', carService.getTransport({ customerInfo: { name: 'Dawn', cargoVolume: '1000 kg'}}));

// Cách 2
class TruckService extends ServiceLogistics{
    transportClass = Truck;
}

const truckService = new TruckService();

console.log('TruckService:::::', carService.getTransport({ customerInfo: { name: 'Dawn', cargoVolume: '1000 kg'}}));
