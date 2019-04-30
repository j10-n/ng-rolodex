import { Component } from "@angular/core";
import { BackendService } from "../../services/backend.service";

@Component({
  selector: "app-view-all-contacts",
  templateUrl: "./view-all-contacts.component.html",
  styleUrls: ["./view-all-contacts.component.scss"]
})
export class ViewAllContactsComponent {
  contacts: Object[] = [];

  constructor(private backend: BackendService) {
    this.backend.getContacts().then((res: Object[]) => {
      this.contacts = res;
      console.log("viewallcontacts", this.contacts);
    });
  }
}
