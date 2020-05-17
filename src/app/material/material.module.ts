import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

const MAT_MODULES = [
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatRippleModule
];

@NgModule({
  declarations: [],
  imports: [MAT_MODULES],
  exports: [MAT_MODULES]
})
export class MaterialModule {}
