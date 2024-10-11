console.log("Hello World");


document.querySelector('#inputFled').addEventListener('keyup', (even) => {
    let inputValue = even.target;
    const deleteBtn = document.querySelector('#deleteBtn');

    if (inputValue.value === 'Delete') {
        deleteBtn.removeAttribute('disabled');
    } else deleteBtn.setAttribute('disabled', true);


    document.querySelector('#deleteBtn').addEventListener('click', () => {
        const myName = document.querySelector('#myName');
        myName.style.display = 'none';

        inputValue.value = '';
    })
})


// document.querySelector('#deleteBtn').addEventListener('click', () => {
//     const myName = document.querySelector('#myName');
//     myName.style.display = 'none';
// })
