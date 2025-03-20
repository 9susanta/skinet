import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductDetailsComponent } from './features/shop/product-details/product-details.component';
import { ShopComponent } from './features/shop/shop.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
     {path: 'shop', component: ShopComponent},
     {path: 'shop/:id', component: ProductDetailsComponent},
     {path: '**', redirectTo: '', pathMatch: 'full'}
];
