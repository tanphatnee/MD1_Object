let cars = [
    { name: "Tesla model 3", brand: "Tesla", price: 142800, color: "White", category: "SUV" },
    { name: "Audi A8", brand: "Audi", price: 184870, color: "Black", category: "SUV" },
    { name: "Vinfast Lux 2.0", brand: "Vin", price: 21490, color: "Gray", category: "SUV" },
    { name: "Honda CRV", brand: "Honda", price: 84900, color: "Blue", category: "Hatchback" }
  ];
  
for (let car of cars) {
    console.log("---");
    console.log("Name: " + car.name);
    console.log("Price: " + car.price);
  }
  



for (car of cars) { 
  console.log("---");
  console.log("Name: " + car.name);
  console.log("Price:" + car.price);
}