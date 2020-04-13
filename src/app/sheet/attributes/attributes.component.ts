import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { SheetStore } from "../../store/sheet-store";
import { ATTRIBUTES, getAttributeAdjustments } from "../../model/attributes";
import { pick } from "lodash/pick";

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
    this.attributesArray = ATTRIBUTES.map((key) => {
      const score = this.attributes[key].score || 10;
      const adjusts = getAttributeAdjustments(key, score);
      return {
        label: key,
        score,
        adjustments: Object.keys(adjusts).map((adjustKey) => ({
          label: adjustKey,
          value: adjusts[adjustKey],
        })),
      };
    });
    console.log("attributes componenent onChange", this.attributesArray);
  }

  updateCharacter() {
    const reducedAttributes = this.attributesArray.reduce((agg, current) => {
      agg[current["label"]] = {
        score: current.score,
      };
      return agg;
    }, {});
    console.log("reducedAttributes", reducedAttributes);
    this.store.updateSub("attributes", reducedAttributes);
  }
}
