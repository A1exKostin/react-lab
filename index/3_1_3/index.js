let isEditing = false;
let firstName = 'Jane';
let lastName = 'Jacobs';

function handleFormSubmit(e) {
    e.preventDefault();
    isEditing = !isEditing;
    updateDOM();
}

function handleFirstNameChange(e) {
    firstName = e.target.value;
    updateDOM();
}

function handleLastNameChange(e) {
    lastName = e.target.value;
    updateDOM();
}

function updateDOM() {
    editButton.textContent = isEditing ? 'Save Profile' : 'Edit Profile';

    firstNameText.textContent = firstName;
    lastNameText.textContent = lastName;
    firstNameInput.value = firstName;
    lastNameInput.value = lastName;

    if (isEditing) {
        show(firstNameInput);
        show(lastNameInput);
        hide(firstNameText);
        hide(lastNameText);
    } else {
        hide(firstNameInput);
        hide(lastNameInput);
        show(firstNameText);
        show(lastNameText);
    }

    helloText.textContent = `Hello, ${firstName} ${lastName}!`;
}

function hide(el) {
    el.style.display = 'none';
}

function show(el) {
    el.style.display = '';
}

let form = document.getElementById('form');
let editButton = document.getElementById('editButton');
let firstNameInput = document.getElementById('firstNameInput');
let firstNameText = document.getElementById('firstNameText');
let lastNameInput = document.getElementById('lastNameInput');
let lastNameText = document.getElementById('lastNameText');
let helloText = document.getElementById('helloText');

form.onsubmit = handleFormSubmit;
firstNameInput.oninput = handleFirstNameChange;
lastNameInput.oninput = handleLastNameChange;

updateDOM();