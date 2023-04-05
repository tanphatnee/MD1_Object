let cars = [
  {
    name: "Tesla model 3",
    brand: "Tesla",
    price: 142800,
    color: "White",
    category: "SUV",
    providers: ["ZeroAuto", "VhStore"],
  },
  {
    name: "Audi A8",
    brand: "Audi",
    price: 184870,
    color: "Black",
    category: "SUV",
    providers: ["HAauto", "VhStore"],
  },
  {
    name: "Vinfast Lux 2.0",
    brand: "Vin",
    price: 21490,
    color: "Gray",
    category: "SUV",
    providers: ["HAauto"],
  },
  {
    name: "Honda CRV",
    brand: "Honda",
    price: 84900,
    color: "Blue",
    category: "Hatchback",
    providers: ["HAauto"],
  },
];

for (let car of cars) {
  console.log(
    `Name: ${car.name}, Brand: ${car.brand}, Price: ${car.price}, Color: ${ 
      car.color
    }, Category: ${car.category}, Providers: ${car.providers.join(", ")}`
  );
}
