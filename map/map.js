import { getUser } from '../data/api.js';
import { quests } from '../data/quest-data.js';
import { loadProfile } from '../common/load-profile';
import { createQuestLink } from './create-quest-link.js';
import { createCompletedQuest } from './create-completed-quest';
import { hasCompletedAllQuests } from './has-completed-all-quests.js';
import { isDead } from '../common/is-dead.js';

loadProfile();
const user = getUser();

if (isDead(user) || hasCompletedAllQuests(quests, user)) {
    window.location = '../results';
}

const nav = document.getElementById('quests');

quests.forEach(function(i, quest) {
    quest = quest[i];
    let questDisplay = null;
    if (user.completed[quest.id]) {
        questDisplay = createCompletedQuest(quest);
    } else {
        questDisplay = createQuestLink(quest);
    }
    nav.appendChild(questDisplay);
    
});