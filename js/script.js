const { createApp } = Vue



//option object.
createApp({
  data() {
    return {
      message: '<h1>Hello Vue</h1>',
      image: '/img/1.jpg',
      alt: 'Angela Carrol',
      myclass: 'red',

    }
  },
  methods: {
    color() {
      if (myclass === 'red') {
        myclass = 'blue';

      } else {
        myclass = 'red';
      }
    }
  }

}).mount('#app')