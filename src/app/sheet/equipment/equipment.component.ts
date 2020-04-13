import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { SheetStore } from "../../store/sheet-store";

@Component({
  selector: "sheet-equipment",
  templateUrl: "./equipment.component.html",
  styleUrls: ["./equipment.component.css"]
})
export class EquipmentComponent implements OnInit {
  private _equipment = [];
  @Input()
  set equipment(val) {
    console.log("set equipment", val);
    this._equipment = val;
  }
  get equipment() {
    return this._equipment;
  }
  @Output() equipmentChange = new EventEmitter<Array<Object>>();
  equipmentColumns: string[] = ["label", "cost", "weight", "actions"];

  constructor(private store: SheetStore) {}

  ngOnInit(): void {}

  addEquipment(): void {
    this._equipment = [
      ...this._equipment,
      {
        label: "",
        cost: 0,
        weight: 0
      }
    ];
    console.log("new row added", this._equipment);
  }

  removeEquipment(index: number): void {
    var temp = [...this._equipment];
    temp.splice(index, 1);
    this._equipment = temp;
  }

  updateEquipment() {
    console.log("update equipment");
    //this.equipmentChange.emit(this._equipment);
    this.store.updateEquipment(this._equipment);
  }
}
