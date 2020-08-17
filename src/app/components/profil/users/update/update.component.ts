import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { User } from 'src/app/Models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  userForm : FormGroup;
  index : number;

  currentUser = new User();

  constructor(
    private _userService : UserService,
    private _builder : FormBuilder,
    private _router : Router,
    private _activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.index = this._activatedRoute.snapshot.params['id'];
    this.currentUser = this._userService.getUser(this.index);
    this.initForm();
  }

  private initForm() {
    this.userForm = this._builder.group(
      {
        pseudo : [this.currentUser.pseudo, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
        birthdate : [this.currentUser.birthdate, Validators.required],
        email : [this.currentUser.email, Validators.required, Validators.email],
        manga : this._builder.array([]),
        game : this._builder.array([])
      }
    );
    if(this.currentUser.manga && this.currentUser.manga.length > 0) {
      for(let i = 0; i <= this.currentUser.manga.length-1; i++) {
        this.getManga().push(new FormControl(this.currentUser.manga[i], [Validators.required]))
      }
    };
    if(this.currentUser.game && this.currentUser.game.length > 0) {
      for(let i = 0; i <= this.currentUser.game.length-1; i++) {
        this.getGame().push(new FormControl(this.currentUser.game[i], [Validators.required]))
      }
    };
  }

  onSubmit() {
    const newUser = new User();
    newUser.pseudo = this.userForm.value['pseudo'];
    newUser.birthdate = this.userForm.value['birthdate'];
    newUser.email = this.userForm.value['email'];
    newUser.manga = this.userForm.value['manga'] ? this.userForm.value['manga'] : [];
    newUser.game = this.userForm.value['game'] ? this.userForm.value['game'] : [];
    this._userService.updateUser(newUser, this.index);
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
