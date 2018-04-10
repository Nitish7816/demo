import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { TestComponent } from './test/test.component';
import { TestHttpComponent } from './test-http/test-http.component';
import { AbcComponent} from './abc/abc.component';
import {FormBuilder} from '@angular/forms';
import {FormBuilderCompComponent} from './forms/formBuilderComp.component';
import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginModalComponent} from './login/login-modal/login-modal.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup',      component: SignupComponent },
  { path: 'welcome',      component: WelcomeComponent },
  { path: 'test',      component: TestComponent },
  { path: 'testHttp',      component: TestHttpComponent },
  { path: 'abc',      component: AbcComponent },
  {path: 'form', component: FormBuilderCompComponent},
  { path: 'modal', component: LoginModalComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    SignupComponent,
    TestComponent,
    TestHttpComponent,
    AbcComponent,
    FormBuilderCompComponent,
    LoginModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  // exports: [LoginModalComponent],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
  entryComponents: [LoginModalComponent]

})
export class AppModule { }
