import { Component, OnInit } from '@angular/core';
import { User, UserRole } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  myRole = UserRole;
  newUser: User = new User()
  listUsers: User[] = []

  constructor(private userService: UserService) { }

  
  ngOnInit() {
    this.getUsers()
  }


  getUsers() {
    this.userService.getUsers()
      .subscribe(data => {
        this.listUsers = data
        console.log("list users component", this.listUsers)
      })
  }


  onAddUser() {
    this.userService.addUser(this.newUser)
      .subscribe(() =>
        console.log("newUser", this.newUser))
    this.newUser = new User()
    this.getUsers()
  }


  onUpdateUser(user: User) {
    this.userService.updateUser(user)
    .subscribe()
  }


  onRemoveUser(id: number, index: number) {
    this.userService.removeUser(id)
      .subscribe(() =>
        console.log("id to remove", id))
    this.listUsers.splice(index,1)
  }
}
