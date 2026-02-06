import { Routes } from '@angular/router';
import { DashboardResume } from './components/dashboard-resume';
import { NotFound } from './components/not-found';
import { Home } from './components/home';
import { Coins } from './components/coins/coins';

export const routes: Routes = [
    {
        path: '',
        title: 'AngularX',
        component: Home
    },
    {
        path: 'dashboard',
        title: 'Dash board',
        component: DashboardResume
    },
        {
        path: 'coins',
        title: 'Coins',
        component: Coins
    },
    {
        path: '404',
        title: 'Not found',
        component: NotFound,
    },
    {
        path: '**',
        redirectTo: '404'
    }
];
