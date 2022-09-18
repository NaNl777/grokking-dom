const body = document.body;
const ul = document.createElement("ul");

const obj = [
  {
    name: "Google",
    url: "https://google.com",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
  },
  {
    name: "intocode",
    url: "https://intocode.ru",
  },
];

function render(array) {
  for (let elem of array) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    li.append(a);
    a.setAttribute("href", "elem.url");
    a.textContent = elem.name
    ul.append(li);
  }
  return body.append(ul);
}

render(obj);

