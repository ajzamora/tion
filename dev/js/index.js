/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.sass */ "./src/styles/index.sass");
/* harmony import */ var _styles_index_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_text_particles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/text-particles.js */ "./src/js/lib/text-particles.js");


_lib_text_particles_js__WEBPACK_IMPORTED_MODULE_1__["default"].accelerate({
  textList: "BRANDING, LABEL DESIGN, PACKAGING DESIGN, ADVERTISING, LOGO DESIGN, PROMOTIONAL PRODUCTS, MOCKUP, WEB DESIGN, MOTION GRAPHICS, 3D MODEL, CLOTHING, GRAPHICS DESIGN, ART & ILLUSTRATION, MERCHANDIZE, PROOFING",
  textSize: 26,
  textColor: '#f6f5f4',
  particleColor: '#bdd748',
  particleSize: 3,
  speed: 1.4
});

/***/ }),

/***/ "./src/js/lib/text-particles.js":
/*!**************************************!*\
  !*** ./src/js/lib/text-particles.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* -----------------------------------------------
 * text-particles.js v1.0.0
 * (c) 2019-present Alden Zamora (https://github.com/ajzamora)
 * Released under MIT license[http://opensource.org/licenses/MIT]
 * =============================================== */
var canvas = document.getElementById("tp__canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var particlesArray;
var textParticles = {};
var options = {};

var Particle =
/*#__PURE__*/
function () {
  function Particle(x, y, moveX, moveY, name, pColor, pSize, tColor, tSize) {
    _classCallCheck(this, Particle);

    this.pointX = x;
    this.pointY = y;
    this.moveX = moveX;
    this.moveY = moveY;
    this.name = name;
    this.particleSize = pSize;
    this.particleColor = pColor;
    this.textSize = tSize;
    this.textColor = tColor;
    this.halfTextWidth = 0;
  }

  _createClass(Particle, [{
    key: "plot",
    value: function plot() {
      ctx.beginPath();

      if (this.particleSize > 0) {
        ctx.arc(this.pointX, this.pointY, this.particleSize, 0, Math.PI * 2);
        ctx.fillStyle = this.particleColor;
        ctx.fill();
      }

      ctx.font = "".concat(this.textSize, "px Arial");
      ctx.fillStyle = this.textColor;
      this.halfTextWidth = ctx.measureText(this.name).width / 2;
      ctx.fillText(this.name, this.pointX, this.pointY);
    }
  }, {
    key: "update",
    value: function update() {
      if (this.pointX > canvas.width - this.halfTextWidth || this.pointX < this.halfTextWidth) this.moveX = -this.moveX;
      if (this.pointY > canvas.height || this.pointY < this.textSize) this.moveY = -this.moveY;
      this.pointX += this.moveX;
      this.pointY += this.moveY;
      this.plot();
    }
  }]);

  return Particle;
}();

function accelerate(opt) {
  options = opt;
  options.maxSpeed = opt.speed || 2; // number: positive speed

  options.minSpeed = -opt.speed || -2; // number: negative speed

  options.particleColor = opt.particleColor || "orange"; //string

  options.particleSize = opt.particleSize || 0, // number: particle size, default=0 (not shown)
  options.textColor = opt.textColor || "#dddddd"; // string

  options.textList = (opt.textList || "Warty Warthog, Hoary Hedgehog, Breezy Badger, Dapper Drake, Edgy Eft, Feisty Fawn, Gutsy Gibbon, Hardy Heron, Intrepid Ibex, Jaunty Jackalope, Karmic Koala, Lucid Lynx, Maverick Meerkat, Natty Narwhal, Oneiric Ocelot, Precise Pangolin, Quantal Quetzal, Raring Ringtail, Saucy Salamander, Trusty Tahr, Utopic Unicorn, Vivid Vervet, Wily Werewolf, Xenial Xerus, Yakkety Yak, Zesty Zapus, Artful Aardvark, Bionic Beaver, Cosmic Cuttlefish, Disco Dingo, Eoan Ermine, Focal Fossa").split(', '); // string: list of strings separated with a comma and a space

  options.textSize = opt.textSize || 24; // number: positive

  reset(options);
  window.requestAnimationFrame(animateFrameLoop);
}

function reset(opt) {
  particlesArray = [];
  ctx.textAlign = "center";
  var numberOfParticles = opt.textList.length;
  var innerMargin = 150;

  for (var i = 0; i < numberOfParticles; i++) {
    var x = Math.random() * (canvas.width - innerMargin * 2) + innerMargin;
    var y = Math.random() * (canvas.height - innerMargin * 2) + innerMargin;
    var moveX = Math.random() * (opt.maxSpeed - opt.minSpeed) + opt.minSpeed;
    var moveY = Math.random() * (opt.maxSpeed - opt.minSpeed) + opt.minSpeed;
    particlesArray.push(new Particle(x, y, moveX, moveY, opt.textList[i], opt.particleColor, opt.particleSize, opt.textColor, opt.textSize));
  }
}

function animateFrameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var len = particlesArray.length;

  for (var i = 0; i < len; i++) {
    particlesArray[i].update();
  }

  connect();
  window.requestAnimationFrame(animateFrameLoop);
}

function connect() {
  var opacity;
  var rgb = 255;
  var area = canvas.width * canvas.height;

  for (var a = 0; a < particlesArray.length; a++) {
    for (var b = a; b < particlesArray.length; b++) {
      var distance = (particlesArray[a].pointX - particlesArray[b].pointX) * (particlesArray[a].pointX - particlesArray[b].pointX) + (particlesArray[a].pointY - particlesArray[b].pointY) * (particlesArray[a].pointY - particlesArray[b].pointY);

      if (distance < area) {
        opacity = 3.1 - distance / 40000;
        ctx.strokeStyle = "rgba(255,255,255, ".concat(opacity, ")");
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].pointX, particlesArray[a].pointY);
        ctx.lineTo(particlesArray[b].pointX, particlesArray[b].pointY);
        ctx.stroke();
      }
    }
  }
}

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  reset(options);
});
textParticles.accelerate = accelerate;
/* harmony default export */ __webpack_exports__["default"] = (textParticles);

/***/ }),

/***/ "./src/styles/index.sass":
/*!*******************************!*\
  !*** ./src/styles/index.sass ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });