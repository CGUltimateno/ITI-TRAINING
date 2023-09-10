function showMessage(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            alert(message);
            resolve();
        }, delay);
    });
}

// Execute the actions sequentially using promises
showMessage('Welcome to the page!', 3000)
    .catch((error) => {
        console.error('An error occurred:', error);
    });