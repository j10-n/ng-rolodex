import { Component } from "@angular/core";
import { BackendService } from "./services/backend.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title: string = "ng-rolodex";
  users: Object[] = [];
  newUser: {
    username: string;
    name: string;
    email: string;
    address: string;
  } = { username: "", name: "", email: "", address: "" };

  constructor(private backend: BackendService) {
    this.backend.getUsers().then((res: Object[]) => {
      this.users = res;
    });
  }

  createUser() {
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
