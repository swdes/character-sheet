export const ATTRIBUTES = [
  "strength",
  "intelligence",
  "wisdom",
  "dexterity",
  "constitution",
  "charisma",
];

const ADJUSTEMENTS = {
  strength: [
    [1, 1, -5, -4, -750, 0, 0, 0],
    [2, 2, -3, -2, -550, 0, 0, 0],
    [3, 3, -3, -1, -350, 1, 0, 0],
    [4, 5, -2, -1, -250, 1, 0, 0],
    [6, 7, -1, 0, -150, 1, 0, 0],
    [8, 9, 0, 0, 0, 2, 0, 1],
    [10, 11, 0, 0, 0, 2, 0, 2],
    [12, 13, 0, 0, 100, 2, 0, 4],
    [14, 15, 0, 0, 200, 2, 0, 7],
    [16, 16, 0, 1, 300, 3, 0, 10],
    [17, 17, 1, 1, 500, 3, 0, 13],
    [18, 18, 1, 2, 750, 3, 0, 16],
    [18.001, 18.05, 1, 3, 1000, 3, 0, 20],
    [18.051, 18.075, 2, 3, 1250, 4, 0, 25],
    [18.076, 18.09, 2, 4, 1500, 4, 0, 30],
    [18.091, 18.099, 2, 5, 2000, 4, 1, 35],
    [18.1, 18.1, 3, 6, 3000, 5, 2, 40],
    [19, 19, 3, 7, 5000, 6, 3, 45],
    [20, 20, 3, 8, 9000, 6, 4, 50],
    [21, 21, 4, 9, 17000, 6, 5, 55],
  ],
  intelligence: [
    [3, 7, 0],
    [8, 9, 1, 35, 4, 6],
    [10, 11, 2, 45, 5, 7],
    [12, 12, 3, 45, 5, 7],
    [13, 13, 3, 55, 6, 9],
    [14, 14, 4, 55, 6, 9],
    [15, 15, 4, 65, 7, 11],
    [16, 16, 5, 65, 7, 11],
    [17, 17, 6, 75, 8, 14],
    [18, 18, 7, 85, 9, 18],
    [19, 19, 8, 95, 10, "All"],
  ],
  wisdom: [
    [3, 3, -3, "none", "n/a"],
    [4, 5, -2, "none", "n/a"],
    [6, 8, -1, "none", "n/a"],
    [9, 9, 0, "none", 20],
    [10, 10, 0, "none", 15],
    [11, 11, 0, "none", 10],
    [12, 12, 0, "none", 5],
    [13, 13, +1, "see spells", 0],
    [14, 14, +1, "see spells", 0],
    [15, 15, +2, "see spells", 0],
    [16, 16, +2, "see spells", 0],
    [17, 17, +3, "see spells", 0],
    [18, 18, +4, "see spells", 0],
  ],
  dexterity: [
    [3, 3, -3, +4],
    [4, 5, -2, +3],
    [6, 8, -1, +2],
    [9, 12, 0, 0],
    [13, 14, 0, -1],
    [15, 16, +1, -2],
    [17, 17, +2, -3],
    [18, 18, +3, -4],
    [19, 19, +4, -5],
  ],
  constitution: [
    [3, 3, -3, 35, 40],
    [4, 4, -2, 40, 45],
    [5, 5, -2, 45, 50],
    [6, 6, -1, 50, 55],
    [7, 7, -1, 55, 60],
    [8, 8, -1, 60, 65],
    [9, 9, 0, 65, 70],
    [10, 10, 0, 70, 75],
    [11, 11, 0, 75, 80],
    [12, 12, 0, 80, 85],
    [13, 13, +1, 85, 90],
    [14, 14, +1, 88, 92],
    [15, 15, +2, 91, 94],
    [16, 16, +2, 95, 96],
    [17, 17, +3, 97, 98],
    [18, 18, +4, 99, 100],
    [19, 19, +5, 100, 100],
  ],
  charisma: [
    [3, 3, 1, -30, -25],
    [4, 4, 1, -25, -20],
    [5, 5, 2, -20, -15],
    [6, 6, 2, -15, -10],
    [7, 7, 3, -10, -5],
    [8, 8, 3, -5, 0],
    [9, 9, 4, 0, 0],
    [10, 10, 4, 0, 0],
    [11, 11, 4, 0, 0],
    [12, 12, 5, 0, 0],
    [13, 13, 5, 0, 5],
    [14, 14, 5, 5, 10],
    [15, 15, 5, 15, 15],
    [16, 16, 5, 20, 25],
    [17, 17, 5, 30, 30],
    [18, 18, 5, 40, 35],
  ],
};

export function getAttributeAdjustments(
  attributeName: string,
  attributeScore: number
) {
  const score = parseFloat("" + attributeScore);
  const adjusts = ADJUSTEMENTS[attributeName].find(
    (line) => line[0] <= score && line[1] >= score
  );
  switch (attributeName) {
    case "strength":
      return {
        "Hit Probability": adjusts[2],
        "Damage Adjustment": adjusts[3],
        "Weight Allowance": adjusts[4],
        "Open Doors ": adjusts[5],
        "Magically Doors": adjusts[6],
        "Bind Bars / Lift Gates": adjusts[6],
      };
      break;
    case "intelligence":
      return {
        "Additional Languages": adjusts[2],
        "Chance to Know Each Listed Spell": adjusts[3],
        "Min Nb of Spells/Level": adjusts[4],
        "Max Nb of Spells/Level": adjusts[5],
      };
      break;
    case "wisdom":
      return {
        "Magical Attack Adj": adjusts[2],
        "Spell Bonus": adjusts[3],
        "Chance of Spell Failure": adjusts[4],
      };
      break;
    case "dexterity":
      return {
        "Reaction/Attacking Adj": adjusts[2],
        "Defensive Adj": adjusts[3],
      };
      break;
    case "constitution":
      return {
        "Hit Point Adj": adjusts[2],
        "System Shock Survival": adjusts[3],
        "Resurection Survival": adjusts[4],
      };
      break;
    case "charisma":
      return {
        "Max No. of Henchmen": adjusts[2],
        "Loyalty Base": adjusts[3],
        "Reaction Adj": adjusts[4],
      };
      break;
  }
}

interface Attribute {
  score: any;
  adjustments: Object;
}

export interface Attributes {
  strength: Attribute;
  intelligence: Attribute;
  wisdom: Attribute;
  dexterity: Attribute;
  constitution: Attribute;
  charisma: Attribute;
}
