import { Injectable } from '@angular/core';
import { User } from '../Models/user.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private listUser : User[] = [
    {
      firstName : 'Rémi',
      lastName : 'Dewinckeleer',
      pseudo : 'Remidwr',
      birthdate : new Date(1989, 12, 18),
      email : 'remidwr@gmail.com',
      password : 'Test1234='
    },
    {
      firstName : 'Chris',
      lastName : 'Nolan',
      pseudo : 'Cnolan',
      birthdate : new Date(1970, 7, 30),
      email : 'chrisnolan@interstellar.com',
      password : 'Test1234='
    },
    {
      firstName : 'Bruce',
      lastName : 'Wayne',
      pseudo : 'Batman',
      birthdate : new Date(1939, 5, 27),
      email : 'batman@dc.com',
      password : 'Test1234='
    }
  ]

  userSubject = new Subject<User[]>();

  emitUser() {
    this.userSubject.next(this.listUser);
  }

  addUser(user : User) {
    this.listUser.push(user);
    this.emitUser();
  }

  getUser(id : number) : User {
    return this.listUser[id];
  }

  constructor() { }
}
