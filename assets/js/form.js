function saveData(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const data = { name, email, subject, message};
    localStorage.setItem('formData', JSON.stringify(data));

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
}

function loadData() {
    const data = localStorage.getItem('formData');
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }

