import { saveUser, makeUser } from './playerUtils.js';

// import functions and grab DOM elements
const form = document.querySelector('form');

console.log('hello');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    
    const userData = makeUser(formData);
    
    saveUser(userData);
    
    window.location = '../maps/';
    
});