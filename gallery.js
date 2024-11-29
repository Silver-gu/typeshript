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
fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(products => {
        const galleryContainer = document.getElementById('photoGallery');
        products.slice(10, 34).forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('productItem');
            productItem.innerHTML = `
                <img src="${product.images[0]}" alt="${product.name}" class="productImg">
            `;

            galleryContainer.appendChild(productItem);
        });
    })
