export const ATTRIBUTES = [
  "strength",
  "intelligence",
  "wisdom",
  "dexterity",
  "constitution",
  "charisma",
];

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
