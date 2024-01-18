import { Tesla, Audi, Toyota, Honda, Vehiculo, Ford } from './03-liskov-b';

(() => {
  const printCarSeats = (cars: Vehiculo[]) => {
    cars.forEach((car) => {
      //se obtiene el nombre de la clase y numero de asiento y se imprime
      console.log(car.constructor.name, car.getNumberOfSeats());
    });
    // for (const car of cars) {
    //   if (car instanceof Tesla) {
    //     console.log('Tesla', car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Audi) {
    //     console.log('Audi', car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Toyota) {
    //     console.log('Toyota', car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Honda) {
    //     console.log('Honda', car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Ford) {
    //     console.log('Ford', car.getNumberOfSeats());
    //     continue;
    //   }
    // }
  };

  const cars = [new Tesla(7), new Audi(2), new Toyota(5), new Honda(5), new Ford(1)];

  printCarSeats(cars);
})();
