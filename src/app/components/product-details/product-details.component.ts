import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/services/Products.service';
import { Product } from 'src/app/Models/Product';
declare var $: any;
declare var $html: any;
declare var $rows: any;
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, AfterViewInit {
  productId: number;
  productData: Product;
  seasonString: string = "";
  constructor(private router: ActivatedRoute, public productService: ProductsService, private route: Router) {
    this.route.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit() {
    let queryStringSegments: string[] = [];
    queryStringSegments = window.location.href.split('/');
    this.productId = parseInt(queryStringSegments[queryStringSegments.length - 1]);
    if (this.productId) {
      this.productData = this.productService.getProductbyId(this.productId);
      for (let i = 0; i < this.productData.Seasons.length; i++) {
        if(i!=this.productData.Seasons.length - 1)
          this.seasonString += this.productData.Seasons[i] + " - ";
        else
          this.seasonString += this.productData.Seasons[i] + ". ";

      }
   

    }

  }
  changeProduct(id) {
    this.productData = this.productService.getProductbyId(id);
    this.animateElements();
  }
  ngAfterViewInit() {
    this.animateElements();
    let id = $('.tab-pane')[0].id;
    $('#'+id).addClass("show active");
    let linkId = $('.nav-link')[0].id;
    $('#'+linkId).addClass("active");

  }


  animateElements() {

    var $html = $('html');
    var $body = $('body');
    var $elementCarousel = $('.obrien-slider, .product-slider');
    // Check if element exists
    $.fn.elExists = function () {
      return this.length > 0;
    };

    /*For RTL*/
    if ($html.attr('dir') == 'rtl' || $body.attr('dir') == 'rtl') {
      $elementCarousel.attr('dir', 'rtl');
    }
    if ($elementCarousel.elExists()) {
      var slickInstances = [];

      /*For RTL*/
      if ($html.attr('dir') == 'rtl' || $body.attr('dir') == 'rtl') {
        $elementCarousel.attr('dir', 'rtl');
      }

      $elementCarousel.each(function (index, element) {
        var $this = $(this);

        // Carousel Options

        var $options = typeof $this.data('slick-options') !== 'undefined' ? $this.data('slick-options') : '';

        var $spaceBetween = $options.spaceBetween ? parseInt($options.spaceBetween, 10) : 0,
          $spaceBetween_xl = $options.spaceBetween_xl ? parseInt($options.spaceBetween_xl, 10) : 0,
          $rowSpace = $options.rowSpace ? parseInt($options.rowSpace, 10) : 0,
          //  $rows = $options.rows ? $options.rows : false,
          $vertical = $options.vertical ? $options.vertical : false,
          $focusOnSelect = $options.focusOnSelect ? $options.focusOnSelect : false,
          $pauseOnHover = $options.pauseOnHover ? $options.pauseOnHover : false,
          $pauseOnFocus = $options.pauseOnFocus ? $options.pauseOnFocus : false,
          $asNavFor = $options.asNavFor ? $options.asNavFor : '',
          $fade = $options.fade ? $options.fade : false,
          $autoplay = $options.autoplay ? $options.autoplay : false,
          $autoplaySpeed = $options.autoplaySpeed ? parseInt($options.autoplaySpeed, 10) : 5000,
          $swipe = $options.swipe ? $options.swipe : true,
          $swipeToSlide = $options.swipeToSlide ? $options.swipeToSlide : true,
          $touchMove = $options.touchMove ? $options.touchMove : false,
          $verticalSwiping = $options.verticalSwiping ? $options.verticalSwiping : true,
          $draggable = $options.draggable ? $options.draggable : true,
          $arrows = $options.arrows ? $options.arrows : false,
          $dots = $options.dots ? $options.dots : false,
          $adaptiveHeight = $options.adaptiveHeight ? $options.adaptiveHeight : true,
          $infinite = $options.infinite ? $options.infinite : false,
          $centerMode = $options.centerMode ? $options.centerMode : false,
          $centerPadding = $options.centerPadding ? $options.centerPadding : '',
          $variableWidth = $options.variableWidth ? $options.variableWidth : false,
          $speed = $options.speed ? parseInt($options.speed, 10) : 500,
          $appendArrows = $options.appendArrows ? $options.appendArrows : $this,
          $prevArrow =
            $arrows === true ?
              $options.prevArrow ?
                '<span class="' +
                $options.prevArrow.buttonClass +
                '"><i class="' +
                $options.prevArrow.iconClass +
                '"></i></span>' :
                '<button class="tty-slick-text-btn tty-slick-text-prev"><i class="ion-chevron-left"></i></span>' :
              '',
          $nextArrow =
            $arrows === true ?
              $options.nextArrow ?
                '<span class="' +
                $options.nextArrow.buttonClass +
                '"><i class="' +
                $options.nextArrow.iconClass +
                '"></i></span>' :
                '<button class="tty-slick-text-btn tty-slick-text-next"><i class="ion-chevron-right"></i></span>' :
              '',
          $rows = $options.rows ? parseInt($options.rows, 10) : 1,
          $rtl = $options.rtl || $html.attr('dir="rtl"') || $body.attr('dir="rtl"') ? true : false,
          $slidesToShow = $options.slidesToShow ? parseInt($options.slidesToShow, 10) : 1,
          $slidesToScroll = $options.slidesToScroll ? parseInt($options.slidesToScroll, 10) : 1;

        /*Responsive Variable, Array & Loops*/
        var $responsiveSetting =
          typeof $this.data('slick-responsive') !== 'undefined' ? $this.data('slick-responsive') : '',
          $responsiveSettingLength = $responsiveSetting.length,
          $responsiveArray = [];
        for (var i = 0; i < $responsiveSettingLength; i++) {
          $responsiveArray[i] = $responsiveSetting[i];
        }

        // Adding Class to instances
        $this.addClass('slick-carousel-' + index);
        $this.parent().find('.slick-dots').addClass('dots-' + index);
        $this.parent().find('.slick-btn').addClass('btn-' + index);

        if ($spaceBetween != 0) {
          $this.addClass('slick-gutter-' + $spaceBetween);
        }
        if ($spaceBetween_xl != 0) {
          $this.addClass('slick-gutter-xl-' + $spaceBetween_xl);
        }
        var $slideCount = null;
        $this.on('init', function (event, slick) {
          $this.find('.slick-active').first().addClass('first-active');
          $this.find('.slick-active').last().addClass('last-active');
          $slideCount = slick.slideCount;
          if ($slideCount <= $slidesToShow) {
            $this.children('.slick-dots').hide();
          }
          var $firstAnimatingElements = $('.slick-slide').find('[data-animation]');
          doAnimations($firstAnimatingElements);
        });

        $this.slick({
          slidesToShow: $slidesToShow,
          slidesToScroll: $slidesToScroll,
          asNavFor: $asNavFor,
          autoplay: $autoplay,
          autoplaySpeed: $autoplaySpeed,
          speed: $speed,
          infinite: $infinite,
          rows: $rows,
          arrows: $arrows,
          dots: $dots,
          adaptiveHeight: $adaptiveHeight,
          vertical: $vertical,
          focusOnSelect: $focusOnSelect,
          pauseOnHover: $pauseOnHover,
          pauseOnFocus: $pauseOnFocus,
          centerMode: $centerMode,
          centerPadding: $centerPadding,
          variableWidth: $variableWidth,
          swipe: $swipe,
          swipeToSlide: $swipeToSlide,
          touchMove: $touchMove,
          draggable: $draggable,
          fade: $fade,
          appendArrows: $appendArrows,
          prevArrow: $prevArrow,
          nextArrow: $nextArrow,
          rtl: $rtl,
          customPaging: function (slider, i) {
            var thumb = $(slider.$slides[i]).data();
            var number = i + 1;
            if (number < 10) {
              return '<button type="button" class="dot">' + '0' + number + '</button>';
            }
            return '<button type="button" class="dot">' + number + '</button>';
          },
          responsive: $responsiveArray
        });

        $this.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
          $this.find('.slick-active').first().removeClass('first-active');
          $this.find('.slick-active').last().removeClass('last-active');
          var $animatingElements = $('.slick-slide[data-slick-index="' + nextSlide + '"]').find(
            '[data-animation]'
          );
          doAnimations($animatingElements);
        });

        function doAnimations(elements) {
          var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          elements.each(function () {
            var $el = $(this);
            var $animationDelay = $el.data('delay');
            var $animationDuration = $el.data('duration');
            var $animationType = 'animated ' + $el.data('animation');
            $el.css({
              'animation-delay': $animationDelay,
              'animation-duration': $animationDuration
            });
            $el.addClass($animationType).one(animationEndEvents, function () {
              $el.removeClass($animationType);
            });
          });
        }

        $this.on('afterChange', function (e, slick) {
          $this.find('.slick-active').first().addClass('first-active');
          $this.find('.slick-active').last().addClass('last-active');
        });

        // Updating the sliders in tab
        $('body').on('shown.bs.tab', 'a[data-toggle="tab"], a[data-toggle="pill"]', function (e) {
          $this.slick('setPosition');
        });
      });
      // Added mousewheel for specific slider
      $('.single-blog_slider, .mousewheel-slider').on('wheel', function (e) {
        e.preventDefault();

        if (e.originalEvent.deltaY < 0) {
          $(this).slick('slickNext');
        } else {
          $(this).slick('slickPrev');
        }
      });
    };
  }
  scrollToTop() {

    $('html, body').animate({
      scrollTop: 0
    }, 600);
  }


}
