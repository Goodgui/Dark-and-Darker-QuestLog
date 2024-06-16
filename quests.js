const quests = [
    {
        "name": "A Father's Legacy",
        "vendor": "Alchemist",
        "tier": "11",
        "dungeon": "Any",
        "mustEscape": false,
        "type": "Collect",
        "tasks": [
            {
                "description": "Collect 1 Potion of Healing",
                "steps": 1,
            },
            {
                "description": "Collect 1 Potion of Invisibility",
                "steps": 1,
            },
            {
                "description": "Collect 1 Potion of Protection",
                "steps": 1,
            }
        ]
    },
    {
        "name": "Golden Opportunity",
        "vendor": "Alchemist",
        "tier": "12",
        "dungeon": "The Ice Cavern",
        "mustEscape": false,
        "type": "Kill",
        "tasks": [
            {
                "description": "Kill 5 Ice Kobold Archers",
                "steps": 5
            },
            {
                "description": "Kill 5 Ice Kobold Axemen",
                "steps": 5
            }
        ]
    },
    {
        "name": "Frozen Secrets",
        "vendor": "Alchemist",
        "tier": "13",
        "dungeon": "The Ice Cavern",
        "mustEscape": false,
        "type": "Explore",
        "tasks": [
            {
                "description": "Explore the 'Wolf Cave' location",
                "steps": 1
            }
        ]
    },
    {
        "name": "Mining For Piece of Mind",
        "vendor": "Armourer",
        "tier": "11",
        "dungeon": "Any",
        "mustEscape": false,
        "type": "Collect",
        "tasks": [
            {
                "description": "Collect 6 Cobalt Ore",
                "steps": 6
            }
        ]
    },
    {
        "name": "Facing Your Fears",
        "vendor": "Armourer",
        "tier": "12",
        "dungeon": "Any",
        "mustEscape": false,
        "type": "Kill",
        "tasks": [
            {
                "description": "Kill 15 Skeletons",
                "steps": 15
            }
        ]
    },
    {
        "name": "Not A Coward",
        "vendor": "Armourer",
        "tier": "13",
        "dungeon": "The Howling Crypts",
        "mustEscape": true,
        "type": "Survive",
        "tasks": [
            {
                "description": "Escape The Howling Crypts",
                "steps": 4
            }
        ]
    },
    {
        "name": "Flamecraft Essentials",
        "vendor": "Fortune Teller",
        "tier": "11",
        "dungeon": "Any",
        "mustEscape": false,
        "type": "Collect",
        "tasks": [
            {
                "description": "Collect 2 Bowstring",
                "steps": 2
            },
            {
                "description": "Collect 1 Old Cloth",
                "steps": 1
            }
        ]
    },
    {
        "name": "Hidden Destiny",
        "vendor": "Fortune Teller",
        "tier": "12",
        "dungeon": "The Goblin Caves",
        "mustEscape": true,
        "type": "Survive",
        "tasks": [
            {
                "description": "Escape The Goblin Caves",
                "steps": 3
            }
        ]
    },
    {
        "name": "Pulling Back The Veil",
        "vendor": "Fortune Teller",
        "tier": "13",
        "dungeon": "Any",
        "mustEscape": false,
        "type": "Kill",
        "tasks": [
            {
                "description": "Kill 3 Death Beetles",
                "steps": 3
            },
            {
                "description": "Kill 3 Death Skulls",
                "steps": 3
            },
            {
                "description": "Kill 3 Mimics",
                "steps": 3
            }
        ]
    },
    {
        "name": "Away With The Green Skins",
        "vendor": "Goblin Merchant",
        "tier": "11",
        "dungeon": "The Goblin Caves",
        "mustEscape": false,
        "type": "Kill",
        "tasks": [
            {
                "description": "Kill 5 Goblin Archers",
                "steps": 5
            },
            {
                "description": "Kill 5 Goblin Axemen",
                "steps": 5
            },
            {
                "description": "Kill 5 Goblin Warriors",
                "steps": 5
            }
        ]
    },
    {
        "name": "Secrets Of The Dead",
        "vendor": "Goblin Merchant",
        "tier": "12",
        "dungeon": "The Goblin Caves",
        "mustEscape": false,
        "type": "Explore",
        "tasks": [
            {
                "description": "Explore the 'Cave Altar' location",
                "steps": 1
            }
        ]
    },
    {
        "name": "A Goblin's Pride",
        "vendor": "Goblin Merchant",
        "tier": "13",
        "dungeon": "The Goblin Caves",
        "mustEscape": false,
        "type": "Collect",
        "tasks": [
            {
                "description": "Collect 10 Goblin Ears",
                "steps": 10
            }
        ]
    },
    {
        "name": "My Favorite Fleshy",
        "vendor": "Goblin Merchant",
        "tier": "21",
        "dungeon": "The Goblin Caves",
        "mustEscape": false,
        "type": "Kill",
        "tasks": [
            {
                "description": "Kill 15 Mummies",
                "steps": 15
            }
        ]
    },
    {
        "name": "Reliable Medicine",
        "vendor": "Surgeon",
        "tier": "11",
        "dungeon": "Any",
        "mustEscape": false,
        "type": "Collect",
        "tasks": [
            {
                "description": "Collect 5 Bandages",
                "steps": 5
            }
        ]
    },
    {
        "name": "Alchemy's Dangers",
        "vendor": "Surgeon",
        "tier": "12",
        "dungeon": "The Goblin Caves",
        "mustEscape": false,
        "type": "Kill",
        "tasks": [
            {
                "description": "Kill 1 Giant Centipede",
                "steps": 1
            },
            {
                "description": "Kill 3 Goblin Mages",
                "steps": 3
            }
        ]
    },
    {
        "name": "Natural Aid",
        "vendor": "Surgeon",
        "tier": "13",
        "dungeon": "The Goblin Caves",
        "mustEscape": false,
        "type": "Explore",
        "tasks": [
            {
                "description": "Explore the 'Stone Graves A' location",
                "steps": 1
            }
        ]
    },
    {
        "name": "Creative Space",
        "vendor": "Tailor",
        "tier": "11",
        "dungeon": "Inferno",
        "mustEscape": false,
        "type": "Kill",
        "tasks": [
            {
                "description": "Kill 1 Demon Berserker",
                "steps": 1
            },
            {
                "description": "Kill 2 Demon Bats",
                "steps": 2
            },
            {
                "description": "Kill 3 Skeleton Mages",
                "steps": 3
            }
        ]
    },
    {
        "name": "Missing Map",
        "vendor": "Tavern Master",
        "tier": "11",
        "dungeon": "The Howling Crypts",
        "mustEscape": false,
        "type": "Explore",
        "tasks": [
            {
                "description": "Explore the 'Barracks' location",
                "steps": 1
            }
        ]
    },
    {
        "name": "Comes With The Territory",
        "vendor": "Tavern Master",
        "tier": "12",
        "dungeon": "Any",
        "mustEscape": false,
        "type": "Kill",
        "tasks": [
            {
                "description": "Kill 5 Skeleton Archers",
                "steps": 5
            },
            {
                "description": "Kill 5 Skeleton Footmen",
                "steps": 5
            },
            {
                "description": "Kill 5 Skeleton Guardsmen",
                "steps": 5
            }
        ]
    },
    {
        "name": "Hidden Reserves",
        "vendor": "Tavern Master",
        "tier": "13",
        "dungeon": "Any",
        "mustEscape": false,
        "type": "Collect",
        "tasks": [
            {
                "description": "Collect 5 Ale",
                "steps": 5
            }
        ]
    },
    {
        "name": "Building Trust",
        "vendor": "Tavern Master",
        "tier": "21",
        "dungeon": "Any",
        "mustEscape": false,
        "type": "Collect",
        "tasks": [
            {
                "description": "Collect 2 Broken Skulls",
                "steps": 2
            },
            {
                "description": "Collect 2 Golden Teeth",
                "steps": 2
            },
            {
                "description": "Collect 2 Rusty Broken Swords",
                "steps": 2
            },
            {
                "description": "Collect 4 Bones",
                "steps": 4
            }
        ]
    },
    {
        "name": "Retracing The Past",
        "vendor": "Tavern Master",
        "tier": "22",
        "dungeon": "Any",
        "mustEscape": false,
        "type": "Kill",
        "tasks": [
            {
                "description": "Kill 1 Skeleton Champion",
                "steps": 1
            },
            {
                "description": "Kill 1 Wraith",
                "steps": 1
            },
            {
                "description": "Kill 3 Skeleton Mages",
                "steps": 3
            }
        ]
    },
    {
        "name": "Frozen Gaze",
        "vendor": "Tavern Master",
        "tier": "31",
        "dungeon": "The Ice Cavern",
        "mustEscape": false,
        "type": "Collect",
        "tasks": [
            {
                "description": "Collect 3 Glowing Blue Ice Eyes",
                "steps": 3
            }
        ]
    },
    {
        "name": "Chilling Expedition",
        "vendor": "The Collector",
        "tier": "11",
        "dungeon": "The Ice Cavern",
        "mustEscape": false,
        "type": "Kill",
        "tasks": [
            {
                "description": "Kill 1 Frost Giant Berserker",
                "steps": 1
            },
            {
                "description": "Kill 3 Frost Wolves",
                "steps": 3
            },
            {
                "description": "Kill 5 Frost Walkers",
                "steps": 5
            }
        ]
    },
    {
        "name": "More Like Home",
        "vendor": "The Collector",
        "tier": "12",
        "dungeon": "Any",
        "mustEscape": false,
        "type": "Collect",
        "tasks": [
            {
                "description": "Collect 2 Ancient Scrolls",
                "steps": 2
            },
            {
                "description": "Collect 2 Gold Crowns",
                "steps": 2
            },
            {
                "description": "Collect 2 Gold Waterpots",
                "steps": 2
            }
        ]
    },
    {
        "name": "Frosty Pests",
        "vendor": "The Collector",
        "tier": "13",
        "dungeon": "The Ice Cavern",
        "mustEscape": false,
        "type": "Collect",
        "tasks": [
            {
                "description": "Collect 8 Kobold Ears",
                "steps": 8
            }
        ]
    },
    {
        "name": "Ceremonial Secret",
        "vendor": "Treasurer",
        "tier": "11",
        "dungeon": "Any",
        "mustEscape": false,
        "type": "Collect",
        "tasks": [
            {
                "description": "Collect 5 Ceremonial Daggers",
                "steps": 5
            }
        ]
    },
    {
        "name": "Forbidden Rituals",
        "vendor": "Treasurer",
        "tier": "12",
        "dungeon": "The Howling Crypts",
        "mustEscape": false,
        "type": "Explore",
        "tasks": [
            {
                "description": "Explore the 'Old Tomb' location",
                "steps": 1
            }
        ]
    },
    {
        "name": "Echoes of Eternity",
        "vendor": "Treasurer",
        "tier": "13",
        "dungeon": "The Howling Crypts",
        "mustEscape": false,
        "type": "Kill",
        "tasks": [
            {
                "description": "Kill 3 Wraiths",
                "steps": 3
            }
        ]
    },
    {
        "name": "Lies in the Coffins",
        "vendor": "Treasurer",
        "tier": "21",
        "dungeon": "The Howling Crypts",
        "mustEscape": false,
        "type": "Explore",
        "tasks": [
            {
                "description": "Explore the 'Pyramid' location",
                "steps": 1
            }
        ]
    },
    {
        "name": "Silver Lore",
        "vendor": "Treasurer",
        "tier": "22",
        "dungeon": "Any",
        "mustEscape": false,
        "type": "Collect",
        "tasks": [
            {
                "description": "Collect 200 Silver Coins",
                "steps": 1
            }
        ]
    },
    {
        "name": "Mimics and Money",
        "vendor": "Treasurer",
        "tier": "23",
        "dungeon": "Any",
        "mustEscape": false,
        "type": "Kill",
        "tasks": [
            {
                "description": "Kill 7 Mimics",
                "steps": 7
            },
            {
                "description": "Collect 2 Mimic Tooth",
                "steps": 2
            }
        ]
    },
    {
        "name": "Aiding A Legacy",
        "vendor": "Weaponsmith",
        "tier": "11",
        "dungeon": "Any",
        "mustEscape": false,
        "type": "Collect",
        "tasks": [
            {
                "description": "Collect 5 Rare Weapons",
                "steps": 5
            }
        ]
    },
    {
        "name": "Blades of Myth",
        "vendor": "Weaponsmith",
        "tier": "12",
        "dungeon": "The Ice Cavern",
        "mustEscape": false,
        "type": "Explore",
        "tasks": [
            {
                "description": "Explore the 'Pyramid' location",
                "steps": 1
            }
        ]
    },
    {
        "name": "The Search Continues",
        "vendor": "Weaponsmith",
        "tier": "13",
        "dungeon": "The Ice Cavern",
        "mustEscape": false,
        "type": "Kill",
        "tasks": [
            {
                "description": "Kill 3 Yeti",
                "steps": 3
            },
            {
                "description": "Kill 8 Frost Walkers",
                "steps": 8
            }
        ]
    },
    {
        "name": "Fire's Compassion",
        "vendor": "Woodsman",
        "tier": "11",
        "dungeon": "Any",
        "mustEscape": false,
        "type": "Collect",
        "tasks": [
            {
                "description": "Collect 5 Campfire Kits",
                "steps": 5
            }
        ]
    },
    {
        "name": "Invasive Species",
        "vendor": "Woodsman",
        "tier": "12",
        "dungeon": "Inferno",
        "mustEscape": false,
        "type": "Kill",
        "tasks": [
            {
                "description": "Kill 1 Demon Centaur",
                "steps": 1
            },
            {
                "description": "Kill 5 Demon Dogs",
                "steps": 5
            }
        ]
    },
    {
        "name": "Fortune's Guidance",
        "vendor": "Woodsman",
        "tier": "13",
        "dungeon": "The Howling Crypts",
        "mustEscape": false,
        "type": "Explore",
        "tasks": [
            {
                "description": "Explore the 'Prisons B' location",
                "steps": 1
            }
        ]
    },    
];
