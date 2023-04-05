// Tạo một object từ điển
const myDict = {
  agile: "Agile is an iterative approach to project management and software development",
  scrum: "Scrum is a lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems.",
  aws: "Aws stands for Amazon web services, a cloud solution for web development",
  pm: "The short version of Project Manager, the person in charge of the final result of a project",
  "ui/ux": "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels"
};

alert("Chào mừng đến với từ điển của tôi")
let input = prompt("Nhập từ khóa cần tìm kiếm ");

alert(`${input}: ${myDict[input]}`);