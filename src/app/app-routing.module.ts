import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalsComponent } from './pages/hospitals/hospitals.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  { path: 'hospitals', component: HospitalsComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
