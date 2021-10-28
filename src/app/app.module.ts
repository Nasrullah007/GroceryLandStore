import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './Shared/content/content.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HeaderComponent } from './Shared/header/header.component';
import { TestComponent } from './test/test.component';
import { HomebodyComponent } from './Shared/homebody/homebody.component';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { NgSimpleStateModule } from 'ng-simple-state';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    LoginComponent,
    HomebodyComponent,ProductsComponent, ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,CommonModule,
    NgSimpleStateModule.forRoot({
      enableDevTool: true, // Enable Redux DevTools only in developing
      enableLocalStorage: true // Enable local storage state persistence
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
