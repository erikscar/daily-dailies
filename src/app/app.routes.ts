import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { LoginComponent } from './features/auth/login/login.component';
import { DailiesComponent } from './features/dailies/dailies.component';
import { CalendarComponent } from './features/calendar/calendar.component';
import { FaqComponent } from './features/faq/faq.component';
import { ProfileComponent } from './features/profile/profile.component';
import { SettingsComponent } from './features/settings/settings.component';
import { NotificationsComponent } from './features/notifications/notifications.component';

export const routes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'home', component: HomeComponent},
    { path: 'dailies', component: DailiesComponent},
    { path: 'calendar', component: CalendarComponent},
    { path: 'notifications', component: NotificationsComponent},
    { path: 'faq', component: FaqComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'settings', component: SettingsComponent}
];
