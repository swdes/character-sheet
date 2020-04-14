import { getClassType } from "./class";

export const SAVING_THROWS = [
  "Paralyzation, Poison, or Death Magic",
  "Rod, Staff, or Wand",
  "Petrification or Polymorph",
  "Breath Weapon",
  "Spell",
];

const SAVING_THROW_MATRIX = {
  thief: [
    ["1-4", 14, 16, 13, 12, 15],
    ["5-8", 12, 15, 12, 11, 13],
    ["9-12", 10, 14, 11, 10, 11],
    ["13-16", 8, 13, 10, 9, 9],
    ["17-20", 6, 12, 9, 8, 7],
    ["21+", 4, 11, 8, 7, 5],
  ],
  cleric: [
    // druid
    // Rod, breath, paralyz/poison, petrif, spell
    ["1-3", 14, 16, 10, 13, 15],
    ["4-6", 13, 15, 9, 12, 14],
    ["7-9", 11, 13, 7, 10, 12],
    ["10-12", 10, 12, 6, 9, 11],
    ["13-15", 9, 11, 5, 8, 10],
    ["16-18", 8, 10, 4, 7, 9],
    ["19+", 6, 8, 2, 5, 7],
  ],
  fighter: [
    //["0", 18, 20, 16, 17, 19],
    ["1-2", 16, 17, 14, 15, 17],
    ["3-4", 15, 16, 13, 14, 16],
    ["5-6", 13, 13, 11, 12, 14],
    ["7-8", 12, 12, 10, 11, 13],
    ["9-10", 10, 9, 8, 9, 11],
    ["11-12", 9, 8, 7, 8, 10],
    ["13-14", 7, 5, 5, 6, 8],
    ["15-16", 6, 4, 4, 5, 7],
    ["17+", 5, 4, 3, 4, 6],
  ],
  mage: [
    ["1-5", 11, 15, 14, 13, 12],
    ["6-10", 9, 13, 13, 11, 10],
    ["11-15", 7, 11, 11, 9, 8],
    ["16-20", 5, 9, 10, 7, 6],
    ["21+", 3, 7, 8, 5, 4],
  ],
};

const MAPPING = [3, 1, 4, 2, 5];

export function getSavingThrows(className, level) {
  const classType = getClassType(className);

  const foundLine = SAVING_THROW_MATRIX[classType].find((line) => {
    const result = /(\d{1,2})[-+]?(\d{1,2})?/.exec(line[0]);
    const max = (result && result.length === 3 && result[2]) || 1000;
    return level >= result[1] && level <= max;
  });
  return SAVING_THROWS.map((value, index) => ({
    label: value,
    score: foundLine[MAPPING[index]],
  }));
}
