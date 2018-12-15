function changeHeading(ev) {
  ev.preventDefault();
  let catForm = ev.target;

  let catName = catForm.catName.value;
  let heading1 = document.querySelector('h1');
  heading1.textContent = catName;

  let catAge = catForm.catAge.value;
  let ageHeading = document.querySelector('h2.age');
  ageHeading.textContent = catAge;

  catForm.reset();
}

let button = document.querySelector('button');

let form = document.querySelector('#catForm');
form.addEventListener('submit', changeHeading);
