import { Component, OnChanges, Input } from "@angular/core";
import { SheetStore } from "../../store/sheet-store";
import { getSavingThrows } from "../../model/savingThrows";

@Component({
  selector: "sheet-savings",
  templateUrl: "./savings.component.html",
  styleUrls: ["./savings.component.css"],
})
export class SavingsComponent implements OnChanges {
  standardColumns = ["label", "score"];
  @Input()
  class;

  savingThrows;

  constructor(private store: SheetStore) {}

  ngOnChanges(): void {
    this.savingThrows = getSavingThrows(
      this.class[0].label,
      this.class[0].level
    );
    console.log("compute saving throws", this.savingThrows);
  }
}
