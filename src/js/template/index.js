import '../../styles/styles.scss';
import 'bootstrap';

import 'babel-polyfill';

import {indiBlockController} from '../indi';

import {ajaxForm} from './modules/common/ajaxForm';
import {selectize} from './modules/common/selectize';
import {fileInput} from './modules/common/fileInput';
import {dropEye} from './modules/common/dropEye';
import {phonemask} from './modules/common/phonemask';
import {datepicker} from './modules/common/datepicker';
import {counter} from './modules/common/counter';
import {magnificPopupImage} from './modules/common/magnificPopupImage';
import {magnificPopupVideo} from './modules/common/magnificPopupVideo';
import {magnificPopupGallery} from './modules/common/magnificPopupGallery';
import {tabsToSelect} from './modules/common/tabsToSelect';
import {accordion} from './modules/common/accordion';
import {backToTop} from './modules/common/backToTop';
import {scrollToAnchor} from './modules/common/scrollToAnchor';
import {toggleText} from './modules/common/toggleText';
import {inputDigits} from './modules/common/inputDigits';
//import {slider} from './modules/common/bootstrap-slider';
import {tooltip} from './modules/common/popper.min';

// import {mobileMenu} from './modules/mobileMenu';
// import {megaMenu} from './modules/megaMenu';

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
// indiBlockController.add(megaMenu, '.js-mega-menu');

// первичная инициализация
indiBlockController.initAll();

$(document).ready(function () {
    if($(".js-span-data-range").length>0){
        $(".js-span-data-range").slider({});
        alert(1);
    }
});
