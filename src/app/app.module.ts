import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { TestComponent } from './test/test.component';
import { TestHttpComponent } from './test-http/test-http.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup',      component: SignupComponent },
  { path: 'welcome',      component: WelcomeComponent },
  { path: 'test',      component: TestComponent },
  { path: 'testHttp',      component: TestHttpComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    SignupComponent,
    TestComponent,
    TestHttpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
