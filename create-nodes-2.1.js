const body = document.body;
const ul = document.createElement("ul");
const arr = ["html", "css", "js"];

function start(array) {
  for (let elem of array) {
    let li = document.createElement("li");
    li.textContent = elem;
    ul.append(li);
  }
  return body.append(ul);
}

start(arr);
