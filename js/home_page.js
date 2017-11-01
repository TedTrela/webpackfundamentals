import '../css/app.css';
import '../css/app.scss';
import '../css/app.less';

console.log('Home page JS loaded'); // eslint-disable-line no-console

// debounce function that will wrap our event
function debounce(fn, delay) {
  // maintain a timer
  let timer = null;
  console.log('calling debounce');
  // closure function that has access to timer
  return function x(...args) {
    // get the scope and parameters of the function
    // via 'this' and 'arguments'
    console.log('button pressed'); // eslint-disable-line no-console
    const context = this;
    // if event is called, clear the timer and start over
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

function message() {
  console.log('timer function fired'); // eslint-disable-line no-console
}

const elem = document.getElementById('b'); // eslint-disable-line no-undef
elem.addEventListener('click', debounce(message, 8000));
