import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src =  "/assets/js/main.js";
      document.getElementsByTagName('head')[0].appendChild(script);

  }

}
