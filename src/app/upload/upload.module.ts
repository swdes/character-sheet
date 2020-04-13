import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UploadComponent } from "./upload.component";
import { DialogComponent } from "./dialog/dialog.component";

import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatListModule } from "@angular/material/list";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from "@angular/common/http";

import { UploadService } from "./upload.service";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  entryComponents: [DialogComponent],
  declarations: [UploadComponent, DialogComponent],
  exports: [UploadComponent],
  providers: [UploadService]
})
export class UploadModule {}
