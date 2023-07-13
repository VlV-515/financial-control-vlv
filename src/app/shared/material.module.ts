import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatTooltipModule],
  exports: [MatFormFieldModule, MatInputModule, MatTooltipModule],
})
export class MaterialModule {}
