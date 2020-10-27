import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { OrdersComponent } from './components/orders/orders.component';
import { HomeComponent } from './components/home/home.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

// setting path for each components
const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "orders", component: OrdersComponent },
  { path: "details", component: OrderDetailsComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    HomeComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)  /*Routing using forRoot() method*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
