import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { CounterService } from './counter.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  activeUsers: string[] = [];
  inactiveUsers: string[] = [];
  activeToInactive: number;
  inactiveToActive: number;

  updateCountDisplay(num, changeTo) {
    if (changeTo === 'active') {
      this.inactiveToActive = num;
    } else {
      this.activeToInactive = num;
    }
  }

  constructor(private userService: UserService, private counterService: CounterService) {
    this.counterService.countUpdated.subscribe(
      (countObj: any) => {
        // console.log('countObj: ', countObj);
        this.updateCountDisplay(countObj.number, countObj.type)
      }
    );
  }

  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
    this.activeToInactive = this.counterService.activeToInactive;
    this.inactiveToActive = this.counterService.inactiveToActive;
  }

  


  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }

  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }
}
