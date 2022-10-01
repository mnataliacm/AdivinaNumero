import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  numero: number = 0;
  numSecret: number = Math.floor(Math.random() * 1000) + 1;
  
  constructor() {}

  suma() {
    this.numero++;
  }

  resta() {
    this.numero--;
  }

}
