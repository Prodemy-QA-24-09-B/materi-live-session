const food = {
  name: "Nasi Goreng",
  calories: 120,
};

// console.log(food);
// mengakses property
// console.log(food.name);
// console.log(food['calories']);

const cat = {};
cat.name = "Oreo";
cat.age = 5;

// console.log(cat);

// array of object
let cars = [
  {
    color: "red",
    type: "minivan",
    capacity: 5,
  },
  {
    color: "blue",
    type: "station wagon",
    capacity: 8,
  },
];

// for (const car of cars) {
//   console.log(car.color);
// }

cars.forEach((car) => {
  car.size = "Small";

  if (car.capacity > 5) {
    car.size = "Big";
  }
});

console.log(cars);
