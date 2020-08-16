import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { User } from 'src/app/Models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm : FormGroup;

  constructor(
    private _userService : UserService,
    private _builder : FormBuilder,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.userForm = this._builder.group(
      {
        pseudo : ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
        birthdate : ['', Validators.required],
        email : ['', Validators.required],
        manga : this._builder.array([]),
        game : this._builder.array([])
      }
    )
  }

  Submit() {
    const newUser = new User();
    newUser.pseudo = this.userForm.value['pseudo'];
    newUser.birthdate = this.userForm.value['birthdate'];
    newUser.email = this.userForm.value['email'];
    newUser.manga = this.userForm.value['manga'] ? this.userForm.value['manga'] : [];
    newUser.game = this.userForm.value['game'] ? this.userForm.value['game'] : [];
    this._userService.addUser(newUser);
    this._router.navigate(['/profil/users']);
  }

  getManga() {
    return this.userForm.get('manga') as FormArray;
  }

  AddManga() {
    const newManga = this._builder.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]);
    this.getManga().push(newManga);
  }

  RemoveManga(i : number) {
    this.getManga().removeAt(i);
  }

  getGame() {
    return this.userForm.get('game') as FormArray;
  }

  AddGame() {
    const newGame = this._builder.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]);
    this.getGame().push(newGame);
  }

  RemoveGame(i : number) {
    this.getGame().removeAt(i);
  }

}
