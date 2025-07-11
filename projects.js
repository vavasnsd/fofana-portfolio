document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.projects-grid-full .project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // ลบคลาส 'active' ออกจากปุ่มทั้งหมด
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // เพิ่มคลาส 'active' ให้กับปุ่มที่ถูกคลิก
            button.classList.add('active');

            const filter = button.dataset.filter; // ดึงค่า data-filter ออกมา (เช่น 'all', 'web-design')

            projectCards.forEach(card => {
                const categories = card.dataset.category.split(' '); // ดึงค่า data-category ออกมาเป็น Array
                
                if (filter === 'all' || categories.includes(filter)) {
                    card.classList.remove('hidden'); // แสดงการ์ด
                } else {
                    card.classList.add('hidden'); // ซ่อนการ์ด
                }
            });
        });
    });
});