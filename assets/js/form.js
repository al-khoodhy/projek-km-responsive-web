let formDataArray = [];

function saveData(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const data = { name, email, subject, message};
    formDataArray.push(data); 
    localStorage.setItem('formDataArray', JSON.stringify(formDataArray));

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
}

function getData() {
  const formDataString = localStorage.getItem('formDataArray');
  const formDataArray = JSON.parse(formDataString);
  return formDataArray || [];
}

