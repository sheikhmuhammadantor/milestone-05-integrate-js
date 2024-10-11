console.log("Hello World");

document.getElementById('addButton').addEventListener('click', () => {
    let textValue = document.getElementById('textarea');

    const newPTag = document.createElement('p');
    newPTag.innerText = textValue.value;

    const parentDiv = document.getElementById('parent-div');
    parentDiv.appendChild(newPTag);

    textValue.value = '';
})