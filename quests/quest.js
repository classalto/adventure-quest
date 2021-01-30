import { findById } from '../utils.js';
import quests from '../data.js';

// get dom elements
const h1 = document.querySelector('h1');
const img = document.querySelector('section img');
const p = document.querySelector('p');
const form = document.querySelector('form');

// search params
const params = new URLSearchParams(window.location.search);
const questId = params.get('id');
const quest = findById(quests, questId);

h1.textContent = quest.title;
p.textContent = quest.description;
img.src = `../assets/${quest.image}`;

for (let choice of quest.choices) {
    const radio = document.createElement('input');
    const label = document.createElement('label');
    const span = document.createElement('span');

    span.textContent = quest.description;

    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';

    label.append(span, radio);
    form.append(label);
}

const button = document.createElement('button');
button.textContent = 'Make your choice!';
form.appendChild(button);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const userSelects = formData.get('choices');
    const choice = findById(quest.choices, userSelects);
    const user = JSON.parse(localStorage.getItem('USER'));
    
    user.hp += choice.hp;
    user.willpower += choice.willpower;
    user.completed[questId] = true;

    //set in storage
    localStorage.setItem('USER', JSON.stringify(user));
    window.location = '../maps';
});