import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { LoginComponent } from './features/auth/login/login.component';

export const routes: Routes = [
    { path: 'register', component: RegisterComponent},
    { path: '', component: LoginComponent},
    { path: 'home', component: HomeComponent}
];
