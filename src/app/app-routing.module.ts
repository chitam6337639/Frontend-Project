import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { InsertnodeComponent } from './insertnode/insertnode.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ProductnodeComponent } from './productnode/productnode.component';
import { SignupComponent } from './signup/signup.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:'',component: MainLayoutComponent,
  canActivate:[AuthGuard] ,
    children:[
      {path:'table',component: TableComponent}, 
      {path:'home',component:HomeComponent},
      {path:'insert',component:InsertnodeComponent},
      {path:'productnode',component:ProductnodeComponent},
      {path:'signup',component:SignupComponent},

    ]
  
  },
{path:'login',component:LoginLayoutComponent},
{path:'**', component:LoginLayoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
