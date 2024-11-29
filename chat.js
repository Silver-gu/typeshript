const loggedEmail = localStorage.getItem('loggedEmail');
const emailDisplay = document.getElementById('email');
const logoutBtn = document.querySelector('.logoutBnt');
const sendBtn = document.getElementById('sendBtn');
const messageInput = document.getElementById('messageInput');
const chatBox = document.getElementById('chatBox');
if (!loggedEmail) {
    window.location.href = 'login.html';
} else {
    emailDisplay.textContent = loggedEmail;
}
logoutBtn.onclick = () => {
    localStorage.removeItem('loggedEmail');
    window.location.href = 'login.html';
}

function sendMessage() {
    const messageText = messageInput.value;
    if (messageText === '') return;
    const currentTime = new Date();
    const timeString = currentTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `${messageText}<span class="timestamp">${timeString}</span>`;
    chatBox.appendChild(messageElement);
    messageInput.value = '';
}

sendBtn.addEventListener('click', sendMessage);
