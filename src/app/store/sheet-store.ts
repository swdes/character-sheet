import { Inject, Injectable } from "@angular/core";
import { SheetState } from "./sheet-state";
import { Store } from "./store";
import { Sheet, getNewSheet } from "../model/sheet";
import { first, take } from "rxjs/operators";
import { AngularFirestore, DocumentSnapshot } from "@angular/fire/firestore";
import * as uuid from "uuid";
import moment from "moment";
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";

@Injectable()
export class SheetStore extends Store<SheetState> {
  constructor(@Inject(AngularFirestore) protected firestore: AngularFirestore) {
    super(new SheetState());

    console.log("Store INIT");

    // GET FROM LOCAL STORAGE
    const fromStorage = localStorage.getItem("character");
    //const character = fromStorage ? JSON.parse(fromStorage) : SampleJson;
    const character = fromStorage ? JSON.parse(fromStorage) : getNewSheet();
    // Patch for malformed data
    character.id = character.id || uuid.v4();

    this.setState({ character });

    console.log("Store initated", this.state.character);

    // GET FROM REMOTE AND SELECT THE MOST RECENT
    this.firestore
      .doc<Sheet>("characters/" + character.id)
      .ref.get()
      .then((documentSnapShot: DocumentSnapshot<any>) => {
        if (documentSnapShot.exists) {
          // Compare dates
          const data = documentSnapShot.data();
          console.log("Store document found in firestore", data);
          // Firestore bug ? Convert Date object into Timestamp object
          const firestoreUpdateDate = moment(data.updateDate).isValid()
            ? moment(data.updateDate)
            : moment(data.updateDate.toDate());
          const localstorageUpdateDate = moment(character.updateDate);

          console.log(
            "Firestore and localstore update date = ",
            firestoreUpdateDate.toLocaleString(),
            localstorageUpdateDate.toLocaleString()
          );

          if (firestoreUpdateDate.isAfter(localstorageUpdateDate)) {
            console.log(
              "Store document found in firestore more recent than localstorage",
              data
            );
            this.setState({ character: data });
          }
        }
      })
      .then((d) => {
        // After setting the state, subscribe
        this.state$.subscribe((state) => {
          state.character.updateDate = new Date();
          console.log("persist in localstorage");
          localStorage.setItem("character", JSON.stringify(state.character));
          return Promise.resolve(this.updateFirestore(state.character)).catch(
            (e) => {
              console.error(
                "Failed to persist to firestore",
                state.character.id,
                state.character
              );
            }
          );
        });
      });
  }

  updateFirestore(character: Sheet): Promise<any> {
    console.log("Start firestore updating process for", character);
    if (character.name && character.name !== "") {
      return this.firestore
        .doc("characters/" + character.id)
        .set({ ...character })
        .then((d) => {
          console.log("Character persisted in firestore");
        });
    } else {
      return Promise.resolve((d) =>
        console.log("Character without name - not updating firestore")
      );
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
