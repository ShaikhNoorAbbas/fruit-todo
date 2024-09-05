import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitRoutingModule } from './fruit-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, CreateComponent, EditComponent],
  imports: [CommonModule, FruitRoutingModule, ReactiveFormsModule, FormsModule],
})
export class FruitModule {}
