import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ParticipantsComponent } from './participants/participants.component';
import { RegistrationComponent } from './registration/registration.component';
import { SponsoringComponent } from './sponsoring/sponsoring.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent},
  { path: 'participants', component: ParticipantsComponent},
  { path: 'sponsoring', component: SponsoringComponent},
  { path: 'Contact', component: ContactComponent},
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
