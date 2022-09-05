// utility module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// angular material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';

// firebase modules
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

// components
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarItemComponent } from './components/car-item/car-item.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AuthenticationPageComponent } from './components/authentication-page/authentication-page.component';
import { AccountComponent } from './components/account/account.component';

// firebase functions
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

// environment variables
import { environment } from '../environments/environment';

// services
import { AuthService } from './services/auth.service';
import { Permissions } from './services/auth.service';
import { CarsInfoService } from './services/cars-info.service';
import { WindowService } from './services/window.service';

// ui styles
import { UiModule } from '../../../../libs/ui/src/lib/ui.module';

const firebaseConfig = {
  apiKey: environment.apiKey,
  authDomain: environment.authDomain,
  projectId: environment.projectId,
  storageBucket: environment.storageBucket,
  messagingSenderId: environment.messagingSenderId,
  appId: environment.appId,
  measurementId: environment.measurementId,
};

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    SidebarComponent,
    MainpageComponent,
    CarsComponent,
    CarItemComponent,
    LandingPageComponent,
    AuthenticationPageComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatCardModule,
    MatPaginatorModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    provideFirestore(() => getFirestore()),
    UiModule,
    MatSelectModule,
  ],
  providers: [AuthService, Permissions, CarsInfoService, WindowService],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
