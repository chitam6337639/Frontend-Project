import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';

import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { HttpClientModule } from '@angular/common/http';
import { ProductnodeComponent } from './productnode/productnode.component';
import { InsertnodeComponent } from './insertnode/insertnode.component';

import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    HomeComponent,
    TableComponent,
    ProductnodeComponent,
    InsertnodeComponent,
    SignupComponent,
    LoginComponent,
    MainLayoutComponent,
    LoginLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
