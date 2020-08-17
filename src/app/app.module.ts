import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbCardModule, NbIconModule, NbInputModule, NbListModule, NbDatepickerModule, NbDialogModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component';
import { ProfilComponent } from './components/profil/profil.component';
import { UserService } from './services/user.service';
import { DetailComponent } from './components/profil/users/detail/detail.component';
import { UsersComponent } from './components/profil/users/users.component';
import { RegisterComponent } from './components/register/register.component';
import { DateconvertPipe } from './pipes/dateconvert.pipe';
import { UpdateComponent } from './components/profil/users/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    ProfilComponent,
    DetailComponent,
    UsersComponent,
    RegisterComponent,
    DateconvertPipe,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbListModule,
    FormsModule,
    NbButtonModule,
    ReactiveFormsModule,
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
