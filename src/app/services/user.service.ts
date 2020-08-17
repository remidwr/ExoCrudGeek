import { Injectable } from '@angular/core';
import { User } from '../Models/user.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private listUser : User[] = [
    {
      pseudo : 'Remidwr',
      birthdate : new Date(1989, 12, 18),
      email : 'remidwr@gmail.com',
      manga : ["L''Attaque des Titans", 'Death Note', 'Dragon Ball Z'],
      game : ['The Witcher', 'Counter Strike']
    },
    {
      pseudo : 'ChrisNolan',
      birthdate : new Date(1970, 7, 30),
      email : 'chrisnolan@interstellar.com',
      manga : ['Naruto', 'Fullmetal Alchemist', 'Bleach'],
      game : ['Red Dead Redemption', 'Doom']
    },
    {
      pseudo : 'Batman',
      birthdate : new Date(1939, 5, 27),
      email : 'batman@dc.com',
      manga : ['One Piece', 'Code Geass', 'One Punch Man'],
      game : ['Grand Theft Auto', 'The Last of Us']
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

  updateUser(user : User, id : number) {
    this.listUser[id] = user;
  }

  removeUser(id : number) {
    this.listUser.splice(id, 1);
    this.emitUser();
  }

  constructor() { }
}
