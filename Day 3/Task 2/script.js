function showMessage(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            alert(message);
            resolve();
        }, delay);
    });
}

function showImage(imageUrl) {
    return new Promise((resolve) => {
        const imageContainer = document.getElementById('image');
        const image = new Image();
        image.src = imageUrl;
        image.onload = () => {
            imageContainer.appendChild(image);
            resolve();
        };
    });
}

// Execute the actions sequentially using promises
showMessage('Welcome to the page!', 3000)
    .then(() => showImage('https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'))
    .catch((error) => {
        console.error('An error occurred:', error);
    });