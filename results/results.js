import { loadProfile } from '../common/load-profile.js';
import { getUser } from '../data/api.js';
import { scoreReputation } from './score-reputation.js';
import { successfulCareerMessage, failedCareerMessage } from './messages.js';

loadProfile();

const user = getUser();

const storyDisplay = document.getElementById('story-display');
const reputationResult = scoreReputation(user.reputation);
let careerMessage = null;
if (reputationResult === 'failed') {
    careerMessage = failedCareerMessage;
} else careerMessage = successfulCareerMessage;

careerMessage = careerMessage[reputationResult];


storyDisplay.textContent = careerMessage;




