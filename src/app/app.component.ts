import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task';
  result = 0;

  getNum(event) {
    this.result = this.calculateFac(event.target.value);
  }


  calculateFac(num) {
    if (num >= 1) {
      return num * this.calculateFac(num - 1)
    }
    else {
      return 1;
    }
  }
}
