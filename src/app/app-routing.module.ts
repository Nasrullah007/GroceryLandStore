import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { ContentComponent } from './Shared/content/content.component';
import { HomebodyComponent } from './Shared/homebody/homebody.component';

const routes: Routes = [
   {
  path: 'login',
  component: LoginComponent,
},
{
  path: '',
  component: ContentComponent,
  children: [
    {
      path: '',
      component: HomebodyComponent,
    },
    {
      path: 'Products',
      component: ProductsComponent,
    },
    {
      path: 'ProductsDetail',
      component: ProductDetailComponent,
    },
  ],
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
