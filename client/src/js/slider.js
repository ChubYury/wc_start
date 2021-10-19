/* eslint-disable no-unused-vars */
import slick from 'slick-carousel';
import $ from 'jquery';

const slickOption = {

  arrows: true,
  prevArrow: '<button type="button" class="control control--prev">&#x44;</button>',
  nextArrow: '<button type="button" class="control control--next">&#x45;</button>',

  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 564,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
}

const quotesOption = {

  arrows: true,
  prevArrow: '<button type="button" class="control control--prev">&#x44;</button>',
  nextArrow: '<button type="button" class="control control--next">&#x45;</button>',

  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
};

const clientOption = {

  arrows: true,
  prevArrow: '<button type="button" class="control control--prev">&#x44;</button>',
  nextArrow: '<button type="button" class="control control--next">&#x45;</button>',

  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
}

$('.multiple-items').slick(slickOption);
$('.cit-slider').slick(quotesOption);
$('.slider-clients').slick(clientOption);
