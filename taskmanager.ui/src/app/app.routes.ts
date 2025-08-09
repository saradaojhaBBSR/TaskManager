import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { About } from './about/about';
import { Profile } from './profile/profile';

export const routes: Routes = [ 
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: Dashboard },
    { path: 'about', component: About },
    { path: 'profile', component: Profile }    
];
