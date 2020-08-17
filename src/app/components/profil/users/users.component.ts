import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userList : User[];

  userSubscription : Subscription;

  constructor(
    private _userService : UserService
  ) { }

  ngOnInit(): void {
    this.userSubscription = this._userService.userSubject.subscribe(
      (listFromService : User[]) => {this.userList = listFromService; }
    )
    this._userService.emitUser();
  }

  removeUser (id : number) {
    this._userService.removeUser(id);
  }

}
