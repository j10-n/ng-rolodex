import { Component } from "@angular/core";
import { BackendService } from "../../services/backend.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  contacts: Object[] = [];

  constructor(private backend: BackendService) {
    this.backend.getContacts().then((res: Object[]) => {
      this.contacts = res;
      console.log("viewallcontacts", this.contacts);
    });
  }
}
