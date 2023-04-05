let cars = [
    {name: "Tesla model 3", brand: "Tesla", price: 142800, color: "White", category: "SUV", providers: ["ZeroAuto", "VhStore"]},
    {name: "Audi A8", brand: "Audi", price: 184870, color: "Black", category: "SUV", providers: ["HAauto", "VhStore"]},
    {name: "Vinfast Lux 2.0", brand: "Vin", price: 21490, color: "Gray", category: "SUV", providers: ["HAauto"]},
    {name: "Honda CRV", brand: "Honda", price: 84900, color: "Blue", category: "Hatchback", providers: ["HAauto"]}
  ];

// Nhập vào tên của provider
let providerName = prompt("Nhập vào tên của provider:");

// Tìm và hiển thị danh sách các xe của provider đó
let found = false;
for (let i = 0; i < cars.length; i++) {
    if (cars[i].providers.indexOf(providerName) !== -1) {
        console.log("Tên xe: " + cars[i].name + ", Thương hiệu: " + cars[i].brand + ", Giá: " + cars[i].price + ", Màu sắc: " + cars[i].color + ", Danh mục: " + cars[i].category);
        found = true;
    }
}

// Nếu không tìm thấy xe của provider đó
if (!found) {
    console.log("Không tìm thấy xe của provider này.");
}
