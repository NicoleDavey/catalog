function changeHeading(ev) {
  ev.preventDefault();
  let catForm = ev.target;
  let catName = catForm.catName.value;
  let heading1 = document.querySelector('h1');
  heading1.textContent = catName;
  catForm.reset();
}

let button = document.querySelector('button');
let form = document.querySelector('form');

form.addEventListener('submit', changeHeading);
