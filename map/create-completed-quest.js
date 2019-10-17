export const createCompletedQuest = (quest) => {

    const completedQuestSpan = document.createElement('span');
    
    completedQuestSpan.classList.add('quest'); 

    completedQuestSpan.classList.add('completed');

    completedQuestSpan.style.top = quest.map.top;

    completedQuestSpan.style.left = quest.map.left;

    completedQuestSpan.textContent = quest.title;

    return completedQuestSpan;





};