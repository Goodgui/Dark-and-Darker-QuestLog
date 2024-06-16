document.addEventListener("DOMContentLoaded", function () {
    const questLog = document.getElementById('quest-log');
    const completedQuests = document.getElementById('completed-quests');
    const completedQuestsTitle = document.getElementById('completed-quests-title');
    const dropdownArrow = document.querySelector('.dropdown-arrow');
    
    const dungeonSections = {
        "Any": "Any",
        "The Goblin Caves": "Goblin Caves",
        "The Howling Crypts": "Crypts",
        "The Ice Cavern": "Ice Caverns",
        "Inferno": "Inferno",
        "Abyss": "Abyss"
    };

    const sectionDivs = {};

    Object.keys(dungeonSections).forEach(dungeon => {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('dungeon');
        sectionDiv.innerHTML = `<div class="dungeon-title">${dungeonSections[dungeon]}</div>`;
        sectionDiv.style.display = 'none';
        sectionDivs[dungeon] = sectionDiv;
        questLog.appendChild(sectionDiv);
    });

    const icons = {
        Kill: 'icons/kill-icon.webp',
        Collect: 'icons/collect-icon.webp',
        Explore: 'icons/explore-icon.webp',
        mustEscape: 'icons/must-escape-icon.webp'
    };

    quests.sort((a, b) => {
        if (a.vendor < b.vendor) return -1;
        if (a.vendor > b.vendor) return 1;
        if (a.tier < b.tier) return -1;
        if (a.tier > b.tier) return 1;
        return 0;
    });

    quests.forEach(quest => {
        const dungeonDiv = sectionDivs[quest.dungeon];

        if (dungeonDiv) {
            const questDiv = document.createElement('div');
            questDiv.classList.add('quest');
            questDiv.dataset.id = quest.name; 

            let mapImageSrc = '';
            const locationMatch = quest.tasks[0].description.match(/'([^']+)'/);
            if (locationMatch && locationMatch[1]) {
                const location = locationMatch[1].toLowerCase().replace(/\s+/g, '-');

                const dungeon = dungeonDiv.querySelector('.dungeon-title').textContent.toLowerCase().replace(/\s+/g, '-');
                mapImageSrc = location === 'pyramid' ? `./maps/${dungeon}-${location}.png` : `./maps/${location}.png`;
            }

            questDiv.innerHTML = `
                <div class="quest-title">
                    ${quest.name} <span style="font-size: smaller;"> ${quest.vendor} - Chapter${quest.tier[0]} Quest${quest.tier[1]}</span>
                    <span class="quest-icons">
                        ${icons[quest.type] && quest.type !== 'Explore' ? `<img src="${icons[quest.type]}" alt="${quest.type}" style="height: 50px;">` : ''}
                        ${quest.mustEscape ? `<img src="${icons.mustEscape}" alt="must escape" style="height: 50px;">` : ''}
                        ${quest.type === 'Explore' ? `<img src="${mapImageSrc}" alt="Explore" style="height: 100px;">` : ''}
                    </span>
                </div>
            `;
            quest.tasks.forEach(task => {
                const taskItem = document.createElement('div');
                taskItem.classList.add('task-item');
                taskItem.dataset.id = `${quest.name}-${task.description}`;
                taskItem.innerHTML = `
                    <span>${task.description}</span>
                    <div class="task-checkboxes">
                        ${Array(task.steps).fill(0).map((_, i) => `<input type="checkbox" class="task-checkbox" data-index="${i}">`).join('')}
                    </div>
                `;
                questDiv.appendChild(taskItem);
            });
            if (isQuestCompleted(quest.name)) {
                completedQuests.appendChild(questDiv);
            } else {
                dungeonDiv.appendChild(questDiv);
                dungeonDiv.style.display = 'block';
            }
        }
    });

    const taskItems = document.querySelectorAll('.task-item');
    const resetButton = document.getElementById('reset-button');

    taskItems.forEach(item => {
        const checkboxes = item.querySelectorAll('.task-checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.checked = JSON.parse(localStorage.getItem(item.dataset.id + checkbox.dataset.index)) || false;
            checkbox.addEventListener('change', () => {
                localStorage.setItem(item.dataset.id + checkbox.dataset.index, checkbox.checked);
                checkQuestCompletion(item.closest('.quest'));
            });
        });
    });

    resetButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all tasks?')) {
            taskItems.forEach(item => {
                const checkboxes = item.querySelectorAll('.task-checkbox');
                checkboxes.forEach(checkbox => {
                    checkbox.checked = false;
                    localStorage.setItem(item.dataset.id + checkbox.dataset.index, checkbox.checked);
                });
            });
            localStorage.removeItem('completedQuests');
            location.reload();
        }
    });

    completedQuestsTitle.addEventListener('click', () => {
        const displayStyle = completedQuests.style.display === 'none' ? 'block' : 'none';
        completedQuests.style.display = displayStyle;
        dropdownArrow.style.transform = displayStyle === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
    });

    function checkQuestCompletion(questDiv) {
        const taskItems = questDiv.querySelectorAll('.task-item');
        const allTasksCompleted = Array.from(taskItems).every(item => {
            const checkboxes = item.querySelectorAll('.task-checkbox');
            return Array.from(checkboxes).every(checkbox => checkbox.checked);
        });

        if (allTasksCompleted) {
            moveQuestToCompleted(questDiv);
        }
    }

    function moveQuestToCompleted(questDiv) {
        completedQuests.appendChild(questDiv);
        saveQuestCompletion(questDiv.dataset.id);
    }

    function isQuestCompleted(questName) {
        const completedQuests = JSON.parse(localStorage.getItem('completedQuests')) || [];
        return completedQuests.includes(questName);
    }

    function saveQuestCompletion(questName) {
        const completedQuests = JSON.parse(localStorage.getItem('completedQuests')) || [];
        if (!completedQuests.includes(questName)) {
            completedQuests.push(questName);
        }
        localStorage.setItem('completedQuests', JSON.stringify(completedQuests));
    }
});
