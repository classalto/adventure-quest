const battleOne = {
    id: 'snorlax',
    title: 'A Big Problem',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'snorlax.svg',
    description: `
        You stumble across a massive Pokemon... 
        You've never seen a Pokemon as big as this one. 
        It seems to have fallen asleep and is blocking the path... what to do...
    `,
    choices: [{
        id: 'negotiate',
        description: 'Tap it on the shoulder, politely ask it to move, and hope you dont startle it...',
        result: `
            The large pokemon wakes up in rage... startled from its sleep. You try to politely 
            tell the pokemon why you woke it, but he charges you and lets out a roar as you try 
            to speak. He body slams you and you lose 50hp and your will to continue the journey wavers
            causing you to lose 5 willpower.
        `,
        hp: -50,
        willpower: -5
    }, {
        id: 'fight',
        description: 'attack',
        result: `
            You take the initiative and make a surprise attack. It seems to have dazed it but he's awake.
            He charges you but it seems to be slow... You use your speed to circle him endlessly and after some time
            the pokemon collapeses from exhaustion. You leave the battle with minor scratches, but your surpise attack 
            seems to have created a new obstacle on the path. It's going to take a while to clear the rubble. Your spirit fades, 
            but its only a minor setback. willpower -2.
        `,
        hp: 100,
        willpower: -2
    }, {
        id: 'run',
        description: 'Run back to oak town',
        result: `
            The sight of such a massive pokemon is enough to cause you to run home. willpower 0.
        `,
        hp: 100,
        willpower: 0
    }]
};

const battleTwo = {
    id: 'beedrill',
    title: 'A Cloudy Day',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'beedrill.svg',
    description: `
        Mid way through your journey you hear a distinct buzz... what is that sound? You look behind you and theres a swarm of beedrill right on your tail!
         What do you do?
    `,
    choices: [{
        id: 'run',
        description: 'Run up the nearest tree',
        result: `
            You scramble to the tallest tree you can see and climb up as fast as you can. You reach the top but the swarm seems to get closer. 
            just when they reach you a gust of wind blows them to the next city. Willpower +1. Health -30.
        `,
        hp: -30,
        willpower: 1
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            You attempt to charge towards the swarm, they are relentless. Every attack seems effective, but there are too many.
            lose all of your health.
        `,
        hp: -100,
        willpower: 0
    }, {
        id: 'distraction',
        description: 'throw candy',
        result: `
            You desperately throw all the candy that you conveniently brought with you. The swarm seems to notice and half of them start to eat it.
            The other half charges, the half size swarm is more manageable but they put up a good fight. lose 50hp lose 2 willpower.
        `,
        hp: -50,
        willpower: 90
    }]
};

const battleThree = {
    id: 'jigglypuff',
    title: 'Sleepy Time',
    map: {
        top: '31%',
        left: '5%'
    },
    image: 'jigglypuff.svg',
    description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
    choices: [{
        id: 'sleep',
        description: 'Your journey was long, you close your eyes for a few seconds.',
        result: 'Your journey ends. You are unable to wake up.',
        hp: 0,
        willpower: 0
    }, {
        id: 'sing along',
        description: 'You sing along with the jigglypuff, the harmonies are sweet and relaxing.',
        result: 'The song seems to go on endlessly and your eyes grow heavy. willpower 0',
        hp: 100,
        willpower: 0
    }, {
        id: 'quiet',
        description: 'Something seems off... Cover your ears',
        result: 'Nothing seems to be happening as you walk out of the cave... You wonder what the rest of the song sounded like.',
        hp: 100,
        willpower: 10
    }]
};

const quests = [
    battleOne, 
    battleTwo,
    battleThree,
];

export default quests;
