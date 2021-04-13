import {Component, EventEmitter, Input, Output} from '@angular/core'; import {UserService} from '../services/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent {
  users: string[];
  // userSetToActive = new EventEmitter<number>();
  // private userService: UserService = new UserService();

  constructor(private userService: UserService) {
  this.users = userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
    // this.userSetToActive.emit(id);
  }
}
