import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  // { path: '**', component: PageNotFoundComponent}
  // { path: 'login', component: LoginComponent}
  // { path: 'participants', component: ParticipantsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
