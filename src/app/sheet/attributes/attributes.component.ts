import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { SheetStore } from "../../store/sheet-store";
import { ATTRIBUTES } from "../../model/attributes";

@Component({
  selector: "sheet-attributes",
  templateUrl: "./attributes.component.html",
  styleUrls: ["./attributes.component.css"],
})
export class AttributesComponent implements OnChanges {
  attributesColumns: string[] = ["score", "adjustments"];

  @Input()
  attributes;

  attributesArray = [];

  constructor(private store: SheetStore) {}

  ngOnChanges(): void {
    this.attributesArray = ATTRIBUTES.map((key) => ({
      ...this.attributes[key],
      label: key,
      adjustments: Object.keys(this.attributes[key].adjustments).map(
        (adjustKey) => ({
          label: adjustKey,
          value: this.attributes[key].adjustments[adjustKey],
        })
      ),
    }));
    console.log("attributes componenent onChange", this.attributesArray);
  }

  updateCharacter() {
    const reducedAttributes = this.attributesArray.reduce(
      (previous, current) => {
        current.adjustments = current.adjustments.reduce((agg, item) => {
          agg[item.label] = item.value;
          return agg;
        }, {});
        previous[current["label"]] = current;
        return previous;
      },
      {}
    );
    console.log("reducedAttributes", reducedAttributes);
    this.store.updateSub("attributes", reducedAttributes);
  }
}
