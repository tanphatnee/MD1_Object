let developerDict = {
  agile:
    "Agile is an iterative approach to project management and software development",
  scrum:
    "Scrum is a lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems.",
  aws: "Aws stands for Amazon web services, a cloud solution for web development",
  pm: "The short version of Project Manager, the person in charge of the final result of a project",
  "ui/ux":
    "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels",
};

let newKey = prompt("Enter a new keyword:");
let newValue = prompt("Enter the meaning of the new keyword:");
let isDuplicate = false;

for (let key in developerDict) {
  if (key === newKey) {
    alert(
      `Từ này "${newKey}" đã tồn tại với nghĩa "${developerDict[key]}".`
    );
    isDuplicate = true;
    break;
  }
}

if (!isDuplicate) {
  developerDict[newKey] = newValue;
  alert(
    `Từ này "${newKey}" đã được thêm vào với nghĩa "${newValue}".`
  );
}

console.log(developerDict);
