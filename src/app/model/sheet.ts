import { Spell } from "./spell";
import { Class } from "./class";
import { thiefSkills } from "./thiefSkills";
import { SAVING_THROWS } from "./savingThrows";
import { Attributes } from "./attributes";
import * as uuid from "uuid";

interface HitPoints {
  currentLevel: number;
  maxLevel: number;
}

interface TAC0 {
  score: number;
}

interface AC {
  score: number;
}

export interface Sheet {
  id: string;
  name: String;
  alignment?: string;
  race?: string;
  creationDate?: Date;
  updateDate?: Date;
  class?: Array<Class>;
  attributes?: Attributes;
  thiefSkills?: Array<Object>;
  vadeRetro?: Array<Object>;
  spells?: Array<Spell>;
  equipment?: Array<Object>;
  notebook?: Array<Object>;
  savingThrows?: Array<Object>;
  hitPoints?: HitPoints;
  TAC0?: TAC0;
  AC?: AC;
  picUrl?: string;
}

export function getNewSheet(name = ""): Sheet {
  return {
    id: uuid.v4(),
    name,
    creationDate: new Date(),
    updateDate: new Date(),
    race: "",
    class: [],
    alignment: "",
    attributes: {
      strength: {
        score: "11",
        adjustments: {
          "hit probability": 0,
          "damage adjustement": 0,
          "weight allowance": 0,
          "open doors": "",
          "band bars/lift gates": 0,
        },
      },
      intelligence: {
        score: "11",
        adjustments: {
          "chance to know each listed spell": 0,
          "minimum number of spells/level": 0,
          "maximum number of spells/level": 0,
        },
      },

      wisdom: {
        score: "11",
        adjustments: {
          "magical attack adjustment": 0,
          "spell bonus": "",
          "chance of spell failure": 0,
        },
      },

      dexterity: {
        score: "11",
        adjustments: {
          "reaction/attacking adjustment": 3,
          "defensive adjustment": -4,
        },
      },

      constitution: {
        score: "11",
        adjustments: {
          "hit point adjustement": 3,
          "system shock survival": 98,
          "resurection survival": 99,
        },
      },

      charisma: {
        score: "11",
        adjustments: {
          "maximum number of henchmen": 0,
          "loyalty base": 0,
          "reaction adjustment": 0,
        },
      },
    },
    thiefSkills: thiefSkills.map((saving) => ({ label: saving, score: 0 })),
    savingThrows: SAVING_THROWS.map((saving) => ({ label: saving, score: 20 })),
    AC: {
      score: 10,
    },
    TAC0: {
      score: 20,
    },
    hitPoints: {
      maxLevel: 1,
      currentLevel: 1,
    },
    spells: [],
    equipment: [{ label: "cure dent 1D1-2", cost: 0, weight: 0 }],
    notebook: [],
  };
}
