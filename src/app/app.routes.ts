import { Routes } from '@angular/router';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';

export const routes: Routes = [
    {
        path: 'template',
        component: TemplateFormComponent
    },
    {
        path: 'reactive',
        component: ReactiveFormComponent
    }
];
