import { Component, Input, OnChanges } from "@angular/core";
import { getVadeRetroStats } from "../../model/vadeRetros";

@Component({
  selector: "sheet-vaderetro",
  templateUrl: "./vaderetros.component.html",
  styleUrls: ["./vaderetros.component.css"],
})
export class VaderetrosComponent implements OnChanges {
  @Input()
  clericLevel;
  vadeRetros;

  constructor() {}

  ngOnChanges(): void {
    this.vadeRetros = getVadeRetroStats(this.clericLevel);
    console.log("Vade retro componennt changes");
  }
}
