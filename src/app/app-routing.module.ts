import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SheetComponent } from "./sheet/sheet.component";

const routes: Routes = [{ path: "", redirectTo: "/sheet", pathMatch: "full" }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
