// Random Redirect (Chaos Mode)
function redirectRandomly() {
    const chaosDestinations = [
        "analysis.html#scene-1",
        "analysis.html#scene-2",
        "analysis.html#scene-3",
        "analysis.html#scene-4",
        "analysis.html#scene-5",
        "analysis.html#scene-6",
        "analysis.html#scene-7",
        "context.html",
        "remix-hub.html"
    ];
    const randomPage = chaosDestinations[Math.floor(Math.random() * chaosDestinations.length)];
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

// Handle form submissions
document.getElementById('submissionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic client-side handling
    const formData = new FormData(this);
    
    // For demo purposes - replace with actual backend
    alert('Submission received! (Demo mode)');
    this.reset();
});