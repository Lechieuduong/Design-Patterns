// without simple factory pattern
// level 0
const serviceLogistics = (cargoVolume) => {
    switch (cargoVolume) {
        case '10':
            return {
                name: 'Truck 10',
                door: 6,
                price: '100.000 vnd'
            }
        case '20':
            return {
                name: 'Truck 20',
                door: 16,
                price: '1.000.000 vnd'
            }
    }
}

console.log(serviceLogistics('20'))

// with simple factory pattern
class ServiceLogistics {
    constructor(doors = 6, price = '100.000 vnd', name = 'Truck 10') {
        this.name = name;
        this.price = price;
        this.doors = doors;
    }

    static getTransport = (cargoVolume) => {
        switch (cargoVolume) {
            case '10':
                return new ServiceLogistics()
            case '20':
                return new ServiceLogistics(10, '1.000.000 vnd', 'Truck 20')

        }
    }
}

console.log(ServiceLogistics.getTransport('10'))