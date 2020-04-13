import {
  Component,
  OnInit,
  Inject,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

import { saveAs } from "file-saver";
import { SheetStore } from "../store/sheet-store";
import { Sheet } from "../model/sheet";

import RACES from "../model/race.json";
import { alignments } from "../model/alignment";

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";

@Component({
  selector: "app-sheet",
  templateUrl: "./sheet.component.html",
  styleUrls: ["./sheet.component.css"],
})
export class SheetComponent implements OnInit, OnChanges {
  characterName = "Trump";

  character: Sheet;

  clericLevel: number;
  thiefLevel: number;

  // refs list
  races = RACES;
  alignments = alignments;
  standardColumns = ["label", "score"];

  constructor(private store: SheetStore, public dialog: MatDialog) {}

  private classLevel(className): number {
    return this.character.class.reduce(
      (agg, item) =>
        agg + (item.label === className ? parseInt("" + item.level) : 0),
      0
    );
  }

  ngOnInit(): void {
    this.store.state$.subscribe((state) => {
      this.character = { ...state.character };
      this.clericLevel = this.classLevel("Cleric");
      this.thiefLevel = this.classLevel("Thief");
      console.log(
        "sheet component - state updated",
        this.character,
        this.clericLevel,
        this.thiefLevel
      );
    });
    console.log("sheet component init");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("sheet componenet change", changes);
  }

  exportSheet(): void {
    console.log(this.character);
    const jsonse = JSON.stringify(this.character);
    const blob = new Blob([jsonse], { type: "application/json" });
    saveAs(blob, this.character.name + "-charater-sheet.json");
  }

  updateCharacter() {
    this.store.setState({ character: { ...this.character } });
    console.log("sheet component - state updated");
  }

  removeCharacter() {
    this.store.removeCurrentCharacter();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogSheetPic, {
      width: "250px",
      data: { picUrl: this.character.picUrl },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.character.picUrl = result;
      this.updateCharacter();
    });
  }
}

export interface DialogData {
  picUrl: string;
}

@Component({
  selector: "dialog-sheet-pic",
  templateUrl: "./dialog-sheet-pic.html",
})
export class DialogSheetPic {
  constructor(
    public dialogRef: MatDialogRef<DialogSheetPic>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
