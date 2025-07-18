document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const mobileOverlay = document.getElementById('mobileOverlay');

    if (hamburgerMenu && mobileOverlay) {
        hamburgerMenu.addEventListener('click', () => {
            mobileOverlay.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            hamburgerMenu.classList.toggle('active'); // ทำให้ hamburger เป็น X
        });
        mobileOverlay.querySelectorAll('a, .contact-button').forEach(el => {
            el.addEventListener('click', () => {
                mobileOverlay.classList.remove('active');
                document.body.classList.remove('menu-open');
                hamburgerMenu.classList.remove('active');
            });
        });
        mobileOverlay.addEventListener('click', e => {
            if (e.target === mobileOverlay) {
                mobileOverlay.classList.remove('active');
                document.body.classList.remove('menu-open');
                hamburgerMenu.classList.remove('active');
            }
        });
    } else {
        console.error('Hamburger menu or overlay not found.');
    }
});
