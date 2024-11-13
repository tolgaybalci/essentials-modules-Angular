import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { TasksService } from './tasks/tasks.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent,TasksComponent, 
    TaskComponent, NewTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 users = DUMMY_USERS;
 selectedUserId? : string; 

 get selectedUser(){
  return this.users.find((user)=> user.id === this.selectedUserId)!;
 }

 onSelectUser(id: string){
    this.selectedUserId = id;
 }
}
