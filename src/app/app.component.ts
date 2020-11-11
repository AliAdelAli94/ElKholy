import { Component, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'ElKoholyPortal';

  constructor(public translate: TranslateService) {
    translate.use('ar');
  }
  ngAfterViewInit(): void {

    let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src =  "/assets/js/main.js";
      document.getElementsByTagName('head')[0].appendChild(script);

  }

  
}
