import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Sheet } from "./model/sheet";
import SampleJson from "./sample.json";

@Injectable({
  providedIn: "root"
})
export class SheetService {
  logger = new Subject<Object>();
  private currentCharacter: Sheet;

  constructor() {
    const fromStorage = localStorage.getItem("character");
    this.currentCharacter = fromStorage ? JSON.parse(fromStorage) : SampleJson;
  }

  updateCharacter(json: Sheet) {
    this.currentCharacter = json;
    localStorage.setItem("character", JSON.stringify(json));
    this.logger.next(this.currentCharacter);
  }

  getCharacter(): Sheet {
    return this.currentCharacter;
  }
}
