import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ParticipantsComponent } from './participants/participants.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { SponsoringComponent } from './sponsoring/sponsoring.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  { path: 'testing', component: TestingComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent},
  { path: 'participants', component: ParticipantsComponent},
  { path: 'sponsoring', component: SponsoringComponent},
  { path: 'Contact', component: ContactComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
