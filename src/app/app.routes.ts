import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductAdmin } from './components/product-admin/product-admin';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'manage', component: ProductAdmin }
];