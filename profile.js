const loggedEmail = localStorage.getItem('loggedEmail');
const emailDisplay = document.getElementById('email');
const logoutBtn = document.querySelector('.logoutBnt');
const changePasswordBtn = document.getElementById('changePassword');
const passwordChange = document.getElementById('passwordChange');
const newPasswordInput = document.getElementById('newPassword');
const repeatNewPasswordInput = document.getElementById('repeatNewPassword');
const submit = document.getElementById('submit');
const alertMessage = document.querySelector(".alert");
const changeImgButton = document.querySelector('.changeImg');
const imageUploadInput = document.getElementById('imageUpload');
const profilePicture = document.getElementById('profilePicture');

alertMessage.style.display = 'none';
if (!loggedEmail) {
    window.location.href = 'login.html';
} else {
    emailDisplay.textContent = loggedEmail;
    document.getElementById('profile-email').innerText = loggedEmail;
}

logoutBtn.onclick = () => {
    localStorage.removeItem('loggedEmail');
    localStorage.removeItem('password');
    window.location.href = 'login.html';
}
changePasswordBtn.onclick = () => {
    passwordChange.style.display = 'block';
}
submit.onclick = () => {
    const newPassword = newPasswordInput.value;
    const repeatNewPassword = repeatNewPasswordInput.value;

    if (newPassword === '' || repeatNewPassword === '') {
        alertMessage.textContent = 'Both fields are required.';
        alertMessage.style.display = 'block';
        return;
    }

    if (newPassword !== repeatNewPassword) {
        alertMessage.textContent = 'Passwords do not match.';
        alertMessage.style.display = 'block';
        return;
    }
    if (newPassword.length < 4 || repeatNewPassword.length > 20) {
        alertMessage.innerHTML = 'Passwords must be min 4 length and max 20 length';
        alertMessage.style.display = "block";
        return;
    }
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === loggedEmail);

    if (user) {
        user.password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
        alertMessage.textContent = 'Password updated successfully.';
        alertMessage.style.display = 'block';
    } else {
        alertMessage.textContent = 'User not found.';
        alertMessage.style.display = 'block';
    }
}
const storedImage = localStorage.getItem('profilePicture');
if (storedImage) {
    profilePicture.src = storedImage;
}
changeImgButton.onclick = () => {
    imageUploadInput.click();
};
imageUploadInput.onchange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onloadend = () => {
            const imageUrl = reader.result;
            profilePicture.src = imageUrl;
            localStorage.setItem('profilePicture', imageUrl);
        };

        reader.readAsDataURL(file);
    }
};
