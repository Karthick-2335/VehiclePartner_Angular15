import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataTableComponent } from './data-table/data-table.component';
import { FormsFromsCollapseComponent } from './forms-froms-collapse/forms-froms-collapse.component';
import { FormsLoginComponent } from './forms-login/forms-login.component';
import { FormsMultipleFormsComponent } from './forms-multiple-forms/forms-multiple-forms.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { BranchComponent } from './branch/branch.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'datatable', component: DataTableComponent },
  { path: 'formsCollapse', component: FormsFromsCollapseComponent },
  { path: 'formsLogin', component: FormsLoginComponent },
  { path: 'multipleForms', component: FormsMultipleFormsComponent },
  { path: 'Register', component: RegistrationComponent },
  { path: 'Profile', component: ProfileComponent },
  { path: 'Branch', component: BranchComponent },
  { path: 'Vehicle', component: VehicleComponent },
  { path: 'VehicleList', component: VehicleListComponent },
  { path: 'Employee', component: EmployeeComponent },
  { path: 'EmployeeList', component: EmployeeListComponent },
  { path: '',   redirectTo: '/formsLogin', pathMatch: 'full' }, //Default Page
  { path: '**', pathMatch: 'full',component: PageNotFoundComponent } //redirect to 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
