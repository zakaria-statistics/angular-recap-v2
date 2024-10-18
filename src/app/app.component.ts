import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  constructor(private router:Router){
  }
  
  title = 'router-app-v2';
  
  goToContact(){
    this.router.navigate(['contact']);
  }
}
