import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { AddStudentComponent } from './page/dashboard/add-student/add-student.component';
import { ManageStudentComponent } from './page/dashboard/manage-student/manage-student.component';

export const routes: Routes = [
    {
        path: "login",
        component:LoginComponent
    },
    {
        path: "",
        component:LoginComponent
    },
    {
        path: "dashboard",
        component:DashboardComponent,
        children:[
            {
                path: "add-student",
                component:AddStudentComponent
            },
            {
                path:"manage-student",
                component:ManageStudentComponent
            }
        ]
    }
];
