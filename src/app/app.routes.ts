import { Routes } from '@angular/router';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./components/login/login.component').then(c => c.LoginComponent),
        canActivate: [
            authGuard
        ]
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./components/dashboard/dashboard.component').then(comp => comp.DashboardComponent),
    }
];
