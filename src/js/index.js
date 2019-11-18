import '../styles/index.sass';

import textParticles from './lib/text-particles.js';

const svgEnter = document.getElementsByClassName('svg__enter')[0];
const central = document.getElementById('central');
const gridPanelLeft = document.getElementsByClassName('grid__panel--left')[0];
const gridPanelRight = document.getElementsByClassName('grid__panel--right')[0];
const gridPanelUnderneath = document.getElementsByClassName('grid__underneath')[0];

// get viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

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
    // show pages
    gridPanelUnderneath.style.display = 'flex';
    gridPanelUnderneath.style.zIndex = 1;
    textParticles.accelerate({
      textList: "BRANDING, LABEL DESIGN, PACKAGING DESIGN, ADVERTISING, LOGO DESIGN, PROMOTIONAL PRODUCTS, MOCKUP, WEB DESIGN, MOTION GRAPHICS, 3D MODEL, CLOTHING, GRAPHICS DESIGN, ART & ILLUSTRATION, MERCHANDIZE, PROOFING",
      textSize: 18,
      textColor: '#f6f5f4',
      particleColor: '#bdd748',
      particleSize: 3,
      speed: 0.8,
    });
  }, 1100);
}, {once: true});
