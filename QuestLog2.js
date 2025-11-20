document.addEventListener("DOMContentLoaded", function () {
    const questLog = document.getElementById('quest-log');
    const completedQuests = document.getElementById('completed-quests');
    const completedQuestsTitle = document.getElementById('completed-quests-title');
    const dropdownArrow = document.querySelector('.dropdown-arrow');

    localStorage.clear();

    const quests = questsData.map(questData => {
        const questName = questData.name;
        const storedQuest = localStorage.getItem(questName);

        if (storedQuest) {
            return JSON.parse(storedQuest);
        } else {
            const newQuest = new Quest(
                questData.name,
                questData.vendor,
                questData.chapter,
                questData.stage,
                questData.dungeon,
                questData.type,
                questData.tasks,
                questData.prerequisites
            );
            localStorage.setItem(questName, JSON.stringify(newQuest));
            return newQuest;
        }
    });


    quests.sort((a, b) => {
        if (a.chapter < b.chapter) return -1;
        if (a.chapter > b.chapter) return 1;
        if (a.stage < b.stage) return -1;
        if (a.stage > b.stage) return 1;
        if (a.vendor < b.vendor) return -1;
        if (a.vendor > b.vendor) return 1;
        return 0;
    });

    const dungeons = [...new Set(questsData.map(quest => quest.dungeon))];
    const sectionDivs = {};

    dungeons.forEach(dungeon => {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('dungeon');
        sectionDiv.innerHTML = `<div class="dungeon-title">${dungeon}</div>`;
        sectionDiv.style.display = 'none';
        sectionDivs[dungeon] = sectionDiv;
        questLog.appendChild(sectionDiv);

        // if the number of children changes in the dungeon div, show/hide the div
        const observer = new MutationObserver(() => {
            if (sectionDiv.children.length > 1) {
                sectionDiv.style.display = 'block';
            } else {
                sectionDiv.style.display = 'none';
            }
        });

        observer.observe(sectionDiv, { childList: true });
    });

    quests.forEach(quest => {
        const dungeonDiv = sectionDivs[quest.dungeon];

        if (dungeonDiv) {
            const questDiv = document.createElement('div');
            questDiv.classList.add('quest');
            questDiv.dataset.id = quest.name;

            let mapImageSrc = '';

            // If the quest is an Explore quest, set the map image
            if (quest.type === 'Explore') {
                const location = quest.tasks[0].objective
                const dungeon = quest.dungeon;
                const dungeonName = dungeon.toLowerCase().replace(/\s+/g, '-');
                const locationName = location.toLowerCase().replace(/\s+/g, '-');
                if (location === 'pyramid') {
                    mapImageSrc = `./maps/${dungeonName}-${locationName}.png`;
                } else {
                    mapImageSrc = `./maps/${locationName}.png`;
                }
            }

            let questIcon;
            let iconSize = 50;
            switch (quest.type) {
                case 'Kill':
                    questIcon = 'icons/kill-icon.webp';
                    break;
                case 'Collect':
                    questIcon = 'icons/collect-icon.webp';
                    break;
                case 'Explore':
                    questIcon = mapImageSrc;
                    iconSize = 100;
                    break;
                case 'Escape':
                    questIcon = 'icons/escape-icon.webp';
                    break;
                default:
                    questIcon = '';
            }

            // map dungeon types to external urls
            const dungeonMapLinks = {
                'The Ice Caverns': 'https://darkanddarker.map.spellsandguns.com/map/IceCavern-01-N',
                'The Goblin Caves': 'https://darkanddarker.map.spellsandguns.com/map/GoblinCave-04-N',
                'The Howling Crypts': 'https://darkanddarker.map.spellsandguns.com/map/Crypt-01-N',
                'Inferno': 'https://darkanddarker.map.spellsandguns.com/map/Inferno-01-N',
                'Abyss': 'https://darkanddarker.map.spellsandguns.com/map/IceCavern-01-N'
            }

            // creaate the icon img
            const iconImg = document.createElement('img');
            iconImg.src = questIcon;
            iconImg.alt = quest.type;
            iconImg.style.height = `${iconSize}px`;
            iconImg.style.cursor = 'pointer';
            iconImg.addEventListener('click', () => {
                window.open(dungeonMapLinks[quest.dungeon]);
            });

            // create quest-icons span
            const questIcons = document.createElement('span');
            questIcons.classList.add('quest-icons');
            questIcons.appendChild(iconImg);

            // create the quest div
            questDiv.innerHTML = `
                <div class="quest-title">
                    ${quest.name} 
                    <p style="font-size: smaller; color: #7e7e7e;"> \n ${quest.vendor} - Chapter${quest.chapter} - Quest${quest.stage}</p>
                    <span class="quest-icons"> </span>
                </div>
            `;

            // add the quest-icons span to the quest div
            questDiv.querySelector('.quest-icons').appendChild(iconImg);

            // create the task divs for each task in the quest
            quest.tasks.forEach(task => {

                // create the task div
                const taskItem = document.createElement('div');
                taskItem.classList.add('task-item');
                taskItem.dataset.id = `${quest.name}-${task.objective}`;

                // create task checkboxes div
                const taskCheckboxes = document.createElement('div');
                taskCheckboxes.classList.add('task-checkboxes');

                // create task description span
                const taskDescription = document.createElement('span');
                taskDescription.innerHTML = task.description;

                // create the checkboxes
                for (let i = 0; i < task.steps; i++) {
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.classList.add('task-checkbox');
                    checkbox.dataset.index = i;

                    // update the quest.task.stepsCompleted
                    checkbox.addEventListener('change', () => {
                        // if the checkbox is checked, increment the task.stepsCompleted
                        if (checkbox.checked) {
                            task.stepsCompleted++;
                        } else {
                            task.stepsCompleted--;
                        }

                        // if quest is complete move to completed quests
                        if (quest.checkComplete()) {
                            completedQuests.appendChild(questDiv);

                            // else if parent div is completedQuests div, move back to dungeonDiv
                        } else if (questDiv.parentElement === completedQuests) {
                            dungeonDiv.appendChild(questDiv);
                        }
                    });

                    taskCheckboxes.appendChild(checkbox);
                }

                // add the task description and checkboxes to the task div
                taskItem.appendChild(taskDescription);
                taskItem.appendChild(taskCheckboxes);

                // add the task div to the quest div
                questDiv.appendChild(taskItem);
            });

            if (quest.completed) {
                completedQuests.appendChild(questDiv);
            } else {
                dungeonDiv.appendChild(questDiv);
            }

            // if the div is empty, don't show it
            if (dungeonDiv.children.length > 0) {
                dungeonDiv.style.display = 'block';
            } else {
                dungeonDiv.style.display = 'none';
            }
        }
        else {
            console.err(`No dungeon found for ${quest.dungeon}`);
        }
    });


    // Load saved quest completion status from localStorage
    const taskItems = document.querySelectorAll('.task-item');
    const resetButton = document.getElementById('reset-button');


    // taskItems.forEach(item => {
    //     const checkboxes = item.querySelectorAll('.task-checkbox');

    //     checkboxes.forEach(checkbox => {
    //         checkbox.checked = JSON.parse(localStorage.getItem(item.dataset.id + checkbox.dataset.index)) || false;
    //         checkbox.addEventListener('change', () => {
    //             localStorage.setItem(item.dataset.id + checkbox.dataset.index, checkbox.checked);
    //             checkQuestCompletion(item.closest('.quest'));
    //         });
    //     });
    // });

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
