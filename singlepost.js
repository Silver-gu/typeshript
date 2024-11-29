const loggedEmail = localStorage.getItem('loggedEmail');
const emailDisplay = document.getElementById('email');
const logoutBtn = document.querySelector('.logoutBnt');
const postId = new URLSearchParams(window.location.search).get('id');

if (!loggedEmail) {
    window.location.href = 'login.html';
} else {
    emailDisplay.textContent = loggedEmail;
}
logoutBtn.onclick = () => {
    localStorage.removeItem('loggedEmail');
    window.location.href = 'login.html';

}
if (postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(post => {
            const randomImageUrl = `https://picsum.photos/300/200?random=${post.id}`;
            document.getElementById('post-container').innerHTML = `
                <h3>${post?.title}</h3>
                <p>${post?.body}</p>
                 <img src="${randomImageUrl}" alt="" class="rndSinglePostImage">
            `;
        })
}