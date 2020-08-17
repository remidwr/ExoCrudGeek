import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProfilComponent } from './components/profil/profil.component';
import { DetailComponent } from './components/profil/users/detail/detail.component';
import { UsersComponent } from './components/profil/users/users.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateComponent } from './components/profil/users/update/update.component';

const routes: Routes = [
  { path: 'home', component : HomeComponent },
  { path: 'register', component : RegisterComponent },
  { path: 'profil', component : ProfilComponent, children : [
    { path: 'users', component : UsersComponent },
    { path: 'users/detail/:id', component : DetailComponent },
    { path: 'users/update/:id', component : UpdateComponent }
  ] },
  { path: 'about', component : AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
