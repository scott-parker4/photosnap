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
        namespace: ['fade', 'home'],
      },
      leave() {},
      enter() {},
    },
  ],
});
