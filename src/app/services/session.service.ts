import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SessionService {
  user: {
    username: string;
    loggedIn: boolean;
  } = {
    username: "",
    loggedIn: false
  };

  constructor() {
    // check if user is in localStorage
    let userString = window.localStorage.getItem("user");
    try {
      if (userString) {
        this.user = JSON.parse(userString);
      } else {
        console.log("user was not found");
      }
    } catch (err) {
      console.log("could not parse user");
    }
  }

  setSession(user: { username: string }) {
    // save to memory
    this.user.username = user.username;
    this.user.loggedIn = true;

    // ng-rolodex: username, name, email, address, phone number

    // save to localStorage
    let userString = JSON.stringify(this.user);
    window.localStorage.setItem("user", userString);
  }

  // logout
  clearSession() {
    this.user.loggedIn = false;
    this.user.username = "";
    window.localStorage.removeItem("user");
  }

  // helper methods
  getSession() {
    return this.user;
  }

  isLoggedIn() {
    return this.user.loggedIn;
  }
}
