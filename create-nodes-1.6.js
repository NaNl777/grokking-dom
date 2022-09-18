const body = document.body;

const div = document.createElement("div");
const ul = document.createElement("ul");

const liOne = document.createElement("li")
const liTwo = document.createElement("li");

const aOne = document.createElement("a")
const atwo = document.createElement("a");

aOne.setAttribute("href", "https://instagram.com/intocode");
aOne.textContent = "Наш инстаграм";
atwo.setAttribute("href", "https://intocode.ru");
atwo.textContent = "Наш сайт";


div.append(ul);
ul.append(liOne, liTwo)
liOne.append(aOne);
liTwo.append(atwo)

body.append(diV)

