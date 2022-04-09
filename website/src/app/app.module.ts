// angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// firebase
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {
  provideAnalytics,
  getAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';

// custom modules
import { MaterialModule } from './modules/material/material.module';
import { AppRoutingModule } from './app-routing.module';

// app components
import { AppComponent } from './app.component';
import { LoginComponent } from '@components/login/login.component';
import { ParticipantsComponent } from '@components/participants/participants.component';
import { HomeComponent } from '@components/home/home.component';
import { ContactComponent } from '@components/contact/contact.component';
import { SponsoringComponent } from '@components/sponsoring/sponsoring.component';
import { SponsorsComponent } from '@components/sponsors/sponsors.component';
import { RegistrationComponent } from '@components/registration/registration.component';
import { ProfileComponent } from '@components/profile/profile.component';

// environments
import { environment } from '../environments/environment';
import { TestingComponent } from './testing/testing.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { PrettyJsonPipe } from './pipes/pretty-json.pipe';
import { NotificationComponent } from './components/notifications/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ParticipantsComponent,
    HomeComponent,
    ContactComponent,
    SponsoringComponent,
    SponsorsComponent,
    ProfileComponent,
    TestingComponent,
    NotificationsComponent,
    PrettyJsonPipe,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [ScreenTrackingService, UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
