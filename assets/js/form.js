function saveData(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const data = { name, email, subject, message};
    localStorage.setItem('formData', JSON.stringify(data));
}