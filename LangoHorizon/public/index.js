 // Mobile Menu Toggle
 const mobileMenuBtn = document.getElementById('mobileMenuBtn');
 const mainNav = document.getElementById('mainNav');

 mobileMenuBtn.addEventListener('click', () => {
     mainNav.classList.toggle('active');
 });

 // Language Switcher
 const languageBtn = document.getElementById('languageBtn');
 const languageDropdown = document.getElementById('languageDropdown');

 languageBtn.addEventListener('click', (e) => {
     e.stopPropagation();
     languageDropdown.classList.toggle('show');
 });

 document.addEventListener('click', () => {
     languageDropdown.classList.remove('show');
 });

 // Course Modal
 const courseModal = document.getElementById('courseModal');
 const viewCourseBtns = document.querySelectorAll('.view-course-btn');
 const closeModal = document.getElementById('closeModal');

 // Course Data (would typically come from a database)
 const courses = {
     spanish: {
         title: "English Basic Program",
         hours: "120 hours",
         rating: "4.8",
         instructor: "Abdul Qader Rashed",
         originalPrice: "$60",
         currentPrice: "$40",
         image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
         description: "A live basic English course for Dari speakers, focused on everyday communication and foundational grammar. Students will learn through interactive, real-time classes with Dari language support.",
         features: [
             "Live bilingual classes",
             "Focus on speaking & listening",
             "Personalized feedback",
             "Easy grammar explanations",
             "Practice oriented classes"
         ]
     },
     french: {
         title: "English for travel",
         hours: "60 hours",
         rating: "4.8",
         instructor: "Abdul Qader Rahsed",
         originalPrice: "$100",
         currentPrice: "$60",
         image: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
         description: "This course is designed for those with a trip coming up soon or already abroad — learn essential English fast to navigate airports, hotels, restaurants, and daily conversations with confidence.",
         features: [
             "Focused Travel Vocabulary",
             "Fast-Paced & Goal-Oriented",
             "Real-Life Practice",
             "Dari Language Support",
             "Perfect for Last-Minute Travelers"
         ]
     },
     japanese: {
         title: "Speacial Grammar",
         hours: "40",
         rating: "4.8",
         instructor: "Abdul Qader Rashed",
         originalPrice: "$80",
         currentPrice: "$50",
         image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80",
         description: "A focused grammar course for learners who want to speak and write correctly. Build a solid foundation, fix common mistakes, and finally understand how English grammar really works.",
         features: [
             "Comprehensive Grammar Coverage",
             "Error Correction Focus",
             "Practical Application",
             "Structured Lessons",
             "Speaking & Writing Support"
         ]
     }
 };

 viewCourseBtns.forEach(btn => {
     btn.addEventListener('click', (e) => {
         const course = e.target.closest('.course-card').dataset.course;
         const courseData = courses[course];
         
         document.getElementById('modalCourseImage').src = courseData.image;
         document.getElementById('modalCourseTitle').textContent = courseData.title;
         document.getElementById('modalCourseHours').textContent = courseData.hours;
         document.getElementById('modalCourseRating').textContent = courseData.rating;
         document.getElementById('modalCourseInstructor').textContent = courseData.instructor;
         document.getElementById('modalOriginalPrice').textContent = courseData.originalPrice;
         document.getElementById('modalCurrentPrice').textContent = courseData.currentPrice;
         document.getElementById('modalCourseDescription').textContent = courseData.description;
         
         const featuresList = document.getElementById('modalCourseFeatures');
         featuresList.innerHTML = '';
         courseData.features.forEach(feature => {
             featuresList.innerHTML += `<li><i class="fas fa-check"></i> ${feature}</li>`;
         });

         courseModal.style.display = "block";
         document.body.style.overflow = "hidden";
     });
 });

 closeModal.addEventListener('click', () => {
     courseModal.style.display = "none";
     document.body.style.overflow = "auto";
 });

 window.addEventListener('click', (e) => {
     if (e.target === courseModal) {
         courseModal.style.display = "none";
         document.body.style.overflow = "auto";
     }
 });

 // Contact Form Submission
 const contactForm = document.getElementById('contactForm');
 const successMessage = document.getElementById('successMessage');

 contactForm.addEventListener('submit', (e) => {
     e.preventDefault();
     successMessage.style.display = 'block';
     contactForm.reset();
     
     setTimeout(() => {
         successMessage.style.display = 'none';
     }, 3000);
 });

 // Scroll to Top
 const scrollTop = document.getElementById('scrollTop');

 window.addEventListener('scroll', () => {
     if (window.pageYOffset > 300) {
         scrollTop.classList.add('active');
     } else {
         scrollTop.classList.remove('active');
     }
 });

 scrollTop.addEventListener('click', () => {
     window.scrollTo({
         top: 0,
         behavior: 'smooth'
     });
 });

 // Smooth Scroll
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         const target = document.querySelector(this.getAttribute('href'));
         target.scrollIntoView({
             behavior: 'smooth'
         });
     });
 });

 // Translation Data
 const translations = {
     en: {
         // Header
         "hero_title": "More than words. A world of opportunities.",
         "hero_text": "Discover the joy of language learning with our immersive courses taught by professional and experienced instructors. Unlock new cultures, career paths, and connections.",
         "explore_btn": "Explore Courses",
         "about_btn": "About Us",
         
         // About Section
         "about_title": "About LangoHorizon",
         "mission_title": "Our Mission",
         "mission_text": "Break language barriers and foster global connections through immersive, culture-rich education that goes beyond textbooks.",
         "story_title": "Our Story",
         "story_text": "LangoHorizon was established to redefine language learning in a modern world. Designed for busy individuals, our live-only classes provide real-time engagement with passionate instructors — delivering flexibility, authenticity, and meaningful human connection. No matter where you are, your journey to fluency begins here.",
         "team_title": "Our Team",
         "team_text": "A team of skilled educators and language specialists, dedicated to providing impactful and immersive learning experiences through professionalism, passion, and cultural insight.",
         
         // Courses
         "courses_title": "Our Language Courses",
         "spanish_category": "English - Persian(Dari)",
         "spanish_title": "English Basic Program",
         "french_category": "English - Persian(Dari)",
         "french_title": "English For Travel", 
         "japanese_category": "English",
         "japanese_title": "Special Grammar Class",
         "hours": "30 hours",
         "view_course_btn": "View Course",
         
         // Testimonials
         "testimonials_title": "Student Success Stories",
         "testimonial1": "Before LangoHorizon, language classes felt dull – dry, repetitive, and easy to forget. But from the first live session, it just felt different. The energy, the interaction – it made learning fun and real. It wasn’t just studying a language anymore – I was living it.",
         "testimonial2": "When I came to the U.S, I was scared and lost. I couldn’t talk at the doctor, at school – nowhere. I was just stuck. LangoHorizon helped me slowly speak up… and somehow, life got easier.",
         "testimonial3": "Grammar used to stress me out – it always felt confusing and too technical. But LangoHorizon changed that for me. The way grammar was taught in the live classes actually made sense. It was clear, practical, and kind of fun, honestly. For the first time, I stopped memorizing rules and started understanding how the language really works.",
         "spanish_student": "From Iran",
         "french_student": "From Virginia, USA",
         "japanese_student": "From Canada",
         
         // Contact
         "contact_title": "Contact Us",
         "get_in_touch": "Get in Touch",
         "address": "",
         "follow_us": "Follow Us",
         "name_placeholder": "Your Name",
         "email_placeholder": "Your Email",
         "select_course": "Select a Course",
         "spanish_option": "English Basic Program",
         "french_option": "English for travel",
         "japanese_option": "Special Grammar Program",
         "message_placeholder": "Your Message",
         "send_btn": "Send Message",
         
         // Footer
         "footer_home": "Home",
         "footer_about": "About",
         "footer_courses": "Courses",
         "footer_testimonials": "Testimonials",
         "footer_contact": "Contact",
         "footer_privacy": "Privacy Policy",
         "footer_terms": "Terms of Service",
         "rights_reserved": "All rights reserved.",
         
         // Modal
         "course_features": "Course Features",
         "enroll_btn": "Enroll Now",
         
         // Success
         "success_message": "Message sent successfully!"
     },
     fa: {
         // Header
         "hero_title": "بیشتر از واژه هـــا. دنیایی از فرصتها.",
         "hero_text": "لذت یادگیری زبان را با دوره های همه جانبه ما که توسط مدرسان حرفه‌ای و با تجربه تدریس میشوند، کشف کنید. با ما دروازه فرهنگهای نو، مسیرهای شغلی گسترده و ارتباطات جدید را باز کنید.",
         "explore_btn": "کورس های ما",
         "about_btn": "درباره ما",
         
         // About Section
         "about_title": "درباره LangoHorizon",
         "mission_title": "ماموریت ما",
         "mission_text": "شکستن موانع زبانی و ایجاد ارتباطات جهانی از طریق آموزش غنی فرهنگی که فراتر از کتابهای درسی است.",
         "story_title": "داستان ما",
         "story_text": "LangoHorizon برای بازآفرینی روش یادگیری زبان در دنیای امروزی ایجاد شده است. این برنامه برای افرادی طراحی شده که زندگی پرمشغله دارند و نیاز به آموزش انعطاف‌پذیر دارند. صنف‌های زنده ما ارتباط واقعی با آموزگاران باانگیزه را فراهم می‌سازد — تجربه‌ای اصیل، انعطاف‌پذیر و انسانی. فرقی نمی‌کند کجا باشید، سفر شما به‌سوی روان صحبت کردن از همین‌جا آغاز می‌شود.",
         "team_title": "تیم ما",
         "team_text": "ما گروهی از آموزگاران و متخصصان زبان هستیم که با تعهد، مهارت و درک عمیق فرهنگی، تجربه‌ای مؤثر و جذاب از یادگیری زبان را فراهم میسازیم.",
         
         // Courses
         "courses_title": "دوره های زبان ما",
         "spanish_category": "زبان انگلیسی - فارسی",
         "spanish_title": "برنامه مبتدی زبان انگلیسی",
         "french_category": "زبان انگلیسی - فارسی", 
         "french_title": "برنامه کوتاه مدت برای سفر",
         "japanese_category": "زبان انگلیسی",
         "japanese_title": "برنامه اسپیشل گرامر",
         "hours": "120 ساعت",
         "view_course_btn": "مشاهده دوره",
         
         // Testimonials
         "testimonials_title": "داستانهای موفقیت دانشجویان",
         "testimonial1": "قبل از لانگوهورایزون، کلاس های زبان برام خسته کننده و خشک، تکراری و به راحتی فراموش می‌شد. امان از همان جلسه زنده اول، حس متفاوتی داشتم. انرژی و تعامل در کلاس باعث شد یادگیری واقعی و لذت بخش بشه. من دیگه فقط زبان یاد نمی‌گرفتم – داشتم با کلاس زندگی می‌کردم.",
         "testimonial2": "وقتی به امریکا آمدم، خیلی ترسیده بودم و احساس میکردم گم شدیم. نه پیش داکتر، نه در مکتب، نه هیچ جای دگه گپ زده میتوانستم. بند مانده بودم. LangoHorizon کمکم کرد کم‌کم زبان باز کنم... و یک قسم زندگی ساده‌تر شد.",
         "testimonial3": "گرامر همیشه برایم گیچ کننده و استرس آور بود – احساس میکردم خیلی خشک و فنی است. اما لانگو‌هورایزن دیدگاهم را تغییر داد. در صنف های لایف، گرامر به گونه تدریس میشد که واقعاً قابل فهم و عملی بود، راستش را بگویم، حتی دلچسپ هم شده بود. برای اولین بار، به‌جای حفظ کردن قواعد، شروع به درک واقعی زبان کردم. ",
         "spanish_student": "از ایران",
         "french_student": "از ویرجینیا، امریکا",
         "japanese_student": "از کانادا",
         
         // Contact
         "contact_title": "تماس با ما",
         "get_in_touch": "در تماس باشید",
         "address": "",
         "follow_us": "ما را دنبال کنید",
         "name_placeholder": "نام شما",
         "email_placeholder": "ایمیل شما",
         "select_course": "انتخاب دوره",
         "spanish_option": "برنامه مبتدی زبان انگلیسی",
         "french_option": "برنامه کوتاه مدت برای سفر",
         "japanese_option": "برنامه اسپیشل گرامر",
         "message_placeholder": "پیام شما",
         "send_btn": "ارسال پیام",
         
         // Footer
         "footer_home": "خانه",
         "footer_about": "درباره",
         "footer_courses": "دورهها",
         "footer_testimonials": "نظرات",
         "footer_contact": "تماس",
         "footer_privacy": "سیاست حفظ حریم خصوصی",
         "footer_terms": "شرایط استفاده",
         "rights_reserved": "تمامی حقوق محفوظ است.",
         
         // Modal
         "course_features": "ویژگیهای دوره",
         "enroll_btn": "ثبت نام کنید",
         
         // Success
         "success_message": "پیام با موفقیت ارسال شد!"
     }
 };

 let currentLang = 'en';

 // Language Switcher Function
 function switchLanguage(lang) {
     currentLang = lang;
     document.body.dir = lang === 'fa' ? 'rtl' : 'ltr';
     
     // Update all translatable elements
     document.querySelectorAll('[data-translate]').forEach(element => {
         const key = element.dataset.translate;
         element.textContent = translations[lang][key];
         
         // Handle input placeholders
         if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
             element.placeholder = translations[lang][key];
         }
         
         // Handle select options
         if (element.tagName === 'OPTION') {
             element.textContent = translations[lang][key];
         }
     });

     // Update language button
     document.getElementById('languageBtn').innerHTML = 
         lang === 'en' ? 'English <i class="fas fa-chevron-down"></i>' : 
                         'دری <i class="fas fa-chevron-down"></i>';
     
     // Store preference
     localStorage.setItem('langPreference', lang);
 }

 // Initialize Language
 function initLanguage() {
     const savedLang = localStorage.getItem('langPreference') || 'en';
     switchLanguage(savedLang);
 }

 // Language Switcher Event Listeners
 document.querySelectorAll('.language-dropdown a').forEach(link => {
     link.addEventListener('click', (e) => {
         e.preventDefault();
         const lang = e.target.dataset.lang;
         switchLanguage(lang);
         languageDropdown.classList.remove('show');
     });
 });

 // Initialize on load
 initLanguage();
