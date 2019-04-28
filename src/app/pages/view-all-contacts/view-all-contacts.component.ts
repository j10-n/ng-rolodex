import { Component } from "@angular/core";
import { BackendService } from "../../services/backend.service";

@Component({
  selector: "app-view-all-contacts",
  templateUrl: "./view-all-contacts.component.html",
  styleUrls: ["./view-all-contacts.component.scss"]
})
export class ViewAllContactsComponent {
  users: Object[] = [];

  constructor(private backend: BackendService) {
    this.backend.getUsers().then((res: Object[]) => {
      this.users = res;
      console.log("viewallcontacts", this.users);
    });
  }
}
