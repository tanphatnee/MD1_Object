let cars = [
    {name: "Tesla model 3", brand: "Tesla", price: 142800, color: "White", category: "SUV"},
    {name: "Audi A8", brand: "Audi", price: 184870, color: "Black", category: "SUV"},
    {name: "Vinfast Lux 2.0", brand: "Vin", price: 21490, color: "Gray", category: "SUV"},
    {name: "Honda CRV", brand: "Honda", price: 84900, color: "Blue", category: "Hatchback"}
];

cars.forEach(car => {
  console.log("Name: " + car.name);
  console.log("Price: " + car.price);
});

let index = prompt("Nhập vào vị trí của xe mà bạn muốn in ra: ");
let car = cars[index-1];
console.log("Name: " + car.name);
console.log("Brand: " + car.brand);
console.log("Price: " + car.price);
console.log("Color: " + car.color);
console.log("Category: " + car.category);

let category = prompt("Nhập vào category của xe mà bạn muốn in ra: ");
cars.filter(car => car.category === category).forEach(car => {
  console.log("---");
  console.log("Name: " + car.name);
  console.log("Brand: " + car.brand);
  console.log("Price: " + car.price);
  console.log("Color: " + car.color);
  console.log("Category: " + car.category);
});
