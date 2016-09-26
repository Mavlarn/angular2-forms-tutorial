import { Routes } from '@angular/router';

import { TemplateFormsRoutes } from 'app/template-forms/template-forms.routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/template-forms',
        pathMatch: 'full'
    },
  ...TemplateFormsRoutes
];
