import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, DoCheck, AfterContentInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: "app-user-card",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit{
  @Input() name:string = ''
  @Input() email:string = ''

  @Output() sendData = new EventEmitter()

  password:string = ''

  constructor() {
    console.log("user card constructor");
  }

  ngOnInit(): void {
    console.log("user card on init");

    // this.password = this.name + ' ' +  this.email + ' PASSWORD'
  }
  ngOnDestroy(): void {
    console.log('user card Destroy')  
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CHANGES:', changes)
    this.password = changes['name'].currentValue + ' ' + changes['email'].currentValue + ' PASSWORD'
  }

  ngDoCheck(): void {
    console.log('DO CHECK user card')  
   }
   ngAfterContentInit(): void {
       console.log('NG AFTER CONTENT INIT')
   }

  public onSendData(){
    this.sendData.emit('Hi from child component')
  }    
}
