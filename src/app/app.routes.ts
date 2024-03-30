import { Routes } from '@angular/router';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { EditItemComponent } from './pages/edit-item/edit-item.component';
import { ListOfItemsComponent } from './pages/list-of-items/list-of-items.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const routes: Routes = [
  {
    path: 'add-item',
    component: AddItemComponent,
  },
  { path: 'edit-item', component: EditItemComponent },
  { path: '', component: ListOfItemsComponent },
  { path: 'login', component: LoginPageComponent },
];
