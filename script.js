// تأثير الشمعة والصفحة الرئيسية
document.getElementById('candle').addEventListener('click', function() {
    // تشغيل الموسيقى
    const song = document.getElementById('birthday-song');
    song.volume = 0.7; // تخفيض الصوت قليلاً
    
    // محاولة تشغيل الموسيقى مع معالجة الأخطاء
    song.play().catch(e => {
        console.log('يجب النقر أولاً لتشغيل الموسيقى');
        // سنحاول تشغيل موسيقى بديلة إذا فشلت
        playFallbackMusic();
    });

    // إخفاء الصفحة الأولى
    document.getElementById('intro-page').style.display = 'none';
    
    // إظهار الصفحة الرئيسية مع تأثير
    const mainPage = document.getElementById('main-page');
    mainPage.classList.remove('hidden');
    
    // تأثير الكونفيتي
    createConfetti();
});

// موسيقى بديلة إذا لم تعمل الملفات المحلية
function playFallbackMusic() {
    // يمكنك استبدال هذا الرابط بأي موسيقى بيانو رومانسية
    const fallbackAudio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    fallbackAudio.volume = 0.7;
    fallbackAudio.loop = true;
    fallbackAudio.play().catch(e => console.log('تعذر تشغيل الموسيقى'));
}

// تأثير الكونفيتي
function createConfetti() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff9bc9', '#ff7eb6'];
    for (let i = 0; i < 200; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confetti.style.width = Math.random() * 10 + 8 + 'px';
        confetti.style.height = Math.random() * 10 + 8 + 'px';
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}

// الرسالة التفاعلية
function toggleLetter() {
    const letter = document.querySelector('.letter');
    if (letter.style.transform === 'translateY(-120%)') {
        letter.style.transform = 'translateY(100%)';
    } else {
        letter.style.transform = 'translateY(-120%)';
    }
}

// إضافة تأثير عند التمرير
window.addEventListener('scroll', function() {
    const frames = document.querySelectorAll('.photo-frame');
    frames.forEach(frame => {
        const position = frame.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (position < screenPosition) {
            frame.style.opacity = '1';
            frame.style.transform = 'translateY(0)';
        }
    });
});

// تهيئة الصور للإطار
document.querySelectorAll('.photo-frame').forEach(frame => {
    frame.style.opacity = '0';
    frame.style.transform = 'translateY(50px)';
    frame.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});
