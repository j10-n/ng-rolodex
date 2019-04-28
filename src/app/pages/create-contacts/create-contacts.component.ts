import { Component } from "@angular/core";
import { BackendService } from "../../services/backend.service";

@Component({
  selector: "app-create-contacts",
  templateUrl: "./create-contacts.component.html",
  styleUrls: ["./create-contacts.component.scss"]
})
export class CreateContactsComponent {
  users: Object[] = [];

  newUser: { username: string; name: string } = { username: "", name: "" };
  constructor(private backend: BackendService) {
    this.backend.getUsers().then((res: Object[]) => {
      this.users = res;
    });
  }

  createUser() {
    console.log("this.createUser", this.newUser);
    this.backend
      .createUser(this.newUser)
      .then(() => {
        return this.backend.getUsers();
      })
      .then((res: Object[]) => {
        this.users = res;
      });
  }
}
