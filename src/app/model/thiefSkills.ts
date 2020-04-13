export const thiefSkills = [
  "Pick Pockets",
  "Open Locks",
  "Find/Remove Traps",
  "Move Silently",
  "Hide in Shadows",
  "Detect Noise",
  "Climb Walls",
  "Read Languages",
];

export function getNewSkills() {
  return thiefSkills.map((skill) => ({ label: skill, score: 0 }));
}
