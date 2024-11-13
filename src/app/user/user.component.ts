import { Component, computed, EventEmitter, Input, input, Output, output} from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [HeaderComponent, CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  @Input({required: true}) user! : User;
  @Input({required: true}) selected!: boolean;
  
  @Output() select = new EventEmitter();
  //select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}