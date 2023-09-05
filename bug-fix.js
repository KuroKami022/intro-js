export function solution(cars) {
    return cars.filter(function (car) {
      if (car.licensePlate) {
        return true;
      }
    });
  }
  const cars = [
    {
      color: 'red',
      brand: 'Kia',
    },
    {
      color: 'gray',
      brand: 'Chevrolet',
      licensePlate: 'AAA111',
    },
    {
      licensePlate: 'RGB255',
    },
  ];
  
  solution(cars);