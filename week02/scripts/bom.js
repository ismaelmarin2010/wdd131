const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul'); //Fill in the blank to reference the unordered list element.

////////////////////////////////////////////

button.addEventListener('click', function () {
    // Code to execute when the button is clicked
    if (input.value.trim() !== '') {

        const li = document.createElement('li');

        const deleteButton = document.createElement('button');

        const text = document.createTextNode(input.value);

        li.appendChild(text);
        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        input.value = '';

        input.focus();

    };
});



