import { Component } from "@angular/core";
import { Observable } from "rxjs";
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { SheetStore } from "./store/sheet-store";
import { Sheet, getNewSheet } from "./model/sheet";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "charactersheet";
  characters: Observable<any[]>;
  selectedCharacterId: string;

  constructor(
    private firestore: AngularFirestore,
    private router: Router,
    private store: SheetStore
  ) {
    this.characters = firestore.collection("characters").valueChanges();
    this.store.state$.subscribe((state) => {
      this.selectedCharacterId = state.character.id;
    });
    //this.loadCharacter(this.selected);
    console.log("AppComponent constructor ok");
  }

  loadCharacter(name: string) {
    this.store.loadCharacterById(this.selectedCharacterId);
  }

  createNew() {
    this.store.resetCharacter();
    this.selectedCharacterId = null;
  }
}
