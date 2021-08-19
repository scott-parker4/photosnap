import navSlider from './nav.js';
import createStories from './stories.js';
import pricingToggle from './pricing.js';

// tell Barba to use the css plugin
barba.use(barbaCss);

// Load mobile nav script before each page load
barba.hooks.beforeEnter(({ next }) => {
  navSlider();
});

// init Barba
barba.init({
  transitions: [
    {
      name: 'home',
      beforeOnce() {},
      once() {},
      afterOnce() {},
    },
    {
      name: 'fade',
      to: {
        namespace: ['fade', 'home', 'stories', 'pricing'],
      },
      leave() {},
      enter() {},
    },
  ],
  // Load stories grid script on page load
  views: [
    {
      namespace: 'stories',
      beforeEnter({ next }) {
        createStories();
      },
    },
    {
      namespace: 'pricing',
      beforeEnter({ next }) {
        pricingToggle();
      },
    },
  ],
});
