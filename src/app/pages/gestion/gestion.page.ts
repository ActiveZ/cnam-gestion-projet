import { Component, OnInit } from '@angular/core';
import { User, UserRole } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
})
export class GestionPage implements OnInit {

  user: User;
  myRole = UserRole;
  segment: any = "projects"

  constructor(
    private auth: AuthService
    ) { }

  ngOnInit() {
    this.user = this.auth.currentUser
  }

}
