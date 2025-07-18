document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    // ตรวจสอบว่าฟอร์มมีอยู่จริงก่อนที่จะพยายามเพิ่ม Event Listener
    if (form) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');

        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const subjectError = document.getElementById('subjectError');
        const messageError = document.getElementById('messageError');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // ป้องกันการส่งฟอร์มเริ่มต้น

            let isValid = true; // ตั้งค่าสถานะการตรวจสอบเบื้องต้นเป็นจริง

            // ตรวจสอบ Name
            if (nameInput && nameInput.value.trim() === '') {
                nameError.textContent = 'Name is required.';
                nameInput.classList.add('error');
                isValid = false;
            } else {
                if (nameInput) { // ตรวจสอบ element ก่อนใช้งาน
                    nameError.textContent = '';
                    nameInput.classList.remove('error');
                }
            }

            // ตรวจสอบ Email
            if (emailInput && emailInput.value.trim() === '') {
                emailError.textContent = 'Email is required.';
                emailInput.classList.add('error');
                isValid = false;
            } else if (emailInput && !isValidEmail(emailInput.value.trim())) {
                emailError.textContent = 'Please enter a valid email address.';
                emailInput.classList.add('error');
                isValid = false;
            } else {
                if (emailInput) { // ตรวจสอบ element ก่อนใช้งาน
                    emailError.textContent = '';
                    emailInput.classList.remove('error');
                }
            }

            // ตรวจสอบ Subject
            if (subjectInput && subjectInput.value.trim() === '') {
                subjectError.textContent = 'Subject is required.';
                subjectInput.classList.add('error');
                isValid = false;
            } else {
                if (subjectInput) { // ตรวจสอบ element ก่อนใช้งาน
                    subjectError.textContent = '';
                    subjectInput.classList.remove('error');
                }
            }

            // ตรวจสอบ Message
            if (messageInput && messageInput.value.trim() === '') {
                messageError.textContent = 'Message is required.';
                messageInput.classList.add('error');
                isValid = false;
            } else {
                if (messageInput) { // ตรวจสอบ element ก่อนใช้งาน
                    messageError.textContent = '';
                    messageInput.classList.remove('error');
                }
            }

            // ถ้าทุกช่องถูกต้อง ให้ดำเนินการส่งฟอร์ม (หรือแสดงข้อความสำเร็จ)
            if (isValid) {
                alert('Form submitted successfully! (This is a demo, no actual submission)');
                form.reset(); // ล้างฟอร์ม
                // ในชีวิตจริง คุณจะส่งข้อมูลฟอร์มไปยังเซิร์ฟเวอร์ที่นี่
                // e.g., fetch('/submit-form', { method: 'POST', body: new FormData(form) });
            }
        });

        // ฟังก์ชันสำหรับตรวจสอบรูปแบบอีเมล
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        // ลบข้อความ Error เมื่อผู้ใช้เริ่มพิมพ์
        if (nameInput) nameInput.addEventListener('input', () => {
            if (nameInput.value.trim() !== '') {
                nameError.textContent = '';
                nameInput.classList.remove('error');
            }
        });
        if (emailInput) emailInput.addEventListener('input', () => {
            if (emailInput.value.trim() !== '' && isValidEmail(emailInput.value.trim())) {
                emailError.textContent = '';
                emailInput.classList.remove('error');
            }
        });
        if (subjectInput) subjectInput.addEventListener('input', () => {
            if (subjectInput.value.trim() !== '') {
                subjectError.textContent = '';
                subjectInput.classList.remove('error');
            }
        });
        if (messageInput) messageInput.addEventListener('input', () => {
            if (messageInput.value.trim() !== '') {
                messageError.textContent = '';
                messageInput.classList.remove('error');
            }
        });
    } else {
        console.warn('Form Validation: Contact form element not found. Form validation will not be active.');
    }
});