import { Injectable } from "@angular/core";
import { CounterService } from "./counters.service";

@Injectable()
export class UserService {

  constructor(private counterService: CounterService) {}

  activeUsers = ["Max", "Anna"];
  inactiveUsers = ["Chris", "Manu"];

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.addActive();
  }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.addInactive();
  }
}
