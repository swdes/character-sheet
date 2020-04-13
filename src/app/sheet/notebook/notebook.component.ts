import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { SheetStore } from "../../store/sheet-store";

@Component({
  selector: "sheet-notebook",
  templateUrl: "./notebook.component.html",
  styleUrls: ["./notebook.component.css"]
})
export class NotebookComponent implements OnInit {
  private _notebook = [];
  @Input()
  set notebook(val) {
    console.log("set value", val);
    this._notebook = val;
  }
  get notebook() {
    return this._notebook;
  }
  @Output() notebookChange = new EventEmitter<Array<Object>>();
  notebookColumns: string[] = ["date", "description", "actions"];

  constructor(private store: SheetStore) {}

  ngOnInit(): void {
    console.log("init");
  }

  addNote(): void {
    const d = new Date();
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(d);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);

    const currentDateString = `${ye}-${mo}-${da}`;
    this.notebook = [
      ...this.notebook,
      {
        date: currentDateString,
        description: ""
      }
    ];
    console.log("new row added", this.notebook);
  }

  removeNote(index: number): void {
    var temp = [...this.notebook];
    temp.splice(index, 1);
    this.notebook = temp;
  }

  updateNotebook() {
    //console.log("update notebook");
    //this.notebookChange.emit(this._notebook);
    this.store.updateNotebook(this._notebook);
  }
}
