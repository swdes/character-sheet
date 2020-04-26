import { Race } from "./race";

export enum ThiefSkill {
  CLIMB = "Climb Walls",
  TRAP = "Find/Remove Traps",
  NOISE = "Detect Noise",
  HIDE = "Hide in Shadows",
  MOVE = "Move Silently",
  LOCKS = "Open Locks",
  PICKPOCKET = "Pick Pockets",
  READ = "Read Languages",
}

const baseChance = [
  [1, 80, 25, 10, 20, 20, 30, 35, 1],
  [2, 82, 29, 13, 25, 25, 34, 39, 5],
  [3, 84, 33, 16, 30, 30, 38, 43, 10],
  [4, 86, 37, 19, 35, 35, 42, 47, 15],
  [5, 88, 41, 22, 40, 40, 46, 51, 20],
  [6, 90, 45, 25, 45, 45, 50, 55, 25],
  [7, 91, 49, 28, 50, 50, 54, 59, 30],
  [8, 92, 53, 31, 55, 55, 58, 63, 35],
  [9, 93, 57, 34, 60, 60, 62, 67, 40],
  [10, 94, 61, 37, 65, 65, 66, 71, 45],
  [11, 95, 65, 40, 70, 70, 70, 75, 50],
  [12, 96, 69, 43, 75, 75, 74, 79, 55],
  [13, 97, 73, 46, 80, 80, 78, 83, 60],
  [14, 98, 77, 49, 85, 85, 82, 87, 65],
  [15, 99, 81, 52, 90, 90, 86, 90, 70],
  [16, 99, 85, 55, 91, 91, 90, 91, 75],
  [17, 99, 89, 58, 92, 92, 92, 92, 80],
  [18, 99, 91, 61, 93, 93, 93, 93, 85],
  [19, 99, 93, 64, 94, 94, 94, 94, 90],
  [20, 99, 95, 67, 95, 95, 95, 95, 92],
  [21, 99, 97, 70, 96, 96, 96, 96, 94],
  [22, 99, 99, 73, 97, 97, 97, 97, 96],
  [23, 99, 99, 76, 98, 98, 98, 98, 98],
  [24, 99, 99, 79, 99, 99, 99, 99, 99],
];

const dextAdjust = [
  [9, 0, -15, 0, -10, -20, -10, -15, 0],
  [10, 0, -10, 0, -5, -15, -5, -10, 0],
  [11, 0, -5, 0, 0, -10, 0, -5, 0],
  [12, 0, 0, 0, 0, -5, 0, 0, 0],
  [13, 0, 0, 0, 0, 0, 0, 0, 0],
  [14, 0, 0, 0, 0, 0, 0, 0, 0],
  [15, 0, 0, 0, 0, 0, 0, 0, 0],
  [16, 0, 0, 0, 0, 0, +5, 0, 0],
  [17, 0, +5, 0, +5, +5 + 10, 0, 0],
  [18, 0, +10, 0, +10, +10, +15, +5, 0],
  [19, 0, +15, 0, +15, +15, +20, +15, 0],
];

const raceAdjust = {
  Dwarf: [-10, +15, 0, 0, -5, +15, 0, -5],
  Elf: [-5, +5, +5, +10, +5, -5, +5, +10],
  Gnome: [-15, 0, +5, 0, 0, +10, 0, 0],
  "Half-elf": [0, 0, 0, +5, 0, 0, +10, 0],
  Halfling: [-15, 0, +5, +15, +15, 0, +5, -5],
  "Half-orc": [+5, +5, +5, 0, +5, -5, -10],
  Human: [+5, 0, 0, 0, 0, +5, 0, 0],
};

export function getNewSkills() {
  return Object.keys(ThiefSkill).map((skill) => ({ label: skill, score: 0 }));
}

export function getThiefSkills(
  thiefLevel: number,
  dexterityScore: number,
  race: Race = Race.HUMAN
) {
  thiefLevel = Math.min(24, Math.max(1, thiefLevel));
  dexterityScore = Math.min(19, Math.max(9, dexterityScore));
  console.log(thiefLevel, dexterityScore, race);
  return Object.values(ThiefSkill).map((skill, index) => {
    return {
      label: skill,
      score:
        baseChance.find((line) => line[0] === thiefLevel)[index + 1] +
        dextAdjust.find((line) => line[0] === dexterityScore)[index + 1] +
        raceAdjust[race][index],
    };
  });
}
