import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fruit',
    pathMatch: 'full',
  },
  {
    path: 'fruit',
    component: HomeComponent,
  },
  {
    path: 'fruit/create',
    component: CreateComponent,
  },
  {
    path: 'fruit/edit/:id',
    component: EditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FruitRoutingModule {}
