const loginButton = document.getElementById('loginButton');
const loginAlert = document.querySelector(".alert");
loginAlert.style.display = "none";

loginButton.onclick = () => {
    console.log("Login button clicked");

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.email === email);
    if (!user) {
        loginAlert.innerHTML = 'No user found with this email address. Please register first';
        loginAlert.style.display = "block";
        return;
    }
    if (user.password !== password) {
        loginAlert.innerHTML = 'Incorrect password.';
        loginAlert.style.display = "block";
        return;
    }
    localStorage.setItem('loggedEmail', email);
    window.location.href = 'index.html';
}

