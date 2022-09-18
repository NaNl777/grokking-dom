const body = document.body;

const divOne = document.createElement('div');
divOne.className = "red"

const divTwo = document.createElement('div');
divTwo.className = "green"

const divThree = document.createElement("div");
divThree.className = "blue"

divThree.textContent = 'Я вложен';

divOne.append(divTwo);
divTwo.append(divThree)

body.append(divOne)

console.log(divOne)


