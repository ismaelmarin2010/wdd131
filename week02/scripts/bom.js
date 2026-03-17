const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul'); //Fill in the blank to reference the unordered list element.

////////////////////////////////////////////

button.addEventListener('click', function () {
    // Code to execute when the button is clicked
    if (input.value.trim() !== '') {

        const li = document.createElement('li'); // Creates new line (list item)
        const deleteButton = document.createElement('button'); // Creates the delete button next to the new line added

        const text = document.createTextNode(input.value); // Could not make it work until I replaced the way the input is taken.

        li.appendChild(text);
        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        input.value = ''; // Clears the input field
        input.focus(); // Takes the focus back to the input

    };
});



