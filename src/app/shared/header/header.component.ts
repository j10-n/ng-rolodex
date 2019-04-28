import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { SessionService } from "../../services/session.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  user: { username: string } = { username: "" };

  constructor(
    private router: Router,
    private auth: AuthService,
    private session: SessionService
  ) {
    this.user = this.session.getSession();
  }

  isLoggedIn() {
    return this.session.isLoggedIn();
  }

  login() {
    return this.router.navigate(["/login"]);
  }

  logout() {
    return this.auth.logout;
  }
}
