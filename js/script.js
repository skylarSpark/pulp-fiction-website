// Random Redirect (Chaos Mode)
function redirectRandomly() {
    const pages = ["analysis.html", "context.html", "remix-hub.html"];
    const randomPage = pages[Math.floor(Math.random() * pages.length)];
    window.location.href = randomPage;
}

// Navigation Mode Toggle
function toggleMode(mode) {
    localStorage.setItem('navMode', mode);
    if (mode === 'chaos') {
        document.body.classList.add('chaos');
        document.body.classList.remove('order');
    } else {
        document.body.classList.add('order');
        document.body.classList.remove('chaos');
    }
}