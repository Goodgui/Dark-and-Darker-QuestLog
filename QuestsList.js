const questsData = [
    {
        name: "A Father's Legacy",
        vendor: "Alchemist",
        chapter: 1,
        stage: 1,
        dungeon: "Any",
        type: "Collect",
        tasks: [
            {
                description: "Collect 1 potion of healing",
                objective: "Potion of Healing",
                steps: 1,
            },
            {
                description: "Collect 1 potion of invisibility",
                objective: "Potion of Invisibility",
                steps: 1,
            },
            {
                description: "Collect 1 potion of protection",
                objective: "Potion of Protection",
                steps: 1,
            }
        ],
        prerequisites: []
    },
    {
        name: "Golden Opportunity",
        vendor: "Alchemist",
        chapter: 1,
        stage: 2,
        dungeon: "The Ice Caverns",
        type: "Kill",
        tasks: [
            {
                description: "Kill 5 Ice Kobold Archers",
                objective: "Ice Kobold Archer",
                steps: 5
            },
            {
                description: "Kill 5 Ice Kobold Axemen",
                objective: "Ice Kobold Axeman",
                steps: 5
            }
        ],
        prerequisites: []
    },
    {
        name: "Frozen Secrets",
        vendor: "Alchemist",
        chapter: 1,
        stage: 3,
        dungeon: "The Ice Caverns",
        type: "Explore",
        tasks: [
            {
                description: "Explore 'Wolf Cave' Location",
                objective: "Wolf Cave",
                steps: 1
            }
        ],
        prerequisites: []
    },
    {
        name: "Mining For Piece of Mind",
        vendor: "Armourer",
        chapter: 1,
        stage: 1,
        dungeon: "Any",
        type: "Collect",
        tasks: [
            {
                description: "Collect 6 Cobalt Ore",
                objective: "Cobalt Ore",
                steps: 6
            }
        ],
        prerequisites: []
    },
    {
        name: "Facing Your Fears",
        vendor: "Armourer",
        chapter: 1,
        stage: 2,
        dungeon: "Any",
        type: "Kill",
        tasks: [
            {
                description: "Kill 15 Skeletons",
                objective: "Skeleton",
                steps: 15
            }
        ],
        prerequisites: []
    },
    {
        name: "Not A Coward",
        vendor: "Armourer",
        chapter: 1,
        stage: 3,
        dungeon: "The Howling Crypts",
        type: "Escape",
        tasks: [
            {
                description: "Escape The Howling Crypts 5 times",
                objective: "The Howling Crypts",
                steps: 5
            }
        ],
        prerequisites: []
    },
    {
        name: "Killing Kritters",
        vendor: "Goblin Merchant",
        chapter: "1",
        stage: "3",
        dungeon: "The Goblin Caves",
        type: "Kill",
        tasks: [
            {
                description: "Kill 2 Giant Centipedes",
                objective: "Giant Centipede",
                steps: 2
            },
            {
                description: "Kill 2 Giant Spiders",
                objective: "Giant Spider",
                steps: 2
            },
            {
                description: "Kill 5 Goblin Mages",
                objective: "Goblin Mage",
                steps: 5
            }
        ],
        prerequisites: []
    },
    {
        name: "Not A Coward",
        vendor: "Armourer",
        chapter: 1,
        stage: 3,
        dungeon: "The Howling Crypts",
        type: "Escape",
        tasks: [
            {
                description: "Escape The Howling Crypts 5 times",
                objective: "The Howling Crypts",
                steps: 5
            }
        ],
        prerequisites: []
    },
    {
        name: "Not A Coward2",
        vendor: "Armourer",
        chapter: 1,
        stage: 3,
        dungeon: "The Goblin Caves",
        type: "Escape",
        tasks: [
            {
                description: "Escape The Goblin Caves 2 times in a row",
                objective: "The Howling Crypts",
                steps: 2
            }
        ],
        prerequisites: []
    },
    {
        name: "Not A Coward3",
        vendor: "Armourer",
        chapter: 1,
        stage: 3,
        dungeon: "The Ice Caverns",
        type: "Escape",
        tasks: [
            {
                description: "Escape The Ice Caverns 5 times",
                objective: "The Howling Crypts",
                steps: 5
            }
        ],
        prerequisites: []
    },
];
// {
//     name: "",
//     vendor: "",
//     chapter: "",
//     stage: "",
//     dungeon: "",
//     type: "",
//     tasks: [
//         {
//             description: "",
//             objective: "",
//             steps: "",
//         }
//     ],
//     prerequisites: []
// },