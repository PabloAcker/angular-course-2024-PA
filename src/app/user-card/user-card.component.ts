import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() name:string = ''
  @Input() email:string = ''

  @Output() sendData = new EventEmitter()


  public onSendData(){
    this.sendData.emit('Hi from child component')
  }    
}
