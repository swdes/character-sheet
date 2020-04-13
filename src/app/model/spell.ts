// http://pandaria.rpgworlds.info/cant/rules/adnd_spells.htm
// https://www.dragonsfoot.org/fe/

export interface Spell {
  class: string;
  label: string;
  level: number;
  components?: string;
  description: string;
}
