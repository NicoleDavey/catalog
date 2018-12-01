function changeHeading() {
  let heading = document.querySelector('h1');
  heading.textContent = 'Ye Olde CATalog';
}

let button = document.querySelector('button');
button.addEventListener('click', changeHeading);
