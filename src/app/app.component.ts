import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HistoryCalculatorComponent } from './history-calculator/history-calculator.component';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';

interface IPersonn {
  name:string
  lastName:string
  age?:number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent, CalculatorComponent, HistoryCalculatorComponent, CommonModule, PersonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'angular-course-2024-PA';
  sumNumber = 5;
  animals:string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

  userCardCreated: boolean = true

  people = [
    { name: 'Ana', gender: 'female', age: 19 },
    { name: 'Emanuel', gender: 'male', age: 15 },
    { name: 'María', gender: 'female', age: 18 },
    { name: 'Nicolas', gender: 'male', age: 17 },
    { name: 'Lucía', gender: 'female', age: 25 }
  ]

  person2: IPersonn = {
    name: 'Juan',
    lastName: 'Perez',
    age: 25
  }

  result:number = 0;
  history: string[] = ['','',''];

  students:number[] = [1,2,3,4,5,6]
  parents:number[] = [7,8,9,10]

  var1 = 0
  var2 = null
  var3 = 'hola'

  constructor(){
    const {name, age} = this.person2
    //console.log('desestructuracion: ', name, age)

    let both = [...this.students, ...this.parents]
    //console.log('spread operator: ', both)

    //console.log('REST operatir: ', this.sum2(2,4,6))

    //console.log('substract ', this.substract(8,4))

    //console.log('Nullish Coalescing: ', this.var1 ?? this.var2)
    //console.log('OR: ', this.var1 || this.var2)

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

  public receiveData(data:any){
    console.log('Print in father component', data)
  }

  public onResult(event:any){
    console.log('event from child:', event)
    this.result = event ?? 0

    // Guardamos el historial de forma circular (últimos 3 resultados)
    this.history.pop(); // Quitamos el último elemento
    this.history.unshift(`Resultado: ${this.result}`); // Añadimos el nuevo al inicio
  }
  
  person1: IPersonn = {
    name: 'a',
    lastName: 'b',
    age: 5
  }


  get totalFemale(): number {
    return this.people.filter(person => person.gender === 'female').length;
  }

  get totalMale(): number {
    return this.people.filter(person => person.gender === 'male').length;
  }

  get totalWithDiscount(): number {
    return this.people.filter(person => person.age > 18).length;
  }

  public removePersonsWithDiscount() {
    this.people = this.people.filter(person => person.age <= 18);
  }
}