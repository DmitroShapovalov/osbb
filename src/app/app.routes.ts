import { Routes } from '@angular/router';
import {isAuthenticatedGuard} from "./shared/guards/auth.guard";

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'home',
    canActivate: [isAuthenticatedGuard()],
    loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent),
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];
