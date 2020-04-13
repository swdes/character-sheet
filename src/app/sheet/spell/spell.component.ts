import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Spell } from "../../model/spell";
import { SheetStore } from "../../store/sheet-store";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { getSpellPerDay } from "../../model/spellCapabilities";
import { isNgTemplate } from "@angular/compiler";

@Component({
  selector: "sheet-spell",
  templateUrl: "./spell.component.html",
  styleUrls: ["./spell.component.css"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      ),
    ]),
  ],
})
export class SpellComponent implements OnChanges {
  @Input()
  spells: Array<Spell> = [];
  @Input()
  class;
  @Input()
  wisdomScore;
  @Input()
  intelligenceScore;

  spellPerDay;

  expandedElement;

  spellsColumns: string[] = ["class", "level", "label", "usedNumber"];

  constructor(private store: SheetStore) {}

  ngOnChanges(): void {
    console.log("spells component - onChanges");
    this.spellPerDay = this.class
      .map((item) => {
        const table = getSpellPerDay(
          item,
          this.wisdomScore,
          this.intelligenceScore
        );
        return {
          label: item.label,
          table,
        };
      })
      .filter((obj) => obj.table);
  }

  addSpell(): void {
    this.spells = [
      ...this.spells,
      {
        class: this.spells[0].class,
        label: "",
        level: 1,
        components: "",
        description:
          "Un rayon s'échappe de la bite du magicien pour foudrayer toutes les succubes dans un rayon de 10''",
      },
    ];
    console.log("new row added", this.spells);
  }

  removeSpell(index: number): void {
    var temp = [...this.spells];
    temp.splice(index, 1);
    this.spells = temp;
  }

  updateSpells() {
    //console.log("update notebook");
    //this.notebookChange.emit(this._notebook);
    this.store.updateSpells(this.spells);
  }
}
