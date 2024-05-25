import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrl: './page-one.component.css'
})
export class PageOneComponent {

  constructor(private router: Router){}

  goToHome(){
    this.router.navigate([''])
  }

}
