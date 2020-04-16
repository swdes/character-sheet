import { Component, OnInit, Input, OnChanges, Inject } from "@angular/core";
import { SheetStore } from "../../store/sheet-store";
import {
  MatBottomSheet,
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from "@angular/material/bottom-sheet";

import { standardClasses, getCurrentLevelInfo } from "../../model/class";

import { pick } from "lodash";

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

  constructor(
    private store: SheetStore,
    private _bottomSheet: MatBottomSheet
  ) {}

  ngOnChanges(): void {
    this.characterClasses.map((characterClass) => {
      const decoratedClass = getCurrentLevelInfo(
        characterClass.label,
        characterClass.xp
      );
      characterClass.level = decoratedClass.level || 1;
      characterClass.title = decoratedClass.title;
      characterClass.rules = decoratedClass.rules;
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
    // Save only interesting fields
    this.store.updateClasses([
      ...this.characterClasses.map((item) =>
        pick(item, ["label", "level", "xp"])
      ),
    ]);
  }

  openInfo(index: number) {
    this._bottomSheet.open(BottomSheetClassInfo, {
      data: {
        info: this.characterClasses[index].rules || "<work in progress>",
      },
    });
  }
}

@Component({
  selector: "bottom-sheet-class-info",
  //templateUrl: "bottom-sheet-class-info.html",
  template: `<div [innerHTML]="data.info | lineBreak"></div>`,
})
export class BottomSheetClassInfo {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetClassInfo>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  lineBreak(value: string): string {
    return "TEST" + value;
  }
}
