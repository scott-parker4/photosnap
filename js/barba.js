// tell Barba to use the css plugin
barba.use(barbaCss);

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
  views: [
    {
      namespace: 'stories',
      beforeEnter({ next }) {
        const script = document.createElement('script');
        script.src = './js/stories.js';
        script.type = 'module';
        next.container.appendChild(script);
      },
    },
  ],
});
