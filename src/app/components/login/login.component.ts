import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  year: number[] = [];

  constructor() { }

  ngOnInit(){
  }


  ano(){
    for(let i = 1900; i < 2021; i++){
      for(let j = 0; j < 121; j++) {
       this.year[j] = i
      }
    }

  }

}
