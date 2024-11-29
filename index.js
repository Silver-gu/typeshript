const loggedEmail = localStorage.getItem('loggedEmail');
const emailDisplay = document.getElementById('email');
const logoutBtn = document.querySelector('.logoutBnt');
if (!loggedEmail) {
    window.location.href = 'login.html';
} else {
    emailDisplay.textContent = loggedEmail;
}
logoutBtn.onclick = () => {
    localStorage.removeItem('loggedEmail');
    window.location.href = 'login.html';
}
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        const postsContainer = document.getElementById('posts-container');
        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
            const randomImageUrl = `https://picsum.photos/300/200?random=${post.id}`;

            postDiv.innerHTML = `
                <a href="singlepost.html?id=${post.id}" class="post-link">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                     <img src="${randomImageUrl}" alt="" class="rndImage">
                </a>
            `;

            postsContainer.appendChild(postDiv);
        });
    });

function sPostId(postId) {
    console.log('Post ID stored:', postId);
    localStorage.setItem('selectedPostId', postId);
}