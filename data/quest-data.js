const trailBlazers = {
    id: 'trail-blazers',
    title: 'Play the Trailblazers',
    map: {
        top: '89%',
        left: '44%'
    },
    image: '',
    description: `There's five seconds on the clock, you're down by 2 points, the team is huddled up to draw up one last play. Coach is leaning towards having the 2-man take the shot. What do you do?
        
    `,
    choices: [{
        id: 'convince',
        description: 'Convince coach to give you the shot',
        result: `
            Your 5-man sets a perfect on-ball screen(obviously) and you have a wide open shot which you brick off the front of the rim costing you 20 reputation but thankfully Coach forgives you for the mistake and doesn't cut your contract. 
        `,
        reputation: -20,
        salary: 0
    }, {
        id: 'pass-off',
        description: 'Go with the plan Coach drew up',
        result: `
            You catch the inbound pass and hit your 2-man with the ball as he comes off the on-ball screen. He pulls up and crushes the three-pointer for the win at the buzzer. Everyone storms the court! You gain 10 reputation for your selfless behavior.
        `,
        reputation:10,
        salary: 0
    }]
};

const tradeDeal = {
    id: 'trade-deal',
    title: 'Trade Deal',
    map: {
        top: '57%',
        left: '67%'
    },
    image: '',
    description: `
        Your rookie contract is up and you had a team option added to your draft contract. Coach is honoring that and has agreed to offer a trade to the team of your choosing. Coach has added that he would love to keep you around and build a franchise player out of you. He offered you a 5-year 107 million dollar contract. What do you do?
    `,
    choices: [{
        id: 'stay',
        description: 'Accept the offer on the table from Coach',
        result: `
           You play out your contract and after 5 successful years Coach offers you another contract and you are being considered for The Hall of Fame before you have even left the league. You gain 100 reputation and 100 salary.
        `,
        reputation: 100,
        salary: 100
    }, {
        id: 'golden-state',
        description: 'Ask to be traded to the Golden State Warriors',
        result: `
            Golden State rejected your trade request and now Coach has reduced his offer to less than what your rookie contract was because you hurt his feelings and now you have been labeled as Untrustworthy and Flaky. Now that nobody wants you, your short career has come to an end. You lost 150 reputation and 100 salary.
        `,
        reputation: -150,
        salary: -100
    }, {
        id: 'brooklyn',
        description: 'Ask to be traded to the Brooklyn Nets',
        result: `
        The Nets rejected your trade request and now Coach has reduced his offer to less than what your rookie contract was because you hurt his feelings and now you have been labeled as Untrustworthy and Flaky. Now that nobody wants you, your short career has come to an end. You lost 150 reputation and 100 salary.
        `,
        reputation: -150,
        salary: -100
    }]
};

const treasure = {
    id: 'after-party',
    title: 'After Party',
    map: {
        top: '31%',
        left: '5%'
    },
    image: '',
    description: `
        After your most recent victory, you and the boys head to a VIP after party at club Flurrr. You are walking back to your roped off section with some drinks and a random guy displays some negligent behavior and knocks the drinks out of your hands all over you and your friends. What do you do?
    `,
    choices: [{
        id: 'fight',
        description: 'Give him the ole razzle dazzle',
        result: 'You get arrested and have to get bailed out by Coach, costing you a 20 salary contract violation fine. Your boys were pumped about it though and the fans kinda liked it gaining you 5 reputaion',
        reputation: 5,
        salary: -20
    }, {
        id: 'walk-away',
        description: 'Walk away and let your boys deal with it.',
        result: 'Your boys tell the guy off and avoid a physical altercation but they are kinda mad that you bailed like that.',
        reputation: -5,
        salary: 0
    }, {
        id: 'tell-off',
        description: 'Tell the guy to check himself before he wrecks himself',
        result: 'A warm light engulfs you and you gain 35 reputation',
        reputation: 15,
        salary: 0
    }]
};

const quests = [trailBlazers, treasure, tradeDeal];

export default quests;