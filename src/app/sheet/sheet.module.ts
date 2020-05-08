import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";

import { SheetRoutingModule } from "./sheet.routing.module";

import { SheetComponent, DialogSheetPic } from "./sheet.component";
import { NotebookComponent } from "./notebook/notebook.component";
import { EquipmentComponent } from "./equipment/equipment.component";
import { SpellComponent } from "./spell/spell.component";
import { ClassComponent, BottomSheetClassInfo } from "./class/class.component";
import { AttributesComponent } from "./attributes/attributes.component";
import { SavingsComponent } from "./savings/savings.component";
import { VaderetrosComponent } from "./vaderetros/vaderetros.component";
import { ThiefSkillsComponent } from "./thief-skills/thief-skills.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";

// Store
import { SheetStore } from "../store/sheet-store";

// Pipes
import { LineBreakPipe } from "../lineBreakPipe";

@NgModule({
  declarations: [
    SheetComponent,
    NotebookComponent,
    EquipmentComponent,
    SpellComponent,
    ClassComponent,
    AttributesComponent,
    SavingsComponent,
    VaderetrosComponent,
    ThiefSkillsComponent,
    DialogSheetPic,
    BottomSheetClassInfo,
    LineBreakPipe,
  ],
  imports: [
    CommonModule,
    SheetRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatCheckboxModule,
  ],
  providers: [
    SheetStore,
    //{ provide: REGION, useValue: "europe-west3" }
  ],
  exports: [SheetComponent],
  entryComponents: [DialogSheetPic, BottomSheetClassInfo],
})
export class SheetModule {}
