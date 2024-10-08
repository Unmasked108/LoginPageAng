import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CarBuyingComponent } from './car-buying/car-buying.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'signup',
        pathMatch: 'full'
    },
    {
        path:'signup',
        component: SignupComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'car-buying',
        component: CarBuyingComponent

    }
];
