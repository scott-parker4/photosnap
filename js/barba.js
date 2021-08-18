// tell Barba to use the css plugin
barba.use(barbaCss);

// init Barba
barba.init({
  transitions: [
    {
      name: 'home',
      beforeOnce() {
        console.log('beforeOnce');
      },
      once() {
        console.log('once');
      },
      afterOnce() {
        console.log('afterOnce');
      },
    },
    {
      name: 'fade',
      to: {
        namespace: ['fade'],
      },
      leave() {},
      enter() {},
    },
  ],
});
