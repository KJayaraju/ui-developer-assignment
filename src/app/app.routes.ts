import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TemplatesListComponent } from './pages/templates-list/templates-list.component';
import { CreateTemplateComponent } from './pages/create-template/create-template.component';
import { EditTemplateComponent } from './pages/edit-template/edit-template.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'templates', component: TemplatesListComponent },
      { path: 'create-template', component: CreateTemplateComponent },
      { path: 'edit-template/:index', component: EditTemplateComponent },
      { path: 'login', component: LoginComponent },
      { path: '**', redirectTo: 'login' }

    ]
  }
];
