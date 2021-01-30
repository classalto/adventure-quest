import { calcHp } from './hp.js';
import { calcWillpower } from './willpower.js';
import { aliveWillpowerMessages, deadWillpowerMessages, hpMessages } from './messages.js';

// get user data from localstorage
const userData = localStorage.getItem(JSON.parse('USER'));
const storyDisplay = document.getElementById('story-display');

// return user scores strings
const userHpResult = calcHp(userData.hp);
const userWillResult = calcWillpower(userData.willpower);


const hpMessage = hpMessages[userHpResult];

let willpowerMessages = null;
if (userHpResult === 'lifeless') {
    willpowerMessages = deadWillpowerMessages;
}
else {
    willpowerMessages = aliveWillpowerMessages;
}

const willpowerMessage = willpowerMessages[userWillResult];

let story = 'After your adventures, ';
story += userData.name + ' the ' + userData.pokemon + ', ';
story += hpMessage + ' and ' + willpowerMessage + '.';

storyDisplay.textContent = story;



