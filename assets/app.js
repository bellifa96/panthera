/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import './styles/global.scss';

// start the Stimulus application
import './bootstrap';

const $ = require('jquery');
global.$ = global.jQuery = $

const WOW = require('wowjs');

require('webpack-jquery-ui');
require('webpack-jquery-ui/css');
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

var jQueryBridget = require('jquery-bridget');
var Isotope = require('isotope-layout');
jQueryBridget( 'isotope', Isotope, $ );

import './templatemo-custom.js';

