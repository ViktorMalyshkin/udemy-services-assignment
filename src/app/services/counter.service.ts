export class CounterService {
  counterActiveToInactive: number = 0;
  counterInactiveToActive: number = 0;

  constructor() { }

  onCounterActiveToInactiveActions() {
    ++this.counterActiveToInactive;
    console.log('Active To Inactive actions: ', this.counterActiveToInactive);
  }

  onCounterInactiveToActiveActions() {
    ++this.counterInactiveToActive;
    console.log('Inactive To Active actions: ', this.counterInactiveToActive);
  }
}
