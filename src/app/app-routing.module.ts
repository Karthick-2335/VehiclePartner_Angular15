import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsLoginComponent } from './forms-login/forms-login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { BranchComponent } from './branch/branch.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard] },
  { path: 'formsLogin', component: FormsLoginComponent },
  { path: 'Register', component: RegistrationComponent },
  { path: 'Profile', component: ProfileComponent ,canActivate:[AuthGuard]},
  { path: 'Branch', component: BranchComponent,canActivate:[AuthGuard] },
  { path: 'Vehicle', component: VehicleComponent,canActivate:[AuthGuard] },
  { path: 'VehicleList', component: VehicleListComponent,canActivate:[AuthGuard] },
  { path: 'Employee', component: EmployeeComponent,canActivate:[AuthGuard] },
  { path: 'EmployeeList', component: EmployeeListComponent,canActivate:[AuthGuard] },
  { path: '',   redirectTo: '/formsLogin', pathMatch: 'full' }, //Default Page
  { path: '**', pathMatch: 'full',component: PageNotFoundComponent } //redirect to 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
