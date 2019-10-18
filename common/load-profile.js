import { getUser } from '../data/api.js';
import { isDead } from './is-dead.js';

export const loadProfile = () => {
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const reputation = document.getElementById('reputation');
    const salary = document.getElementById('salary');
    const user = getUser();
    if (!user) {
        window.location = './';
    }
    name.textContent = user.name;
    avatar.src = '../assets/players/' + user.nbastar + '.png';
    salary.textContent = user.salary;
    if (isDead(user)) {
        reputation.textContent = 'Unwanted Free Agent';
    } else {
        reputation.textContent = user.reputation;
    }

};
