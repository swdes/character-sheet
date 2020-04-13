export const vadeRetros = [
  "Skeleton",
  "Zombie",
  "Ghoul",
  "Shadow",
  "Wight",
  "Ghost",
  "Wraith",
  "Mummy*",
  "Spectre*",
  "Vampire*",
  "Ghast*",
  "Lich*",
  "Special**",
];

export function getVadeRetroStats(clericLevel: number): Array<Object> {
  const scores = [
    20,
    19,
    16,
    13,
    10,
    7,
    4,
    "T",
    "T",
    "D",
    "D",
    "D",
    "D*",
    "D*",
    "D*",
    "D*",
    "D*",
  ];
  if (clericLevel > 3 && clericLevel < 8) scores.splice(1, 1); //remove 19
  return [...vadeRetros]
    .reverse()
    .map((undead, index) => {
      const scoreIndex =
        clericLevel < 9
          ? clericLevel - 9 + index
          : clericLevel < 14
          ? 1 + index
          : 3 + index;
      return {
        label: undead,
        score: scores[scoreIndex] || "--",
      };
    })
    .reverse();
}
