import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ParticipantsComponent } from './participants/participants.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  // { path: '**', component: PageNotFoundComponent}
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent},
  { path: 'participants', component: ParticipantsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
