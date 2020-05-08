import { Class } from "./class";
const spellTable = {
  Cleric: [
    [1],
    [2],
    [2, 1],
    [3, 2],
    [3, 3, 1],
    [3, 3, 2],
    [3, 3, 2, 1],
    [3, 3, 3, 2],
    [4, 4, 3, 2, 1],
    [4, 4, 3, 2, 2],
    [5, 4, 4, 3, 2, 1],
    [6, 5, 5, 3, 2, 2],
    [6, 6, 6, 4, 2, 2],
    [6, 6, 6, 5, 3, 2],
    [7, 7, 7, 5, 4, 2],
    [7, 7, 7, 6, 5, 3, 1],
    [8, 8, 8, 6, 5, 3, 1],
    [8, 8, 8, 7, 6, 4, 1],
    [9, 9, 9, 7, 6, 4, 2],
    [9, 9, 9, 8, 7, 5, 2],
    [9, 9, 9, 9, 8, 6, 2],
    [9, 9, 9, 9, 9, 6, 3],
    [9, 9, 9, 9, 9, 7, 3],
    [9, 9, 9, 9, 9, 8, 3],
    [9, 9, 9, 9, 9, 8, 4],
    [9, 9, 9, 9, 9, 9, 4],
    [9, 9, 9, 9, 9, 9, 5],
    [9, 9, 9, 9, 9, 9, 6],
    [9, 9, 9, 9, 9, 9, 7],
  ],
  Druid: [
    [2],
    [2, 1],
    [3, 2, 1],
    [4, 2, 2],
    [4, 3, 2],
    [4, 3, 2, 1],
    [4, 4, 3, 1],
    [4, 4, 3, 2],
    [5, 4, 3, 2, 1],
    [5, 4, 3, 3, 2],
    [5, 5, 3, 3, 2, 1],
    [5, 5, 4, 4, 3, 2, 1],
    [6, 5, 5, 5, 4, 3, 2],
    [6, 6, 6, 6, 5, 4, 3],
  ],
};

const wisdomSpellBonusWisdomAbove13 = [
  [1],
  [2],
  [2, 1],
  [2, 2],
  [2, 2, 1],
  [2, 2, 1, 1],
];

export function getSpellPerDay(
  characterClass: Class,
  wisdomScore: number = 10,
  intelligenceScore: number = 10
): Array<number> {
  if (["Cleric", "Druid"].includes(characterClass.label)) {
    return new Array(7).fill(0).map((item, index) => {
      if (index > 5 && wisdomScore < 17) return 0;
      if (index > 6 && wisdomScore < 18) return 0;
      const baseNumber =
        spellTable[characterClass.label][characterClass.level - 1][index] || 0;
      const bonus =
        wisdomScore > 12 && baseNumber > 0
          ? wisdomSpellBonusWisdomAbove13[wisdomScore - 13][index] || 0
          : 0;
      return baseNumber + bonus;
    });
  }
  // TODO mage/illusionist
  return null;
}
