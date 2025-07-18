document.addEventListener('DOMContentLoaded', function() {
    // ข้อมูลบริการ (คุณสามารถเพิ่ม/แก้ไขข้อมูลบริการได้ที่นี่)
    const servicesData = {
        'fast-learn': {
            title: 'Fast Learn & Adapt',
            tagline: 'Mastering new technologies quickly and efficiently.',
            icon: 'fas fa-graduation-cap', // Font Awesome icon class
            description: 'In today\'s rapidly evolving tech landscape, the ability to learn and adapt quickly is paramount. We pride ourselves on our agile learning methodology, ensuring that we stay ahead of the curve and are proficient in the latest tools and frameworks. This commitment to continuous learning directly translates into more innovative and effective solutions for our clients.',
            features: [
                'Rapid assimilation of new programming languages',
                'Proficiency in emerging frameworks and libraries',
                'Quick understanding of complex project requirements',
                'Efficient problem-solving through continuous skill development'
            ],
            benefits: 'Clients benefit from cutting-edge solutions built with modern, optimized technologies. Our ability to learn fast means faster project turnaround times and innovative approaches to unique challenges.'
        },
        'friendly-support': {
            title: 'Friendly & Responsive Support',
            tagline: 'Always here to help with a smile.',
            icon: 'fas fa-headset', // Font Awesome icon class
            description: 'We believe that excellent communication and support are the cornerstones of successful collaboration. Our team is dedicated to providing friendly, accessible, and prompt assistance throughout every phase of your project, and even after deployment. We value clear communication and a supportive environment to ensure your peace of mind.',
            features: [
                'Dedicated support channels (email, chat, call)',
                'Prompt response times for inquiries and issues',
                'Personalized assistance tailored to your needs',
                'Post-deployment maintenance and troubleshooting'
            ],
            benefits: 'Experience a hassle-free development process with a team that genuinely cares about your success. Our friendly support ensures all your questions are answered and concerns are addressed swiftly, building a strong, trust-based partnership.'
        },
        'creative': {
            title: 'Creative & Innovative Solutions',
            tagline: 'Bringing fresh ideas to life with unique designs.',
            icon: 'fas fa-lightbulb', // Font Awesome icon class
            description: 'Creativity is at the heart of every solution we craft. We don\'t just code; we envision, design, and implement unique experiences that stand out. Our approach combines aesthetic appeal with robust functionality, ensuring that your project is not only visually stunning but also highly effective and intuitive for your users. We thrive on turning complex problems into elegant, user-friendly solutions.',
            features: [
                'Unique UI/UX design concepts',
                'Innovative problem-solving approaches',
                'Integration of modern design trends',
                'Customized solutions reflecting brand identity'
            ],
            benefits: 'Your project will captivate users with its original design and seamless functionality. Stand out from the competition with a web presence that truly reflects your vision and engages your target audience.'
        },
        'work-hard': {
            title: 'Dedicated & Hardworking',
            tagline: 'Committed to delivering excellence, every single time.',
            icon: 'fas fa-fist-raised', // Font Awesome icon class
            description: 'Our commitment to hard work and dedication is unwavering. We meticulously focus on every detail, from the initial planning stages to the final deployment and beyond. We understand that success is built on consistent effort and perseverance, and we bring this ethos to every project, ensuring high-quality results delivered on time and within budget. Your project\'s success is our primary motivation.',
            features: [
                'Strong work ethic and attention to detail',
                'Timely project delivery and adherence to deadlines',
                'Commitment to high-quality code and robust solutions',
                'Proactive problem-solving and continuous improvement'
            ],
            benefits: 'Rest assured that your project is in capable and committed hands. Our dedication translates into reliable, high-performance web applications that exceed expectations and drive tangible results for your business.'
        }
    };

    const serviceDetailSection = document.querySelector('.service-detail-section');
    const loadingState = document.getElementById('loadingState');
    const serviceDetailContent = document.getElementById('serviceDetailContent');

    // ตั้งค่า Loading State เริ่มต้น
    if (serviceDetailSection) serviceDetailSection.classList.add('loading'); 
    
    // **สำคัญ:** อ้างอิง element ทั้งหมดที่ใช้ก่อน setTimeout
    const serviceTitleElement = document.getElementById('serviceTitle');
    const serviceTaglineElement = document.getElementById('serviceTagline');
    const detailIconElement = document.querySelector('.detail-icon i'); // เลือกแท็ก <i> ภายใน .detail-icon
    const detailHeadingElement = document.getElementById('detailHeading');
    const detailDescriptionElement = document.getElementById('detailDescription');
    const benefitsTextElement = document.getElementById('benefitsText');
    const featureListElement = document.getElementById('featureList');

    // จำลองการโหลดข้อมูล (ใช้ setTimeout เพื่อให้เห็น Loading State ชัดเจนขึ้น)
    setTimeout(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const serviceId = urlParams.get('id');

        if (serviceId && servicesData[serviceId]) {
            const service = servicesData[serviceId];

            // ตรวจสอบก่อนกำหนดค่าให้กับ element ทุกครั้ง
            if (serviceTitleElement) serviceTitleElement.textContent = service.title;
            if (serviceTaglineElement) serviceTaglineElement.textContent = service.tagline;
            if (detailIconElement) detailIconElement.className = service.icon;
            if (detailHeadingElement) detailHeadingElement.textContent = service.title;
            if (detailDescriptionElement) detailDescriptionElement.textContent = service.description;
            if (benefitsTextElement) benefitsTextElement.textContent = service.benefits;

            if (featureListElement) { // ตรวจสอบ featureListElement ก่อนใช้งาน
                featureListElement.innerHTML = ''; // ล้างรายการเก่า
                service.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.textContent = feature;
                    featureListElement.appendChild(li);
                });
            }
            
            document.title = `Fofana - ${service.title}`;

        } else {
            // ถ้าไม่พบ serviceId หรือข้อมูล
            if (serviceTitleElement) serviceTitleElement.textContent = 'Service Not Found';
            if (serviceTaglineElement) serviceTaglineElement.textContent = 'The service you are looking for does not exist.';
            if (serviceDetailContent) { // ตรวจสอบ serviceDetailContent ก่อนใช้งาน innerHTML
                serviceDetailContent.innerHTML = `
                    <div class="detail-icon"><i class="fas fa-exclamation-triangle"></i></div>
                    <h2>Service Not Found</h2>
                    <p>We're sorry, but the service you requested could not be found. Please go back to our <a href="index.html#services">Services page</a> to explore our offerings.</p>
                    <a href="index.html#services" class="btn btn-primary">Back to Services</a>
                `;
            }
            document.title = 'Fofana - Service Not Found';
        }

        // ซ่อน Loading State และแสดงเนื้อหาหลัก
        if (serviceDetailSection) { // ตรวจสอบ serviceDetailSection ก่อนลบคลาส
            serviceDetailSection.classList.remove('loading'); 
        }
        
    }, 1000); // จำลองการโหลด 1 วินาที
});