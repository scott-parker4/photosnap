import navSlider from './nav.js';
import createStories from './stories.js';

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
        namespace: ['fade', 'home', 'stories'],
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
  ],
});
