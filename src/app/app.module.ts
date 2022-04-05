import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';

import { IndexModule } from './components/index.module';
import { SurveyModule } from "./components/survey/survey.module";

import { IndexComponent } from './components/index.component';
import { ListComponent } from './components/survey/list.component';
import { AddEditComponent } from './components/survey/add_edit.component';

import { AuthModule } from "./components/auth/auth.module";
import { SignUpComponent } from './components/auth/signup.component';
import { SignInComponent } from './components/auth/signin.component';
import { AuthGuard } from "./components/auth/auth.guard";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IndexModule,
    SurveyModule,
    AuthModule,
    RouterModule.forRoot([
      { path: "", component: IndexComponent },
      { path: "survey/list", component: ListComponent },
      //{ path: "survey/:mode", component: AddEditComponent, canActivate: [AuthGuard]},
      //{ path: "survey/:mode/:id", component: AddEditComponent, canActivate: [AuthGuard] },
      { path: "survey/:mode", component: AddEditComponent },
      { path: "survey/:mode/:id", component: AddEditComponent },
      { path: "users/signup", component: SignUpComponent },
      { path: "users/signin", component: SignInComponent },
      { path: "**", redirectTo: "" }
    ])
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
