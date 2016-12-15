import Nav from "./modules/Nav";
import $ from 'jquery';
import jQuery from 'jquery';

// Site setup
window.site = window.site || {};
let _this = window.site

// jQuery setup
window.$ = $;
window.jQuery = jQuery;

_this.nav = new Nav('#js__main-nav__link__first', '#js__main-nav__link__second', '#js__main-nav__link__third', '#js__eye', 'eye--first-nav', 'eye--second-nav', 'eye--third-nav');