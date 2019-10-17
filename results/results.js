import { loadProfile } from '../common/load-profile.js';
import { getUser } from '../data/api.js';
import { scoreReputation } from './score-reputation.js';
import { scoreSalary } from './score-salary.js';
import { reputationMessages, successfulCareerMessages, failedCareerMessages } from './messages.js';
loadProfile();

const user = getUser();

const storyDisplay = document.getElementById('story-display');
const reputationResult = scoreReputation(user.reputation);
const salaryResult = scoreSalary(user.salary);
const reputationMessage = reputationMessages[reputationResult];
let salaryMessages = null;
if (reputationResult === 'dead') {
    salaryMessages = failedCareerMessages;
} else successfulCareerMessages;

const salaryMessage = salaryMessages[salaryResult];
let story = 'In the end, ';
story += user.name + ' the ' + user.race + ', ';
story += reputationMessage + ' and ' + salaryMessage + '.';

storyDisplay.textContent = story;




