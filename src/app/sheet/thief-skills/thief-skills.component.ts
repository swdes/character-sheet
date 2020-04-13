import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { SheetStore } from "../../store/sheet-store";
import { thiefSkills as THIEFSKILLS } from "../../model/thiefSkills";

@Component({
  selector: "sheet-thief-skills",
  templateUrl: "./thief-skills.component.html",
  styleUrls: ["./thief-skills.component.css"],
})
export class ThiefSkillsComponent implements OnChanges {
  @Input()
  thiefSkills;

  constructor(private store: SheetStore) {}

  ngOnChanges(): void {
    this.thiefSkills = THIEFSKILLS.map((skill) => {
      const foundSkill = this.thiefSkills.filter(
        (item) => item.label === skill
      );
      return {
        label: skill,
        score:
          (foundSkill && foundSkill.length > 0 && foundSkill[0].score) || 0,
      };
    });
  }
  updateStore() {
    console.log("update thiefSkills", this.thiefSkills);
    //this.notebookChange.emit(this._notebook);
    this.store.updateSub("thiefSkills", this.thiefSkills);
  }
}
