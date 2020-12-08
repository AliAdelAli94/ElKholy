import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProductsService } from 'src/app/services/Products.service';
import { CommonService } from 'src/app/services/common.service';

declare var $ : any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(public productService : ProductsService, public commonService : CommonService) { }

  ngOnInit() {  
  }

  ngAfterViewInit(): void {
    this.animateElements();
  }

  animateElements() {
    /*----------------------------------------
		 Hide Header
	----------------------------------------*/
	$( ".top-close-button" ).click(function( event ) {
    event.preventDefault();
      $( ".header-top-area" ).toggle();
    });
  
    /*----------------------------------------
       Sticky Menu Activation
    ---------------------------------*/
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 300) {
        $('.header-sticky').addClass('sticky');
      } else {
        $('.header-sticky').removeClass('sticky');
      }
    });
  
    /*----------------------------------------
      Off Canvas
    -------------------------------------------*/
    $(".off-canvas-btn").on('click', function () {
      $("body").addClass('fix');
      $(".off-canvas-wrapper").addClass('open');
    });
  
    $(".btn-close-off-canvas,.off-canvas-overlay").on('click', function () {
      $("body").removeClass('fix');
      $(".off-canvas-wrapper").removeClass('open');
    });
  
    /*----------------------------------------
      Responsive Mobile Menu
    ------------------------------------------*/
    //Variables
    var $offCanvasNav = $('.mobile-menu'),
    $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');
  
    //Add Toggle Button With Off Canvas Sub Menu
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');
  
    //Close Off Canvas Sub Menu
    $offCanvasNavSubMenu.slideUp();
  
    //Category Sub Menu Toggle
    $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
    var $this = $(this);
    if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
      e.preventDefault();
      if ($this.siblings('ul:visible').length){
        $this.parent('li').removeClass('active');
        $this.siblings('ul').slideUp();
      } else {
        $this.parent('li').addClass('active');
        $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
        $this.closest('li').siblings('li').find('ul:visible').slideUp();
        $this.siblings('ul').slideDown();
      }
    }
    });
  }
}
