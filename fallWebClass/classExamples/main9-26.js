import _ from 'lodash';

const myArray = ['first', 'second', 'third', 'fourth'];

console.log(_.chunk(myArray, 2));

function scrollListener(){
    console.log(window.scrollY);
}

const debouncedScrollListener = _.debounce(scrollListener, 250);

window.addEventListener('scroll', debouncedScrollListener);

const throttledScrollListener = _.throttle(scrollListener, 250);

window.addEventListener('scroll', scrollListener);

//d3js.org