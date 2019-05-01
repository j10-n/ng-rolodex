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
      this.contacts = res.sort((a, b) => {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      console.log("viewallcontacts", this.contacts);
    });
  }
}
