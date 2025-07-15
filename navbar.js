document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navLinks = document.getElementById('navLinks');

    // ตรวจสอบว่า element ถูกพบก่อนเพิ่ม Event Listener
    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active'); // เพิ่ม/ลบคลาส 'active' เมื่อคลิก
        });

        // ปิดเมนูเมื่อคลิกที่ลิงก์ในเมนู (สำหรับมือถือ)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });
    } else {
        console.error('Hamburger menu or navigation links not found. Check HTML IDs.');
    }
});