function changeHeading(ev) {
  ev.preventDefault();
  let catForm = ev.target;

  // get the values from the form
  let cat = {
    name: catForm.catName.value,
    age: catForm.catAge.value,
    favoriteColor: catForm.favoriteColor.value,
  };

  // grab the list from the page
  let catList = document.querySelector('ul.catList');

  // add the values to the list
  catList.innerHTML += `<li style="color: ${cat.favoriteColor}"> ${cat.name}, ${
    cat.age
  }`;
  // catList.innerHTML += '<p>' + catName + ', ' + catAge + '</p>';

  // clear the form
  catForm.reset();
}

let button = document.querySelector('button');

let form = document.querySelector('#catForm');
form.addEventListener('submit', changeHeading);
