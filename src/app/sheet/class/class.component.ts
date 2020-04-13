import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { SheetStore } from "../../store/sheet-store";

import { standardClasses, getCurrentLevelInfo } from "../../model/class";

@Component({
  selector: "sheet-class",
  templateUrl: "./class.component.html",
  styleUrls: ["./class.component.css"],
})
export class ClassComponent implements OnChanges {
  @Input()
  characterClasses = [];

  CLASSES = standardClasses.map((cl) => cl.label);

  classColumns: string[] = [
    "label",
    "level",
    "xp",
    "title",
    "hp dices",
    "actions",
  ];

  constructor(private store: SheetStore) {}

  ngOnChanges(): void {
    this.characterClasses = this.characterClasses.map((characterClass) => {
      return {
        ...characterClass,
        ...getCurrentLevelInfo(characterClass.label, characterClass.xp),
      };
    });
    console.log("classes changed:", this.characterClasses);
  }

  addClass(): void {
    this.characterClasses = [
      ...this.characterClasses,
      {
        label: "",
        level: 0,
        xp: 0,
      },
    ];
    console.log("new row added", this.characterClasses);
  }

  removeClass(index: number): void {
    var temp = [...this.characterClasses];
    temp.splice(index, 1);
    this.characterClasses = temp;
    this.updateClass();
  }

  updateClass() {
    console.log("update class", this.characterClasses);
    this.store.updateClasses([...this.characterClasses]);
  }
}
