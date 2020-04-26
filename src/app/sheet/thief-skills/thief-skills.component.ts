import { Component, Input, OnChanges } from "@angular/core";
import { getThiefSkills } from "../../model/thiefSkills";
import { Race } from "../../model/race";

@Component({
  selector: "sheet-thief-skills",
  templateUrl: "./thief-skills.component.html",
  styleUrls: ["./thief-skills.component.css"],
})
export class ThiefSkillsComponent implements OnChanges {
  @Input()
  thiefLevel: number = 1;
  @Input()
  dexterityScore;
  @Input()
  race: Race = Race.HUMAN;

  thiefSkills;

  constructor() {}

  ngOnChanges(): void {
    this.thiefSkills = getThiefSkills(
      this.thiefLevel,
      parseInt(this.dexterityScore),
      this.race
    );
  }
}
