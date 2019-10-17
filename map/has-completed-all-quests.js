export const hasCompletedAllQuests = (quests, user) => {
    quests.forEach(function(i, quest) {
        quest = quest[i];
        if (!user.completed[quest.id]) {
            return false;
        }
    });
};