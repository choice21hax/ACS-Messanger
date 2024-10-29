// Toggle light and dark mode
document.getElementById('toggle-mode').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    this.textContent = document.body.classList.contains('light-mode') ? 'Dark Mode' : 'Light Mode';
});