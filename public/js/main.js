// public/js/main.js
// Dropdowns via Click steuern (statt nur :hover)
document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.sort-button');
    const anyDropdown = e.target.closest('.sort-dropdown');

    // Wenn auf Button geklickt -> togglen
    if (trigger) {
        const dd = trigger.closest('.sort-dropdown');
        const isOpen = dd.classList.toggle('open');
        trigger.setAttribute('aria-expanded', String(isOpen));
        // andere Dropdowns schließen
        document.querySelectorAll('.sort-dropdown.open').forEach(d => {
            if (d !== dd) {
                d.classList.remove('open');
                const btn = d.querySelector('.sort-button');
                if (btn) btn.setAttribute('aria-expanded', 'false');
            }
        });
        return;
    }

    // Klick außerhalb schließt
    if (!anyDropdown) {
        document.querySelectorAll('.sort-dropdown.open').forEach(d => {
            d.classList.remove('open');
            const btn = d.querySelector('.sort-button');
            if (btn) btn.setAttribute('aria-expanded', 'false');
        });
    }
});

// ESC schließt geöffnete Menüs
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.sort-dropdown.open').forEach(d => {
            d.classList.remove('open');
            const btn = d.querySelector('.sort-button');
            if (btn) btn.setAttribute('aria-expanded', 'false');
        });
    }
});


function toggleMenu() {
    document.querySelector(".nav-menu").classList.toggle("active");
}

