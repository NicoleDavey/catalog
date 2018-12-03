function changeHeading(ev) {
  ev.preventDefault();
  let f = ev.target;
  let catName = f.catName.value;
  let heading1 = document.querySelector('h1');
  heading1.textContent = catName;
}

let button = document.querySelector('button');
let form = document.querySelector('form');

form.addEventListener('submit', changeHeading);
