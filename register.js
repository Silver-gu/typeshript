const button = document.getElementById('registerButton');
const registerAlert = document.querySelector(".alert")
registerAlert.style.display = "none"
button.onclick = () => {
    console.log("Register button clicked");
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeatPassword').value;
    const emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailValid.test(email)) {
        registerAlert.innerHTML = 'Please enter a valid email address.';
        registerAlert.style.display = "block";
        return;
    }
    if (password !== repeatPassword) {
        registerAlert.innerHTML = 'Passwords do not match!';
        registerAlert.style.display = "block";
        return;
    }
    if (password.length < 4 || password.length > 20) {
        registerAlert.innerHTML = 'Passwords must be min 4 length and max 20 length';
        registerAlert.style.display = "block";
        return;
    }
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user => user.email === email)) {
        registerAlert.innerHTML = 'This email is already registered.';
        registerAlert.style.display = "block";
        return;
    }
    const defaultProfilePicture = "https://www.w3schools.com/howto/img_avatar.png";

    const newUser = {
        email: email,
        password: password,
        profilePicture: defaultProfilePicture
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    registerAlert.innerHTML = 'Registration successful';
    registerAlert.style.display = "block";
}