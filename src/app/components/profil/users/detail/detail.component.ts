import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  currentUser : User = new User();

  constructor(
    private _userService : UserService,
    private _routing : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.currentUser = this._userService.getUser(this._routing.snapshot.params['id']);
  }

  

}
