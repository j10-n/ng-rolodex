import { Component } from "@angular/core";
import { BackendService } from "../../services/backend.service";

@Component({
  selector: "app-create-contacts",
  templateUrl: "./create-contacts.component.html",
  styleUrls: ["./create-contacts.component.scss"]
})
export class CreateContactsComponent {
  contacts: Object[] = [];

  newContact: {} = {};
  constructor(private backend: BackendService) {
    this.backend.getContacts().then((res: Object[]) => {
      this.contacts = res;
    });
  }

  createContact() {
    console.log("this.createContact", this.newContact);
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
