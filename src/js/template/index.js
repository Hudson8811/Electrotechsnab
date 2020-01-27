import '../../styles/styles.scss';
import 'bootstrap';

import 'babel-polyfill';

import { indiBlockController } from '../indi';

import { ajaxForm } from './modules/common/ajaxForm';
import { selectize } from './modules/common/selectize';
import { fileInput } from './modules/common/fileInput';
import { dropEye } from './modules/common/dropEye';
import { phonemask } from './modules/common/phonemask';
import { datepicker } from './modules/common/datepicker';
import { counter } from './modules/common/counter';
import { magnificPopupImage } from './modules/common/magnificPopupImage';
import { magnificPopupVideo } from './modules/common/magnificPopupVideo';
import { magnificPopupGallery } from './modules/common/magnificPopupGallery';
import { tabsToSelect } from './modules/common/tabsToSelect';
import { accordion } from './modules/common/accordion';
import { backToTop } from './modules/common/backToTop';
import { scrollToAnchor } from './modules/common/scrollToAnchor';
import { toggleText } from './modules/common/toggleText';
import { inputDigits } from './modules/common/inputDigits';
import { tooltip } from './modules/common/popper';

//import { rangeSliderUI } from './modules/rangeSliderUI';

// import {mobileMenu} from './modules/mobileMenu';
//import { megaMenu } from './modules/megaMenu';

import 'slick-carousel';


//import 'masonry-layout';
import 'isotope-layout';
var $ = require('jquery');
var jQueryBridget = require('jquery-bridget');
//var Masonry = require('masonry-layout');
//jQueryBridget('masonry', Masonry, $);

import 'isotope-layout';
var Isotope = require('isotope-layout');
jQueryBridget('isotope', Isotope, $);

require("jquery-ui/ui/widgets/slider");
import 'jquery-ui-touch-punch';



/**
 * Общий функционал для всех страниц
 */
// type your code here ..

//
// Базовые блоки
//

indiBlockController.add(ajaxForm, '.js-ajax-form');
indiBlockController.add(selectize, '.js-select');
indiBlockController.add(fileInput, '.custom-file input[type="file"]');
indiBlockController.add(dropEye, '.js-drop-eye');
indiBlockController.add(phonemask, 'input[type="tel"]');
indiBlockController.add(datepicker, '.js-datepicker');
indiBlockController.add(counter, '.js-counter');
indiBlockController.add(magnificPopupImage, '.js-mp-image');
indiBlockController.add(magnificPopupVideo, '.js-mp-video');
indiBlockController.add(magnificPopupGallery, '.js-mp-gallery');
indiBlockController.add(tabsToSelect, '.js-tab-select');
indiBlockController.add(accordion, '.js-accordion');
indiBlockController.add(backToTop, '.js-back-to-top');
indiBlockController.add(scrollToAnchor, '.js-to-anchor');
indiBlockController.add(toggleText, '.js-toggle-text');
indiBlockController.add(inputDigits, '.js-input-digits');
indiBlockController.add(tooltip, '.js-tooltip');
//
// Блоки проекта
//

// indiBlockController.add(mobileMenu, '.js-mobile-menu');
//indiBlockController.add(megaMenu, '.js-catalog-menu');

// первичная инициализация
indiBlockController.initAll();

$(document).ready(function () {
    /*if($(".js-span-data-range").length>0){
        $(".js-span-data-range").slider({});
        alert(1);
    }*/

    if ($('.home-slider').length > 0) {
        $('.home-slider').slick({
            dots: true,
            arrows: true,
            responsive: [
                {
                    breakpoint: 767.98,
                    settings: {
                        arrows: false,
                    }
                },
            ]
        });
    }
    if ($('.you-see_slider').length > 0) {
        $('.you-see_slider').slick({
            dots: false,
            arrows: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1199.98,
                    settings: {
                        slidesToShow: 3,
                    }
                },{
                    breakpoint: 767.98,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }

    $('.js-toggle-fl-ul').click(function () {
        event.preventDefault();
        if (!$(this).hasClass('active')) {
            $(this).addClass('active').siblings().removeClass('active');
            var tabId = $(this).data('tab');
            $('.home-fl_ul__tab').removeClass('active');
            $('.home-fl_ul__tab[data-tab=' + tabId + ']').addClass('active');
        }
    });
    if ($('.foo-manufacturers-slider').length > 0) {
        $('.foo-manufacturers-slider').slick({
            dots: false,
            arrows: true,

            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 7,
        });
    }
    if ($('.js-footer-menu-all-cat').length > 0) {
        $(".js-footer-menu-all-cat").click(function () {
            $(".footer-all-categories").fadeToggle(300);
        });
    }

    if ($('.js-foo-ac-close-btn').length > 0) {
        $(".js-foo-ac-close-btn").click(function () {
            $(".footer-all-categories").fadeOut(300);
        });
    }

    if ($('.js-masonry-grid').length > 0) {
        $('.js-masonry-grid').isotope({
            itemSelector: '.masonry-item',
            horizontalOrder: true,
            percentPosition: true,
            getSortData: {
                order: '[data-mobile-order]'
            }
        });
        mansorySort();
        $(window).on('resize',function () {
            mansorySort();
        });
    }


    $('.js-mobile-menu-toggle').click(function () {
        event.preventDefault();
        $(this).toggleClass('active');
        $('body').toggleClass('mobile-menu-active');
        $('.mobile-menu').toggleClass('active');
        $('body,html').animate({
            scrollTop: 0
        }, 0);
    });


    $('.js-catalog-menu').click(function () {
        event.preventDefault();
        $(this).toggleClass('active');
        shadowBg($(this).hasClass('active'));
        toggleMegaMenu($(this).hasClass('active'));
    });

    $('.js-mega-menu__cat-select').on('mouseenter', function () {
        var cat = $(this).data('cat');
        $('.js-mega-menu__cat-select').removeClass('active');
        $(this).addClass('active');
        $('.mega-menu__sub-cats').removeClass('active');
        $('.mega-menu__sub-cats[data-cat="'+cat+'"]').addClass('active');
    });

    $('.shadow-bg').click(function () {
        toggleMegaMenu(false);
        shadowBg(false);
        $('.js-catalog-menu').removeClass('active');
    });

    $('.js-city-select').click(function () {
        event.preventDefault();
       $(this).toggleClass('dropdown-active');
       $('.header__city-select').toggleClass('active');
    });
    $('.js-header-managers').click(function () {
        event.preventDefault();
        $(this).toggleClass('dropdown-active');
        var position = $(this).position();
        $('.header__managers').toggleClass('active').css('left', position.left + 30);
    });
    $('.js-user-header').click(function () {
        event.preventDefault();
        $(this).toggleClass('dropdown-active');
        $('.header__profile').toggleClass('active');
    });
    $('.js-city-choose').click(function () {
        $('.js-city-select').removeClass('dropdown-active');
        $('.header__city-select').removeClass('active');
    });


    $(".js-range-slider-price").each(function (index, element) {
        var leftDigit = $(element).siblings('.range-slider-price-digits').find('.js-rsp-digits-left');
        var rightDigit = $(element).siblings('.range-slider-price-digits').find('.js-rsp-digits-right');
        $(element).slider({
            range: true,
            values: [1000, 3000],
            min: 0,
            max: 5000,
            slide: function (event, ui) {
                leftDigit.html(ui.values[0]);
                rightDigit.html(ui.values[1]);
            }
        });
        leftDigit.html($(element).slider("values", 0));
        rightDigit.html($(element).slider("values", 1));

    });





});


function shadowBg(status) {
    if (status){
        $('body').addClass('shadow-bg-active');
    } else {
        $('body').removeClass('shadow-bg-active');
    }
}

function toggleMegaMenu(status) {
    if (status){
        $('.mega-menu').addClass('active');
    } else {
        $('.mega-menu').removeClass('active');
    }
}

function mansorySort() {
    if ($(window).width() < 767.98){
        $('.js-masonry-grid').isotope({ sortBy: 'order' });
    } else{
        $('.js-masonry-grid').isotope({ sortBy: 'original-order' });
    }
}