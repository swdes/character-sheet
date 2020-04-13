import { Component, OnChanges, Input } from "@angular/core";
import { SheetStore } from "../../store/sheet-store";

@Component({
  selector: "sheet-savings",
  templateUrl: "./savings.component.html",
  styleUrls: ["./savings.component.css"]
})
export class SavingsComponent implements OnChanges {
  standardColumns = ["label", "score"];
  @Input()
  savingThrows;

  constructor(private store: SheetStore) {}

  ngOnChanges(): void {}

  updateSavings() {
    this.store.updateSub("savingThrows", this.savingThrows);
  }
}
