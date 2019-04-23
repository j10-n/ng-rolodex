import { Component } from "@angular/core";
import { BackendService } from "./services/backend.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title: string = "ng-rolodex";
  smokeTest: string;
  users: Object[] = [];
  newUser: { username: string } = { username: "" };

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
