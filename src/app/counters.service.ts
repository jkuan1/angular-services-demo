export class CounterService {
    activeToInactive = 0;
    inactiveToActive = 0;

    addActive(){
        this.activeToInactive ++;
        console.log('Active to Inactive: ' + this.activeToInactive);
    }

    addInactive() {
        this.inactiveToActive++;
        console.log('Inactive to Active: ' + this.inactiveToActive);
    }
}