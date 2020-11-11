import { Component, AfterViewInit, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ElKoholyPortal';

  constructor(public translate: TranslateService) {
    translate.use('ar');
  }
  ngOnInit() {

  }
  ngAfterViewInit(): void {
this.animateElements();
  }

  animateElements() {
    function add_chatinline() {
      var hccid = 31525359; var nt = document.createElement("script"); nt.async = true;
      nt.src = "https://mylivechat.com/chatinline.aspx?hccid=" + hccid;
      var ct = document.getElementsByTagName("script")[0]; ct.parentNode.insertBefore(nt, ct);
    }
    add_chatinline();
  }

}
