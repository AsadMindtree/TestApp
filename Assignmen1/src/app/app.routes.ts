import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';

export const routes: Routes = [
  {
    path: 'Login',
    component: Login,
  },
  {
    path: 'SignUp',
    component: Signup,
  },
];
