import { Injectable, EventEmitter } from "@angular/core";
import { CounterService } from './counter.service';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
    // count: number;

    countUpdated = new EventEmitter<number>();

    constructor(private counterService: CounterService) {
    }

    onSetUserStatusTo(id: number, type: string) {
        if (type === 'active') {
            this.activeUsers.push(this.inactiveUsers[id]);
            this.inactiveUsers.splice(id, 1);
            this.counterService.changeCount(type);
        } else {
            this.inactiveUsers.push(this.activeUsers[id]);
            this.activeUsers.splice(id, 1);
            this.counterService.changeCount(type);
        }
    }

    // onSetUserToActive(id: number) {
    //     this.activeUsers.push(this.inactiveUsers[id]);
    //     this.inactiveUsers.splice(id, 1);
    //     // this.countUpdated.emit(this.count);
    //     this.counterService.changeCount();
    // }

    // onSetUserToInactive(id: number) {
    //     this.inactiveUsers.push(this.activeUsers[id]);
    //     this.activeUsers.splice(id, 1);
    //     // this.countUpdated.emit(this.count);
    //     this.counterService.changeCount();
    // }
}