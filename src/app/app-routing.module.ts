import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { CreateContactsComponent } from "./pages/create-contacts/create-contacts.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { ViewAllContactsComponent } from "./pages/view-all-contacts/view-all-contacts.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "create-contacts", component: CreateContactsComponent },
  { path: "profile", component: ProfileComponent },
  { path: "view-all-contacts", component: ViewAllContactsComponent },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
