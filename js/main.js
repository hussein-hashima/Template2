new WOW().init();
const { counterUp } = window.counterUp;

const el = document.querySelector( '.counter' );

// Start counting, typically you need to call this when the 
// element becomes visible, or whenever you like.
counterUp( el, {
    duration: 5000,
    delay: 16,
} )
