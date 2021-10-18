import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  year: number[] = [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  entrar(){
    this.router.navigate(['/home'])
  }


  ano(){
    for(let i = 1900; i < 2021; i++){
      for(let j = 0; j < 121; j++) {
       this.year[j] = i
      }
    }

  }

}
