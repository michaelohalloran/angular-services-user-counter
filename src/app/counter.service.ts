import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CounterService {
    activeToInactive: number;
    inactiveToActive: number;

    countUpdated = new EventEmitter<{number: number, type: string}>();

    constructor() {
        this.activeToInactive = 0;
        this.inactiveToActive = 0;
    }

    changeCount(type: string) {
        if (type === 'active') {
            this.activeToInactive++;
            let number = this.activeToInactive;
            this.countUpdated.emit({number, type});
        } else {
            this.inactiveToActive++;
            let number = this.inactiveToActive;
            this.countUpdated.emit({number, type});
        }
        // console.log('count is now: ', this.count);
    }
}
