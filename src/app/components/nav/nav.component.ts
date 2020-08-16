import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  items : NbMenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { link : '/home', title : 'Home', icon : 'home' },
      {link : '/register', title : 'Register', icon : 'save-outline' },
      { title : 'Les profils de Geeks', icon : 'person-outline', children : [
        { link : '/profil/users', title : 'Listes des Geeks', icon : 'list-outline' },
      ] },
      { link : '/about', title : 'About', icon : 'alert-triangle' },
    ]
  }

}
