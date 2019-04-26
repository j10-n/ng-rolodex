import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

// Shared Components
import { HeaderComponent } from "./shared/header/header.component";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CreateContactsComponent } from "./pages/create-contacts/create-contacts.component";
import { HomeComponent } from "./pages/home/home.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { ViewAllContactsComponent } from "./pages/view-all-contacts/view-all-contacts.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateContactsComponent,
    HomeComponent,
    ProfileComponent,
    ViewAllContactsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
