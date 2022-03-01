const form = document.querySelector('form');
const checkbox = document.querySelector('#agreement');
const radioBtn = document.querySelector('.radio');
form.addEventListener('submit', (e) => {
  e.preventDefault(); //To prevent default form submit
  const formData = new FormData(e.target); //Creates new form data object
  let object = {};
  // Checking if the form is filled, if not displaying the error
  const values = [];
  for (let value of formData.values()) {
    //FormData iteration method to get the form values
    values.push(value);
  }
  if (
    values.includes('') ||
    checkbox.checked === false ||
    radioBtn.checked === false
  ) {
    document.querySelector('#error').style.display = 'block';
    console.log('Invalid form details');
  } else {
    document.querySelector('#error').style.display = 'none';
    /* Calling FormData() method and Iterating over the names and its respective value, 
  and adding it to the object */
    formData.forEach((value, name) => {
      object[name] = value;
    });
    let json = JSON.stringify(object); // For converting the object to a JSON format.
    console.log(json);
    form.reset(); //To reset the form details
  }
});
