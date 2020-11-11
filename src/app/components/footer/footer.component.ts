import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.animateElements();
  }

  animateElements() {
    /*--------------------------------
    Scroll To Top
	-------------------------------- */
    function scrollToTop() {
      var $scrollUp = $('.scroll-to-top'),
        $lastScrollTop = 0,
        $window = $(window);

      $window.on('scroll', function () {
        var topPos = $(this).scrollTop();
        if (topPos > $lastScrollTop) {
          $scrollUp.removeClass('show');
        } else {
          if ($window.scrollTop() > 200) {
            $scrollUp.addClass('show');
          } else {
            $scrollUp.removeClass('show');
          }
        }
        $lastScrollTop = topPos;
      });

      $scrollUp.on('click', function (evt) {
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        evt.preventDefault();
      });
    }
    scrollToTop();

  }
}
