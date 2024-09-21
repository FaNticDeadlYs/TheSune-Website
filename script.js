document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    nav.addEventListener('mouseenter', function() {
        this.style.justifyContent = 'space-between';
    });

    nav.addEventListener('mouseleave', function() {
        this.style.justifyContent = 'center';
    });

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.textShadow = '0 0 8px rgba(255, 255, 255, 0.8)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.textShadow = 'none';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const imageUrls = [
        '/assets/images/introduction/img1.png',
        '/assets/images/introduction/img2.png',
        '/assets/images/introduction/img3.png'
    ];

    const imgContainer = document.querySelector('.img-container');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    const indicators = document.querySelector('.indicators');

    let currentIndex = 0;

    function preloadImages(urls) {
        return urls.map(url => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = resolve;
                img.onerror = reject;
                img.src = url;
            });
        });
    }

    function createSlides() {
        imageUrls.forEach((url, index) => {
            const slide = document.createElement('div');
            slide.className = `img ${index === 0 ? 'active' : ''}`;
            slide.style.setProperty('--imgSrc', `url(${url})`);
            imgContainer.appendChild(slide);

            const indicator = document.createElement('div');
            indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
            indicator.addEventListener('click', () => showSlide(index));
            indicators.appendChild(indicator);
        });
    }

    function showSlide(index) {
        const slides = document.querySelectorAll('.img');
        const dots = document.querySelectorAll('.indicator');

        slides[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');

        currentIndex = (index + slides.length) % slides.length;

        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    createSlides();

    arrowRight.addEventListener('click', nextSlide);
    arrowLeft.addEventListener('click', prevSlide);

    // Auto-advance slideshow every 5 seconds
    setInterval(nextSlide, 5000);

    // Preload images
    Promise.all(preloadImages(imageUrls))
        .then(() => console.log('All images preloaded'))
        .catch(error => console.error('Error preloading images:', error));
});

