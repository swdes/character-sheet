// http://pandaria.rpgworlds.info/cant/rules/adnd_spells.htm
// https://www.dragonsfoot.org/fe/

import spells from "./spells.json";
import { Class } from "./class";
import { flatten } from "lodash";

const sortedSpells = spells.sort((a, b) => {
  const level1 = a.class.localeCompare(b.class);
  if (level1 == 0) {
    const level2 = a.level - b.level;
    if (level2 == 0) {
      return a.label.localeCompare(b.label);
    }
    return level2;
  }
  return level1;
});

export interface Spell {
  class: string;
  label: string;
  level: number;
  components?: string;
  description: string;
}

export function getSpellList(characterClass: Array<Class>): Array<Object> {
  return flatten(
    characterClass.map((singleClass) => {
      return sortedSpells.filter(
        (spell) =>
          spell.level <= singleClass.maxSpellLevel &&
          singleClass.label === spell.class
      );
    })
  );
}
