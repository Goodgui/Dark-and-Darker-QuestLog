class Quest {
    constructor(name, vendor, chapter, stage, dungeon, type, tasks, prerequisites) {
        this.name = name;
        this.vendor = vendor;
        this.chapter = chapter;
        this.stage = stage; // which quest it is in the chapter
        this.dungeon = dungeon; // Any, The Ice Caverns, The Goblin Caves, The Howling Crypts, Inferno, Abyss
        this.type = type; // Kill, Collect, Explore, Survive
        this.tasks = tasks; // array of quest tasks with description and steps
        this.completed = false;
        this.prerequisites = prerequisites ? prerequisites : []; // array of [vendor,chapter] pairs which must be completed before this quest can be started

        // set each task to 0 steps completed
        this.tasks.forEach(task => task.stepsCompleted = 0);

        // Possible future additions
        // this.rewards = rewards;
        // this.requiredItems = reqiredItems;

        // console.log("Quest created: " + this.name);
    }

    forceComplete() {
        this.completed = true;

        // set each task to max steps completed
        this.tasks.forEach(task => task.stepsCompleted = task.steps);
    }

    forceIncomplete() {
        this.completed = false;

        // set each task to 0 steps completed
        this.tasks.forEach(task => task.stepsCompleted = 0);
    }

    isComplete() {
        return this.completed;
    }

    checkComplete() {
        this.completed = this.tasks.every(task => task.stepsCompleted === task.steps);
        return this.completed;
    }
}