function changeHeading(ev) {
  ev.preventDefault();
  let catForm = ev.target;

  // get the values from the form
  let catName = catForm.catName.value;
  let catAge = catForm.catAge.value;

  // grab the list from the page
  let catList = document.querySelector('div.catList');

  // add the values to the list
  catList.innerHTML += '<p>' + catName + '</p>';

  // clear the form
  catForm.reset();
}

let button = document.querySelector('button');

let form = document.querySelector('#catForm');
form.addEventListener('submit', changeHeading);
