import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '@components/contact/contact.component';
import { HomeComponent } from '@components/home/home.component';
import { LoginComponent } from '@components/login/login.component';
import { ParticipantsComponent } from '@components/participants/participants.component';
import { ProfileComponent } from '@components/profile/profile.component';
import { RegistrationComponent } from '@components/registration/registration.component';
import { SponsoringComponent } from '@components/sponsoring/sponsoring.component';
import { TestingComponent } from '@testing/testing.component';

const routes: Routes = [
  { path: 'testing', component: TestingComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'participants', component: ParticipantsComponent },
  { path: 'sponsoring', component: SponsoringComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
