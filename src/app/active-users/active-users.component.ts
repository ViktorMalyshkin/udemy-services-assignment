import {Component} from '@angular/core'; import {UserService} from '../services/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
  users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private userService: UserService) {
    this.users = userService.activeUsers;
  }


  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id);
    // this.userSetToInactive.emit(id);
  }
}
