//import quest data
import quests from '../data.js';

// list item target element
const ul = document.querySelector('ul');

const user = JSON.parse(localStorage.getItem('USER'));

let completedAllQuests = true;

for (let quest of quests) {
    if (!user.completed[quest.id]) {
        completedAllQuests = false;
    }
}

if (user.hp <= 0 || user.willpower <= 0 || completedAllQuests) {
    window.location = '../result';
}

for (let quest of quests) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.textContent = quest.title;
    a.href = `../quests/?id=${quest.id}`;

    li.append(a);
    ul.append(li);
}