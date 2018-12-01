function changeHeading() {
  let heading2 = document.querySelector('.changeMe');
  let heading1 = document.querySelector('h1');
  heading1.textContent = 'A Source for Cat Leaders around The World';
  heading2.textContent = 'A Storied Tale of Prints';
}

let button = document.querySelector('button');

button.addEventListener('click', changeHeading);
