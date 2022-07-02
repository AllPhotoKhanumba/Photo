const signUp = e => {
    let fname = document.getElementById('fname').value,
        lname = document.getElementById('lname').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data =>
            data.fname.toLowerCase() == fname.toLowerCase() &&
            data.lname.toLowerCase() == lname.toLowerCase()
        );

    if (!exist) {
        formData.push({ fname, lname, email, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("Hesab Yaradıldı , Giriş səhifəsinə Yönləndiriləcəksiniz! ");
        location.href = "signin.html";

    } else {
        alert("Siz artıq qeydiyyatdan keçmisiniz , Aşağıdakı linkdən istifadə edərək daxil olun.");
    }
    e.preventDefault();
}

function signIn(e) {
    let email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data => data.email == email && data.pwd == pwd);
    if (!exist) {
        alert("Hesab Məlumatlarınızı Düzgün daxil edin !");
    } else {

        setTimeout("location.href = 'index.html';", 1000);
    }
    e.preventDefault();
}