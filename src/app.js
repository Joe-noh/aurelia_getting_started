export class Welcome {
  constructor() {
    this.heading = 'Welcome to Aurelia Navigation App';
    this.firstName = 'John';
    this.lastName  = 'Doe';
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  welcome() {
    alert(`Welcome ${this.fullName}!`);
  }
}
