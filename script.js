
var names = new Array();
names[0] = "Yaakov";
names[1] = "John";
names[2] = "Jen"; 
names[3] = "Jason";
names[4] = "Paul";
names[5] = "Frank";
names[6] = "Larry";
names[7] = "Paula";
names[8] = "Laura";
names[9] = "Jim";

var greetingsContainer = document.getElementById("greetings");

for (let i = 0; i < names.length; i++) {
  let name = names[i];
  let firstLetter = name.charAt(0).toLowerCase();

  let greeting = document.createElement("p"); 
  if (firstLetter === 'j') {
    greeting.textContent = "Goodbye " + name;
  } else {
    greeting.textContent = "Hello " + name;
  }

  greetingsContainer.appendChild(greeting); 
}