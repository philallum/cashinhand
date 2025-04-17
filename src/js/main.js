// Initialize Alpine.js data and components
document.addEventListener('alpine:init', () => {
    Alpine.data('navigation', () => ({
        isMenuOpen: false,
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    }));
});

// HTMX loading indicator
htmx.on('htmx:beforeRequest', function(evt) {
    evt.detail.target.classList.add('opacity-50');
});

htmx.on('htmx:afterRequest', function(evt) {
    evt.detail.target.classList.remove('opacity-50');
}); 