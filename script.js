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

document.addEventListener('DOMContentLoaded', () => {
    const slidesWrapper = document.querySelector('.slides-wrapper');
    const slides = document.querySelectorAll('.mySlides');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const dotsContainer = document.querySelector('.dots-container');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let slideInterval;

    function updateSlidePosition() {
        slidesWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateDots();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlidePosition();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    }

    function createDots() {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                currentSlide = i;
                updateSlidePosition();
                stopSlideshow();
                startSlideshow();
            });
            dotsContainer.appendChild(dot);
        }
    }

    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function startSlideshow() {
        stopSlideshow(); // Clear any existing interval
        slideInterval = setInterval(nextSlide, 3000);
    }

    function stopSlideshow() {
        clearInterval(slideInterval);
    }

    prevButton.addEventListener('click', () => {
        prevSlide();
        stopSlideshow();
        startSlideshow(); // Restart the timer after manual navigation
    });

    nextButton.addEventListener('click', () => {
        nextSlide();
        stopSlideshow();
        startSlideshow(); // Restart the timer after manual navigation
    });

    slidesWrapper.addEventListener('mouseenter', stopSlideshow);
    slidesWrapper.addEventListener('mouseleave', startSlideshow);

    createDots();
    updateSlidePosition();
    startSlideshow(); // Start the auto-advance when the page loads
});

