import { Component } from '@angular/core';

@Component({
  selector: 'tnp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  title = 'Time Never Pause';

  currentTime = Date.now();
  currentDate = Date.now();
  currentMillSecond = Date.now();

  timer = setInterval(() => {
    this.currentTime = Date.now();
    this.currentMillSecond = Date.now();
  }, 50);
  
}
