const body = document.body;

const ul = document.createElement('ul');
ul.className = "list";

const li  = document.createElement("li");
li.textContent("Привет, мир")

ul.append(li)

body.append(ul)

console.log(ul)
console.log(li)