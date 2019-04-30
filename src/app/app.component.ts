import { Component } from "@angular/core";
import { BackendService } from "./services/backend.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title: string = "ng-rolodex";
  contacts: Object[] = [];
  newContact: {
    name: string;
    email: string;
    mobile: string;
    address: string;
  } = { name: "", email: "", mobile: "", address: "" };

  constructor(private backend: BackendService) {
    this.backend.getContacts().then((res: Object[]) => {
      this.contacts = res;
    });
  }

  createContact() {
    this.backend
      .createContact(this.newContact)
      .then(() => {
        return this.backend.getContacts();
      })
      .then((res: Object[]) => {
        this.contacts = res;
      });
  }
}
