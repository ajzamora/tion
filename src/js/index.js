import '../styles/index.sass';

import textParticles from './lib/text-particles.js';

const svgEnter = document.getElementsByClassName('svg__enter')[0];
const central = document.getElementById('central');
const gridPanelLeft = document.getElementsByClassName('grid__panel--left')[0];
const gridPanelRight = document.getElementsByClassName('grid__panel--right')[0];

function enterAnimate() {
  gridPanelLeft.classList.add('grid__panel--leftClicked');
  gridPanelRight.classList.add('grid__panel--rightClicked');
  svgEnter.classList.add('svg__enter--clicked');
}

central.addEventListener('click', ()=> {
  enterAnimate();
  setTimeout(function() {
    svgEnter.remove();
    gridPanelLeft.remove();
    gridPanelRight.remove();
  }, 1100);
}, {once: true});

textParticles.accelerate({
  textList: "BRANDING, LABEL DESIGN, PACKAGING DESIGN, ADVERTISING, LOGO DESIGN, PROMOTIONAL PRODUCTS, MOCKUP, WEB DESIGN, MOTION GRAPHICS, 3D MODEL, CLOTHING, GRAPHICS DESIGN, ART & ILLUSTRATION, MERCHANDIZE, PROOFING",
  textSize: 18,
  textColor: '#f6f5f4',
  particleColor: '#bdd748',
  particleSize: 3,
  speed: 0.8,
});
