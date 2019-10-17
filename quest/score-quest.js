export const scoreQuest = (choice, questId, user) => {
    user.reputation += choice.reputation;
    user.salary += choice.salary;
    user.completed[questId] = true;
};