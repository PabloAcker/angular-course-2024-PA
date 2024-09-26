import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';

interface IPerson {
  name:string
  lastName:string
  age?:number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'angular-course-2024-PA';
  sumNumber = 5;
  animals:string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

  person2: IPerson = {
    name: 'Juan',
    lastName: 'Perez',
    age: 25
  }

  students:number[] = [1,2,3,4,5,6]
  parents:number[] = [7,8,9,10]

  var1 = 0
  var2 = null
  var3 = 'hola'

  constructor(){
    const {name, age} = this.person2
    console.log('desestructuracion: ', name, age)

    let both = [...this.students, ...this.parents]
    console.log('spread operator: ', both)

    console.log('REST operatir: ', this.sum2(2,4,6))

    console.log('substract ', this.substract(8,4))

    console.log('Nullish Coalescing: ', this.var1 ?? this.var2)
    console.log('OR: ', this.var1 || this.var2)

    console.log('MAP:', this.animals.map( (animal)=>(animal + ' ' + 'new') ))
    console.log('FOREACH:', this.animals.forEach( (animal)=>(animal + 'new') ))
    console.log('FIND:', this.animals.find( (animal)=> animal ==='b' ))
    console.log('FILTER:', this.animals.filter( (animal)=> animal ==='a' ))
    console.log('INDEXOF:', this.animals.indexOf('c'))
  }
  
  public sum2(...persons:number[]){
    //return persons[0]+persons[1]
    return persons.reduce((acumulador,valorActual) => (acumulador + valorActual), 10)
    }    

  public sum(num1: number, num2: number): number {
    return num1 + num2 //a veces pide punto y coma y a veces no
  }  
  
  private substract(num1: number, num2: number): number{
    return num1 - num2
  }

  public getArray():void {
    const person: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
    const peerPersons = person.filter(p => p % 2 === 0);
    for (let i = 0; i < peerPersons.length; i++) {
      console.log('person = ', peerPersons[i]);
    }
  }
  
  person: IPerson = {
    name: 'a',
    lastName: 'b',
    age: 5
  }
}