export interface Class {
  label: string;
  hpDice?: string;
  advancementTable?: Array<any>;
  level?: number;
  rules?: string;
}

export const standardClasses: Array<Class> = [
  {
    label: "Cleric",
    hpDice: "d8",
    rules: `The cleric can best be described as a type of battlefield priest.  While he in some ways is like a knight of holy orders (and is so described), such a designation better describes a paladin or cavalier.  The cleric is much less a fighter, much more a "man of the cloth".  They serve a fully religious function within the game, rendering aid to those in need, but at the same time are able to fight adequately, better than any other original non-fighter class, should the need arise.
    The cleric has a minimum wisdom of 9; if wisdom is greater than 15, the character gains a 10% bonus on experience in the cleric class.  All other ability scores must be at least 6, except for dexterity, which may be 3, and comeliness, which has no minimum.  High wisdom also will increase the spell power of the cleric.  High strength, constitution, and dexterity are also especially desirable, but not required.
  
    The cleric gains d8 hp per level, plus non-fighter constitution bonuses.  He is dedicated to one or more deities.  Any alignment other than true neutral is possible (only druids can be true neutral cleric types), but should be reasonably related to that of the god or gods served.  Holy symbols of the faith are used in the performance of ritual spells.  They may not use edged or pointed weapons, weapons which principally draw blood.
  
    The combat table for clerics is not as good at advancing levels as that for fighters, and they do not gain multiple attacks; however, they are better and advance in combat skill faster than magic-user or thief classes, and may use any armor.  Likewise, their spells are much less aggressive.  Although there are attack spells, these are less powerful than those in the magic user classes for the same level, and are overwhelmed by the number of healing and protection spells.  Unlike magic user classes, the cleric does not need to keep a spell book, and has access to any spell of any level which he is experienced enough to cast; at higher levels, the cleric may have to justify the selection of certain powerful spells to his god, who ultimately controls the granting of such more potent spells and expects them to be used in a way consistent with his alignment and interests.  Clerics also have the power to "turn" undead creatures, such as skeletons, driving them away from or destroying them by virtue of his own holy presence.  Such power has a chance of working against ghasts, ghosts, ghouls, liches, mummies, shadows, skeletons, spectres, wights, wraiths, vampires, zombies, many other undead creatures, certain minor demons and devils, and rarely character types who have an extremely powerful connection to a god opposed to the cleric (an evil cleric may for example drive away a paladin).  Generally the power is effective against creatures whose hit dice are not greater than the level of the cleric.
  
    Clerics may use most potions (those not restricted to another class), clerical and protection scrolls, most rings, some wands, rods, and staves, many other magical items, any magic armor, and any magic weapon which they would be permitted to use if non-magical.
  
    At level 8, the patriarch or matriarch may build a place of worship of at least 2000 square feet with an altar and appropriate facilities such as a chapel or a shrine.  If this is done, between 20 and 200 followers will come to the cleric, plus additional men-at-arms to assist in defending the place.  At level 9, the high priest or priestess may construct a religious stronghold, such as a castle, monastery, or abbey.  It must contain within it a temple, cathedral, or church of at least 2500 square feet on the ground floor, and dedicated totally to the character's deity or deities.  Costs for this will be cut in half due to volunteer labor and increased contributions.  If the cleric subsequently clears the surrounding area such that humans (or other character races if the cleric is not human) can and do settle the area, the cleric will earn nine silver pieces per inhabitant from trade, taxation, and tithes.`,
    advancementTable: [
      { minXp: 0, level: 1, hpDiceNumber: 1, hpBonus: 0, title: "Acolyte" },
      { minXp: 1501, level: 2, hpDiceNumber: 2, hpBonus: 0, title: "Adept" },
      { minXp: 3001, level: 3, hpDiceNumber: 3, hpBonus: 0, title: "Priest" },
      { minXp: 6001, level: 4, hpDiceNumber: 4, hpBonus: 0, title: "Curate" },
      { minXp: 13001, level: 5, hpDiceNumber: 5, hpBonus: 0, title: "" },
      { minXp: 27501, level: 6, hpDiceNumber: 6, hpBonus: 0, title: "Canon" },
      { minXp: 55001, level: 7, hpDiceNumber: 7, hpBonus: 0, title: "Lama" },
      {
        minXp: 110001,
        level: 8,
        hpDiceNumber: 8,
        hpBonus: 0,
        title: "Patriarch",
      },
      {
        minXp: 225001,
        level: 9,
        hpDiceNumber: 9,
        hpBonus: 0,
        title: "Hight Priest",
      },
      {
        minXp: 450001,
        level: 10,
        hpDiceNumber: 9,
        hpBonus: 2,
        title: "Hight Priest",
      },
    ],
  },
  {
    label: "Warrior",
    hpDice: "d10",
    advancementTable: [
      { level: 1, title: "Veteran", minXp: 0, hpDiceNumber: 1, hpBonus: 0 },
      { level: 2, title: "Warrior", minXp: 2001, hpDiceNumber: 2, hpBonus: 0 },
      {
        level: 3,
        title: "Swordsman",
        minXp: 4001,
        hpDiceNumber: 3,
        hpBonus: 0,
      },
      { level: 4, title: "Hero", minXp: 8001, hpDiceNumber: 4, hpBonus: 0 },
      {
        level: 5,
        title: "Swashbuckler",
        minXp: 18001,
        hpDiceNumber: 5,
        hpBonus: 0,
      },
      {
        level: 6,
        title: "Myrmidon",
        minXp: 35001,
        hpDiceNumber: 6,
        hpBonus: 0,
      },
      {
        level: 7,
        title: "Champion",
        minXp: 75001,
        hpDiceNumber: 7,
        hpBonus: 0,
      },
      {
        level: 8,
        title: "Superhero",
        minXp: 125001,
        hpDiceNumber: 8,
        hpBonus: 0,
      },
      {
        level: 9,
        title: "Lord",
        minXp: 250001,
        hpDiceNumber: 9,
        hpBonus: 0,
      },
      {
        level: 10,
        title: "Lord",
        minXp: 500001,
        hpDiceNumber: 9,
        hpBonus: 3,
      },
    ],
    rules: ` This is the basic stripped down infantry soldier.  Ten-sided hit dice, full use of any weapons or armor, and the best combat tables combine to make fighting the essentials of this character.  Fighters also increase in the number of attacks they get as they gain levels.
    Fighters must have a strength of at least 9 and a constitution of at least 7, and benefit from high dexterity as well. A fighter with a strength above 15 gains a 10% bonus on experience.  They may be of any alignment.
  
    Fighters have no magic abilities, but may use many magic items, including all magic weapons and armor.  They may specialize in any single weapon; weapon specialization is explained in connection with weapon proficiencies.  They begin with four weapon slots.  Among fighter-type classes, the fighter itself is the stripped model, with no special abilities and no special restrictions.
  
    At level 9, the fighter lord may establish a freehold by building some type of castle and clearing the land in an area of a radius of twenty to fifty miles.  The fighter will then attract a body of men-at-arms led by an above average fighter which will serve him as long as he pays reasonably and maintains his freehold, and will collect seven silver coins for every sentient inhabitant of the area through trade, tariffs, and taxes.`,
  },
  {
    label: "Druid",
    hpDice: "d8",
    advancementTable: [
      { level: 1, title: "Aspirant", minXp: 0, hpDiceNumber: 1, hpBonus: 0 },
      { level: 2, title: "Ovate", minXp: 2001, hpDiceNumber: 2, hpBonus: 0 },
      {
        level: 3,
        title: "Initiate of the First Circle",
        minXp: 4001,
        hpDiceNumber: 3,
        hpBonus: 0,
      },
      {
        level: 4,
        title: "Initiate of the Second Circle",
        minXp: 7501,
        hpDiceNumber: 4,
        hpBonus: 0,
      },
      {
        level: 5,
        title: "Initiate of the Third Circle",
        minXp: 12501,
        hpDiceNumber: 5,
        hpBonus: 0,
      },
      {
        level: 6,
        title: "Initiate of the Fourth Circle",
        minXp: 20001,
        hpDiceNumber: 6,
        hpBonus: 0,
      },
      {
        level: 7,
        title: "Initiate of the Fifth Circle",
        minXp: 35001,
        hpDiceNumber: 7,
        hpBonus: 0,
      },
      {
        level: 8,
        title: "Initiate of the Sixth Circle",
        minXp: 60001,
        hpDiceNumber: 8,
        hpBonus: 0,
      },
      {
        level: 9,
        title: "Initiate of the Seventh Circle",
        minXp: 90001,
        hpDiceNumber: 9,
        hpBonus: 0,
      },
      {
        level: 10,
        title: "Initiate of the Eighth Circle",
        minXp: 125001,
        hpDiceNumber: 10,
        hpBonus: 0,
      },
      {
        level: 11,
        title: "Initiate of the Ninth Circle",
        minXp: 200001,
        hpDiceNumber: 11,
        hpBonus: 0,
      },
      {
        level: 12,
        title: "Druid",
        minXp: 300001,
        hpDiceNumber: 12,
        hpBonus: 0,
      },
      {
        level: 13,
        title: "Archdruid",
        minXp: 750001,
        hpDiceNumber: 13,
        hpBonus: 0,
      },
      {
        level: 14,
        title: "The Great Druid",
        minXp: 1500001,
        hpDiceNumber: 14,
        hpBonus: 0,
      },
      {
        level: 15,
        title: "The Grand Druid",
        minXp: 3000001,
        hpDiceNumber: 15,
        hpBonus: 0,
      },
    ],
    rules: `The druid is a sub-class of cleric.  They are the ultimate example of the True Neutral alignment, viewing good, evil, law, and chaos as balancing natural forces necessary for the continuation of all things.  Minimum ability scores are 6/6/12/6/15/6/3; a druid with both wisdom and charisma greater than 15 will earn a 10% bonus on experience.  They gain d8 hit points per level through level 15.
    Druid spells are intended to strengthen, protect, and revitalize a party as a cleric, but his spells are more attuned to nature.  Their spells are more powerful as attacks than clerics, and they can use a greater variety of weapons (the restriction against drawing blood does not apply), but they may not use any metallic armor or shield.  Since such metallic protections would prevent the druid from being able to perform his magic, he may only wear leather or padded armor or none, and may carry only wood shields.
  
    Spells are spoken or read aloud.  There is no dispel power over undead or other creatures such as clerics use, because druids are involved with living things of this world.  Although they have many of the same healing spells as clerics, they do not have these available at level one.
  
    Trees are sacred to the druid, especially oak and ash; they also do homage to the sun and moon personified.  (They are animists, worshipping the spirits in these objects.)  Mistletoe is the principle holy symbol of the druid; the quality of the mistletoe may control the efficacy of spells.  They protect trees, wild plants, and crops as a primary religious duty, followed by a duty toward druidic followers and animals.  They oppose the destruction of forests and other natural environs absolutely, and oppose killing animals except when necessary for survival.  They may eat meat.  Druids are unlikely to risk their own lives in protecting their charges, but will usually take vengeance later.
  
    At level 3, the druid can identify plant type, animal type, and pure water.  He can also pass through overgrown areas such as tangled thorns and briar patches at normal movement rates without leaving a trail.
  
    At level 7, the druid is immune to the charm spells of such woodland creatures as dryads, nixies, and sylphs.  Such a druid also is able to change once per day to any mammal, once to any reptile, and once to any bird.  The creature must be a real natural creature not smaller than a bat, bullfrog, or bluejay, up to about twice the weight of the druid.  The change will also heal d6x10% of any damage taken by the druid.
  
    Druids speak druidic as an additional language.  Beginning at level 3, the druid learns one language per level chosen by the character from these languages:  centaur, dryad, elfish, faun, gnome, green dragon, hill giant, lizardman, manticore, nixie, pixie, sprite, treantish.  These languages are in addition to those learned as part of the character's language limit, so the druid may exceed the number of languages he may know by intelligence and race.
  
    Druids fight and save as clerics, but are +2 against fire and lightning and all other electrical attacks.  They may use any magic item not limited to a particular class except those weapons and armor which are prohibited to them, and may use any clerical items which are not written (such as scrolls and books).  They may use druid scrolls.
  
    There are only nine druids of level twelve; each has three assistants.  These assistants are the same level for each druid, but each druid has higher level assistants according to the relationship between their current experience.  Thus, the twelfth-level Druid with the least experience (in points) is served by three level-one druids, and the one with the most experience is served by three ninth-level druids.  The single thirteenth-level Archdruid is served by three initiates of the eighth circle, and the fourteenth-level Great Druid is served by nine initiates of the ninth circle.  These servitors and protectors are not henchmen; the druids may have henchmen in addition to this.
  
    A character may only achieve twelfth-level Druid if there is a vacancy or he bests one of the nine current Druids in spell or hand-to-hand combat.  If the combat is not mortal, the loser drops to the beginning of level eleven, initiate of the ninth circle.  This process is repeated for becoming the thirteenth-level Archdruid (with the loser reverting to Druid) and the fourteenth-level Great Druid (with the loser reverting to Archdruid).
    
    3500000 is the minimum experience which must be achieved as the Grand Druid before advancing as a Heirophant Druid, explained below.  The character may remain a Grand Druid as long as he desires, subject to the possibility of being removed from office by challenge.
  There may be one Great Druid in each major area, such as a major nation or a continent.  Above this is the Grand Druid, of which there is only one in the world; attaining this position is handled as becoming the Great Druid.  He is served by nine twelfth-level Druids who give up their position in the hierarchy of their native land to serve him.  The Grand Druid may cast up to six spells of each level plus additional spells of any levels totaling six additional levels.  Three Archdruids who have advanced to this level in his service as Druids roam the world in service to him; they have four additional spell levels.

  The Grand Druid oversees all druidic activity in the world.  It is not an exciting position for an adventurer.  However, at any time after he has attained five hundred thousand additional experience points, he may retire and move on to greater things.  To do this, he gives up his position, his six bonus spell levels, and begins counting experience again from one point.  He is now a level sixteen Hierophant Druid; he may advance as high as level twenty-three, gaining one hit point per level, and a number of additional powers.

  The spells of the hierophant remain at the maximums for the Grand Druid, minus the six bonus spell levels.  The casting ability continues to rise with level for any spells for which the caster's  level is a factor in the casting.

  At level 16, the character is immune to all natural poisons, including monster poisons, however delivered, but not mineral poisons or poison gas.  His age is extended by a number of decades equal to his level.  His health (and ability scores) are those of the prime of life.  He may alter his appearance at will, within one segment, with up to a 50% change in height and weight, any age from child to very old, and any humanoid or human type body and facial features.  The alteration is not magical, not detectable by anything less than a true seeing spell.

  At level 17 the character can hibernate, suspending animation for up to a number of decades equal to his level without aging, enter the elemental plane of earth at will in one round, and conjure a water elemental (as the information below) once per day.

  At level 18, the elemental plane of fire can be entered and an air elemental may be conjured.

  At level 19, the elemental plane of water can be entered, and conjuration extends to para-elementals of the planes of magma and smoke.

  At level 20, the elemental plane of air is added, and para-elementals from the planes of ice and ooze.

  At level 21, the para-elemental planes may be entered at will.

  At level 22, the plane of shadow may be so entered.

  At level 23, the character can move freely through any of the inner planes, roam inner planes probability lines, and dwell on the plane of concordant opposition.

  In all cases, the druidic power to enter a plane includes the power to live there as if a native creature.  There is no time limit on the character's ability to remain there.

  Heirophants conjuring elementals, either as abilities of their level or by use of druidic spells, have a percent chance equal to their level of getting exactly the creature they desire.  If that roll fails, they will get the creatures determined randomly, according to the plane from which the creature is summoned.  The creatures summoned will be exceptional examples, with added hit points equal to the caster's level up to the maximum normally possible for the creature type.  All such summoned creatures obediently and selflessly serve the Hierophant, regardless of alignment or nature.

  Hierophant advancement table:

Level
From
To
16
Hierophant Druid	
1
500000
17
Hierophant Initiate	
500001
1000000
18
Hierophant Adept	
1000001
1500000
19
Hierophant Master	
1500001
2000000
20
Numinous Hierophant	
2000001
2500000
21
Mystic Hierophant	
2500001
3000000
22
Arcane Hierophant	
3000001
3500000
23
Hierophant of the Cabal	
3500001
Over
  There is no advancement above the 23rd level.
  Any Occidental Elves except Drow, Half-elves, Hobbits, and Occidental Humans may be Druids.`,
  },
  {
    label: "Ranger",
    hpDice: "d8",
    advancementTable: [
      { level: 1, minXp: 0, hpDiceNumber: 2, hpBonus: 0, title: "Runner" },
      { level: 2, minXp: 2251, hpDiceNumber: 3, hpBonus: 0, title: "Strider" },
      { level: 3, minXp: 4501, hpDiceNumber: 4, hpBonus: 0, title: "Scout" },
      { level: 4, minXp: 10001, hpDiceNumber: 5, hpBonus: 0, title: "Courser" },
      { level: 5, minXp: 20001, hpDiceNumber: 6, hpBonus: 0, title: "Tracker" },
      { level: 6, minXp: 40001, hpDiceNumber: 7, hpBonus: 0, title: "Guide" },
      {
        level: 7,
        minXp: 90001,
        hpDiceNumber: 8,
        hpBonus: 0,
        title: "Pathfinder",
      },
      { level: 8, minXp: 150001, hpDiceNumber: 9, hpBonus: 0, title: "Ranger" },
      {
        level: 9,
        minXp: 225001,
        hpDiceNumber: 10,
        hpBonus: 0,
        title: "Ranger Knight",
      },
      {
        level: 10,
        minXp: 325001,
        hpDiceNumber: 11,
        hpBonus: 0,
        title: "Ranger Lord",
      },
      {
        level: 11,
        minXp: 650001,
        hpDiceNumber: 11,
        hpBonus: 2,
        title: "Ranger Lord",
      },
    ],
    rules: `The Ranger is a subclass of the fighter with specific skills related to scouting, most notably their tracking abilities.  They use the attack and saving throw tables of the fighter, gain multiple attacks, and may specialize in a weapon.  They use 8-sided dice for hit points, but begin with two dice at level one, increasing to 11 dice at level 10.  They also get fighter constitution bonuses.  In addition to their fighter abilities, they gain low levels of druidic and magic-user spells at high levels.
    All rangers must be good, but are not restricted in the ethical dimension of their alignment.  They are required to have wisdom and constitution scores of at least 14, and strength and intelligence not less than 13.  A ranger whose strength, intelligence, and wisdom are all greater than 15 will gain a 10% bonus on experience points earned.
  
    There are a number of benefits for the ranger.  Against certain "giant class" humanoid opponents (which include a large number of monsters from kobolds and goblins to trolls and giants), they add their current experience level to the damage done on a successful attack.  They surprise opponents half the time, but are surprised only once in six times.  At level 10, they attract followers who may be among the most interesting and powerful of any character.
  
    However, there are a number of restrictions as well.  Any change of alignment away from Good forever ends the character's ranger status and removes any abilities not common to the fighter class, although he still gets only d8 hit points per level.  They may not have any hirelings or henchman until level 8.  They may not work with more than two other rangers at the same time.  And until achieving sufficient level to build a stronghold (level 10), the ranger may not own anything which he cannot carry himself or place on his mount.  As with a paladin, he is expected to donate "excessive treasure" to non-player charitable institutions.  (The MyWorld rule for limited treasure may be used to determine how much treasure is not excessive.)
  
    Magic use by the ranger begins with a single first level druidic spell at level 8, and adds a first level magic user spell at level 9; by level 17 the character has two spells of each of the first three levels of druidic spells and of the first two levels of magic user spells.  They cannot cast magic from magic user or druid scrolls or other writings.  At level 10, they may use any non-written magic items related to telepathy, ESP, or clairsentience.
  
    The tracking abilities of the ranger were somewhat complex originally, and became more complex with the arcana rules.  They include the ability to follow the trail of most creatures (including in some cases those who do not leave tracks in the conventional sense) and the ability to identify an increasing variety of creatures by their tracks.  At level one, the base probability of successfully tracking a creature is 20%, but the conditions and adjustments which will modify this are innumerable.
  
    It is generally agreed that rangers may use the many magic items usable by fighters, including all magic weapons and armor.  They may specialize in any single weapon; weapon specialization is explained in connection with weapon proficiencies.  They begin with three weapon slots and two non-weapon slots.  Additionally, arcana rules restrict the initial weapon selection by imposing certain weapon selection requirements.  The character must spend at least one slot in a bow or light crossbow at level one.  He must also gain proficiency in a dagger or a knife, and a spear or an ax, and a sword of any type--four weapons--before adding any others.  If he chooses to specialize in a weapon, it must be one of those on this list, and the choice to specialize must be made at level one by spending at least two slots on that weapon, all three for specialization in a bow or crossbow.  (Under MyWorld rules, a dual classed ranger, such as a cleric/ranger, is not restricted in the weapons chosen for the slots of the other class, except by the rules or that other class.)
  
    At level 10, the ranger lord may construct a fortress.  Although they do not attract men-at-arms through this, it appears that he may establish a freehold much as a fighter if he desires.`,
  },
  {
    label: "Paladin",
  },
  {
    label: "Mage",
  },
  {
    label: "Illusionist",
  },
  {
    label: "Druid",
  },
  {
    label: "Thief",
  },
  {
    label: "Monk",
  },
  {
    label: "Assassin",
    rules: `
Assassins are a sub-class of thieves, and they have some functions of the thief as well as their own.  To be an assassin, a character must have these minimum ability scores:  12/11/6/12/6/3/-15.  Assassins gain no experience point bonus for high ability scores.
Just as thieves, assassins have d6 hp per level.  They must be aligned evil.  They can use any sort of weapon, but are restricted as thieves in armor, and may only use other types of armor as part of a disguise (i.e., they cannot fight effectively in armor).  Shields may be used, but interfere with thieving functions.
The assassin character need not be a member of the local assassins guild, but all NPC assassins are members.  There is usually one such guild in most towns or cities, which controls a 10 to 100 mile radius area around the headquarters.  Any assassin discovered in the area will be invited to join, thus coming under the authority and command of the Guildmaster Assassin.  The character need not join, but will be under penalty of death if he performs an assassination while not a guild member.
The primary function of assassins is killing.  They may use poison, ingested or insinuated by weapon.  Ingested poison must be put into the food or drink, and the character performing this action must detail exactly when, where, and how the poisoning will be done; the DM will then adjudicate the action.  Poisoned weapons used run the risk of being noticed by others.  All non-assassins within 10' of the bared weapon have a 10% cumulative chance each per mr of noting the poison and attacking the poison-using assassin (20%) or calling for the city watch (50%) or both (30%).
Assassins attack on the same combat table as thieves, including backstabbing.  However, if they surprise a victim, they may attack on the assassination table.  This gives a roughly 50% chance of immediately killing the victim; and if this fails, normal damage according to weapon type and strength still accrues to the victim.  Further, if a poisoned weapon is used, the victim must also make a save vs. poison to avoid the effects.  The assassin decides whether to use assassination, backstabbing, or normal melee.
Primary abilities of assassins which enhance their function are those of being able to speak alignment languages and being able to disguise, as follows:
1)  Assassins with intelligence of 15 or more are able to learn an alignment tongue or special language (such as druidic or thieves' cant).  This ability is gained at 9th level (Assassin) and with each advance in experience level thereafter.  The maximum number of such languages which can be spoken (apart from his own alignment language) is one per point of intelligence above 14.  (Note that the current number is also limited to one per level over 8.)
2)  Disguise can be donned in order to gain the opportunity to poison or surprise a victim--or for other reasons.  The assassin can disguise himself so as to appear to be a human, demi-human, or humanoid creature of either gender.  Disguise can lower height by up to three inches, or raise it by up to five inches.  It can make the assassin look slimmer or appear much heavier.  Disguise can make the assassin appear to be virtually any class of character, a simple pilgrim, a merchant, etc.  There is a chance, however, that the victim, or one of his henchmen or guards, will notice the disguise.  There is a base 2% per day of a disguised assassin being spotted.  This chance goes upwards by 2% if the assassin is posing as another class, another race, and/or the opposite sex (cumulative, maximum 8%).  Each concerned party (victim, henchman, bodyguards) in proximity to the assassin will be checked for, immediately upon meeting the disguised assassin and each 24 hour period thereafter.  This chance is adjusted for particular individuals by intelligence + wisdom-24.  Note that True Seeing, Enemy Detection, Detect Evil, and Know Alignment may in certain cases reveal a disguised assassin.
The secondary function of the assassin is spying.  This mission can be coupled with the stealing of some item.
Tertiary functions of the assassin are the same as thieves.  They have all the abilities and functions of thieves--picking pockets, opening locks, finding/removing traps, moving silently, hiding in shadows, listening at doors, climbing walls, backstabbing, reading languages, reading magic--but they perform all these functions two levels below their assassin level, i.e., the third level assassin has the thieving abilities of a first level thief.  Backstabbing is the exception to this rule; this is performed at the assassins level.  Note that the ability to speak thieves' cant is not included, but can be learned in lieu of an alignment language at the appropriate level.
Performing an assassination will gain experience points for the character, awarded for both the fee paid and the level of the victim, starting at 50 gp for a first level assassin to kill a zero-level character, up to 250,000 gp for a fifteenth level assassin to kill a sixteenth level or greater character.  Important, popular, and/or noble victims will be considered as being above their actual level with respect to fee.  Especially popular characters could be worth three times their level.
An assassin character cannot have any hirelings until he attains fourth level (they might turn him in!); at that time lower level assassins may be taken into service.  Upon attaining eighth level, the character may also include thieves and thief-acrobats amongst his hirelings.  Upon attaining twelfth level, the character may hire any class desired.  Of course, only neutral or evil characters will serve an assassin.  The total number of henchmen is that dictated by the character's charisma score.  "Followers" are also possible, but these come only at the two uppermost levels of the assassin class.
In order for an assassin character to gain experience levels above the thirteenth (Prime Assassin), he or she must have the requisite experience points and then either assassinate the local Guildmaster Assassin (fourteenth level) or challenge him to a duel to the death.  Likewise, a fourteenth level player character assassin can journey to the place where the Grandfather of Assassins (fifteenth level) has his headquarters and slay him by assassination or in a duel.  Note that duplicity, trickery, ambush, and all forms of treachery are considered fair by assassins.  A higher level character can accept a challenge and then have the challenger slain by archers, for instance.
As Guildmaster Assassin, a character will have a body of guild members which numbers 7d4.  Upon a change of leadership it is 75% likely that each guild member will leave the area.  Thus, it will be necessary for the new Guildmaster to allow new members into the guild.  These new assassins will all be first level and must be worked up in experience levels.  The maximum number of such "followers" of the local guild will be set by the referee.  They are in addition to normal henchmen.  Note that guild members are loyal only to strength, power, and profit.
The headquarters of a guild is always within a large town or big city.  It must not be a noticeable fortress or an ostentatious place.  It is typically a warehouse or other nondescript structure, with safeguards and traps added.  This avoids attention and unwanted notoriety.  All expenses of maintaining the guild and its members--excluding the Guildmaster--are assumed to be fully paid for by normal guild activities.  Any improvements, changes, the expenses of the leader, and all other special costs must be borne by the Guildmaster Assassin.
The headquarters of the Grandfather of Assassins can be virtually anywhere and of any form--cavern, castle, monastery, palace, temple, you name it.  However, if it is a large and obvious place, the headquarters must be located well away from all communities--such as in the midst of a murky woods, a dismal marsh or fen, a lonely moor, a deserted island, a remote coast, or far into forsaken hills or atop a mountain.  Upon attaining the headship of all assassins, the new Grandfather must pay all remaining followers of the former head 1000 gp for each of their experience levels, destroy the old headquarters, and construct a new one somewhere else.  (The old headquarters will clearly not be safe, due to whatever revenge-based insurance the former Grandfather had arranged to avenge his own death, either based on traps and secrets within the building, or on pre-paid avengers who know the location.)
Any occidental except Hobbits may be assassins, Humans (15), any Dwarfs (9, up to 12), any Gnomes (8, up to 10) except Tinker Gnomes, any Elves (10, up to 12), Half-elves (11), and Half-orcs (15).
`,
    advancementTable: [
      {
        level: 1,
        minXp: 0,
        hpDiceNumber: 1,
        hpBonus: 0,
        title: "Bravo (Apprentice",
      },
      {
        level: 2,
        minXp: 1501,
        hpDiceNumber: 2,
        hpBonus: 0,
        title: "Rutterkin",
      },
      {
        level: 3,
        minXp: 3001,
        hpDiceNumber: 3,
        hpBonus: 0,
        title: "Waghalter",
      },
      { level: 4, minXp: 6001, hpDiceNumber: 4, hpBonus: 0, title: "Murderer" },
      { level: 5, minXp: 12001, hpDiceNumber: 5, hpBonus: 0, title: "Thug" },
      { level: 6, minXp: 25001, hpDiceNumber: 6, hpBonus: 0, title: "Killer" },
      {
        level: 7,
        minXp: 50001,
        hpDiceNumber: 7,
        hpBonus: 0,
        title: "Cutthroat",
      },
      {
        level: 8,
        minXp: 100001,
        hpDiceNumber: 8,
        hpBonus: 0,
        title: "Executioner",
      },
      {
        level: 9,
        minXp: 200001,
        hpDiceNumber: 9,
        hpBonus: 0,
        title: "Assassin",
      },
      {
        level: 10,
        minXp: 300001,
        hpDiceNumber: 10,
        hpBonus: 0,
        title: "Expert Assassin",
      },
      {
        level: 11,
        minXp: 425001,
        hpDiceNumber: 11,
        hpBonus: 0,
        title: "Senior Assassin",
      },
      {
        level: 12,
        minXp: 575001,
        hpDiceNumber: 12,
        hpBonus: 0,
        title: "Chief Assassin",
      },
      {
        level: 13,
        minXp: 750001,
        hpDiceNumber: 13,
        hpBonus: 0,
        title: "Prime Assassin",
      },
      {
        level: 14,
        minXp: 1000001,
        hpDiceNumber: 14,
        hpBonus: 0,
        title: "Guildmaster Assassin",
      },
      {
        level: 15,
        minXp: 1500001,
        hpDiceNumber: 15,
        hpBonus: 0,
        title: "Grandfather of Assassins",
      },
    ],
  },
];

export function getCurrentLevelInfo(characterClass: string, xp: number) {
  const classStats = standardClasses.find(
    (item) => item.label === characterClass
  );
  if (!classStats) return {};
  const currentLevelStats =
    classStats &&
    classStats.advancementTable &&
    classStats.advancementTable.find((level) => level.minXp <= xp);
  //debugger;
  if (!currentLevelStats) return {};
  return {
    level: currentLevelStats.level || 1,
    rules: classStats.rules,
    hp:
      currentLevelStats.hpDiceNumber +
      classStats.hpDice +
      "+" +
      currentLevelStats.hpBonus,
    title: currentLevelStats.title || "Renard",
  };
}
