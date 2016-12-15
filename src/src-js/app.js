import Nav from "./modules/Nav";
import $ from 'jquery';
import jQuery from 'jquery';

// Site setup
window.site = window.site || {};
let _this = window.site

// jQuery setup
window.$ = $;
window.jQuery = jQuery;

_this.nav = new Nav;