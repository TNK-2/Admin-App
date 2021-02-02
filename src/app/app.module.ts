import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { from } from 'rxjs';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MesssagesComponent } from './messsages/messsages.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MemberDetailComponent,
    MesssagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
