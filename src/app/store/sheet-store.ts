import { Inject, Injectable } from "@angular/core";
import { SheetState } from "./sheet-state";
import { Store } from "./store";
import SampleJson from "../sample.json";
import { Sheet, getNewSheet } from "../model/sheet";
import { first, take } from "rxjs/operators";

import { environment } from "src/environments/environment";
import { AngularFirestore } from "@angular/fire/firestore";
import * as uuid from "uuid";

@Injectable()
export class SheetStore extends Store<SheetState> {
  constructor(@Inject(AngularFirestore) protected firestore: AngularFirestore) {
    super(new SheetState());
    const fromStorage = localStorage.getItem("character");
    //const character = fromStorage ? JSON.parse(fromStorage) : SampleJson;
    const character = fromStorage ? JSON.parse(fromStorage) : getNewSheet();

    // Patch for malformed data
    character.id = character.id || uuid.v4();

    this.setState({ character });
    this.state$.subscribe((state) => {
      console.log("persist in localstorage");
      localStorage.setItem("character", JSON.stringify(state.character));
      this.updateFirestore(state.character);
    });
  }

  updateFirestore(character: Sheet) {
    if (character.name && character.name !== "") {
      this.firestore.doc("characters/" + character.id).set(character);
      console.log("Character persisted in firestore");
    } else {
      console.log("Character without name - not updating firestore");
    }
  }

  loadCharacterById(id: string) {
    console.log("Try to load character with id", id);
    this.firestore
      .doc<Sheet>("characters/" + id)
      .valueChanges()
      .pipe(first())
      .subscribe((sheet: Sheet) => {
        if (sheet && id === sheet.id) this.setState({ character: sheet });
      });
  }

  resetCharacter() {
    console.log("start to reset candidate");
    const character = getNewSheet();
    this.setState({ character });
    console.log("new reset  candidate", character.id);
  }

  removeCurrentCharacter() {
    this.firestore.doc("characters/" + this.state.character.id).delete();
    this.resetCharacter();
  }

  loadFromFile(character) {
    console.log("load from file");
    // Patch for malformed data
    character.id = character.id || uuid.v4();
    this.setState({ character });
  }

  checkData() {}

  updateEquipment(newEquipment) {
    const newChracter = { ...this.state.character, equipment: newEquipment };
    this.setState({ character: newChracter });
  }

  updateNotebook(newNotebook) {
    const newChracter = { ...this.state.character, notebook: newNotebook };
    this.setState({ character: newChracter });
  }

  updateSpells(newSpells) {
    const newChracter = { ...this.state.character, spells: newSpells };
    this.setState({ character: newChracter });
  }

  updateClasses(newClasses) {
    const newChracter = { ...this.state.character, class: newClasses };
    this.setState({ character: newChracter });
  }

  updateSub(key, value) {
    const newChracter = { ...this.state.character };
    newChracter[key] = value;
    this.setState({ character: newChracter });
  }
}
